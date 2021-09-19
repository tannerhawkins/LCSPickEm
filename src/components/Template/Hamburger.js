import React, { Suspense, lazy, useState } from 'react';
import styled from 'styled-components';
import { Constants } from '../../data/constants';
import ProfileImage from './ProfileImage';
import HelpIcon from '../../images/Icons/green help icon.png';
import FeedbackIcon from '../../images/Icons/green feedback icon.png';
import MessageIcon from '../../images/Icons/green message icon.png';
import PlusIcon from '../../images/Icons/plus icon.png';
import LogoutIcon from '../../images/Icons/logout icon.png';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHamburgerContainer>
        <StyledNavContainer>
          {open ? (
            <StyledButtonContainer>
              <StyledButton onClick={() => setOpen(!open)} className="menu-hover">&#10005;</StyledButton>
            </StyledButtonContainer>
          ) : (
            <StyledButtonContainer>
              <StyledButton onClick={() => setOpen(!open)} className="menu-hover">&#9776;</StyledButton>
            </StyledButtonContainer>
          )}
        </StyledNavContainer>
      <Suspense fallback={<></>}>
        <StyledMenu style={{marginLeft: (open ? "0" : "150vw")}}>
          <StyledLinkList>
            <StyledListItem><StyledProfileImage />Profile</StyledListItem>
            <StyledListItem><StyledListItemIcon src={PlusIcon} />Add</StyledListItem>
            <StyledListItem><StyledListItemIcon src={MessageIcon} />Messages</StyledListItem>
            <StyledListItem><StyledListItemIcon src={HelpIcon} />Help</StyledListItem>
            <StyledListItem><StyledListItemIcon src={FeedbackIcon} />Feedback</StyledListItem>
            <StyledListItem><StyledListItemIcon src={LogoutIcon} />LogOut</StyledListItem>
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
    }
`

const StyledNavContainer = styled.div`
    height: ${Constants.HEADER_HEIGHT};
    background-color: ${Constants.COLOR.DARK_GREEN};
    display: flex;
    align-items: center;
`

const StyledButtonContainer = styled.div`
    margin-left: 20px;
`

const StyledButton = styled.div`
    font-size: 30px;
    user-select: none;
`

const StyledLinkList = styled.div`
  display: block;
`

const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 2px solid grey;
`

const StyledListItemIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
`

const StyledProfileImage = styled(ProfileImage)`
    width: 40px;
    height: 40px;
    margin-right: 20px;
`

const StyledMenu = styled.div`
    position: absolute;
    height: calc(100vh - ${Constants.HEADER_HEIGHT});
    transition: margin-left .4s linear;
    width: 100vw;
`
export default Hamburger;