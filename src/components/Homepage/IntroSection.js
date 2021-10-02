import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import homepageSplash from "../../images/Homepage/homepage-splash.png";
import Button from "../Template/Button.js";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccountType, selectIsSignedIn } from "../../app/account/selectors.js";

const IntroSection = () => {
  const history = useHistory();
  const accountType = useSelector(selectAccountType);
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <SectionContainer>
      <TextContainer>
        <StyledHeaderText>SOME CATCHY TEXT</StyledHeaderText>
        <StyledSubText>Some convincing text should go here</StyledSubText>
      </TextContainer>
      <ButtonContainer>
        <StyledButtonOne onClick={() => isSignedIn ? history.push(`${accountType}/home`) : history.push(`/signin`)}>Dashboard</StyledButtonOne>
        <StyledButtonTwo>BTN2</StyledButtonTwo>
      </ButtonContainer>
      <StyledImage src={homepageSplash} />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 775px;
  background-color: ${Constants.COLOR.GREEN};
  position: relative;
  display: flex;
  margin-top: ${Constants.HEADER_HEIGHT};
`;
const StyledImage = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`;

const StyledHeaderText = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 73px;
  line-height: 86px;
`;

const StyledSubText = styled.h3`
  color: ${Constants.COLOR.LIGHT_GREEN};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
`;

const TextContainer = styled.div`
  margin-left: 10%;
  margin-top: 5%;
  display: flex;
  flex-flow: column wrap;
  max-width: 35%;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 5%;
  margin-left: 10%;
  z-index: 1;
`;

const StyledButtonOne = styled(Button)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`;

const StyledButtonTwo = styled(Button)`
  background-color: ${Constants.COLOR.DARK_GREEN};
  margin-left: 19px;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`;

export default IntroSection;
