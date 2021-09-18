import React from 'react';
import styled from 'styled-components';
import { Constants } from '../../data/constants';
import DownArrowIcon from '../../images/Icons/down arrow icon.png'
import ProfileImage from './ProfileImage';

// TODO implement logic to get display name and account type from auth
const HeaderProfileInfo = () => {
  
  return (
    <StyledProfileInfo>
      <StyledProfileImage />
      <StyledDownArrow src={DownArrowIcon} />
      <StyledInfoContainer>
        <StyledDisplayName>Tanner Hawkins</StyledDisplayName>
        <StyledAccountType>Teacher</StyledAccountType>
      </StyledInfoContainer>
    </StyledProfileInfo>
)};

const StyledProfileInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const StyledDownArrow = styled.img`
  height: 40%;
`

const StyledProfileImage = styled(ProfileImage)`
  height: 100%;
`

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
`

const StyledDisplayName = styled.h1`
  font-size: 20px;
  line-height: 18px;
  margin: 0;
  font-weight: 500;
`

const StyledAccountType = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
`

export default HeaderProfileInfo;