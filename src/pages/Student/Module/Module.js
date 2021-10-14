import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentStep } from "../../../app/module/selectors";
import { Constants } from "../../../data/constants";
import ModuleSummary from "./ModuleSummary";

const Module = () => {
  const currentStep = useSelector(selectCurrentStep);

  return (
    <ModuleWrapper>
      <ModuleSummary />
    </ModuleWrapper>
  );
};

const ModuleWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Constants.COLOR.TEAL};
`;

export default Module;
