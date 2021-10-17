import React, { useState } from "react";
import Main from "../../layouts/Main";
import styled from "styled-components";
import Header from "../../components/Authentication/Header";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { auth, userDataDb } from "../../data/firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../../app/account/actions.js";
import { setCurrentClass } from "../../app/class/actions";
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
            const accountInfo =
              data.accountType === "teacher"
                ? {
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    classList: [],
                    displayName: `${data.first} ${data.last}`,
                    accountType: data.accountType,
                    moduleList: [],
                  }
                : {
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    classList: [],
                    displayName: `${data.first} ${data.last}`,
                    accountType: data.accountType,
                  };
            dispatch(signIn(accountInfo));
            dispatch(setCurrentClass(null));
            userDataDb.doc(auth.currentUser.uid).set(accountInfo);
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
              required
            />
            <StyledNameInput
              type="text"
              placeholder="Last Name"
              name="last"
              required
            />
          </StyledNamesContainer>
          <StyledInput type="email" placeholder="Email" name="email" required />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <StyledInput
            type="password"
            placeholder="Confirm Pasword"
            name="passwordConfirm"
            required
          />
          <StyledText style={{ marginTop: "-20px" }}>I am a:</StyledText>
          <StyledRadioButtonContainer>
            <StyledRadioButton
              type="radio"
              name="accountType"
              value="teacher"
              required
            />
            <StyledText>Teacher</StyledText>
            <StyledRadioButton
              type="radio"
              name="accountType"
              value="student"
              required
            />
            <StyledText>Student</StyledText>
          </StyledRadioButtonContainer>
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit}>
              SIGN-UP
            </StyledSubmitButton>
            <StyledSignUpButton
              onClick={() => history.push(`signin`)}
            >
              Already have an account? Don’t worry! Sign in here
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
  padding: 50px 0;
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

const StyledRadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
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

const StyledRadioButton = styled.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
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
  margin-bottom: 30px;
`;

const StyledError = styled.p`
  color: red;
  margin-top: -20px;
`;

const StyledText = styled.p`
  font-size: 20px;
`;

export default SignUp;
