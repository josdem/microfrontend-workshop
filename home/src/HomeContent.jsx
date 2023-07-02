import React,{useState, useEffect} from "react"

import {getProducts, currency} from "./products"


export default function HomeContent() {
    cons [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    return (
        <div className="my-10 grid grid-cols-4 gap-5">
        {products.map((product) => (
            <div key={product.id}>
                <p>{product.name}</p>
            </div>
            ))}
    </div>
    )
}