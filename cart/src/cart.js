import { BehaviorSubject } from 'rxjs';

const SERVER_URL = 'https://shopping.josdem.io/products/'

export const jwt = new BehaviorSubject(null);

export const login = (username, password) => 
    fetch('https://shopping.josdem.io/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        jwt.next(data.token);
        return data.token;
    })