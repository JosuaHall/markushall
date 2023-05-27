import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
function LatestVideo() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="latest-video-area">
          <h2>Demosong - I'm Free - HP's Hauskapelle</h2>
          {/* Youtube video embedded */}
          <YoutubeEmbed embedId="n103f_LrBHk" />
        </div>
      </div>
    </div>
  );
}

export default LatestVideo;
