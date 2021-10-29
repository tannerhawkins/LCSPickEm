import React, { useState } from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import Button from "../../../../components/Template/Button";

const EditQuiz = () => {
  const [questions, setQuestions] = useState([]);


  return (
    <Main title={"Edit Quiz Step"} description={"Edit Quiz Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Quiz</StyledSectionTitle>
        <StyledAddQuestionButton>Add Question</StyledAddQuestionButton>
        {questions.length != 0 && <StyledSubmitButton>Submit</StyledSubmitButton>}
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledAddQuestionButton = styled(Button)`
height: 60px;
width: 130px;
margin-top: 40px;
background-color: ${Constants.COLOR.GREEN};
border-radius: 40px;
position: absolute;
right: 50px;
`

const StyledSubmitButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN};
`

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

export default EditQuiz;
