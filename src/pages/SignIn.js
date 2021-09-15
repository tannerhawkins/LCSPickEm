import React from 'react';
import LoginWithGoogle from '../components/Authentication/LoginWithGoogle';
import Main from '../layouts/Main';
import styled from "styled-components";
import Header from '../components/Authentication/Header';
import { Constants } from '../data/constants';
import Button from '../components/Template/Button'

const Team = () => (
  <Main
  description={"Sign-In"}
>
  <Header />
  <MainContainer>
    <StyledTitle>Login</StyledTitle>
    <StyledForm>
      <StyledInput type="text" placeholder="Username" name="username" required />
      <StyledForgotButton>Did you forget your username?</StyledForgotButton>
      <StyledInput type="password" placeholder="Password" name="password" required />
      <StyledForgotButton>Did you forget your password?</StyledForgotButton>
      <StyledButtonContainer>
        <StyledSubmitButton type="submit">SIGN-IN</StyledSubmitButton>
        <StyledSignUpButton>Don't have an account? Don’t worry! Sign up here</StyledSignUpButton>
      </StyledButtonContainer>
    </StyledForm>
    <StyledOrContainer>
      <StyledLine />
      <p>OR</p>
      <StyledLine />
    </StyledOrContainer>
    <LoginWithGoogle />
  </MainContainer>
</Main>
);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${Constants.HEADER_HEIGHT});
`

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const StyledTitle = styled.header`
  font-weight: bold;
  font-size: 64px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`

const StyledForgotButton = styled.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${Constants.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${Constants.DARK_GREEN};
  }
`

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
`

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 40px;
  width: 20%;
  min-width: 100px;
  background-color: ${Constants.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`

const StyledLine = styled.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`

const StyledOrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`

export default Team;
