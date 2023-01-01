import React from "react";

import NavBar from "./NavBar";
import Header from "./Header";
import News from "./News";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Impressum from "./Impressum";
import FavoritePicture from "./FavoritePicture";
import LatestVideo from "./LatestVideo";
function Home() {
  return (
    <div>
      <div className="outer-wrapper">
        <Header />
      </div>
      <div className="outer-wrapper-white">
        <News />
      </div>
      <div className="outer-wrapper">
        <LatestVideo />
      </div>
      <div className="outer-wrapper-white">
        <FavoritePicture />
      </div>
      <div className="outer-wrapper">
        <About />
      </div>

      <div className="outer-wrapper">
        <div className="contact">
          <Contact />
        </div>
      </div>
      <div className="outer-wrapper-white">
        <Impressum />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
