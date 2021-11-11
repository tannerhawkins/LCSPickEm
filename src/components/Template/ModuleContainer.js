import styled from "styled-components"


const ModuleContainer = ({moduleCards}) => {
    

    return <StyledContainer>
        {moduleCards}
    </StyledContainer>
}


const StyledContainer = styled.div`
display: flex;
width: 100%;
flex-wrap: no-wrap;
overflow: auto;
padding: 20px;
height: 400px;
`

export default ModuleContainer;