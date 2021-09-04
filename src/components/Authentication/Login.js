import React from 'react';
import {auth , provider}  from '../../data/firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
  
const Login = () => {
    const loginState = useAuthState(auth)[0];
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    const logout = () => {
        auth.signOut();
    }
      
    return (
        <div>
            {!loginState && <center>
                <button onClick={signin}>Sign In with Google</button>
            </center>}
            <div>
            {loginState && <button onClick={logout}>
                Logout
            </button>}
        </div>
        </div>
    );
}
  
export default Login;