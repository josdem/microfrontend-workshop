import { BehaviorSubject } from 'rxjs';

const SERVER_URL = 'http://localhost:8085/login'

export const jwt = new BehaviorSubject(null);

export const login = () => 
    fetch(SERVER_URL, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const token = data.token;
        jwt.next(token);
        return token;
    }).catch(error => console.error(error));