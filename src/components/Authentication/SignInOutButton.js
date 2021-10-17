import React from "react";
import { auth } from "../../data/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import StyledButton from "../Template/Button.js";
import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import { selectIsSignedIn } from "../../app/account/selectors.js";
import { clearState } from "../../app/store.js";
import { useHistory } from "react-router";

const SignInOutButton = ({ className }) => {
  const history = useHistory();
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
        <StyledSignInButton onClick={() => history.push("/signin")}>
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
