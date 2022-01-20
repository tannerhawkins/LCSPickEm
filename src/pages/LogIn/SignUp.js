import React, { useState } from "react";
import Main from "../../layouts/Main";
import styled from "styled-components";
import Header from "../../components/Authentication/Header";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { auth, userDataDb } from "../../data/firebase";
import { useDispatch } from "react-redux";
import { setPasswordLength, signIn } from "../../app/account/actions.js";
import { useHistory } from "react-router";

const SignUp = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setErrorMessage();

    // get sign up form data
    const data = Object.values(document.forms.signUpForm).reduce(
      (obj, field) => {
        if (field.type === "radio") {
          if (field.checked) {
            obj[field.name] = field.value;
          } else {
            if (obj[field.name] === undefined) {
              obj[field.name] = "";
            }
          }
        } else {
          obj[field.name] = field.value;
        }
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
    // checks password and password confirm match
    if (data.password !== data.passwordConfirm) {
      setErrorMessage("Passwords must match");
      return;
    }
    // sends request to create account
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        // updates account with user display name
        auth.currentUser
          .updateProfile({
            displayName: `${data.first} ${data.last}`,
          })
          .then(() => {
            const accountInfo = {
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    displayName: `${data.first} ${data.last}`,
                    picks: [],
                  }
            dispatch(signIn(accountInfo));
            dispatch(setPasswordLength(data.password.length));
            gameDataDb.get().then(result => {
              dispatch(setWeek(result.docs[0].data()))
            })
            userDataDb.doc(auth.currentUser.uid).set(accountInfo);
            history.push(`/home`);
          });
      })
      .catch((response) => {
        // sets error message if something goes wrong
        setErrorMessage(response.message);
      });
  };

  return (
    <Main title={"Sign-Up"} description={"Sign-Up"}>
      <Header />
      <MainContainer>
        <StyledTitle>Sign-up</StyledTitle>
        <StyledForm id="signUpForm">
          <StyledNamesContainer>
            <StyledNameInput
              type="text"
              placeholder="First Name"
              name="first"
              data-test="first-name"
              required
            />
            <StyledNameInput
              type="text"
              placeholder="Last Name"
              name="last"
              data-test="last-name"
              required
            />
          </StyledNamesContainer>
          <StyledInput
            type="email"
            data-test="email"
            placeholder="Email"
            name="email"
            required
          />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            data-test="password"
            required
          />
          <StyledInput
            type="password"
            placeholder="Confirm Pasword"
            name="passwordConfirm"
            data-test="confirm-password"
            required
          />
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton data-test="submit" onClick={handleSubmit}>
              SIGN-UP
            </StyledSubmitButton>
            <StyledSignUpButton
              data-test="sign-up"
              onClick={() => history.push(`signin`)}
            >
              Already have an account? Sign in here
            </StyledSignUpButton>
          </StyledButtonContainer>
        </StyledForm>
      </MainContainer>
    </Main>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: calc(${Constants.HEADER_HEIGHT} + 40px);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledNamesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
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
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`;

const StyledNameInput = styled(StyledInput)`
  width: 45%;
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
  color: white;
  background-color: ${Constants.COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
`;

const StyledError = styled.p`
  color: red;
  margin-top: -20px;
`;

export default SignUp;
