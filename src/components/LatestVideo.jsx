import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
function LatestVideo() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2>Latest Video</h2>
          {/* Youtube video embedded */}
          <YoutubeEmbed embedId="51EZYmdhwUE" />
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
