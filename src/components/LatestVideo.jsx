import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
function LatestVideo() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2>In the Name of the Blues - Markus Hall - Drumcam</h2>
          {/* Youtube video embedded */}
          <YoutubeEmbed embedId="kPufqZ79W9U?si=LuU6RP-2KjPZ9-7K" />
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
