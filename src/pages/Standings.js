import React from "react";
import Main from "../layouts/Main";
import MainSection from "../components/Standings/MainSection";
import Navigation from "../components/Template/Navigation";

const Index = () => {
  return (
    <Main description={"Homepage"}>
      <Navigation />
      <MainSection />
    </Main>
  );
};

export default Index;
