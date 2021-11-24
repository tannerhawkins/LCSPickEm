import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCurrentStep,
  selectSelectedModule,
} from "../../../app/module/selectors";
import Main from "../../../layouts/Main";
import ModuleSummary from "./ModuleSummary";
import ModuleText from "./ModuleText";
import ModuleQuiz from "./ModuleQuiz";
import ModuleVideo from "./ModuleVideo";
import ModuleEbook from "./ModuleEbook";
import { useHistory } from "react-router";

const Module = () => {
  const history = useHistory();
  const currentModule = useSelector(selectSelectedModule);
  const currentStep = useSelector(selectCurrentStep);
  const currentStepData =
    currentStep === -1 ? undefined : currentModule?.steps[currentStep];

  const StepPage = () => {
    const stepType = currentStepData.type;
    switch (stepType) {
      case "text":
        return <ModuleText />;
      case "video":
        return <ModuleVideo />;
      case "quiz":
        return <ModuleQuiz />;
      case "ebook":
        return <ModuleEbook />;
      default:
        history.push("/student/home");
        return;
    }
  };

  return (
    <Main title={currentModule?.title} description={"Module Page"}>
      <ModuleWrapper>
        {currentStep === -1 && <ModuleSummary />}
        {currentStepData && StepPage()}
        {currentStep >= currentModule?.steps?.length &&
          history.push("/student/home")}
      </ModuleWrapper>
    </Main>
  );
};

const ModuleWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Module;
