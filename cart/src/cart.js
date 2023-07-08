import { BehaviorSubject } from 'rxjs';

const SERVER_URL = 'http://localhost:8085/login'

export const jwt = new BehaviorSubject(null);

export const login = (username, password) => 
    fetch(SERVER_URL, {
        method: 'GET',
        mode: 'no-cors',
        headers: { 'Authorization': 'Basic am9zZGVtOjEyMzQ1Njc4' }
    })
    .then(response => response.json())
    .then(data => {
        console.log("data: " + data);
        jwt.next(data.token);
        return data.token;
    }).catch(error => console.error(error));