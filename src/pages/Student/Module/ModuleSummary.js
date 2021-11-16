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
import ProgressBar from "../../../components/Student/ProgressBar";
import homepageSplash from "../../../images/Homepage/homepage-splash-2.png";

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
      <ProgressBar />
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
  width: 100vw;
  height: 100vh;
  background: url(${homepageSplash}) no-repeat;
  background-position: 0 200px;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  margin: 0 15px;
  font-size: 30px;
`;

const StyledBody = styled.div`
  margin: 3% 10%;
  background-color: ${Constants.COLOR.DARK_GREEN};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 70vh;
  color: white;
  padding: 50px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
  margin-left: 3%;
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
  margin: 3%;
  margin-top: 3%;
`;

const StyledProgressBar = styled(ProgressBar)`
  box-shadow: 0 4% 4% rgba(0, 0, 0, 0.25);
  color: white;
  width: 20px;
  height: 20px;
  font-size: 12px;
  background-color: rgba(211, 211, 211, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ModuleSummary;
