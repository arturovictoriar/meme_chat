import React, { useState } from 'react';
import LogIn from './LogIn';
import SignIn from './SignIn';

const Register = () => {
    const [isLogIn, setIsLogIn] = useState(true);
    return (
        <div>
            {isLogIn ?
                <LogIn setIsLogIn={setIsLogIn}/> :
                <SignIn setIsLogIn={setIsLogIn}/>
            }
        </div>
    );
}

export default Register;