import React,{useState, useEffect} from "react";

import { cart, clearCart } from "cart/cart";
import { currency } from "home/products";

export default function CartContent() {
    const [items, setItems] = useState([]);

    useEffect(
        () => cart.subscribe((value) => setItems(value ?? [])),
        []
      );

    return (
        <>
            <div className="my-10 grid grid-cols-4 gap-5">
            {items.map((item) => (
                    <React.Fragment key={item.sku}>
                      <div>{item.name}</div>
                      <div className="text-right">
                        {currency.format(item.price)}
                      </div>
                    </React.Fragment>
                  ))}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div>
                    {currency.format(
                      items.reduce((a, v) => a + v.price, 0)
                    )}
                  </div>
            </div>
        </>
    );
}

