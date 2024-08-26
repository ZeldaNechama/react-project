import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainAdmin } from "./admin";

export const SignInAdmin = () => {

    const nav = useNavigate();
    const [password, setPassword] = useState('');
    const [logedIn, setLogedIn] = useState(false);

    const checkPassword = (event) => {
        event.preventDefault();

        if (password === '97618999742960') {
            console.log("yes");
            setLogedIn(true);

        }
        else {
            alert('sorry you are not yet the oner of this businenes ☹️');
            nav('/');
        }

    }


    return <div>
        {
            !logedIn ? (<form onSubmit={checkPassword}>
                <label htmlFor="password">Enter your password</label>
                <input type="text" id="pasword" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="sumbit">log in</button>
            </form>
            ) : (<MainAdmin/>)}



    </div>
}