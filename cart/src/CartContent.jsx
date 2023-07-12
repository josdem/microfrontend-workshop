import React,{useState, useEffect} from "react";

import Login from "./Login";
import MiniCart from "./MiniCart";
import { login, jwt } from "./cart";

export default function CartContent() {
    const [token, setToken] = useState("");

    useEffect(() => {
        login("josdem","12345678");
        return jwt.subscribe(val => setToken(val ?? ""));
    }, []);


    return (
        <div>
            <div>JWT: {token}</div>
            <Login/>
            <MiniCart/>
        </div>
    );
}

