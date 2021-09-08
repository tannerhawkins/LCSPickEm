import React from 'react';
import Main from '../layouts/Main';
import '.././static/css/main.scss'; // All of our styles
import IntroSection from '../components/Homepage/IntroSection';
import Navigation from '../components/Template/Navigation'

const Index = () => {
  
  return (
  <Main
    description={"Project Description Homepage"}
  >
    <Navigation />
    <IntroSection />
  </Main>
)};

export default Index;
