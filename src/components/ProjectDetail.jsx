import React from "react";
import pic_ladyblue from "../pictures/bands/ladyblueKI.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
import pic_ladyblue2 from "../pictures/bands/picLadyBlueSubiaco26.jpg";

function ProjectDetail() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">
            Termine Lady Blue & The Band 2025
          </h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="text-left">
              Konzertrückblick Lady Blue & The Band vom 18.8.26 auf dem
              Klosterplatz in Alpirsbach.
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="hC2xlsfzLNo?si=WKK27UwZzCB42bhC" />
              <div>
                <img />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
