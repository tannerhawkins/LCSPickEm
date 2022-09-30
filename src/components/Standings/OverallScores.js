import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import Table from "./Table.js";
import { useEffect, useState } from "react";
import * as firebase from "../../data/firebase.js";

const OverallScores = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    firebase.userDataDb.get().then((users) => {
      const userList = users.docs.map((doc) => doc.data());
      firebase.getSeasonGameData(Constants.SEASON).then((weeks) => {
        const weekData = Object.values(weeks.data());
        const userData = userList.map((user) => {
          const gameIds = user.picks[Constants.SEASON]?.map((pick) => pick.gid);
          return {
            user: user,
            weeks: weekData.sort((week1, week2) => {
              const week1Start = Date.parse(week1.games[0]?.start);
              const week2Start = Date.parse(week2.games[0]?.start);
              if (isNaN(week1Start) && isNaN(week2Start)) {
                return 0;
              } else if (isNaN(week1Start)) {
                return 1;
              } else if (isNaN(week2Start)) {
                return -1;
              }
              if (week1Start < week2Start) {
                return -1;
              } else {
                return 1;
              }
            }).map((week) => {
              return {
                ...week,
                pickedGames: week.games.filter((game) =>
                  gameIds?.includes(game.gid)
                ),
                score: week.games
                  .map((game) => {
                    if (gameIds?.includes(game.gid)) {
                      const pick = user.picks[Constants.SEASON]?.filter(
                        (pick) => pick.gid == game.gid
                      )[0];
                      if (game.result == pick.pick) {
                        if (week.playoffs == true) {
                          if (game.finals == true) {
                            return 5;
                          } else {
                            return 3;
                          }
                        }
                        return 1;
                      } else {
                        return 0;
                      }
                    } else {
                      return 0;
                    }
                  })
                  .reduce((prev, curr) => prev + curr, 0),
              };
            }),
          };
        });
        const tableData = userData.map((user) => {
          const toReturn = {
            name: user.user.displayName,
            weeks: user.weeks,
          };
          user.weeks.forEach((week) => {
            toReturn[week.name] = week.score;
          });
          toReturn["total"] = toReturn?.weeks
            ?.map((week) => week.score)
            .reduce((prev, curr) => prev + curr);
          return toReturn;
        }).filter((user) => {
          return user.total > 0
        });
        setTableData(tableData);
      });
    });
  }, []);

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>Standings</StyledTitle>
      </TopContainer>
      <TableContainer>
        <Table data={tableData} />
      </TableContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${Constants.COLOR.WHITE};
  margin-top: ${Constants.HEADER_HEIGHT};
`;

const StyledTitle = styled.p`
  font-size: 50px;
  text-align: center;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    white-space: nowrap;
    background-color: white;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      text-align: center;
      padding: 6px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 0.75em;

      :last-child {
        border-right: 0;
      }
      @media (max-width: 1400px) {
        font-size: 8px;
      }
    }

    td {
      border-right: 1px solid #f8f8f8;
      font-size: 20px;
      @media (max-width: 1100px) {
        font-size: 8px;
      }
      @media (max-width: 400px) {
        font-size: 7px;
      }
      @media (max-width: 350px) {
        font-size: 6px;
      }
    }

    thead th {
      color: #ffffff;
      background: ${Constants.COLOR.PURPLE};
      @media (max-width: 800px) {
        display: none;
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

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export default OverallScores;
