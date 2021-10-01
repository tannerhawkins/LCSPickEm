import React from "react";
import Main from "../layouts/Main";
import IntroSection from "../components/Homepage/IntroSection";
import SecondSection from "../components/Homepage/SecondSection";
import Navigation from "../components/Template/Navigation";
import Footer from "../components/Template/Footer";

const Index = () => {
  return (
    <Main description={"Homepage"}>
      <Navigation />
      <IntroSection />
      <SecondSection />
      <Footer />
    </Main>
  );
};

export default Index;
