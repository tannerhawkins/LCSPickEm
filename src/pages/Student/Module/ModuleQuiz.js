import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentStep } from "../../../app/module/selectors";
import Quiz from "../../../components/Template/Quiz";

const ModuleQuiz = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);

  return (
    <Body>
      <Quiz />
    </Body>
  );
};

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ModuleQuiz;
