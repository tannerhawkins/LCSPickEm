import React from 'react';
import LoginWithGoogle from '../components/Authentication/LoginWithGoogle';
import Main from '../layouts/Main';
import styled from "styled-components";
import Header from '../components/Authentication/Header';
import { Constants } from '../data/constants';

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
      <button type="submit">Login</button>
    </StyledForm>
    <LoginWithGoogle />
  </MainContainer>
</Main>
);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`

const StyledTitle = styled.header`
  font-weight: bold;
  font-size: 64px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 30%;
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
  font-size: 20px;
  margin-bottom: 30px;
  color: ${Constants.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${Constants.DARK_GREEN};
  }
`
export default Team;
