import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import homepageSplash from "../../images/homepage-splash-2.png";

const IntroSection = () => {
  return (
    <SectionContainer>
      <CirclesContainer>
      </CirclesContainer>
      <SquaresContainer>
      </SquaresContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  position: relative;
`;

const CirclesContainer = styled.div`
  height: 55vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`;

const SquaresContainer = styled.div`
  background: url(${homepageSplash}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`;

const SquaresFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

const SquaresDivider = styled.div`
  display: flex;
  min-width: 500px;
  margin-left: 30px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    min-width: 0px;
    justify-content: space-around;
    margin: 0 auto;
    width: 90%;
  }
`;

const CirclesDivider = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`;

const StyledCircle = styled.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`;

const StyledSquare = styled.img`
  width: 60%;
  max-width: 400px;
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`;

const SquaresText = styled.p`
  font-size: 40px;
  width: 300px;
  img + & {
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
    img + & {
      margin-left: 20px;
    }
  }
`;

const StyledTextContainer = styled.p`
  position: absolute;
  font-weight: 300;
  font-size: min(2.3vw, 40px);
  margin: 0 auto;
  margin-left: 40px;
  width: 20%;
  max-width: 300px;
  font-weight: 500;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    font-size: 4vw;
    margin: 0 auto !important;
  }
`;

const StyledHeader = styled.h1`
  color: ${Constants.COLOR.DARK_GREEN};
  font-size: 90px;
  padding-left: 12%;
  padding-top: 300px;
  @media (max-width: 1000px) {
    font-size: 50px;
    padding-top: 30vw;
    text-align: center;
    padding-left: 0%;
  }
`

  const StyledSquareImg = styled.img`
  width: 55%;
  max-width: 400px;
  border-radius: 75px;
  margin-bottom: 20px;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`

const StyledCircleImg = styled.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  border-radius: 50%;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }`
;

export default IntroSection;
