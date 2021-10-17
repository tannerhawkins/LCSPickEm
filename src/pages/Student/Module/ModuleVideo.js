import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentStep } from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";
import videoPlayer from "../../../images/videoPlayer.png";

const ModuleVideo = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);

  return (
    <Body>
      <StyledTitle>This is the Module Video Page</StyledTitle>
      <img src={videoPlayer} alt="Video Player" width="80%" height="600" />
      <StyledButtonContainer>
        <StyledSubmitButton
          onClick={() => dispatch(setCurrentStep(currentStep + 1))}
        >
          Next Step
        </StyledSubmitButton>
      </StyledButtonContainer>
    </Body>
  );
};

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
