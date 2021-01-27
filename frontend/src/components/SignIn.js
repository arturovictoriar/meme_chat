import React from 'react';
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64'


export const SignIn = ({ setIsLogIn }) => {
    let inputNick;
    let inputPassword1;
    let inputPassword2;

    const addUser = async (e) => {
        if (inputPassword1.value !== inputPassword2.value) {
            alert("You must write the same password");
            e.preventDefault();
            return;
        }
        const name = inputNick.value;
        const pw = sha256(inputPassword1.value).toString(enc);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, pw })
        };

        const res = await fetch('http://localhost:5000/SignIn', requestOptions);
        let created = await res.json();
        if (created.ok === true) {
            alert("User created");
        }
        else {
            alert("User NOT created");
        }
        e.preventDefault();
    }

    const changeToLogIn = (e) => {
        setIsLogIn(true);
    }

    return (
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
            <button onClick={addUser} type="submit">Sign In</button>
            <button onClick={changeToLogIn} type="submit">Log In</button>
        </div>
    )
}

export default SignIn;
