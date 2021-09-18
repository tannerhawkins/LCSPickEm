import React from 'react';
import styled from 'styled-components';
import { Constants } from '../../data/constants';
import StyledButton from './Button';
import Logo from '../../images/white mtn.png'
import SignInOutButton from '../Authentication/SignInOutButton'

const Navigation = () => (
  <StyledHeader id="header">
    <StyledLogoContainer>
      <StyledLogo src={Logo} />
      <HeaderName>Ancient Path Adventures</HeaderName>
    </StyledLogoContainer>
    <StyledButtonContainer>
      <StyledHelpButton>HELP</StyledHelpButton>
      <SignInOutButton />
    </StyledButtonContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  display: flex;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: ${Constants.HEADER_HEIGHT};
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`

const HeaderName = styled.div`
  font-family: Playball;
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
}
`

const StyledLogo = styled.img`
  margin-left: 3%;
  width: 130px;
`

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`

const StyledHelpButton = styled(StyledButton)`
  margin-right: 10px;
  box-shadow: none;
`

export default Navigation;
