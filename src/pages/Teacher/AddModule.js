import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";

const AddModule = () => {

  const handleSubmit = () => {
  };


  // I think this page should be some kind of place to search for already created modules
  // There should be some kind of search functionality that connects to firebase to allow
  // teachers to search through modules created by APA and by other teachers
  // Also should include a button to go to the create a module page
  return (
    <Main title={"Add a Module"} description={"Add a Module"}>
      <SideBar />
      <Header />
      <StyledBody>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;


export default AddModule;