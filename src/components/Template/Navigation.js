import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import StyledButton from "./Button";
import Logo from "../../images/lcs-logo.png";
import SignInOutButton from "../Authentication/SignInOutButton";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../app/account/selectors";

const Navigation = () => {
  const history = useHistory();
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <StyledHeader id="header">
      <SideContainer>
        <StyledLogoContainer onClick={() => history.push(`/index`)}>
          <StyledLogo src={Logo} />
          <HeaderName>LCS Pick'Em</HeaderName>
        </StyledLogoContainer>
        {isSignedIn && (
          <LinksContainer>
            <StyledLink onClick={() => history.push("/home")}>
              My Picks
            </StyledLink>
            <StyledLink onClick={() => history.push("/standings")}>
              Standings
            </StyledLink>
          </LinksContainer>
        )}
      </SideContainer>
      <StyledButtonContainer>
        <StyledSignInOutButton />
      </StyledButtonContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: ${Constants.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${Constants.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`;

const SideContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`;

const LinksContainer = styled.div`
  display: flex;
  min-width: 200px;
  padding-left: 30px;
  justify-content: space-around;
  border-left: solid white 2px;
  margin-left: 40px;
  height: 90%;
  @media (max-width: 800px) {
    margin-left: 0;
    padding-left: 10px;
  }
  @media (max-width: 400px) {
    border: none;
  }
`;

const HeaderName = styled.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledLink = styled.p`
  color: white;

  :hover {
    color: ${Constants.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;

const StyledLogo = styled.img`
  margin-left: 3%;
  width: 100px;
  height: 70px;
  @media (max-width: 800px) {
    width: 50px;
    height: 40px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`;

const StyledSignInOutButton = styled(SignInOutButton)``;

export default Navigation;
