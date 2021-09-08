import { Constants } from "../../data/constants.js"
import styled from "styled-components"
import homepageSplash from "../../images/homepage-splash.png";

const IntroSection = () => {

    return (
        <SectionContainer>
            <StyledImage src={homepageSplash} />
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    height: 500px;
    background-color: ${Constants.GREEN};

`
const StyledImage = styled.img`
    position: absolute;
    right: 0;
    height: 500px;
    width: 600px;
`
export default IntroSection;