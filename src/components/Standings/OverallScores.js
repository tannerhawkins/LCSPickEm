import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import Table from "./Table.js";
import { useEffect, useState } from "react";
import { gameDataDb, userDataDb } from "../../data/firebase.js";

const OverallScores = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    userDataDb.get().then((users) => {
      const userList = users.docs.map((doc) => doc.data());
      gameDataDb.get().then((weeks) => {
        const weekData = weeks.docs.map((doc) => doc.data());
        const userData = userList.map((user) => {
          const gameIds = user.picks.map((pick) => pick.gid);
          return {
            user: user,
            weeks: weekData.map((week) => {
              return {
                ...week,
                pickedGames: week.games.filter((game) =>
                  gameIds.includes(game.gid)
                ),
                score: week.games
                  .map((game) => {
                    if (gameIds.includes(game.gid)) {
                      const pick = user.picks.filter(
                        (pick) => pick.gid == game.gid
                      )[0];
                      if (game.result == pick.pick) {
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
  max-width: 95%;
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
      padding: 8px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
      @media (max-width: 1150px) {
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
