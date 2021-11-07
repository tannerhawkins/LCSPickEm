import styled from "styled-components";
import { Constants } from "../../data/constants";

const QuestionCard = (props) => {
  return (
    <>
      <QuestionSection>
        <QuestionCount>
          <span>Question {props.currentQuestion + 1}</span>/
          {props.questions.length}
        </QuestionCount>
        <QuestionText>
          {props.questions[props.currentQuestion].questionText}
        </QuestionText>
      </QuestionSection>
      <AnswerSection>
        {props.questions[props.currentQuestion].answerOptions.map(
          (answerOption) => {
            return (
              <AnswerButton
                onClick={() =>
                  !props.inEdit
                    ? props.handleAnswerOptionClick(answerOption.isCorrect)
                    : undefined
                }
                style={{
                  height: `${
                    100 /
                    props.questions[props.currentQuestion].answerOptions.length
                  }%`,
                }}
                key={props.questions[
                  props.currentQuestion
                ].answerOptions.indexOf(answerOption)}
                data-test="answer"
              >
                {answerOption.answerText}
              </AnswerButton>
            );
          }
        )}
      </AnswerSection>
    </>
  );
};

const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionCount = styled.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`;

const QuestionText = styled.div`
  font-size: 50px;
  margin-bottom: 12px;
`;

const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AnswerButton = styled.button`
  width: 100%;
  font-size: 35px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${Constants.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`;

export default QuestionCard;
