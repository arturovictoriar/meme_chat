import React from 'react';
import { useHistory } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64'
import { getInChat } from '../redux/initialization/initialize_socket';


const LogIn = () => {
    const history = useHistory();
    let inputNick;
    let inputPassword;

    const checkUser = async (e) => {
        const name = inputNick.value;
        const pw = sha256(inputPassword.value).toString(enc);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, pw})
        };

        const res = await fetch('http://localhost:5000/logIn', requestOptions);
        let permission = await res.json();

        if (name.length > 5 && permission.ok) {
            getInChat(name);
            history.push('/chat');
            return;
        }
        e.preventDefault();
    }

    return (
        <div >
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
            </div>
        </div>
    )
}

export default LogIn;