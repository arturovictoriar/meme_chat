// import libraries
import React, { useState } from 'react';
// import modules
import LogIn from './LogIn';
import SignIn from './SignIn';

/**
 * User register component, store the login and the signin component
 */
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

// export the register component
export default Register;
