import React from 'react';
import styled from 'styled-components';
import NotificationBellIcon from '../../images/Icons/notification bell icon.png';


// TODO Set up logic to add amt of notifications to bell
const NotificationBell = () => {
  
  return (
    <StyledNotificationBell src={NotificationBellIcon} />
)};

const StyledNotificationBell = styled.img`
    height: 50%;
    border-radius: 50%;
`

export default NotificationBell;