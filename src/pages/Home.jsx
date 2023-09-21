import React, { useEffect } from "react";
import CarouselFade from "../components/Carausal";
import AboutCard from "../components/Cards/AboutCard";
import HighlightsCard from "../components/Cards/HighlightsCard";
import FeaturesCard from "../components/Cards/FeaturesCard";
import AboutUsCard from "../components/Cards/AboutUsCard";
import BookingForm from "../components/Cards/BookingForm";
import FeaturesDiscrip from "../components/Cards/FeaturesDiscrip";

const Home = () => {
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);
  
  return (
    <div>
      <CarouselFade />
      <BookingForm/>
      <AboutUsCard/>
      <FeaturesDiscrip/>
      <FeaturesCard/>
      <AboutCard />
      <HighlightsCard />
    </div>
  );
};

export default Home;
