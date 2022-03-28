import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import Table from "./PickTable.js";
import { useEffect, useState } from "react";
import { gameDataDb, userDataDb } from "../../data/firebase.js";

const PickHistory = () => {
  const [weeksData, setWeeksData] = useState([]);
  const [userPicks, setUserPicks] = useState([]);

  useEffect(() => {
    userDataDb.get().then((users) => {
      const userList = users.docs.map((doc) => doc.data());
      gameDataDb.get().then((weeks) => {
        const weekData = weeks.docs.map((doc) => doc.data());
        weekData.forEach((week) => {
          week["games"] = week.games
            ? week.games.filter((game) => {
                const now = new Date();
                const start = new Date(game.start);
                if (now > start) {
                  return true;
                } else {
                  return false;
                }
              })
            : [];
          week["picks"] = userList.map((user) => {
            const picks = {};
            user.picks
              .filter((pick) =>
                week.games.map((game) => game.gid).includes(pick.gid)
              )
              .forEach((pick) => {
                picks[`${pick.gid}`] = pick.pick;
              });
            return {
              user: user,
              ...week,
              picks: picks,
            };
          });
        });
        setWeeksData(weekData);
      });
    });
  }, []);

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>Pick History</StyledTitle>
      </TopContainer>
      <TableContainer>
        {weeksData.sort((week1, week2) => {
              const week1Start = Date.parse(week1.games[0]?.start);
              const week2Start = Date.parse(week2.games[0]?.start);
              if (isNaN(week1Start) && isNaN(week2Start)) {
                return 0;
              } else if (isNaN(week1Start)) {
                return -1;
              } else if (isNaN(week2Start)) {
                return 1;
              }
              if (week1Start < week2Start) {
                return 1;
              } else {
                return -1;
              }
            }).map((week) => {
              const games = week.games.sort((game1, game2) => {
              const game1Start = Date.parse(game1.start);
              const game2Start = Date.parse(game2.start);
              if (isNaN(game1Start) && isNaN(game2Start)) {
                return 0;
              } else if (isNaN(game1Start)) {
                return -1;
              } else if (isNaN(game2Start)) {
                return 1;
              }
              if (game1Start < game2Start) {
                return 1;
              } else {
                return -1;
              }
            });
          if (week.games.length == 0) {
            return <div key={week.name}></div>;
          } else if (week.games.length < 6) {
            return (
              <TablesContainer key={week.name}>
                {week.name}
                <Table
                  data={week.picks}
                  key={`${week.name}1`}
                  games={games}
                />
              </TablesContainer>
            );
          } else if (week.games.length < 11) {
            return (
              <TablesContainer key={week.name}>
                {week.name}
                <Table
                  data={week.picks}
                  key={`${week.name}1`}
                  games={games.slice(0, 5)}
                />
                <Table
                  data={week.picks}
                  key={`${week.name}2`}
                  games={games.slice(5, week.games.length)}
                />
              </TablesContainer>
            );
          } else {
            return (
              <TablesContainer key={week.name}>
                {week.name}
                <Table
                  data={week.picks}
                  key={`${week.name}1`}
                  games={games.slice(0, 5)}
                />
                <Table
                  data={week.picks}
                  key={`${week.name}2`}
                  games={games.slice(5, 10)}
                />
                <Table
                  data={week.picks}
                  key={`${week.name}3`}
                  games={games.slice(10, week.games.length)}
                />
              </TablesContainer>
            );
          }
        })}
      </TableContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  background-color: ${Constants.COLOR.WHITE};
  display: flex;
  width: 100%;
`;

const StyledTitle = styled.p`
  font-size: 50px;
  text-align: center;
`;

const TableContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 80%;
    background-color: white;
    margin-top: 40px;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    th,
    td {
      text-align: center;
      padding: 8px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      border: 1px solid black;
      font-size: 20px;
      @media (max-width: 800px) {
        font-size: 9px;
      }
    }

    thead th {
      color: #ffffff;
      background: ${Constants.COLOR.PURPLE};
      @media (max-width: 800px) {
        font-size: 8px;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${Constants.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`;

const TablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  margin: 50px;
  text-align: center;
  align-items: center;
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
`;

export default PickHistory;
