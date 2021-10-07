import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";

const AddStudents = () => {

  const handleSubmit = () => {
  };

  return (
    <Main title={"Create a Class"} description={"Create a Class"}>
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


export default AddStudents;