import { Constants } from "../../data/constants";
import styled from "styled-components";

const StyledButton = styled.div`
  background-color: ${Constants.COLOR.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: ${Constants.COLOR.GRAY};
    cursor: pointer;
  }
`;

export default StyledButton;
