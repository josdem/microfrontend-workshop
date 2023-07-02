import React,{useState, useEffect} from "react"

import {getProducts, currency} from "./products"


export default function HomeContent() {
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
                    <a>{product.name}</a>
                </div>
                <div className="flex-end">
                    <a>{currency.format(product.price)}</a>
                </div>
            </div>
            ))}
    </div>
    )
}