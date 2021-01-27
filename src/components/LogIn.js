// import libraries
import React from 'react';
import { useHistory } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64';
// import modules
import { getInChat } from '../redux/initialization/initialize_socket';

/**
 * Log in component
 * @param {object} param0 parent state
 */
const LogIn = ({setIsLogIn}) => {
    const history = useHistory();
    let inputNick;
    let inputPassword;

    /**
     * Check in the API is the given user can get in the chat server
     * @param {object} e event
     */
    const checkUser = async (e) => {
        const name = inputNick.value;
        const pw = sha256(inputPassword.value).toString(enc);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, pw })
        };
        // Look for permission in the API
        const res = await fetch('http://localhost:5000/logIn', requestOptions);
        let permission = await res.json();
        // if the user have the permission, allow it to get in the chat server
        if (name.length > 5 && permission.ok) {
            getInChat(name);
            history.push('/chat');
            return;
        }
        e.preventDefault();
    }

    /**
     * Set a flag to change from login to signin
     * @param {object} e event
     */
    const changeToSingIn = (e) => {
        setIsLogIn(false);
    }

    return (
        <div >
            <h1 >Log In</h1>
            <div>
                <input
                    placeholder="Name"
                    type="text"
                    ref={(node) => {
                        inputNick = node
                    }}
                />
                <input
                    placeholder="Password"
                    type="password"
                    ref={(node) => {
                        inputPassword = node
                    }}
                />
            </div>
            <button type="submit" onClick={checkUser}>Log In</button>
            <button type="submit" onClick={changeToSingIn}>Sign In</button>
        </div>
    )
}

// expot the LogIn component
export default LogIn;
