import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectCurrentStepData,
  selectSelectedModule,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";
import ProgressBar from "../../../components/Student/ProgressBar";
import homepageSplash from "../../../images/Homepage/homepage-splash-2.png";

const ModuleText = () => {
  const dispatch = useDispatch();
  const stepData = useSelector(selectCurrentStepData);
  const currentStep = useSelector(selectCurrentStep);
  const module = useSelector(selectSelectedModule);

  return (
    <Body>
      <StyledTitle>{module.title}</StyledTitle>
      <StyledBody dangerouslySetInnerHTML={{ __html: stepData }} />
      <StyledProgressBar />
        <StyledSubmitButton
          onClick={() => dispatch(setCurrentStep(currentStep + 1))}
          data-test="next-step"
        >
          Next Step
        </StyledSubmitButton>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: url(${homepageSplash}) no-repeat;
  background-size: 100% 90%;
  background-position: center bottom;
`;

const StyledProgressBar = styled(ProgressBar)`
  
`

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  background-color: ${Constants.COLOR.DARK_GREEN};
  border-radius: 10px;
  padding: 20px;
  min-height: 68vh;
  margin: 0 50px;
  margin-bottom: 20px;
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  align-self: flex-end;
  margin-right: 30px;
  margin-top: 30px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default ModuleText;
