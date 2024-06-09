import React from "react";
import MostPopular from "./mostpopular";
import HeroSection from "./hero";
import CardSection from "./cardsection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <MostPopular />
    </div>
  );
};

export default Home;
