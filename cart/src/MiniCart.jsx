import React, {useEffect, useState} from "react";

import { cart } from "./cart";
let value;

export default function MiniCart() {
    const [items, setItems] = useState(undefined);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        console.log("Value from cart: " + JSON.stringify(cart));
        cart.subscribe((val) => {
            console.log("Minicart: " + JSON.stringify(val));
            value = val;
            setItems(value);
        });
        
        return cart.subscribe(val => setItems(val));
    }, []);

    if(!items) {
        return null;
    }

    return (
        <>
        <span onClick={ () => setShowCart(!showCart)} id="showcart_span">
            <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
            {items.length}
        </span>
        </>
    )
}