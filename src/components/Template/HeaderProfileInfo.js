import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  selectAccountType,
  selectDisplayName,
} from "../../app/account/selectors";
import DownArrowIcon from "../../images/Icons/down arrow icon.png";
import ProfileImage from "./ProfileImage";

// TODO implement logic to get display name and account type from auth
const HeaderProfileInfo = ({ className }) => {
  const displayName = useSelector(selectDisplayName);
  const accountType = useSelector(selectAccountType);
  const history = useHistory();

  return (
    <StyledProfileInfo
      className={className}
      onClick={() => history.push("/profile")}
    >
      <StyledProfileImage />
      <StyledInfoContainer>
        <StyledDisplayName data-test="display-name">
          {displayName}
        </StyledDisplayName>
        <StyledAccountType data-test="account-type">
          {accountType}
        </StyledAccountType>
      </StyledInfoContainer>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const StyledProfileImage = styled(ProfileImage)`
  height: 50%;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 6px;
  padding-left: 15px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledDisplayName = styled.p`
  font-size: 18px;
  line-height: 18px;
  margin: 0;
  font-weight: 500;
`;

const StyledAccountType = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;

export default HeaderProfileInfo;
