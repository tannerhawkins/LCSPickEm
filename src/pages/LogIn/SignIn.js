import React, { useState } from "react";
import Main from "../../layouts/Main";
import styled from "styled-components";
import Header from "../../components/Authentication/Header";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useDispatch } from "react-redux";
import * as firebase from "../../data/firebase";
import {
  setPasswordLength,
  setWeek,
  signIn,
} from "../../app/account/actions.js";
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

    firebase.auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        firebase.userDataDb
          .doc(firebase.auth.currentUser.uid)
          .get()
          .then((doc) => {
            dispatch(signIn(doc.data()));
            dispatch(setPasswordLength(data.password.length));
            firebase
              .getSeasonGameData(Constants.SEASON)
              .then((result) => {
                const weeks = Object.values(result.data());
                const weekEnds = weeks.map(week => week.games[week.games.length - 1]?.start);
                const passedWeeks = weekEnds.reduce(weekEnd => {
                  const now = new Date();
                  if (now > weekEnd) {
                    return 1;
                  } else {
                    return 0;
                  }
                })
                const nextWeek = passedWeeks == weeks.length ? passedWeeks : passedWeeks + 1;
                dispatch(setWeek(weeks[nextWeek] ? weeks[nextWeek] : weeks[0]));
              })
              .then(history.push(`/home`));
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
            data-test="email"
            required
          />
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            data-test="password"
            required
          />
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSignUpButton
              data-test="sign-up"
              onClick={() => history.push(`/signup`)}
            >
              Don't have an account? Sign up here
            </StyledSignUpButton>
            <StyledSubmitButton
              type="submit"
              data-test="submit"
              onClick={handleSubmit}
            >
              SIGN-IN
            </StyledSubmitButton>
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
  padding-top: calc(${Constants.HEADER_HEIGHT} + 40px);
  height: calc(100vh - ${Constants.HEADER_HEIGHT}) vh;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`;

const StyledTitle = styled.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 3%;
  @media (max-width: 1024px) {
    margin-top: 17%;
    margin-bottom: 15%;
  }
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
  @media (max-width: 1024px) {
    height: 50px;
  }
`;

const StyledEmailInput = styled(StyledInput)`
  margin-bottom: 60px;
`;

const StyledSignUpButton = styled.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
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

export default SignIn;
