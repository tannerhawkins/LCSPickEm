import React, { useEffect, useState } from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";
import NewCard from "../../components/Teacher/NewCard";
import { Constants } from "../../data/constants";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useHistory } from "react-router";
import ModuleCard from "../../components/Template/ModuleCard";
import ModuleContainer from "../../components/Template/ModuleContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectModuleList } from "../../app/account/selectors";
import { setSelectedModule } from "../../app/module/actions";
import { apaModulesDb } from "../../data/firebase";

const ModulesHomepage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modules, setModules] = useState([]);
  const moduleOnClick = (module) => {
    apaModulesDb
      .doc(module)
      .get()
      .then((doc) => {
        dispatch(setSelectedModule(doc.data()));
        history.push("/admin/create-module");
      });
  };
  const moduleCards = modules?.map((module) => (
    <StyledModuleCard
      key={module.mid}
      onClick={() => moduleOnClick(module.mid)}
    >
      <StyledModTitle data-test="module-title">{module.title}</StyledModTitle>
      <StyledDescription>{module.description}</StyledDescription>
    </StyledModuleCard>
  ));

  useEffect(() => {
    if (modules.length === 0) {
      apaModulesDb.get().then((result) => {
        setModules(result.docs.map((doc) => doc.data()));
      });
    }
  });

  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
        <StyledBody>
          <BodyHeader>
            <TitleContainer>
              <StyledTitle>Dashboard </StyledTitle>
            </TitleContainer>
          </BodyHeader>
          <StyledSectionHeader>New</StyledSectionHeader>
          <NewCardContainer>
            <StyledCard
              plusIconColor="green"
              barColor={Constants.COLOR.GREEN}
              cardColor={Constants.COLOR.TEAL}
              onClick={() => {
                dispatch(setSelectedModule(Constants.EMPTY_MODULE));
                history.push("/admin/create-module");
              }}
              dataTest="add-module"
            >
              Module
            </StyledCard>
          </NewCardContainer>
          <StyledSectionHeader>APA Modules</StyledSectionHeader>
          <ModuleContainer moduleCards={moduleCards} />
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

const NewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 950px;
`;

const StyledCard = styled(NewCard)`
  width: 250px;
  height: 228px;
`;

const StyledSectionHeader = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

const StyledModuleCard = styled.div`
  background-color: ${Constants.COLOR.PINK};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${Constants.COLOR.LIGHT_PINK};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform 0.45s ease, background 0.45s ease;
`;

const StyledModTitle = styled.p`
  color: ${Constants.COLOR.LIGHT_GREEN}
  font-size: 80px !important;
  text-transform: 'capitalize' !important;
  color: #2E3C40;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid 
  transition: color .45s ease, border .45s ease;
  font-weight: 600;
  line-height: 1;
  padding-bottom: .5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid #2E3C40;
`;

const StyledDescription = styled.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;

export default ModulesHomepage;
