import React, { useEffect, useState } from "react";
import Main from "../../../layouts/Main";
import SideBar from "../../../components/Template/SideBar";
import Header from "../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../data/constants";
import {
  auth,
  classDataDb,
  modulesDb,
  userDataDb,
} from "../../../data/firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Template/Button";
import DragAndDrop from "../../../components/Teacher/DragAndDrop";
import AddStepPopup from "../../../components/Teacher/Popups/AddStepPopup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedModule,
  selectSteps,
} from "../../../app/module/selectors";
import { selectCurrentClass } from "../../../app/class/selectors";
import { setCurrentClass } from "../../../app/class/actions";

const CreateModule = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showAddStepPopup, setShowAddStepPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const selectedModule = useSelector(selectSelectedModule);
  const steps = useSelector(selectSteps);
  const currentClass = useSelector(selectCurrentClass);

  useEffect(() => {}, [steps]);

  const handleSubmit = () => {
    setErrorMessage();

    // get form data
    const data = Object.values(document.forms.moduleForm)
      .filter((item) => item.name)
      .reduce((obj, field) => {
        obj[field.name] = field.value;
        return obj;
      }, {});
    const toAdd = {
      ...selectedModule,
      title: data.title,
      description: data.description,
      creator: auth.currentUser.uid,
    };
    if (data["title"] === "") {
      setErrorMessage("Please fill out module title");
      return;
    }
    if (steps.length === 0) {
      setErrorMessage("Please add at least one step");
      return;
    }

    // currently assigns all students but this is subject to change
    const studentsToAssign = currentClass.students

    modulesDb.add(toAdd).then((doc) => {
      modulesDb.doc(doc.id).update({ mid: doc.id });
      userDataDb
        .doc(auth.currentUser.uid)
        .update({
          moduleList: firebase.firestore.FieldValue.arrayUnion({
            mid: doc.id,
            title: data.title,
            description: data.description,
          }),
        })
        .then(() => {
          classDataDb
            .doc(currentClass.cid)
            .update({
              modules: firebase.firestore.FieldValue.arrayUnion(doc.id),
            })
            .then(
              classDataDb
                .doc(currentClass?.cid)
                .get()
                .then((doc) => dispatch(setCurrentClass(doc.data())))
            ).then(() => {
              studentsToAssign.forEach(student => {
                userDataDb.doc(student.uid).get().then(classdoc => {
                  const classList = classdoc.data().classList;
                  const oldClass = classList.filter(cla => cla.cid === currentClass.cid)[0];
                  const newClass = {
                    ...oldClass,
                    modules: [...oldClass.modules, doc.id],
                  }
                  const getIndex = () => {
                    for (let i = 0; i < classList.length; i++) {
                      if (classList[i].cid === oldClass.cid) {
                        return i;
                      }
                    }
                    return -1;
                  }
                  const index = getIndex();
                  classList.splice(index, 1, newClass)
                  userDataDb.doc(student.uid).update({
                    classList: classList
                  })
                })
              })
            })
          })
        })
        .then(() => history.push("teacher/home"));
  }

  // Likely should have a field for Title, description, and some kind of interface for adding
  // "steps" to the module. These steps would be things like text, video, and quizzes.
  // Then there needs to be a way to modify these steps with the information desired.
  // Should be an option to make module private or public
  // Should probably have an option to ask which students to assign to
  // These options should include none, all, and the ability to select students individually
  // FOR NOW DONT INCLUDE THESE OPTIONS, THIS IS SOMETHING THAT CAN BE ADDED LATER
  return (
    <Main title={"Create a Module"} description={"Create a Module"}>
      <SideBar />
      <Header />
      <AddStepPopup
        style={{ display: showAddStepPopup ? "flex" : "none" }}
        onClose={() => setShowAddStepPopup(false)}
      />
      <StyledBody>
        <StyledTitle>Create New Module</StyledTitle>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
          purus eget lacus pellentesque consequat. Donec commodo tincidunt
          lorem, c ursus accumsan eros varius vel.
        </StyledParagraph>
        <StyledForm id="moduleForm">
          <StyledText>Module Title</StyledText>
          <StyledInput
            type="text"
            name="title"
            defaultValue={selectedModule?.title}
            required
          />
          <StyledText>Module Description</StyledText>
          <StyledInput
            type="text"
            name="description"
            defaultValue={selectedModule?.description}
          />
          <StyledFlexContainer>
            <StyledText>Steps - Drag to Change Order</StyledText>
            <StyledAddStepButton onClick={() => setShowAddStepPopup(true)}>
              Add Step
            </StyledAddStepButton>
          </StyledFlexContainer>
          <StepsContainer>
            <DragAndDrop steps={steps} />
          </StepsContainer>
          <StyledError>{errorMessage}</StyledError>
          <StyledButtonContainer>
            <StyledSubmitButton onClick={handleSubmit}>
              CREATE
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
  padding: 10px 50px;
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

const StepsContainer = styled.div``;

const StyledFlexContainer = styled.div`
  display: flex;
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

const StyledAddStepButton = styled(StyledSubmitButton)``;

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

export default CreateModule;
