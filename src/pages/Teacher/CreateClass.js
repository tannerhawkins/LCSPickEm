import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, classDataDb, userDataDb } from "../../data/firebase";
import firebase from "firebase";
import { setCurrentClass } from "../../app/class/actions";
import { signIn } from "../../app/account/actions";

const CreateClass = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = () => {
    setErrorMessage();

    // get form data
    const data = Object.values(document.forms.classForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );
    // checks all fields are filled out
    if (data["name"] === "") {
      setErrorMessage("Please fill out class name");
      return;
    }
    // sends request to create class
    classDataDb
      .add({
        className: data["name"],
        description: data["description"],
        students: [],
        modules: [],
      })
      .then((doc) => {
        classDataDb
          .doc(doc.id)
          .update({ cid: doc.id })
          .then(() => {
            classDataDb
              .doc(doc.id)
              .get()
              .then((doc2) => {
                dispatch(setCurrentClass(doc2.data()));
              });
          });
        userDataDb
          .doc(auth.currentUser.uid)
          .update({
            classList: firebase.firestore.FieldValue.arrayUnion({
              cid: doc.id,
              className: data["name"],
            }),
          })
          .then(() => {
            userDataDb
              .doc(auth.currentUser.uid)
              .get()
              .then((doc) => {
                dispatch(signIn(doc.data()));
              });
            history.push(`teacher/home`);
          });
      });
  };

  return (
    <Main title={"Create a Class"} description={"Create a Class"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledTitle>Create New Class</StyledTitle>
        <StyledForm id="classForm">
          <StyledText>Class Name</StyledText>
          <StyledInput type="text" name="name" data-test="name" required />
          <StyledText>Class Description</StyledText>
          <StyledInput type="text" name="description" data-test="description" />
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit} data-test="create">
              CREATE
            </StyledSubmitButton>
            <StyledDashboardButton
              onClick={() => history.push(`teacher/home`)}
              data-test="back"
            >
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

export default CreateClass;
