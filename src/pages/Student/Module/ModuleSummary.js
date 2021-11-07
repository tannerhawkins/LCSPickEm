import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectSelectedModule,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { useHistory } from "react-router";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const ModuleSummary = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const history = useHistory();
  const module = useSelector(selectSelectedModule);

  return (
    <Body>
      <StyledButtonContainer>
        <StyledSubmitButton
          data-test="home"
          onClick={() => history.push("/student/home")}
        >
          Back to Home
        </StyledSubmitButton>
      </StyledButtonContainer>
      <StyledTitle>This is the {module.title} Summary Page:</StyledTitle>
      <StyledBody>
        {module.description} The summary of this page is simple and short that
        you can read it very quick for the purpose of this assignment called the
        "Walking Skeleton". Note: You CANNOT back out of a module once you
        begin!
      </StyledBody>
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
      <StyledStartButtonContainer>
        <StyledSubmitButton
          data-test="start"
          onClick={() => dispatch(setCurrentStep(currentStep + 1))}
        >
          Start Module
        </StyledSubmitButton>
      </StyledStartButtonContainer>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: flex-center;
  flex-direction: column;
  width: 90vw;
  height: 100vh;
  align-items: stretch;
  margin: auto;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  margin: 0 15px;
  font-size: 30px;
`;

const StyledBody = styled.div`
  margin: 30px ${Constants.SIDEBAR_WIDTH};
  background-color: ${Constants.COLOR.DARK_GREEN};
  height: 50vh;
  color: white;
  padding: 50px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
  margin-left: ${Constants.SIDEBAR_WIDTH};
`;

const StyledSubmitButton = styled(Button)`
  font-size: 14px;
  padding: 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const StyledStartButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px;
  margin-right: 5%;
`;

export default ModuleSummary;
