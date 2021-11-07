import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Constants } from "../../../data/constants";
import Button from "../../Template/Button";
import Popup from "../../Template/Popup";
import { addStep } from "../../../app/module/actions";
import { selectSteps } from "../../../app/module/selectors";
import { useHistory } from "react-router";

const AddStepPopup = ({ className, onClose, style }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const getID = () => {
    if (steps.length === 0) {
      return 0;
    } else {
      return Math.max(...steps.map((step) => step.id)) + 1;
    }
  };
  const handleClick = (type) => {
    history.push(`/teacher/create-module/edit-${type}`);
    return;
    const step = {
      type: type,
      order: steps.length,
      id: getID(),
      data: {
        // Some kind of text data here (title, description, etc.)
      },
    };
    dispatch(addStep(step));
    onClose();
  };

  return (
    <StyledPopup style={style} className={className} onClose={onClose}>
      <StyledTitle>Select Step to Add</StyledTitle>
      <StepButtonsContainer>
        <StepButton onClick={() => handleClick("text")} data-test="add-text">
          Text
        </StepButton>
        <StepButton onClick={() => handleClick("video")} data-test="add-video">
          Video
        </StepButton>
        <StepButton onClick={() => handleClick("quiz")} data-test="add-quiz">
          Quiz
        </StepButton>
      </StepButtonsContainer>
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)``;

const StyledTitle = styled.p`
  text-align: center;
`;

const StepButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const StepButton = styled(Button)`
  background-color: ${Constants.COLOR.GREEN};
  border-radius: 4px;
  width: 100%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export default AddStepPopup;
