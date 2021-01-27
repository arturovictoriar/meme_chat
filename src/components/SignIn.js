// import libraries
import React from 'react';
import sha256 from 'crypto-js/sha256';
import enc from 'crypto-js/enc-base64'

/**
 * Sign in component
 * @param {object} param0 parent state
 */
const SignIn = ({ setIsLogIn }) => {
    let inputNick;
    let inputPassword1;
    let inputPassword2;

    /**
     * create a new user in the server
     * @param {object} e event
     */
    const createUser = async (e) => {
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
        // Ask to the server to create a new user with the given data
        const res = await fetch('https://backend-chating.herokuapp.com/SignIn', requestOptions);
        let created = await res.json();
        // if the user was created, alert to the user
        if (created.ok === true) {
            alert("User created");
        }
        // else, alert to the user it was impossible to create a new user
        else {
            alert("User NOT created");
        }
        e.preventDefault();
    }

    /**
     * Set a flag to change from signin to login
     * @param {object} e event
     */
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
            <button onClick={createUser} type="submit">Sign In</button>
            <button onClick={changeToLogIn} type="submit">Log In</button>
        </div>
    )
}

// export the sign in component
export default SignIn;
