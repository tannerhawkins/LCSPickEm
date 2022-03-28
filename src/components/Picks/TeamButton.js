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
import LCS from "../../images/lcs-logo.png";

const teamLogo = (team) => {
  switch (team) {
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
      return LCS;
  }
};

const TeamButton = (props) => {
  const background =
    props.result == "TBD"
      ? props.selected
        ? Constants.COLOR.PURPLE
        : Constants.COLOR.WHITE
      : props.result == props.team
      ? "green"
      : props.picked != props.result
      ? "red"
      : Constants.COLOR.WHITE;
  return (
    <StyledTeam
      onClick={props.onClick}
      started={props.started}
      background={background}
      gid={props.gid}
      data-team={props.team}
      data-gid={props.gid}
      data-result={props.result}
      style={{
        backgroundColor: background,
      }}
    >
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
    cursor: ${(props) => {
      return props.started || props.gid == "TBD" ? "initial" : "pointer";
    }} !important;
    background-color: ${(props) => {
      return props.started || props.gid ? props.background : Constants.COLOR.PURPLE;
    }} !important;
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
  z-index: 1;
`;

const StyledLogo = styled.img`
  max-height: 100%;
  max-width: 100%;
  z-index: -1;
`;

export default TeamButton;
