import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import Logo from "../../images/white mtn.png";
import HelpIcon from "../../images/Icons/help icon.png";
import FeedbackIcon from "../../images/Icons/feedback icon.png";
import MessageIcon from "../../images/Icons/message icon.png";

const SideBar = () => (
  <StyledSidebar>
    <StyledLogoBox>
      <StyledLogo src={Logo} />
    </StyledLogoBox>
    <StyledIcon src={HelpIcon} />
    <StyledIcon src={FeedbackIcon} />
    <StyledIcon src={MessageIcon} />
  </StyledSidebar>
);

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${Constants.SIDEBAR_WIDTH};
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${Constants.COLOR.DARK_BLUE};
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledLogoBox = styled.div`
  background-color: ${Constants.COLOR.GREEN};
  height: ${Constants.SIDEBAR_WIDTH};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 60px;
`;

const StyledIcon = styled.img`
  width: 40px;
  margin: 50px auto 0px;
`;
export default SideBar;
