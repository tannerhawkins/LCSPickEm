import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";

// Websites Navbar, displays routes defined in 'src/data/routes'
const TermsOfUse = () => (
  <StyledFooter id="footer">
    <StyledTermsLinks>${styledTerms} - Privacy Policy</StyledTermsLinks>
    <StyledCopyRight>Copyright © 2021 Ancient Path Adventures</StyledCopyRight>
  </StyledFooter>
);

const styledTerms = styled.a`
  font-size: 15px;
  color: ${Constants.COLOR.LIGHT_GREEN};
  margin: 0 auto;
`;