import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";

const ModuleText = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);

  return <Body>
    This is the Module Text Page
    <button onClick={() => dispatch(setCurrentStep(currentStep + 1))}>Next Step</button>
    </Body>;
};

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default ModuleText;
