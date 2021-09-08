import { Constants } from "../../data/constants.js"
import styled from "styled-components"
import homepageSplash from "../../images/Homepage/homepage-splash-2.png";

const IntroSection = () => {

    return (
        <SectionContainer>
            <StyledImage src={homepageSplash} />
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    height: 1900px;
    background-color: white;
    position: relative;
`
const StyledImage = styled.img`
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    height: 990px;
    width: 100%;
`
export default IntroSection;