import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";

function FavoritePicture() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          {/*<h2 className="mb-2">Favorite Picture</h2>*/}
          <div className="favorite-img">
            <img src={drums} alt="" />
          </div>
          <p>example picture description</p>
        </div>
      </div>
    </div>
  );
}

export default FavoritePicture;
