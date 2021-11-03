import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectIsLoading } from "../../app/selectors";

// TODO implement logic to get display name and account type from auth
const LoadingScreen = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <LoadingScreenContainer style={{display: isLoading ? "flex" : "none"}}>
        <h1>Loading...</h1>
    </LoadingScreenContainer>
  );
};

const LoadingScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: white;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default LoadingScreen;
