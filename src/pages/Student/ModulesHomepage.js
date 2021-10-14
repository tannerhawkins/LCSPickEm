import React, { useEffect } from "react";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../../components/Template/Hamburger";
import Main from "../../layouts/Main";
import NewCard from "../../components/Student/NewCard";
import { Constants } from "../../data/constants";
import { useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useHistory } from "react-router";

const ModulesHomepage = () => {
  const history = useHistory();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);

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
                    />
                  ))}
                </Dropdown>
              )}
            </TitleContainer>
            <EnrollmentCode>
              {/* Only shows the enrollment code if a current class is selected */}
              {currentClass && (
                <p>
                  <b>Enrollment Code:</b> {currentClass.enrollmentCode}
                </p>
              )}
            </EnrollmentCode>
          </BodyHeader>
          <StyledSectionHeader>Assigned Modules</StyledSectionHeader>
          <NewCardContainer>
            <StyledCard
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
              // onClick={() =>}
            >
              Module Name
            </StyledCard>
            <StyledCard
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
            >
              Module Name
            </StyledCard>
            <StyledCard
              plusIconColor="green"
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
              // onClick={() => history.push("/teacher/create-class")}
            >
              Module Name
            </StyledCard>
          </NewCardContainer>
          <StyledSectionHeader>Completed Modules</StyledSectionHeader>
          <NewCardContainer>
            <StyledCard
              completedModTxt
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
              // onClick={() =>}
            >
            </StyledCard>
            <StyledCard
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
            >
              Module Name \
              Score:
            </StyledCard>
            <StyledCard
              barColor={Constants.COLOR.GREEN}
              cardColor="white"
              // onClick={() => history.push("/teacher/create-class")}
            >
              Module Name \
              Score:
            </StyledCard>
          </NewCardContainer>
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
  justify-content: space-around;
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

export default ModulesHomepage;
