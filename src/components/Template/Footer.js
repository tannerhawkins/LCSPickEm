import React from "react";
import styled, { withTheme } from "styled-components";
import { Constants } from "../../data/constants";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Footer = () => (
  <StyledFooter id="footer">
    
    
    <StyledTermsLinks>
      <StyledLink href="http://ancientpathadventures.com/terms-conditions/" target="_blank">Terms of Use</StyledLink>
      <span> - </span>
      <StyledLink href="http://ancientpathadventures.com/privacy-policy/" target="_blank">Privacy Policy</StyledLink>
    </StyledTermsLinks>
    <StyledCopyRight>Copyright © 2021 Ancient Path Adventures</StyledCopyRight>
  </StyledFooter>

);


const StyledFooter = styled.div`
  display: flex;
  background-color: ${Constants.COLOR.DARK_GREEN};
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 80px;
  position: relative;
  width: 100%;
  z-index: 100000;
  overflow: hidden;
`;

const StyledTermsLinks = styled.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 43px;
  color: white;
  margin: 0 auto;
  text-decoration: none;
`;

const StyledCopyRight = styled.p`
  font-size: 15px;
  color: ${Constants.COLOR.LIGHT_GREEN};
  margin: 0 auto;
`;

const StyledLink = styled.a`
  color: white;
`

export default Footer;
