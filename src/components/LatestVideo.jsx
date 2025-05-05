import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
function LatestVideo() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2>Train - Lady Blue & The Band</h2>
          {/* Youtube video embedded */}
          <YoutubeEmbed embedId="InV7KNFQSa0" />
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
