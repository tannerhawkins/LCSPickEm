import React from 'react';
import {auth , provider}  from '../../data/firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../app/account/actions.js';
import { selectDisplayName } from '../../app/account/selectors.js';
  
const Login = () => {
    const dispatch = useDispatch();
    const loginState = useAuthState(auth)[0];
    const displayName = useSelector(selectDisplayName);
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            dispatch(signIn(user));
        }).catch(alert);
    }

    const logout = () => {
        auth.signOut().then(() => {
            dispatch(signOut());
        });
    }
      
    return (
        <div>
            {displayName}
            {!loginState && <button onClick={signin}>Sign In with Google</button>}
            {loginState && <button onClick={logout}>
                Logout
            </button>}
        </div>
    );
}
  
export default Login;