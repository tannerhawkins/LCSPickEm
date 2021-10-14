import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useHistory } from "react-router-dom";
import { auth, classDataDb, userDataDb } from "../../data/firebase";
import firebase from "firebase";
import { setCurrentClass } from "../../app/class/actions";
import { signIn } from "../../app/account/actions";
import Dropdown, { Option } from "../../components/Template/ClassDropdown";
import { useSelector } from "react-redux";
import { selectCurrentClass } from "../../app/class/selectors";
import { selectClassList } from "../../app/account/selectors";
import ModuleCard from "../../components/Template/ModuleCard";

const AddStudents = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();
  const currentClass = useSelector(selectCurrentClass);
  const classes = useSelector(selectClassList);
  const handleSubmit = () => {
    setErrorMessage();

    // get form data
    const data = Object.values(document.forms.studentsForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );

    // checks fields are filled out
    if (data["email"] === "") {
      setErrorMessage("Please enter the student's email");
      return;
    }
  };


  // Should really just take an input of a students email and add that student
  // to the current selected class. Should maybe include the drop down from the
  // modules page to allow teacher to change selected class on this page.
  return (
    <Main title={"Add a Student"} description={"Add a Student"}>
      <SideBar />
      <Header />
      <StyledBody>
<StyledTitle>Add Students to a Class</StyledTitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          purus eget lacus pellentesque consequat. Donec commodo tincidunt
          lorem, c ursus accumsan eros varius vel.
        </StyledParagraph>
        <StyledForm id="studentsForm">
          <StyledText>Student's Email</StyledText>
          <StyledInput type="text" email="email" required />
          <StyledText>Add to Class</StyledText>
          <Dropdown>
                  {classes.map((item) => (
                    <Option
                      selected={
                        item.cid === currentClass?.cid ? "selected" : ""
                      }
                      value={item}
                      classItem={item}
                    />
                  ))}
          </Dropdown>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit}>
              ADD TO CLASS
            </StyledSubmitButton>
            <StyledDashboardButton onClick={() => history.push(`teacher/home`)}>
              BACK TO DASHBOARD
            </StyledDashboardButton>
          </StyledButtonContainer>
        </StyledForm>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledTitle = styled.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-size: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const StyledDashboardButton = styled(Button)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const StyledError = styled.p`
  color: red;
  margin-top: -20px;
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export default AddStudents;
