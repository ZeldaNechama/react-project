
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from '../../api';
import './signIn.css';

export const SignIn = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const nav = useNavigate();
    localStorage.setItem('username', '');

    const data = async (event) => {
        event.preventDefault();

        const user = { password: password, username: username };
        try {
            const response = await signIn(user);
            console.log(response);
            if (response === 200) {
                alert("hello to " + username)
                localStorage.setItem('username', username);
                nav('/services');
            }
            else {
                alert('something went wrong with your input')
                localStorage.setItem('username', '');
                nav('/signin')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="signInContainer"> {/* Apply container class */}
            <form onSubmit={data} className="form-container">
                <div className="form-group">
                    <label htmlFor="password">Enter your password:</label>
                    <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Enter your username:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Sign in</button>
            </form>

        </div>
    );
}