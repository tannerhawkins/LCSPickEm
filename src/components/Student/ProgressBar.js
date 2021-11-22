import { useSelector } from "react-redux";
import { ProgressBar as Bar } from "react-step-progress-bar";
import styled from "styled-components";
import { selectCurrentStepPercentage } from "../../app/module/selectors";
import { Constants } from "../../data/constants";

const ProgressBar = (props) => {
  const percent = useSelector(selectCurrentStepPercentage);

  return (
    <Container>
      <StyledProgressBar
        {...props}
        percent={percent}
        filledBackground={`linear-gradient(to right, ${Constants.COLOR.TEAL}, ${Constants.COLOR.GREEN})`}
        width={"90%"}
      />
    </Container>
  );
};

export default ProgressBar;

const StyledProgressBar = styled(Bar)`
  box-shadow: 0 4% 4% rgba(0, 0, 0, 0.25);
  color: white;
  background-color: rgba(211, 211, 211, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
