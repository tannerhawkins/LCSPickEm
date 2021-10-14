import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import React, { useEffect } from "react";
import { Constants } from "../../../data/constants";
import Button from "../../../components/Template/Button";


const ModuleText = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const handleSubmit = () => {}

  return <Body>
    <StyledTitle>This is the Module Text Page</StyledTitle>
    <StyledBody>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </StyledBody>
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

export default ModuleText;
