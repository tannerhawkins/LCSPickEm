import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";

const CreateModule = () => {

  const handleSubmit = () => {
  };


  // Likely should have a field for Title, description, and some kind of interface for adding
  // "steps" to the module. These steps would be things like text, video, and quizzes.
  // Then there needs to be a way to modify these steps with the information desired.
  // Should be an option to make module private or public
  return (
    <Main title={"Create a Module"} description={"Create a Module"}>
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


export default CreateModule;