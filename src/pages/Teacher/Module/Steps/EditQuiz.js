import React, { useState } from "react";
import Main from "../../../../layouts/Main";
import SideBar from "../../../../components/Template/SideBar";
import Header from "../../../../components/Teacher/Header";
import styled from "styled-components";
import { Constants } from "../../../../data/constants";
import Button from "../../../../components/Template/Button";
import EditQuestionCard from "../../../../components/Template/EditQuestionCard";
import QuestionCard from "../../../../components/Template/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addStep } from "../../../../app/module/actions";
import { selectNextID, selectSteps } from "../../../../app/module/selectors";

const EditQuiz = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [showEditQuestion, setShowEditQuestion] = useState(false);
  const id = useSelector(selectNextID);
  const steps = useSelector(selectSteps);

  const addQuestion = (questions) => {
    setQuestions(questions);
    setShowEditQuestion(false);
  };

  const onSubmit = () => {
    dispatch(
      addStep({
        type: "quiz",
        order: steps.length,
        id: id,
        data: {
          questions: questions,
        },
      })
    );
    history.push(`/teacher/create-module`);
  };

  return (
    <Main title={"Edit Quiz Step"} description={"Edit Quiz Step"}>
      <SideBar />
      <Header />
      <StyledBody>
        <StyledSectionTitle>Edit Quiz</StyledSectionTitle>
        <StyledAddQuestionButton onClick={() => setShowEditQuestion(true)} data-test="add-question">
          Add Question
        </StyledAddQuestionButton>
        {showEditQuestion && (
          <EditQuestionCard onSubmit={addQuestion} questions={questions} />
        )}
        {questions.map((question) => (
          <StyledQuiz key={questions.indexOf(question)}>
            <QuestionCard
              questions={questions}
              currentQuestion={questions.indexOf(question)}
              inEdit={true}
            />
          </StyledQuiz>
        ))}
        {questions.length != 0 && (
          <StyledSubmitButton onClick={onSubmit} data-test="submit">Submit</StyledSubmitButton>
        )}
      </StyledBody>
    </Main>
  );
};

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledQuiz = styled.div`
  background-color: ${Constants.COLOR.DARK_GREEN};
  width: 80%;
  min-height: 200px;
  height: 600px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;

const StyledAddQuestionButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.GREEN};
  border-radius: 40px;
  position: absolute;
  right: 50px;
`;

const StyledSubmitButton = styled(Button)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${Constants.COLOR.DARK_GREEN};
`;

const StyledSectionTitle = styled.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;

export default EditQuiz;
