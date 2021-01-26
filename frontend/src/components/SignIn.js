import React from 'react';
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64'
import { users } from './LogIn';


export const SignIn = () => {
    let inputNick;
    let inputPassword1;
    let inputPassword2;

    const addUser = (e) => {
        users[inputNick.value] = {pw: sha256(inputPassword1.value).toString(enc), connected: true}
    }

    return (
        <div >
            <div >
                <h1 >Sign In</h1>
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
                            inputPassword1 = node
                        }}
                    />
                    <input
                        placeholder="Repeat Password"
                        type="password"
                        ref={(node) => {
                            inputPassword2 = node
                        }}
                    />
                </div>
                <button onClick={addUser} type="submit">Log In</button>
            </div>
        </div>
    )
}
