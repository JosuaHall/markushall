import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";

function Header() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="header-area">
          <div className="header-markus-hall">
            <h1>Markus Hall</h1>
            <p>my music</p>
          </div>
          <div className="drums-img">
            <img src={drums} alt="" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
