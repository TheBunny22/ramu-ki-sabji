import React from "react";
import CarouselFade from "../components/Carausal";
import AboutCard from "../components/Cards/AboutCard";
import HighlightsCard from "../components/Cards/HighlightsCard";

const Home = () => {
  return <div>
    <CarouselFade/>
    <AboutCard/>
    <HighlightsCard/>
  </div>;
};

export default Home;
