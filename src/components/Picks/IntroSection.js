import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import homepageSplash from "../../images/homepage-splash.png";
import Button from "../Template/Button.js";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from "../Template/Dropdown";
import {
  selectAccountType,
  selectIsSignedIn,
} from "../../app/account/selectors.js";
import TeamButton from "./TeamButton.js";
import { useState } from "react";

const IntroSection = () => {
  const history = useHistory();
  const isSignedIn = useSelector(selectIsSignedIn);

  const [picks, setPicks] = useState([
    {
      gid: "C9TSM120",
      pick: "C9",
    },
    {
      gid: "TSMTL120",
      pick: "TL",
    },
  ]);

  const games = [{
    team1: "C9",
    team2: "TSM",
    result: "TBD",
    start: new Date("Jan 20 2022 16:00"),
    gid: "C9TSM120",
  }, {
    team1: "TSM",
    team2: "TL",
    result: "TBD",
    start: new Date("Jan 20 2022 20:00"),
    gid: "TSMTL120",
  }]

  const selectTeam = (event) => {
    const gid = event.target.parentElement.dataset.gid;
    const team = event.target.parentElement.dataset.team;

    setPicks(picks.map(pick => {
      if (pick.gid == gid) {
        if (pick.pick == team) {
          return pick;
        } else {
          return {
            ...pick,
            pick: team,
          };
        }
      } else {
        return pick;
      }
    }))
  }
  console.log(picks);

  const pickedTeam = (gid) => {
    const game = picks.filter(pick => {
      return pick.gid == gid;
    })[0];

    return game && game.pick;
  }

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>My Picks</StyledTitle>
        <StyledDropdown />
      </TopContainer>
      <GamesSection>
        {games.map(game =>
        <GameContainer key={`${game.team1}vs${game.team2}`}>
          <VsContainer>
            <TeamButton team={game.team1} selected={pickedTeam(game.gid) == game.team1} gid={game.gid} onClick={selectTeam}/>
            vs
            <TeamButton team={game.team2} selected={pickedTeam(game.gid) == game.team2} gid={game.gid} onClick={selectTeam}/>
          </VsContainer>
          <GameTitle>{game.team1} vs {game.team2}</GameTitle>
          <GameDate>{game.start.toLocaleDateString('en-us', {month:"short", day:"numeric"})} {game.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</GameDate>
        </GameContainer>)}
      </GamesSection>
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
