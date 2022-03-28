import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Template/Dropdown";
import {
  selectIsSignedIn,
  selectPicks,
  selectUID,
  selectUser,
  selectWeek,
} from "../../app/account/selectors.js";
import TeamButton from "./TeamButton.js";
import { useEffect, useState } from "react";
import LcsKings from "../../images/lcskings.png";
import HomepageSplash from "../../images/purpleSplash.png";
import Sadge from "../../images/sadge.png";
import { auth, gameDataDb, userDataDb } from "../../data/firebase.js";
import { setPicks, setWeek, setWeeks } from "../../app/account/actions.js";

const IntroSection = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const user = useSelector(selectUser);
  const uid = useSelector(selectUID);
  const week = useSelector(selectWeek);
  const picks = useSelector(selectPicks);

  useEffect(() => {
    gameDataDb.get().then((result) => {
      dispatch(setWeeks(result.docs.map((doc) => doc.data())));
      if (week?.name) {
        dispatch(
          setWeek(
            result.docs
              .map((doc) => doc.data())
              .filter((newWeek) => newWeek.name == week.name)[0]
          )
        );
      } else {
        const weekEnds = result.docs.map(doc => doc.data().games[doc.data().games.length - 1]?.start);
        const passedWeeks = weekEnds.reduce(weekEnd => {
          const now = new Date();
          if (now > weekEnd) {
            return 1;
          } else {
            return 0;
          }
        })
        const nextWeek = passedWeeks == result.docs.length ? passedWeeks : passedWeeks + 1;
        dispatch(setWeek(result.docs[nextWeek]?.data() ? result.docs[nextWeek]?.data() : result.docs[0]?.data()));
      }
    });
  }, []);

  const games = week?.games.sort((game1, game2) => {
    const game1Start = Date.parse(game1.start);
    const game2Start = Date.parse(game2.start);
    if (isNaN(game1Start) && isNaN(game2Start)) {
      return 0;
    } else if (isNaN(game1Start)) {
      return 1;
    } else if (isNaN(game2Start)) {
      return -1;
    }
    if (game1Start < game2Start) {
      return -1;
    } else {
      return 1;
    }
  });

  useEffect(() => {

  }, [week])

  const started = (game) => {
    const start = new Date(
      week.games.filter((games) => games.gid == game.gid)[0].start
    );
    const now = new Date();

    return start < now;
  };

  const selectTeam = (event) => {
    const gid = event.target.parentElement.dataset.gid;
    const team = event.target.parentElement.dataset.team;

    // Can't pick tbd team
    if (gid == "TBD") {
      return;
    }

    // cannot pick after start time
    const start = new Date(
      week.games.filter((game) => game.gid == gid)[0]?.start
    );
    const now = new Date();

    if (start < now) {
      return;
    }

    if (picks.filter((pick) => pick.gid == gid)[0]) {
      const newPicks = picks.map((pick) => {
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
      });
      userDataDb.doc(uid).update({
        picks: newPicks,
      });
      dispatch(setPicks(newPicks));
    } else {
      const newPicks = [
        ...picks,
        {
          gid: gid,
          pick: team,
        },
      ];
      userDataDb.doc(uid).update({
        picks: newPicks,
      });
      dispatch(setPicks(newPicks));
    }
  };

  const pickedTeam = (gid) => {
    const game = picks?.filter((pick) => {
      return pick.gid == gid;
    })[0];

    if (game != undefined) {
      return game.pick;
    } else {
      return undefined;
    }
  };

  const updateGames = () => {
    Constants.GAMES.forEach((week) => {
      gameDataDb.doc(week.name).update({
        games: week.games,
      });
    });
  };

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>My Picks</StyledTitle>
        <Dropdown />
      </TopContainer>
      <GamesSection>
        {games && games[0] ? (
          games.map((game) => (
            <GameContainer key={`${game.team1}vs${game.team2}on${game.start}`}>
              <VsContainer>
                <TeamButton
                  team={game.team1}
                  started={started(game)}
                  picked={pickedTeam(game.gid)}
                  selected={pickedTeam(game.gid) == game.team1}
                  gid={game.gid}
                  result={game.result}
                  onClick={selectTeam}
                />
                vs
                <TeamButton
                  team={game.team2}
                  started={started(game)}
                  picked={pickedTeam(game.gid)}
                  selected={pickedTeam(game.gid) == game.team2}
                  gid={game.gid}
                  result={game.result}
                  onClick={selectTeam}
                />
              </VsContainer>
              <GameTitle>
                {game.team1} vs {game.team2}
              </GameTitle>
              <GameDate>
                {new Date(game.start).toLocaleDateString("en-us", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                {new Date(game.start).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </GameDate>
            </GameContainer>
          ))
        ) : (
          <NoGames>No Games This Week!</NoGames>
        )}
      </GamesSection>
      {games && games[0] ? (
        <StyledBackground src={LcsKings} />
      ) : (
        <SadgeImg src={Sadge} />
      )}
      <StyledBackdrop src={HomepageSplash} />
      {
      // <button style={{zIndex: 10}}onClick={updateGames}>Update Games</button>
      }
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
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
  z-index: 3;
`;

const NoGames = styled.p`
  text-align: center;
  font-size: 80px;
  z-index: 5;
`;

const SadgeImg = styled.img`
  height: 400px;
  z-index: 4;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 80vw;
  font-size: 30px;
`;

const VsContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const GameTitle = styled.p`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`;

const GameDate = styled.p`
  color: Gray;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`;

const StyledTitle = styled.p`
  font-size: 50px;
  text-align: center;
`;

const StyledBackground = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
`;

const StyledBackdrop = styled.img`
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  z-index: 2;
`;

export default IntroSection;
