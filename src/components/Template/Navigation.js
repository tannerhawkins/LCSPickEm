import React from 'react';
import Login from '../Authentication/Login';
import styled from 'styled-components';
import { Constants } from '../../data/constants';
import StyledButton from './Button';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <StyledHeader id="header">
    <StyledLogo>LOGO</StyledLogo>
    <StyledButtonContainer>
      <StyledHelpButton>HELP</StyledHelpButton>
      <Login />
    </StyledButtonContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  background-color: ${Constants.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: 80px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`

const StyledLogo = styled.div`
  margin-left: 3%;
`

const StyledHelpButton = styled(StyledButton)`
  margin-right: 10px;
  box-shadow: none;
`

export default Navigation;
