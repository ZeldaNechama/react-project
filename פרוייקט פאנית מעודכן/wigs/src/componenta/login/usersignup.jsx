import React, { useState } from "react";
import { signUp } from '../../api';
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const nav=useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();

        const user = {
            username: username,
            password: password,
            phone: phone,
            email: email
        };

      try {
      const userdata=await signUp(user);
        if(userdata){
            alert("welcome to our wig website");
            nav('/');
        }
        else{
            alert('something went wrong try again');
        }
        
      } catch (error) {
        console.log('error',error);
        
      }
    }

    return (
        <div className="signInContainer">
            <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor="username">Enter A user name:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <label htmlFor="password">Enter A password:</label>
                <input 
                    type="text" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <label htmlFor="phone">Enter a Phone Number</label>
                <input 
                    type="text" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                />
                <label htmlFor="email">Enter a email</label>
                <input 
                    type="text" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}
