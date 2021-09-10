import { Constants } from "../../data/constants.js"
import styled from "styled-components"
import homepageSplash from "../../images/Homepage/homepage-splash-2.png";
import circle from "../../images/Homepage/circle.png"

const IntroSection = () => {

    return (
        <SectionContainer>
            <CirclesContainer>
                <StyledFlexContainer style={{padding: "4% 0% 0% 5%"}}>
                    <StyledCircle src={circle}/>
                    <StyledTextContainer>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </StyledFlexContainer>
                <StyledFlexContainer style={{padding: "4% 0% 0% 5%"}}>
                    <StyledCircle src={circle}/>
                    <StyledTextContainer>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </StyledFlexContainer>
                <StyledFlexContainer style={{padding: "7% 0% 0% 15%", maxWidth: "1600px", flexFlow:"row-reverse wrap"}}>
                    <StyledTextContainer>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                    <StyledCircle src={circle}/>
                    <StyledTextContainer>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </StyledFlexContainer>
            </CirclesContainer>
            <SquaresContainer>
                <StyledImage src={homepageSplash} />
            </SquaresContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    background-color: white;
    position: relative;
`

const CirclesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`

const SquaresContainer = styled.div`
    height: 1500px;
`

const StyledFlexContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
`

const StyledImage = styled.img`
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    height: 1300px;
    width: 100%;
`

const StyledCircle = styled.img`
    max-width: 450px;
`

const StyledTextContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 36px;
    line-height: 43px;
    margin: 0 auto;
    margin-left: 40px;
    width: 310px;
    font-weight: 500;
`

export default IntroSection;