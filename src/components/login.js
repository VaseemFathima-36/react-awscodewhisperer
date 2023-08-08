//Create login component in react using const
//create username and password fields with placeholders and login button
//make post api call to backend url(some dummy url) using axios

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/login", {
            username,
            password
        });
        console.log(response.data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;





