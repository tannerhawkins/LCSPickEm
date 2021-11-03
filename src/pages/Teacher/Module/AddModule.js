import React from "react";
import Main from "../../../layouts/Main";
import SideBar from "../../../components/Template/SideBar";
import Header from "../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../data/constants";
import { classDataDb } from "../../../data/firebase";
import ModuleCard from "../../../components/Template/ModuleCard";
import { useDispatch, useSelector } from "react-redux";
import { selectModuleList } from "../../../app/account/selectors";
import { selectCurrentClass } from "../../../app/class/selectors";
import { setCurrentClass } from "../../../app/class/actions";
import firebase from "firebase";
import Button from "../../../components/Template/Button";
import { useHistory } from "react-router";
import { setSelectedModule } from "../../../app/module/actions";
import { setLoadingFalse, setLoadingTrue } from "../../../app/actions";

const AddModule = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modulesList = useSelector(selectModuleList);
  const currentClass = useSelector(selectCurrentClass);

  // This should be edited to fit style that you would like
  // This turns the modules in the modulesList to divs to be displayed
  // This should also include buttons or the ability to be clicked or something to be
  // able to select the module to be added and assigned to the class
  const modulesCards = modulesList
    ?.filter((module) => !currentClass?.modules.includes(module.mid))
    .map((moduleToAdd) => (
      <ModuleCard
        onClick={() => handleClick(moduleToAdd.mid)}
        module={moduleToAdd.mid}
        key={moduleToAdd.mid}
      />
    ));

  const handleClick = (mid) => {
    dispatch(setLoadingTrue());
    classDataDb
      .doc(currentClass.cid)
      .update({
        modules: firebase.firestore.FieldValue.arrayUnion(mid),
      })
      .then(
        classDataDb
          .doc(currentClass?.cid)
          .get()
          .then((doc) => dispatch(setCurrentClass(doc.data())))
      );
    dispatch(setLoadingFalse());
  };

  const handleCreateNewModule = () => {
    dispatch(setSelectedModule(Constants.EMPTY_MODULE));
    history.push(`create-module`);
  };

  // I think this page should be some kind of place to search for already created modules
  // There should be some kind of search functionality that connects to firebase to allow
  // teachers to search through modules created by APA and by other teachers
  // Also should include a button to go to the create a module page
  // FOR NOW NO SEARCH FUNCTIONALITY, JUST SHOW ALL AVAILABLE MODULES
  return (
    <Main title={"Add a Module"} description={"Add a Module"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Existing Modules</StyledSectionTitle>
        <ExistingModules>{modulesCards}</ExistingModules>
        <StyledButtonContainer>
          <StyledDashboardButton onClick={handleCreateNewModule}>
            CREATE NEW MODULE
          </StyledDashboardButton>
          <StyledDashboardButton onClick={() => history.push(`home`)}>
            BACK TO DASHBOARD
          </StyledDashboardButton>
        </StyledButtonContainer>
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

const ExistingModules = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  width: 60%;
`;

const StyledDashboardButton = styled(Button)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default AddModule;
