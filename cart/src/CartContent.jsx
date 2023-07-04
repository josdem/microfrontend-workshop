import React,{useState, useEffect} from "react";

export default function CartContent() {
    const [token, setToken] = useState(null);

    useEffect(() => {}, []);

    return <div>JWT: {token}</div>
}

