import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CollapseAbout from "../components/CollapseAbout";
import Footer from "../components/Footer";



function About() {
    return (
      <div>
        <Header />
        <Banner imgSrc="../../assets/banner-about.png" />
        <CollapseAbout />
        <Footer />
      </div>
    );
  }
  
  export default About;