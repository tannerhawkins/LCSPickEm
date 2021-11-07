import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectCurrentStepData,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";

const ModuleVideo = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const stepData = useSelector(selectCurrentStepData);

  return (
    <Body>
      <StyledTitle>This is the Module Video Page</StyledTitle>
      <Video
        frameborder="0"
        src={`${stepData}`}
        allow={"autoplay;"}
        sandbox="allow-scripts allow-same-origin"
        allowFullScreen
      />
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

const Video = styled.iframe`
  width: 90vw;
  height: 90vh;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

const img = styled.img`
  padding-left: 30px;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${Constants.SIDEBAR_WIDTH};
`;

const StyledSubmitButton = styled(Button)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

export default ModuleVideo;
