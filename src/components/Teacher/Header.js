import React from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import DownArrowIcon from "../../images/Icons/down arrow icon.png";
import PlusIcon from "../../images/Icons/green plus icon.png";
import NotificationBell from "../Template/NotificationBell";
import LogoutIcon from "../../images/Icons/logout icon.png";
import HeaderProfileInfo from "../Template/HeaderProfileInfo";
import { useDispatch } from "react-redux";
import { signOut } from "../../app/account/actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <StyledHeader id="header">
      <StyledSearchContainer></StyledSearchContainer>
      <StyledButtonsContainer>
        <StyledProfileInfo />
        <StyledPlusContainer>
          <StyledPlusIcon src={PlusIcon} />
          <StyledArrowIcon src={DownArrowIcon} />
        </StyledPlusContainer>
        <NotificationBell />
        <StyledLogoutIcon
          onClick={() => dispatch(signOut())}
          src={LogoutIcon}
        />
      </StyledButtonsContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  height: ${Constants.HEADER_HEIGHT};
  left: ${Constants.SIDEBAR_WIDTH};
  position: fixed;
  top: 0;
  width: calc(100% - ${Constants.SIDEBAR_WIDTH});
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 3%;
  width: 50%;
  height: 100%;
  max-width: 600px;
`;

const StyledSearchContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledPlusContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledPlusIcon = styled.img`
  height: 45%;
`;

const StyledArrowIcon = styled.img`
  height: 40%;
`;

const StyledLogoutIcon = styled.img`
  height: 35%;
  padding-left: 10%;
  :hover {
    cursor: pointer;
  }
`;

const StyledProfileInfo = styled(HeaderProfileInfo)``;

export default Header;
