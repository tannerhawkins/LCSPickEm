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
import homepageSplash from "../../../images/Homepage/homepage-splash.png";
import ProgressBar from "../../../components/Student/ProgressBar";

const ModuleVideo = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const stepData = useSelector(selectCurrentStepData);
  const module = useSelector(selectSelectedModule);

  return (
    <Body>
      <StyledTitle>This is the {module.title} Video Page</StyledTitle>
      <Video
        frameborder="0"
        src={`${stepData}`}
        allow={"autoplay;"}
        sandbox="allow-scripts allow-same-origin"
        allowFullScreen
      />
      <ProgressBar />
      <StyledButtonContainer>
        <StyledSubmitButton
          onClick={() => dispatch(setCurrentStep(currentStep + 1))}
          data-test="next-step"
        >
          Next Step
        </StyledSubmitButton>
      </StyledButtonContainer>
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
  background-size: 100vw 90vh;
  background-position: 30vw 0;
`;

const Video = styled.iframe`
  width: 80vw;
  height: 80vh;
  margin: 0% 10%;
  box-shadow: 0 4% 4% rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 30px;
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

export default ModuleVideo;
