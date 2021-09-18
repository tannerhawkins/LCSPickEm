import React from 'react';
import SideBar from '../../components/Template/SideBar';
import Header from '../../components/Teacher/Header';
import styled from 'styled-components';

const ModulesHomepage = () => {
  
  return (
    <StyledHomepage>
      <SideBar />
      <Header />
    </StyledHomepage>
)};

const StyledHomepage = styled.div`
`

export default ModulesHomepage;