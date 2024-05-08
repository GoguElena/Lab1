// LoginForm.tsx
import React, { useState } from 'react';
import './LoginForm.css'; // Importă fișierul CSS pentru stilizare

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aici poți adăuga logica specifică de gestionare a formularului de autentificare
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="button-container">
                    <button className="button" type="submit">Log In</button>
                </div>
            </form>
        </div>
    );

};

export default LoginForm;
