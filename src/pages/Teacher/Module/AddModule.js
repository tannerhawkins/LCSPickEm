import React, { useEffect, useState } from "react";
import Main from "../../../layouts/Main";
import SideBar from "../../../components/Template/SideBar";
import Header from "../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../data/constants";
import {
  apaModulesDb,
  classDataDb,
  getAllApaModules,
  userDataDb,
} from "../../../data/firebase";
import ModuleCard from "../../../components/Template/ModuleCard";
import ApaModuleCard from "../../../components/Template/ApaModuleCard";
import { useDispatch, useSelector } from "react-redux";
import { selectModuleList } from "../../../app/account/selectors";
import { selectCurrentClass } from "../../../app/class/selectors";
import { setCurrentClass } from "../../../app/class/actions";
import firebase from "firebase";
import Button from "../../../components/Template/Button";
import { useHistory } from "react-router";
import { setSelectedModule } from "../../../app/module/actions";
import ModuleContainer from "../../../components/Template/ModuleContainer";
import Hamburger from "../../../components/Template/Hamburger.js"

const AddModule = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modulesList = useSelector(selectModuleList);
  const currentClass = useSelector(selectCurrentClass);
  const [apaModules, setApaModules] = useState([]);

  useEffect(() => {
    if (apaModules.length == 0) {
      apaModulesDb.get().then((result) => {
        setApaModules(result.docs.map((doc) => doc.data()));
      });
    }
  }, []);

  const apaModuleCards = apaModules
    ?.filter((module) => !currentClass?.apaModules?.includes(module.mid))
    .map((moduleToAdd) => (
      <ApaModuleCard
        onClick={() => handleClick(moduleToAdd.mid, true)}
        module={moduleToAdd.mid}
        key={moduleToAdd.mid}
      />
    ));

  const moduleCards = modulesList
    ?.filter((module) => !currentClass?.modules.includes(module.mid))
    .map((moduleToAdd) => (
      <ModuleCard
        onClick={() => handleClick(moduleToAdd.mid, false)}
        module={moduleToAdd.mid}
        key={moduleToAdd.mid}
      />
    ));

  const handleClick = (mid, isApa) => {
    if (isApa) {
      classDataDb
        .doc(currentClass.cid)
        .update({
          apaModules: firebase.firestore.FieldValue.arrayUnion(mid),
        })
        .then(
          classDataDb
            .doc(currentClass.cid)
            .get()
            .then((doc) => {
              doc.data().students.forEach((student) => {
                userDataDb
                  .doc(student.uid)
                  .get()
                  .then((userdoc) => {
                    const classList = userdoc.data().classList;
                    const oldClass = classList.filter(
                      (cla) => cla.cid === currentClass.cid
                    )[0];
                    const newClass = {
                      ...oldClass,
                      apaModules: [...oldClass.modules, mid],
                    };
                    const getIndex = () => {
                      for (let i = 0; i < classList.length; i++) {
                        if (classList[i].cid === oldClass.cid) {
                          return i;
                        }
                      }
                      return -1;
                    };
                    const index = getIndex();
                    classList.splice(index, 1, newClass);
                    userDataDb.doc(student.uid).update({
                      classList: classList,
                    });
                  });
              });
            })
            .then(
              classDataDb
                .doc(currentClass?.cid)
                .get()
                .then((doc) => dispatch(setCurrentClass(doc.data())))
            )
        );
    } else {
      classDataDb
        .doc(currentClass.cid)
        .update({
          modules: firebase.firestore.FieldValue.arrayUnion(mid),
        })
        .then(
          classDataDb
            .doc(currentClass.cid)
            .get()
            .then((doc) => {
              doc.data().students.forEach((student) => {
                userDataDb
                  .doc(student.uid)
                  .get()
                  .then((userdoc) => {
                    const classList = userdoc.data().classList;
                    const oldClass = classList.filter(
                      (cla) => cla.cid === currentClass.cid
                    )[0];
                    const newClass = {
                      ...oldClass,
                      modules: [...oldClass.modules, mid],
                    };
                    const getIndex = () => {
                      for (let i = 0; i < classList.length; i++) {
                        if (classList[i].cid === oldClass.cid) {
                          return i;
                        }
                      }
                      return -1;
                    };
                    const index = getIndex();
                    classList.splice(index, 1, newClass);
                    userDataDb.doc(student.uid).update({
                      classList: classList,
                    });
                  });
              });
            })
            .then(
              classDataDb
                .doc(currentClass?.cid)
                .get()
                .then((doc) => dispatch(setCurrentClass(doc.data())))
            )
        );
    }
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
      <Hamburger />
      <StyledBody>
        <StyledSectionTitle>Existing Modules</StyledSectionTitle>
        <ModuleContainer moduleCards={moduleCards} />
        <StyledSectionTitle>APA Modules</StyledSectionTitle>
        <ModuleContainer moduleCards={apaModuleCards} />
        <StyledButtonContainer>
          <StyledDashboardButton
            onClick={handleCreateNewModule}
            data-test="create-module"
          >
            CREATE NEW MODULE
          </StyledDashboardButton>
          <StyledDashboardButton
            onClick={() => history.push(`home`)}
            data-test="back"
          >
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
  height: 115vh;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`;

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  margin-bottom: 50px;
  width: 60%;
  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 0;
    width: auto;
  }
`;

const StyledDashboardButton = styled(Button)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  margin: 5px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default AddModule;
