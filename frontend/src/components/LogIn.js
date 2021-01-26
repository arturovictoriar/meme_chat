import React from 'react';
import { Link } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64'
import { getInChat } from '../redux/initialization/initialize_socket';

export const users = { 
    Arturo: {pw: sha256("12345").toString(enc), connected: false}, 
    Nicolai: {pw: sha256("12345").toString(enc), connected: false}
};

const LogIn = () => {
    let inputNick;
    let inputPassword;

    const checkNickPassword = (nick, password) => {
        if (nick in users && users[nick].connected === false &&
            users[nick].pw === password) {
            users[nick].connected = true;
            return (true);
        }
        return (false);
    }

    const checkUser = (e) => {
        console.log(users)
        const checkI = checkNickPassword(inputNick.value, sha256(inputPassword.value).toString(enc));
        if (inputNick.value.length > 5 && checkI) {
            getInChat(inputNick.value);
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
                <Link onClick={checkUser} to={`/chat`}>
                    <button type="submit">Log In</button>
                </Link>
            </div>
        </div>
    )
}

export default LogIn;