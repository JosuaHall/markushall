import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
function LatestVideo() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2>To be with you - Lady Blue & The Band</h2>
          {/* Youtube video embedded */}
          <YoutubeEmbed embedId="p2esMrYvEVk?si=-aboQtNti0Y74QUf" />
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
