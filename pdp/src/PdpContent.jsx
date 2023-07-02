import React,{ useState, useEffect } from "react";

import { getProductBySku, currency } from "home/products";


export default function PdpContent() {
    const sku = 100
    const [product, setProduct] = useState(null)

    useEffect(() => {getProductBySku(sku).then(setProduct)}, [sku])

    if(!product) {
        return null;
    }

    return (<div>{product.name}
        <div>{currency.format(product.price)}</div>
    </div>)


}