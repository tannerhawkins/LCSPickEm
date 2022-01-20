import React from "react";
import Main from "../layouts/Main";
import IntroSection from "../components/Index/IntroSection";
import Navigation from "../components/Template/Navigation";

const Index = () => {
  return (
    <Main description={"Homepage"}>
      <Navigation />
      <IntroSection />
    </Main>
  );
};

export default Index;
