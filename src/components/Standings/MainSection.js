import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Table from "./Table.js";
import Podiums from "../../images/podiums.png";

const MainSection = () => {
  const history = useHistory();

  return (
    <SectionContainer>
      <TopContainer>
        <StyledTitle>Standings</StyledTitle>
      </TopContainer>
      <StandingsContainer>
        <FirstPlace>Tanner</FirstPlace>
        <SecondPlace>Tanner</SecondPlace>
        <ThirdPlace>Tanner</ThirdPlace>
        <StyledImage src={Podiums} />
      </StandingsContainer>
      <TableContainer>
        <Table data={[{
          name: "Tanner",
          week1: 2,
          week2: 3,
          week3: 4,
          week4: 5,
          week5: 6,
          week6: 7,
          week7: 8,
          week8: 9,
          total: 44,
          }]} />
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
  height: 775px;
  background-color: ${Constants.COLOR.WHITE};
  display: flex;
  width: 100%;
  margin-top: ${Constants.HEADER_HEIGHT};
`;

const StyledTitle = styled.p`
  font-size: 50px;
  text-align: center;
`

const PlayerName = styled.p`
  position: absolute;
  font-size: 1.9vw;
`

const FirstPlace = styled(PlayerName)`
  top: 11%;
  left: 46%;
`

const SecondPlace = styled(PlayerName)`
  top: 22%;
  left: 72.5%;
`

const ThirdPlace = styled(PlayerName)`
  top: 30%;
  left: 20%;
`

const StandingsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

const StyledImage = styled.img`
  width: 90%;
`;


const TableContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
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
    }

    td {
      border-right: 1px solid #f8f8f8;
      font-size: 20px;
      @media (max-width: 800px) {
        font-size: 9px;
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
      background: #F8F8F8;
    }
  }
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

export default MainSection;
