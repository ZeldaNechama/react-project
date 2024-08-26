import React, { useState } from "react";
import { updateUser } from '../../api';

export const UpdateUser = () => {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const saveData = (event) => {
        event.preventDefault();

        const user = {
            username: username,
            password: password,
            phone: phone,
            email: email
        };

        updateUser(id, user);
    }

    return (
        <div>
            <form onSubmit={saveData}>
                <label htmlFor="id">Enter your id</label>
                <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />
                <label htmlFor="username">Change your user name</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Change your password:</label>
                <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="phone">Change your Phone Number</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label htmlFor="email">Change your  email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};
