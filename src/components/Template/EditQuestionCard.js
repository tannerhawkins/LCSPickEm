import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Constants } from "../../data/constants";
import StyledButton from "./Button";

const EditQuestionCard = (props) => {
  const [questionText, setQuestionText] = useState(
    props?.questions[props.currentQuestion]
      ? props.questions[props.currentQuestion].questionText
      : ""
  );
  const [answerOptions, setAnswerOptions] = useState(
    props?.questions[props.currentQuestion]
      ? props.questions[props.currentQuestion].answerOptions
      : [
          { answerText: "", isCorrect: true },
          { answerText: "", isCorrect: false },
        ]
  );
  const [answerOptionCards, setAnswerOptionCards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    createCards(answerOptions);
  }, [answerOptions]);

  const createCards = (answerOptions) => {
    const cards = answerOptions.map((answerOption) => (
      <EditAnswerButton
        style={{
          height: `${500 / answerOptions.length}px`,
        }}
        answerOption={answerOption}
        key={`${answerOption.answerText}${answerOptions.indexOf(answerOption)}${
          answerOption.isCorrect
        }`}
      ></EditAnswerButton>
    ));
    setAnswerOptionCards(cards);
  };

  const EditAnswerButton = ({ answerOption, style }) => {
    const [isChecked, setIsChecked] = useState(answerOption.isCorrect);

    const onRadioClick = (answerOption) => {
      delete answerOptions[answerOption.key];
      answerOption.isCorrect = !answerOption.isCorrect;
      for (var i = 0; i < answerOptions.length; i++) {
        if (answerOptions[i] === undefined) {
          answerOptions[i] = answerOption;
        }
      }
      setAnswerOptions(answerOptions);
      setIsChecked(answerOption.isCorrect);
    };
    console.log(answerOption.answerText);

    return (
      <StyledAnswer style={style}>
        <StyledInput
          type="text"
          defaultValue={answerOption.answerText}
          onChange={(e) => {
            delete answerOptions[answerOption.key];
            answerOption.answerText = e.target.value;
            for (var i = 0; i < answerOptions.length; i++) {
              if (answerOptions[i] === undefined) {
                answerOptions[i] = answerOption;
              }
            }
          }}
        />
        <input
          type="radio"
          checked={isChecked}
          onClick={() => onRadioClick(answerOption)}
          onChange={() => null}
        />
        <StyledX
          onClick={() => {
            if (answerOptions.length < 3) {
              return;
            }
            answerOptions.splice(answerOptions.indexOf(answerOption), 1);
            setAnswerOptions(answerOptions);
            createCards(answerOptions);
          }}
        >
          X
        </StyledX>
      </StyledAnswer>
    );
  };

  const onSubmit = () => {
    setError("");
    const answerValues = Array.from(
      document.getElementById("answerSection").children
    ).map((item) => item.firstChild.value);
    const questionValue = document.getElementById("question").value;
    if (questionValue == "") {
      setError("Please fill out all fields.");
      return;
    }
    for (let answer of answerValues) {
      if (answer == "") {
        setError("Please fill out all fields.");
        return;
      }
    }
    if (!answerOptions.map((option) => option.isCorrect).includes(true)) {
      setError("There must be at least one correct answer");
    }
    props.onSubmit([
      ...props.questions,
      { questionText: questionValue, answerOptions: answerOptions },
    ]);
  };

  return (
    <StyledQuiz>
      <QuestionSection>
        <QuestionText>
          <StyledQuestionInput
            id="question"
            type="text"
            placeholder={questionText}
          />
        </QuestionText>
        <StyledError>{error}</StyledError>
        <SubmitButton onClick={onSubmit}>Submit Question</SubmitButton>
        <AddAnswerButton
          onClick={() =>
            answerOptions.length < 4
              ? setAnswerOptions([
                  ...answerOptions,
                  { answerText: "", isCorrect: false },
                ])
              : null
          }
        >
          Add Answer
        </AddAnswerButton>
      </QuestionSection>
      <AnswerSection id="answerSection">{answerOptionCards}</AnswerSection>
    </StyledQuiz>
  );
};

const StyledInput = styled.textarea`
  height: 90%;
  width: 90%;
  font-size: 45px;
`;

const StyledQuestionInput = styled.textarea`
  height: 200px;
  width: 90%;
  font-size: 45px;
`;

const StyledError = styled.p`
  color: red;
`;

const StyledAnswer = styled.button`
  width: 100%;
  font-size: 35px;
  background-color: ${Constants.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${Constants.COLOR.DARK_GREEN};
  margin: 10px 0px;
`;

const StyledX = styled.p`
  font-size: 20px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

const StyledQuiz = styled.div`
  background-color: ${Constants.COLOR.DARK_GREEN};
  width: 80%;
  height: 600px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;

const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

const QuestionText = styled.div`
  font-size: 50px;
  margin-bottom: 12px;
`;

const AnswerSection = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubmitButton = styled(StyledButton)`
  width: 120px;
  height: 80px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`;

const AddAnswerButton = styled(StyledButton)`
  width: 120px;
  height: 80px;
  position: absolute;
  bottom: 0;
  right: 10px;
  border-radius: 10px;
`;

export default EditQuestionCard;
