import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import Button from "../../components/Template/Button";
import { useHistory } from "react-router-dom";
import { classDataDb, userDataDb } from "../../data/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectClassList, selectUser } from "../../app/account/selectors";
import firebase from "firebase";
import { signIn } from "../../app/account/actions";
import { setCurrentClass } from "../../app/class/actions";

const AddClass = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleSubmit = () => {
    setErrorMessage();

    // get form data
    const data = Object.values(document.forms.enrollmentForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );

    // checks fields are filled out
    if (data["code"] === "") {
      setErrorMessage("Please enter a valid code");
      return;
    }
    classDataDb
      .where("cid", "==", data["code"])
      .get()
      .then((result) => {
        const data = result.docs[0]?.data();
        debugger;
        if (data === undefined) {
          setErrorMessage("Class not found");
          return;
        } else if (data.students.map((stu) => stu.uid).includes(user.uid)) {
          setErrorMessage("Student already in class");
          return;
        } else {
          classDataDb.doc(data.cid).update({
            students: firebase.firestore.FieldValue.arrayUnion({
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
            }),
          });
          userDataDb
            .doc(user.uid)
            .update({
              classList: firebase.firestore.FieldValue.arrayUnion({
                cid: data.cid,
                modules: data.modules,
                apaModules: data.apaModules,
                className: data.className,
              }),
            })
            .then(() => {
              setErrorMessage(`Added ${user.displayName} to ${data.className}`);
              userDataDb
                .doc(user.uid)
                .get()
                .then((doc) => dispatch(signIn(doc.data())));
              classDataDb
                .doc(data.cid)
                .get()
                .then((doc) => {
                  dispatch(setCurrentClass(doc.data()));
                  history.push(`/student/home`);
                });
            });
        }
      });
  };

  return (
    <Main title={"Add a Class"} description={"Add a Class"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledTitle>Add a Class</StyledTitle>
        <StyledParagraph>
          Please enter the enrollment code of the class you would like to enroll
          in.
        </StyledParagraph>
        <StyledForm id="enrollmentForm">
          <StyledText>Enrollment Code</StyledText>
          <StyledInput
            type="text"
            name="code"
            data-test="enrollment-code"
            required
          />
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit} data-test="submit">
              ADD CLASS
            </StyledSubmitButton>
            <StyledDashboardButton onClick={() => history.push(`student/home`)}>
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
`;

const StyledText = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

export default AddClass;
