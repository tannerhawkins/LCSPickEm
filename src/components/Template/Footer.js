import React from 'react';
import Login from '../Authentication/LoginWithGoogle';
import styled from 'styled-components';
import { Constants } from '../../data/constants';
import StyledButton from './Button';
import Logo from '../../images/white mtn.png'

// Websites Navbar, displays routes defined in 'src/data/routes'
const Footer = () => (
  <StyledFooter id="footer">
    <StyledTermsLinks>Terms of Use  -  Privacy Policy</StyledTermsLinks>
    <StyledCopyRight>Copyright © 2021 Ancient Path Adventures</StyledCopyRight>
  </StyledFooter>
);

const StyledFooter = styled.div`
    display: flex;
    background-color: ${Constants.DARK_GREEN};
    justify-content: center;
    align-items: center;
    flex-flow: column;
    height: 80px;
	position: relative;
	width: 100%;
    z-index: 100000;
    overflow: hidden;
`

const StyledTermsLinks = styled.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 43px;
    color: white;
`

const StyledCopyRight = styled.p`
    font-size: 15px;
    color: ${Constants.LIGHT_GREEN};
`

export default Footer;