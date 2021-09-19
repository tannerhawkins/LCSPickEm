import React from 'react';
import styled from 'styled-components';
import DefaultProfileIcon from '../../images/Icons/default profile icon.png';


// TODO Set up logic to retrieve profile image and if none available, set to default image
const ProfileImage = ({className}) => {
  
  return (
    <StyledProfileImage className={className} src={DefaultProfileIcon} />
)};

const StyledProfileImage = styled.img`
    height: 50%;
    border-radius: 50%;
`

export default ProfileImage;