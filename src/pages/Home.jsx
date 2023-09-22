import React, { useEffect } from "react";
import CarouselFade from "../components/Carausal";
import FeaturesCard from "../components/Cards/FeaturesCard";
import AboutUsCard from "../components/Cards/AboutUsCard";
import BookingForm from "../components/Cards/BookingForm";
import FeaturesDiscrip from "../components/Cards/FeaturesDiscrip";
import useScrollTop from "../hooks/useScrollTop";
import ContactBlock from "../components/Cards/ContactBlock";
import MenuBlock from "../components/Cards/MenuBlock";

const Home = () => {
  const { scrollTop } = useScrollTop();
  useEffect(() => {
    scrollTop(); // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <div>
      <CarouselFade />
      <BookingForm />
      <AboutUsCard />
      <FeaturesDiscrip />
      <FeaturesCard />
      <MenuBlock />
      <ContactBlock />
    </div>
  );
};

export default Home;
