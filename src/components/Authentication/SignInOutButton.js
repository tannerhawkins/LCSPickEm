import React from "react";
import { auth } from "../../data/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../app/account/actions.js";
import StyledButton from "../Template/Button.js";
import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import { selectIsSignedIn } from "../../app/account/selectors.js";
import { clearState } from "../../app/store.js";

const SignInOutButton = ({ className }) => {
  const dispatch = useDispatch();
  const loginState = useSelector(selectIsSignedIn);

  const logout = () => {
    auth.signOut().then(() => {
      dispatch(clearState());
    });
  };

  return (
    <div className={className}>
      {!loginState && (
        <StyledSignInButton
          onClick={() =>
            (window.location.href = "/AncientPathAdventures/signin")
          }
        >
          SIGN-IN
        </StyledSignInButton>
      )}
      {loginState && (
        <StyledSignInButton onClick={logout}>LOGOUT</StyledSignInButton>
      )}
    </div>
  );
};

const StyledSignInButton = styled(StyledButton)`
  background-color: ${Constants.COLOR.DARK_GREEN};
  width: 120px;
  height: 40px;
  margin-left: 10px;
`;

export default SignInOutButton;
