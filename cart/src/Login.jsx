import React, { useState } from "react"

import { login, useLoggedIn } from "./cart"

export default function Login() {
  const loggedIn = useLoggedIn()
  const [showLogin, setShowLogin] = useState(false)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  if (loggedIn) {
    return null
  }

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="show-login"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            type="text"
            placeholder="username"
            id="username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5" onClick={() => login(username, password)} id="login-btn">
            Login
          </button>
        </div>
      )}
    </>
  )
}
