import React from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";

const ModulesHomepage = () => {
  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
      </StyledHomepage>
    </Main>
  );
};

const StyledHomepage = styled.div``;

export default ModulesHomepage;
