import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Constants } from "../../../data/constants";
import Button from "../../Template/Button";
import Popup from "../../Template/Popup";
import { selectSteps } from "../../../app/module/selectors";
import { useHistory } from "react-router";
import TextIcon from "../../../images/Icons/text icon.png";
import QuizIcon from "../../../images/Icons/quiz icon.png";
import VideoIcon from "../../../images/Icons/video icon.png";
import EbookIcon from "../../../images/Icons/ebook icon.png";
import { selectAccountType } from "../../../app/account/selectors";
import { setSelectedStep } from "../../../app/module/actions";

const AddStepPopup = ({ className, onClose, style }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const steps = useSelector(selectSteps);
  const accountType = useSelector(selectAccountType);
  const handleClick = (type) => {
    dispatch(setSelectedStep(undefined));
    history.push(`/${accountType}/create-module/edit-${type}`);
    return;
  };

  return (
    <StyledPopup style={style} className={className} onClose={onClose}>
      <StyledTitle>Select Step to Add</StyledTitle>
      <StepButtonsContainer>
        <StepButton onClick={() => handleClick("text")} data-test="add-text">
          <StyledIcon src={TextIcon} />
          Text
        </StepButton>
        <StepButton onClick={() => handleClick("video")} data-test="add-video">
          <StyledIcon src={VideoIcon} />
          Video
        </StepButton>
        <StepButton onClick={() => handleClick("quiz")} data-test="add-quiz">
          <StyledIcon src={QuizIcon} />
          Quiz
        </StepButton>
        {accountType === "admin" && (
          <StepButton
            onClick={() => handleClick("ebook")}
            data-test="add-ebook"
          >
            <StyledIcon src={EbookIcon} />
            Ebook
          </StepButton>
        )}
      </StepButtonsContainer>
    </StyledPopup>
  );
};

const StyledPopup = styled(Popup)``;

const StyledTitle = styled.p`
  text-align: center;
  font-size: 30px;
`;

const StyledIcon = styled.img`
  height: 90%;
`;

const StepButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StepButton = styled(Button)`
  background-color: ${Constants.COLOR.GREEN};
  border-radius: 4px;
  width: 50%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  padding-right: 10%;
  font-size: 50px;
`;

export default AddStepPopup;
