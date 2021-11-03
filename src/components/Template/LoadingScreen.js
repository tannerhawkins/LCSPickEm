import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectIsLoading } from "../../app/selectors";

// TODO implement logic to get display name and account type from auth
const LoadingScreen = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <LoadingScreenContainer style={{display: isLoading ? "block" : "none"}}>
        <h1>Loading...</h1>
    </LoadingScreenContainer>
  );
};

const LoadingScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;



export default LoadingScreen;
