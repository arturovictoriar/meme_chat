// import libraries
import React, { useState } from 'react';
// import modules
import LogIn from './LogIn';
import SignIn from './SignIn';
import '../styles/Register.css';

/**
 * User register component, store the login and the signin component
 */
const Register = () => {
    const [isLogIn, setIsLogIn] = useState(true);

    /**
     * Set a flag to change from login to signin
     * @param {object} e event
     */
    const changeToSignIn = (e) => {
        setIsLogIn(false);
    }

    /**
     * Set a flag to change from signin to login
     * @param {object} e event
     */
    const changeToLogIn = (e) => {
        setIsLogIn(true);
    }

    return (
        <div className="root-container">
            <div className="box-controller">
                {/* Choose Login */}
                <div
                    className={"controller " + (isLogIn
                        ? "selected-controller"
                        : "")}
                    onClick={changeToLogIn}>
                    Log in
                </div>
                {/* Choose Signin */}
                <div
                    className={"controller " + (!isLogIn
                        ? "selected-controller"
                        : "")}
                    onClick={changeToSignIn}>
                    Sign in
                </div>
            </div>
            {/* Show login or signin */}
            <div className="box-container">
                {isLogIn ?
                    <LogIn setIsLogIn={setIsLogIn} /> :
                    <SignIn setIsLogIn={setIsLogIn} />
                }
            </div>
        </div>
    );
}

// export the register component
export default Register;
