import React, { useEffect, useState } from "react"

import { cart, clearCart } from "./cart"
import { currency } from "home/products"

export default function MiniCart() {
  const [items, setItems] = useState(undefined)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    setItems(cart)
    return cart.subscribe((val) => setItems(val))
  }, [])

  if (!items) {
    return null
  }

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i className="ri-shopping-cart-2-fill text-2xl" id="show-cart"></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
            style={{
              width: 300,
              top: "2rem",
              left: -250,
            }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{
                gridTemplateColumns: "1fr 3fr 10fr 2fr",
              }}
            >
              {items.map((item) => (
                <React.Fragment key={item.sku}>
                  <div>{item.name}</div>
                  <div className="text-right">{currency.format(item.price)}</div>
                </React.Fragment>
              ))}
              <div></div>
              <div></div>
              <div></div>
              <div id="grand-total">{currency.format(items.reduce((a, v) => a + v.price, 0))}</div>
            </div>
            <div className="flex">
              <div className="flex-grow">
                <button id="clear-cart" className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button className="bg-green-900 text-white py-2 px-5 rounded-md text-sm" onClick={clearCart}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
