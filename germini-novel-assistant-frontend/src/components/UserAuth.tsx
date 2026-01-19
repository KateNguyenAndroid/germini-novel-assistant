import React, { useState } from 'react';
import { registerUser, loginUser } from '../api';

const UserAuth: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        const result = await registerUser(username, password);
        setMessage(result);
    };

    const handleLogin = async () => {
        const result = await loginUser(username, password);
        setMessage(result);
    };

    return (
        <div className="auth-container">
            <h2>User Authentication</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
};

export default UserAuth;
