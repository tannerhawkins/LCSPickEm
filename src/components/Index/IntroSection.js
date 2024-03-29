import { Constants } from "../../data/constants.js";
import styled from "styled-components";
import homepageSplash from "../../images/homepage-splash.png";
import Button from "../Template/Button.js";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAccountType,
  selectIsSignedIn,
} from "../../app/account/selectors.js";
import hopium from "../../images/hopium.png";

const IntroSection = () => {
  const history = useHistory();
  const accountType = useSelector(selectAccountType);
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <SectionContainer>
      <TextContainer>
        <StyledHeaderText>{Constants.TITLE.charAt(0).toUpperCase() + Constants.TITLE.slice(1)} PICK'EM!</StyledHeaderText>
        <StyledSubText><Hopium src={hopium} /></StyledSubText>
      </TextContainer>
      <ButtonContainer>
        <StyledButtonOne
          onClick={() =>
            isSignedIn ? history.push(`/home`) : history.push(`/signin`)
          }
        >
          HOME
        </StyledButtonOne>
      </ButtonContainer>
      <StyledImage src={homepageSplash} />
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  height: calc(100vh - ${Constants.HEADER_HEIGHT});
  background-color: ${Constants.COLOR.PURPLE};
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

const Hopium = styled.img`
  height: 90px;
  padding-left: 10px;
`

const StyledHeaderText = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 100px;
  line-height: 86px;
  margin-top: 50px;
  @media (max-width: 800px) {
    font-size: 60px;
    line-height: 56px;
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

const StyledSubText = styled.p`
  color: ${Constants.COLOR.WHITE};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 33px;
  }
`;

const TextContainer = styled.div`
  margin-left: 10%;
  margin-top: 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  max-width: 35%;
  z-index: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 6%;
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
  @media (max-width: 600px) {
    height: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
  }
`;

export default IntroSection;
