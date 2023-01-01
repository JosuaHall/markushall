import React from "react";
import pic from "../pictures/home/mh_facebook.png";

function About() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="header-content">
          <div className="header-content-left">
            <div>
              <h2>über mich</h2>
              <p>
                verheiratet, 2 Kinder, meine favorites sind Drums, Keys, Gesang
                und Ton-Technik, sonstige Vorlieben auf meiner Facebook-Seite.
              </p>
            </div>
          </div>
          <div className="about-content-right">
            <img src={pic} className="about-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
