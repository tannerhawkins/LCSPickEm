import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Dropdown from "../Template/Dropdown";

const IntroSection = () => {
  const history = useHistory();

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>Standings</StyledTitle>
        <StyledDropdown />
      </TopContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  height: 775px;
  background-color: ${Constants.COLOR.WHITE};
  display: flex;
  width: 100%;
  margin-top: ${Constants.HEADER_HEIGHT};
`;

const GamesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 80vw;
  font-size: 30px;
`

const VsContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%
`

const GameTitle = styled.p``

const GameDate = styled.p`
  color: Gray;
`

const StyledTitle = styled.p`
  font-size: 50px;
  text-align: center;
`

const StyledDropdown = styled(Dropdown)`

`

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`

export default IntroSection;
