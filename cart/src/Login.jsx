import React, {useState} from "react";

import { login, jwt, useLoggedIn } from "./cart";

export default function Login() {
    const loggedIn = useLoggedIn();
    const [showLogin, setShowLogin] = useState(false);

    const [username, setUsername] = useState("josdem");
    const [password, setPassword] = useState("12345678");

    if(loggedIn) {
        return null;
    }

    return (
        <>
        <span onClick={ () => setShowLogin(!showLogin)}>
            <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
        </span>
        {showLogin && (<div className="absolute p-5 border-4 border-blue-800" style={{width: 300, top: "2rem"}}>
            <input type="text" placeholder="username" className="border text-sm border-gray-400 p-2 rounded-md w-full" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" placeholder="password" className="border text-sm border-gray-400 p-2 rounded-md w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="bg-green-900 text-white py-2 px-5 rounded-md w-full" onClick={() => login(username, password)} id="loginBtn">Login</button>
        </div>)}
        </>
    )
}