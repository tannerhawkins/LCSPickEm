import React from 'react';
import {auth , provider}  from '../../data/firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../app/account/actions.js';
import { selectDisplayName } from '../../app/account/selectors.js';
import StyledButton from '../Template/Button.js';
import { Constants } from '../../data/constants.js';
import styled from 'styled-components';
  
const Login = () => {
    const dispatch = useDispatch();
    const loginState = useAuthState(auth)[0];
  
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
            {!loginState && <StyledSignInButton onClick={signin}>SIGN-IN</StyledSignInButton>}
            {loginState && <div onClick={logout}>Logout</div>}
        </div>
    );
}

const StyledSignInButton = styled(StyledButton)`
  background-color: ${Constants.DARK_GREEN};
  width: 120px;
`
  
export default Login;