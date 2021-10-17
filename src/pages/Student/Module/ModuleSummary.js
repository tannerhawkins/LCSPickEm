import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep, selectSelectedModule,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { useHistory } from "react-router";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";

const ModuleSummary = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const history = useHistory();
  const module = useSelector(selectSelectedModule)

  return <Body>
    <StyledButtonContainer>
      <StyledSubmitButton onClick={() => history.push("/student/home")}>
        Back to Home
      </StyledSubmitButton>
    </StyledButtonContainer>
    
    <StyledTitle>This is the {module.title} Summary Page:</StyledTitle>
    <StyledBody>{module.description}</StyledBody>

    The summary of this page is simple and short that you can read it very quick for the purpose of this assignment called the "Walking Skeleton".
    
    <StyledButtonContainer>
      <StyledSubmitButton onClick={() => dispatch(setCurrentStep(currentStep + 1))}>
        Next Step
      </StyledSubmitButton>
    </StyledButtonContainer>
    </Body>;
};

const Body = styled.div`
  width: 100%;
  height: 100%;
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

export default ModuleSummary;
