import styled from "styled-components";

const ModuleContainer = ({ moduleCards }) => {
  return <StyledContainer>{moduleCards}</StyledContainer>;
};

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 320px;
  @media (max-width: 400px) {
    padding: 0;
  }
`;

export default ModuleContainer;
