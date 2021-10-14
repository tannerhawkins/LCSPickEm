import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";

const AddStudents = () => {
  const handleSubmit = () => {};

  // Should really just take an input of a students email and add that student
  // to the current selected class. Should maybe include the drop down from the
  // modules page to allow teacher to change selected class on this page.
  return (
    <Main title={"Add a Student"} description={"Add a Student"}>
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

export default AddStudents;
