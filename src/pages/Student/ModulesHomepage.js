import React, { useEffect } from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";
import NewCard from "../../components/Student/NewCard";
import { Constants } from "../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import ModuleCard from "../../components/Template/ModuleCard";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useHistory } from "react-router";
import { modulesDb } from "../../data/firebase";
import { setCurrentStep, setSelectedModule } from "../../app/module/actions";
import StyledButton from "../../components/Template/Button";

const ModulesHomepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);
  const isInClass = classes[0] != null;
  const classList = useSelector(selectClassList);

  const assignedModuleCards = currentClass
    ? classList
        .filter((cls) => cls.cid == currentClass.cid)[0]
        ?.modules.map((module) => (
          <ModuleCard
            module={module}
            key={module}
            data-test="module-card"
            onClick={() => moduleOnClick(module)}
          ></ModuleCard>
        ))
    : undefined;

  const moduleOnClick = (module) => {
    modulesDb
      .doc(module)
      .get()
      .then((doc) => {
        dispatch(setCurrentStep(-1));
        dispatch(setSelectedModule(doc.data()));
        history.push("/student/module");
      });
  };

  useEffect(() => {}, [currentClass]);

  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
        <StyledBody>
          <BodyHeader>
            <TitleContainer>
              <StyledTitle>Dashboard</StyledTitle>
              {/* Maps each class in classes to an option in the dropdown list and selects the one that matches the current selected class */}
              {classes[0] && (
                <Dropdown>
                  {classes.map((item) => (
                    <Option
                      selected={item.cid === currentClass.cid ? "selected" : ""}
                      value={item}
                      classItem={item}
                      key={item.cid}
                    />
                  ))}
                </Dropdown>
              )}
              <StyledAddClassButton
                onClick={() => history.push(`/student/add-class`)}
              >
                Add Class
              </StyledAddClassButton>
            </TitleContainer>
            <EnrollmentCode>
              {/* Only shows the enrollment code if a current class is selected */}
              {currentClass && (
                <p>
                  <b>Enrollment Code:</b> {currentClass.cid}
                </p>
              )}
            </EnrollmentCode>
          </BodyHeader>
          {isInClass ? (
            <>
              <StyledSectionHeader>Assigned Modules</StyledSectionHeader>
              <ModulesContainer>{assignedModuleCards}</ModulesContainer>
              {/* <StyledSectionHeader>Completed Modules</StyledSectionHeader>
              <ModulesContainer>{completedModuleCards}</ModulesContainer> */}
            </>
          ) : (
            <p>
              You have not been assigned to a class, please talk to your teacher
            </p>
          )}
        </StyledBody>
      </StyledHomepage>
    </Main>
  );
};

const StyledHomepage = styled.div``;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledAddClassButton = styled(StyledButton)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${Constants.COLOR.GREEN};
`;

const ModulesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`;

const BodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EnrollmentCode = styled.p`
  font-size: 18px;
`;

const StyledSectionHeader = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

export default ModulesHomepage;
