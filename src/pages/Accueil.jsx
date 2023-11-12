import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
    return (
      <div>
        <Header />
        <Banner
          imgSrc="/assets/banner-home.png"
          title="Chez vous, partout et ailleurs"
        />
        <Gallery />
        <Footer />
      </div>
    );
  }
  
  export default Home;
  