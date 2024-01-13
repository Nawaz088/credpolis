import React from "react";

// import { Button, Img, Input, Line, Text } from "components";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import Footer from "components/Footer";
import Services from "components/Services";
import Howwework from "components/Howwework";
import JoinUs from "components/JoinUs";

const HomepagePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Howwework />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
};

export default HomepagePage;
