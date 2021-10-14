import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectSelectedModule,
} from "../../../app/module/selectors";
import Main from "../../../layouts/Main";
import ModuleSummary from "./ModuleSummary";

const Module = () => {
  const currentModule = useSelector(selectSelectedModule);
  const currentStep = useSelector(selectCurrentStep);

  return (
    <Main title={currentModule?.title} description={"Module Page"}>
      <ModuleWrapper>
        <ModuleSummary />
      </ModuleWrapper>
    </Main>
  );
};

const ModuleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Module;
