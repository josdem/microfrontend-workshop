import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const SERVER_URL = 'https://shopping.josdem.io/login'

export const jwt = new BehaviorSubject(null);

export const login = (username, password) => 
    fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password
        }),
    })
    .then(response => response.json())
    .then(data => {
        const token = data.token;
        jwt.next(token);
        return token;
    })
    .catch(error =>
        console.error(error)
    );


export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);
    useEffect(() => {
        setLoggedIn(!!jwt.value);
        return jwt.subscribe(() => {
            setLoggedIn(!!jwt.value);
        });
    }, []);
    return loggedIn;

}