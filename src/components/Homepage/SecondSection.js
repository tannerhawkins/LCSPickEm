import { Constants } from "../../data/constants.js"
import styled from "styled-components"
import homepageSplash from "../../images/Homepage/homepage-splash-2.png";
import circle from "../../images/Homepage/circle.png"
import square from "../../images/Homepage/square.png"

const IntroSection = () => {

    return (
        <SectionContainer>
            <CirclesContainer>
                <CirclesDivider>
                    <StyledCircle src={circle} style={{margin:"5% 0% 0% 5%"}}/>
                    <StyledTextContainer style={{margin:"5% 0% 0% 28%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </CirclesDivider>
                <CirclesDivider>
                    <StyledCircle src={circle} style={{margin:"10% 0% 0% 50%"}}/>
                    <StyledTextContainer style={{margin:"10% 0% 0% 75%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </CirclesDivider>
                <CirclesDivider>
                    <StyledTextContainer style={{margin:"30% 0% 0% 5%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                    <StyledCircle src={circle} style={{margin:"35% 0% 0% 30%"}}/>
                </CirclesDivider>
                <CirclesDivider>
                    <StyledTextContainer style={{margin:"35% 0% 0% 60%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </StyledTextContainer>
                </CirclesDivider>
            </CirclesContainer>
            <SquaresContainer>
                <StyledHeader>HEADING TEXT</StyledHeader>
                <SquaresFlexDiv>
                    <SquaresDivider>
                        <StyledSquare src={square} />
                        <SquaresText>Put some type of text here</SquaresText>
                    </SquaresDivider>
                    <SquaresDivider>
                        <StyledSquare src={square} />
                        <SquaresText>Put some type of text here</SquaresText>
                    </SquaresDivider>
                    <SquaresDivider>
                        <SquaresText>Put some type of text here</SquaresText>
                        <StyledSquare src={square} />
                    </SquaresDivider>
                    <SquaresDivider>
                        <SquaresText>Put some type of text here</SquaresText>
                        <StyledSquare src={square} />
                    </SquaresDivider>
                </SquaresFlexDiv>
                
            </SquaresContainer>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    position: relative;
`

const CirclesContainer = styled.div`
    height: 55vw;
    width: 100%;
    @media (max-width: 1000px) {
        display: flex;
        flex-flow: column;
        height: auto;
    }
`

const SquaresContainer = styled.div`
    background: url(${homepageSplash}) no-repeat; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
`

const SquaresFlexDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`

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
`

const CirclesDivider = styled.div`
    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
    }
`

const StyledCircle = styled.img`
    position: absolute;
    width: 20%;
    @media (max-width: 1000px) {
        position: relative;
        width: 40%;
        margin: 0 auto !important;
    }
`

const StyledSquare = styled.img`
    width: 60%;
    max-width: 400px;
    @media (max-width: 1000px) {
        width: 40%;
        min-width: 0px;
    }
`

const SquaresText = styled.p`
    font-size: 40px;
    width: 300px;
    img+&{
        margin-left: 50px;
    }
    @media (max-width: 600px) {
        font-size: 4vw;
        img+&{
            margin-left: 20px;
        }
    }
`

const StyledTextContainer = styled.p`
    position: absolute;
    font-weight: 300;
    font-size: 2.3vw;
    margin: 0 auto;
    margin-left: 40px;
    width: 20%;
    font-weight: 500;
    @media (max-width: 1000px) {
        position: relative;
        width: 40%;
        font-size: 4vw;
        margin: 0 auto !important;
    }
`

const StyledHeader = styled.h1`
    color: ${Constants.DARK_GREEN};
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

export default IntroSection;