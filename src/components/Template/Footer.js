import React from "react";
import styled, { withTheme } from "styled-components";
import { Constants } from "../../data/constants";

// Websites Navbar, displays routes defined in 'src/data/routes'
const Footer = () => (
  <StyledFooter id="footer">
    
    
    <StyledTermsLinks>
      <a href="http://ancientpathadventures.com/terms-conditions/">Terms of Use</a>
      <a href="http://ancientpathadventures.com/privacy-policy/"> - Privacy Policy</a>
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

const StyledTermsLinks = styled.a`
  font-weight: bold;
  font-size: 20px;
  line-height: 43px;
  color: white;
  margin: 0 auto;
  text-decoration: underline;
`;

const StyledCopyRight = styled.p`
  font-size: 15px;
  color: ${Constants.COLOR.LIGHT_GREEN};
  margin: 0 auto;
`;

export default Footer;
