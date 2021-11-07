import React, { useState } from "react";
import Main from "../../layouts/Main";
import styled from "styled-components";
import Header from "../../components/Authentication/Header";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useDispatch } from "react-redux";
import { auth, classDataDb, userDataDb } from "../../data/firebase";
import { signIn } from "../../app/account/actions.js";
import { setCurrentClass } from "../../app/class/actions";
import { useHistory } from "react-router";

const SignIn = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setErrorMessage();

    // get sign up form data
    const data = Object.values(document.forms.signInForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );

    // checks all fields are filled out
    for (var value in data) {
      if (data[value] === "") {
        setErrorMessage("Please fill out all fields");
        return;
      }
    }
    if (!data.email.includes("@")) {
      setErrorMessage("Please enter valid email address");
      return;
    }

    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        userDataDb
          .doc(auth.currentUser.uid)
          .get()
          .then((doc) => {
            dispatch(signIn(doc.data()));
            if (doc.data().classList.length !== 0) {
              classDataDb
                .doc(doc.data().classList[0].cid)
                .get()
                .then((result) => dispatch(setCurrentClass(result.data())));
            } else {
              dispatch(setCurrentClass(null));
            }
          });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setErrorMessage("A user with this email address does not exist");
        } else if (error.code === "auth/wrong-password") {
          setErrorMessage("The password is invalid.");
        } else {
          setErrorMessage(error.message);
        }
      });
  };

  return (
    <Main title={"Sign-In"} description={"Sign-In"}>
      <Header />
      <MainContainer>
        <StyledTitle>Sign-In</StyledTitle>
        <StyledForm id="signInForm">
          <StyledEmailInput
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <StyledForgotButton>Did you forget your password?</StyledForgotButton>
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton type="submit" onClick={handleSubmit}>
              SIGN-IN
            </StyledSubmitButton>
            <StyledSignUpButton data-test="sign-up" onClick={() => history.push(`/signup`)}>
              Don't have an account? Don’t worry! Sign up here
            </StyledSignUpButton>
          </StyledButtonContainer>
        </StyledForm>
        {/* <StyledOrContainer>
      <StyledLine />
      <p>OR</p>
      <StyledLine />
    </StyledOrContainer>
    <LoginWithGoogle /> */}
      </MainContainer>
    </Main>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${Constants.HEADER_HEIGHT});
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.header`
  font-weight: bold;
  font-size: 64px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`;

const StyledEmailInput = styled(StyledInput)`
  margin-bottom: 60px;
`;

const StyledForgotButton = styled.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${Constants.COLOR.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${Constants.COLOR.DARK_GREEN};
  }
`;

const StyledSignUpButton = styled.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const StyledLine = styled.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`;

const StyledOrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

const StyledError = styled.p`
  color: red;
  margin-top: -20px;
`;

export default SignIn;
