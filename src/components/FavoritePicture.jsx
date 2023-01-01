import React from "react";
import drums from "../pictures/home/little_drummer_boy.jpg";

function FavoritePicture() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2 className="mb-2">favorite Picture</h2>
          <div className="favorite-img">
            <img src={drums} alt="" />
          </div>
          <p>Liederschatzprojekt-Knittlingen 2019</p>
        </div>
      </div>
    </div>
  );
}

export default FavoritePicture;
