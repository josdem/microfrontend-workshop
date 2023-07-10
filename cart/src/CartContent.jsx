import React,{useState, useEffect} from "react";

import { login, jwt } from "./cart";

export default function CartContent() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        login("josdem", "12345678")
        return jwt.subscribe((token) => setToken(token ?? ""));
    }, []);

    return <div>JWT: {token}</div>
}

