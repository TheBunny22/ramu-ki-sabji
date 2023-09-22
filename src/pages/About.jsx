import React from "react";
import PageHeader from "../components/Navbar/PageHeader";
import AboutUsCard from "../components/Cards/AboutUsCard";
import ContactBlock from "../components/Cards/ContactBlock";
import FeaturesDiscrip from "../components/Cards/FeaturesDiscrip";

const About = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutUsCard />
      <FeaturesDiscrip/>
      <ContactBlock />
    </>
  );
};

export default About;
