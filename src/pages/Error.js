import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PepeHands from "../images/pepehands.png";
import StyledButton from "../components/Template/Button";
import { Constants } from "../data/constants";
import { withRouter } from "react-router-dom";

function ErrorFallback({ error, resetErrorBoundary }) {
  const history = useHistory();

  return (
    <Wrapper role="alert">
      <ErrorMessage>
        Something went wrong, tell Hawkins to fix his trash site
      </ErrorMessage>
      <ErrorImage src={PepeHands} />
      <Return
        onClick={() => {
          history.push(`/index`);
          window.location.reload();
        }}
      >
        Home
      </Return>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;

const Return = styled(StyledButton)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
  margin-top: 50px;
  background-color: ${Constants.COLOR.PURPLE};
  :hover {
    background-color: ${Constants.COLOR.WHITE};
  }
`;

const ErrorMessage = styled.p`
  text-align: center;
`;

const ErrorImage = styled.img`
  width: 200px;
`;

export default withRouter(ErrorFallback);
