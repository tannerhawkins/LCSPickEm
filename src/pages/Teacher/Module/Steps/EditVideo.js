import React from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";

const EditVideo = () => {
  return (
    <Main title={"Edit Video Step"} description={"Edit Video Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Video</StyledSectionTitle>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

export default EditVideo;
