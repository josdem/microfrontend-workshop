import React, { useEffect, useState } from "react"
import { BehaviorSubject } from "rxjs"

const SERVER_URL = "https://shopping.josdem.io"

export const jwt = new BehaviorSubject(null)
export const cart = new BehaviorSubject(null)

export const addToCart = (sku) =>
  fetch(`${SERVER_URL}/cart/${sku}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: jwt.value,
    }),
  })
    .then((response) => response.json())
    .then(() => {
      getCart()
    })
    .catch((error) => console.error(error))

export const clearCart = () =>
  fetch(`${SERVER_URL}/cart/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      getCart()
    })
    .catch((error) => console.error(error))

export const getCart = () =>
  fetch(`${SERVER_URL}/cart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: jwt.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      cart.next(data)
      return data
    })
    .catch((error) => console.error(error))

export const login = (username, password) =>
  fetch(`${SERVER_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token
      jwt.next(token)
      getCart()
      return token
    })
    .catch((error) => console.error(error))

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value)
  useEffect(() => {
    setLoggedIn(!!jwt.value)
    return jwt.subscribe(() => {
      setLoggedIn(!!jwt.value)
    })
  }, [])
  return loggedIn
}
