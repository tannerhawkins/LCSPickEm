import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep, selectSelectedModule,
} from "../../../app/module/selectors";
import { setCurrentStep } from "../../../app/module/actions";
import { useHistory } from "react-router";

const ModuleSummary = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);
  const history = useHistory();
  const module = useSelector(selectSelectedModule)

  return <Body>
    <button onClick={() => history.push("/student/home")}>Back to Home</button>
    This is the Module Summary Page:
    {module.title}
    {module.description}

    The summary of this page is simple and short that you can read it very quick for the purpose of this assignment called the "Walking Skeleton".
    <button onClick={() => dispatch(setCurrentStep(currentStep + 1))}>Next Step</button>
    </Body>;
};

const Body = styled.div`
  width: 100%;
  height: 100%;
`;

export default ModuleSummary;
