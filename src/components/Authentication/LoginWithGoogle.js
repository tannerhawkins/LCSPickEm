import React from 'react';
import {auth , provider}  from '../../data/firebase.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../../app/account/actions.js';
import StyledButton from '../Template/Button.js';
import styled from 'styled-components';
import GoogleLogo from '../../images/SignIn/googleLogo.png'
  
const LoginWithGoogle = ({className}) => {
    const dispatch = useDispatch();
    const loginState = useAuthState(auth)[0];
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            dispatch(signIn(user));
        }).catch(alert => alert.message ? console.log(alert.message) : console.log("Unexpected Error"));
    }

    const logout = () => {
        auth.signOut().then(() => {
            dispatch(signOut());
        });
    }
      
    return (
        <div className={className}>
            {!loginState && <StyledSignInButton onClick={signin}><StyledGoogleLogo src={GoogleLogo} />SIGN-IN WITH GOOGLE</StyledSignInButton>}
            {loginState && <StyledSignInButton onClick={logout}>LOGOUT</StyledSignInButton>}
        </div>
    );
}

const StyledSignInButton = styled(StyledButton)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-around;
`

const StyledGoogleLogo = styled.img`
    height: 60%;
`
  
export default LoginWithGoogle;