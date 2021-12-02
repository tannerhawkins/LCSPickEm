import React, { Suspense, lazy, useState } from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import ProfileImage from "./ProfileImage";
import HelpIcon from "../../images/Icons/green help icon.png";
import FeedbackIcon from "../../images/Icons/green feedback icon.png";
import MessageIcon from "../../images/Icons/green message icon.png";
import PlusIcon from "../../images/Icons/green plus icon.png";
import LogoutIcon from "../../images/Icons/logout icon.png";
import Logo from "../../images/white mtn.png";
import { useHistory } from "react-router-dom";
import { clearState } from "../../app/store";
import { useDispatch } from "react-redux";
import HeaderProfileInfo from "../Template/HeaderProfileInfo";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <StyledHamburgerContainer>
      <StyledNavContainer>
        {open ? (
          <StyledMini>
            <StyledLogoContainer>
              <StyledLogo onClick={() => history.push("/home")} src={Logo} />
            </StyledLogoContainer>
              <StyledButtonContainer>
              <StyledButton onClick={() => setOpen(!open)} className="menu-hover">
                &#10005;
              </StyledButton>
            </StyledButtonContainer>
          </StyledMini>
        ) : (
          <StyledMini>
            <StyledLogoContainer>
              <StyledLogo onClick={() => history.push("/home")} src={Logo} />
            </StyledLogoContainer>
            <StyledButtonContainer>
              <StyledButton
                onClick={() => setOpen(!open)}
                className="menu-hover"
              >
                &#9776;
              </StyledButton>
            </StyledButtonContainer>
          </StyledMini>
        )}
      </StyledNavContainer>
      <Suspense fallback={<></>}>
        <StyledMenu style={{display: open ? "flex" : "none"}}>
          <StyledLinkList>
            <StyledListItem onClick={() => history.push("/profile")}>
              <StyledProfileImage />
              Profile
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon src={PlusIcon} />
              Add
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon src={MessageIcon} />
              Messages
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon src={HelpIcon} />
              Help
            </StyledListItem>
            <StyledListItem>
              <StyledListItemIcon src={FeedbackIcon} />
              Feedback
            </StyledListItem>
            <StyledListItem onClick={() => dispatch(clearState())}>
              <StyledListItemIcon src={LogoutIcon} />
              LogOut
            </StyledListItem>
          </StyledLinkList>
        </StyledMenu>
      </Suspense>
    </StyledHamburgerContainer>
  );
};

const StyledHamburgerContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    top: 0;
    width: 100vw;
    overflow: hidden;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const StyledNavContainer = styled.div`
  height: ${Constants.HEADER_HEIGHT};
  background-color: ${Constants.COLOR.DARK_GREEN};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledLogo = styled.img`
  display: flex;
  margin-left: 3%;
  width: 130px;
  :hover {
    cursor: pointer;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    jusity-content: flex-start;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
`;

const StyledButton = styled.div`
  display: flex;
  font-size: 30px;
  user-select: none;
  color: white;
`;

const StyledLinkList = styled.div`
  display: block;
  height: 100%;
  background-color: white;
  width: 100%;
  overflow: hidden;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid grey;
  background-color: white;
`;

const StyledListItemIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const StyledProfileImage = styled(ProfileImage)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const StyledProfileInfo = styled(HeaderProfileInfo)``;

const StyledMenu = styled.div`
  position: absolute;
  height: calc(100vh - ${Constants.HEADER_HEIGHT});
  transition: margin-left 0.4s linear;
  width: 100vw;
  z-index: 1;
`;

const StyledMini = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  width: 100vw;
`;

const StyledLogoutIcon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;
export default Hamburger;
