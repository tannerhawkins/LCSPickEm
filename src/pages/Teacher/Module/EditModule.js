import React, { useState } from "react";
import Main from "../../../layouts/Main";
import SideBar from "../../../components/Template/SideBar";
import Header from "../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../data/constants";

const EditModule = () => {
  const handleSubmit = () => {};

  // This page should function and look identically to the create module page
  // Only real difference is that all of the fields in the form will be filled in
  // with the module's information
  return (
    <Main title={"Edit Module"} description={"Edit Module"}>
      <SideBar />
      <Header />
      <StyledBody></StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

export default EditModule;
