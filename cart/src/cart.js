import { BehaviorSubject } from 'rxjs';

const SERVER_URL = 'https://shopping.josdem.io/login/'

export const jwt = new BehaviorSubject(null);

export const login = (username, password) => 
    fetch(SERVER_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa(username + ":" + password) },
    })
    .then(response => response.json())
    .then(data => {
        jwt.next(data.token);
        return data.token;
    }).catch(error => console.error(error));