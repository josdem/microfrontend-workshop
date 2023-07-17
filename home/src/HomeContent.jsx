import React,{useState, useEffect} from "react"
import { Link } from "react-router-dom"

import {getProducts, currency} from "./products"
import {addToCart, useLoggedIn} from "cart/cart"


export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    return (
        <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
            <div key={product.sku}>
                <div className="flex">
                  <div className="flex-grow font-bold">
                    <Link id={`product-${product.sku}`} to={`/products/${product.sku}`}>
                      <a>{product.name}</a>
                    </Link>
                  </div>
                </div>
                <div className="flex-end">
                    <a>{currency.format(product.price)}</a>
                </div>
                {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.sku)}
                id={`add-to-cart-${product.sku}`}
              >
                Add to Cart
              </button>
            </div>
          )}
            </div>
            ))}
    </div>
    );
}