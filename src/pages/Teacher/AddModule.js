import React, { useEffect, useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import { getAllModules } from "../../data/firebase";

const AddModule = () => {
  const [modulesList, setModulesList] = useState([]);

  // This should be edited to fit style that you would like
  // This turns the modules in the modulesList to divs to be displayed
  // This should also include buttons or the ability to be clicked or something to be
  // able to select the module to be added and assigned to the class
  const modulesCards = modulesList.map((module) => {
    return (
      <div key={module.mid}>
        <p>{module.title}</p>
        <p>{module.description}</p>
      </div>
    );
  });

  // FOR NOW WE JUST RETRIEVE ALL MODULES, THIS WILL BE CHANGED AFTER WALKING SKELETON
  useEffect(() => {
    if (modulesList.length === 0) {
      getAllModules().then((docs) => setModulesList(docs));
    }
  });

  const handleSubmit = () => {};

  // I think this page should be some kind of place to search for already created modules
  // There should be some kind of search functionality that connects to firebase to allow
  // teachers to search through modules created by APA and by other teachers
  // Also should include a button to go to the create a module page
  // FOR NOW NO SEARCH FUNCTIONALITY, JUST SHOW ALL AVAILABLE MODULES
  return (
    <Main title={"Add a Module"} description={"Add a Module"}>
      <SideBar />
      <Header />
      <StyledBody>{modulesCards}</StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

export default AddModule;
