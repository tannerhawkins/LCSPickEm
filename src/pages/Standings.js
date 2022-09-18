import React from "react";
import Main from "../layouts/Main";
import OverallScores from "../components/Standings/OverallScores";
import PickHistory from "../components/Standings/PickHistory";
import Navigation from "../components/Template/Navigation";
import Graphs from "../components/Standings/Graphs";

const Index = () => {
  return (
    <Main description={"Homepage"}>
      <Navigation />
      <OverallScores />
      <PickHistory />
    </Main>
  );
};

export default Index;
