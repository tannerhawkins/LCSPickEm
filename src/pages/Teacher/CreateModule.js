import React, { useState } from "react";
import Main from "../../layouts/Main";
import SideBar from "../../components/Template/SideBar";
import Header from "../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import { auth, modulesDb, userDataDb } from "../../data/firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

const CreateModule = () => {
  const history = useHistory();

  const handleSubmit = () => {
    modulesDb.add(Constants.MOCK_MODULE).then((doc) => {
      modulesDb.doc(doc.id).update({ mid: doc.id });
      userDataDb
        .doc(auth.currentUser.uid)
        .update({
          moduleList: firebase.firestore.FieldValue.arrayUnion({
            mid: doc.id,
            title: Constants.MOCK_MODULE.title,
            description: Constants.MOCK_MODULE.description,
          }),
        })
        .then(() => history.push("teacher/home"));
    });
  };

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
      <StyledBody>
        {/* This button can be removed, was simply for testing purposes when adding the firebase things */}
        <b onClick={handleSubmit}>Click to Create Module</b>
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

export default CreateModule;
