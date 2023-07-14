import React,{ useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getProductBySku, currency } from "home/products";
import placeAddToCart from "atc/placeAddToCart";

export default function PdpContent() {
    const {sku} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {getProductBySku(sku).then(setProduct)}, [sku])

    const addToCart = useRef(null)

    useEffect(() => {
        if(addToCart.current){
            placeAddToCart(addToCart.current, product.sku)
        }
    }, [product])

    if(!product) {
        return null;
    }

    return (
        <>
        <div>
            {product.name}
            {currency.format(product.price)}
        </div>
        <div ref={addToCart}></div>
        </>
    )


}