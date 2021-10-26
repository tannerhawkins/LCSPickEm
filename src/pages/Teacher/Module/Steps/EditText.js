import React from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";

const EditText = () => {
  return (
    <Main title={"Edit Text Step"} description={"Edit Text Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Text</StyledSectionTitle>
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

export default EditText;
