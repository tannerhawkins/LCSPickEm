import React from 'react';
import {auth , provider}  from '../../data/firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../app/account/actions.js';
import StyledButton from '../Template/Button.js';
import { Constants } from '../../data/constants.js';
import styled from 'styled-components';
  
const SignInOutButton = () => {
    const dispatch = useDispatch();
    const loginState = useAuthState(auth)[0];

    const logout = () => {
        auth.signOut().then(() => {
            dispatch(signOut());
        });
    }
      
    return (
        <div>
            {!loginState && <StyledSignInButton onClick={() => window.location.href='/AncientPathAdventures/SignIn'}>SIGN-IN</StyledSignInButton>}
            {loginState && <StyledSignInButton onClick={logout}>LOGOUT</StyledSignInButton>}
        </div>
    );
}

const StyledSignInButton = styled(StyledButton)`
  background-color: ${Constants.DARK_GREEN};
  width: 120px;
`
  
export default SignInOutButton;