import styled from "styled-components";
import { Constants } from "../../data/constants";
import HT from "../../images/Logos/100T.png";
import DIG from "../../images/Logos/DIG.png";
import TL from "../../images/Logos/TL.png";
import C9 from "../../images/Logos/C9.png";
import EG from "../../images/Logos/EG.png";
import TSM from "../../images/Logos/TSM.png";
import CLG from "../../images/Logos/CLG.png";
import GG from "../../images/Logos/GG.png";
import FLY from "../../images/Logos/FLY.png";
import IMT from "../../images/Logos/IMT.png";

const teamLogo = (team) => {
  switch(team) {
    case "100T":
      return HT;
    case "DIG":
      return DIG;
    case "TL":
      return TL;
    case "C9":
      return C9;
    case "EG":
      return EG;
    case "TSM":
      return TSM;
    case "CLG":
      return CLG;
    case "GG":
      return GG;
    case "FLY":
      return FLY;
    case "IMT":
      return IMT;
    default:
      return;
  }
}

const TeamButton = (props) => {

  return (
    <StyledTeam onClick={props.onClick} style={{backgroundColor: props.selected ? Constants.COLOR.PURPLE : Constants.COLOR.WHITE}}>
          <StyledLogo src={teamLogo(props.team)} />
    </StyledTeam>
  );
};

const StyledTeam = styled.div`
  background-color: ${Constants.COLOR.WHITE};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: ${Constants.COLOR.PURPLE} !important;
  }
  width: 300px;
  max-width: 40vw;
  height: 300px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 0.5em;
  transition: background 0.45s ease;
  @media (max-width: 800px) {
    height: 100px;
    font-size: 10px;
  }
`;

const StyledLogo = styled.img`
  height: 250px;

  @media (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`;

export default TeamButton;