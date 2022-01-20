import React from "react";
import Main from "../layouts/Main";
import IntroSection from "../components/Picks/IntroSection";
import SecondSection from "../components/Picks/SecondSection";
import Navigation from "../components/Template/Navigation";

const Index = () => {
  return (
    <Main description={"Homepage"}>
      <Navigation />
      <IntroSection />
      <SecondSection />
    </Main>
  );
};

export default Index;
