import React from 'react';
import SideBar from '../../components/Template/SideBar';
import Header from '../../components/Teacher/Header';
import styled from 'styled-components';
import Hamburger from '../../components/Template/Hamburger';

const ModulesHomepage = () => {
  
  return (
    <StyledHomepage>
      <SideBar />
      <Header />
      <Hamburger />
    </StyledHomepage>
)};

const StyledHomepage = styled.div`
`

export default ModulesHomepage;