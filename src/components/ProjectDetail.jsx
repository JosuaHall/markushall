import React from "react";
import pic_ladyblue from "../pictures/bands/ladyblueKI.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
import pic_ladyblue2 from "../pictures/bands/picLadyBlueSubiaco26.jpg";

function ProjectDetail() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">Termine Lady Blue & The Band</h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="text-left">
              Konzertrückblick Lady Blue & The Band vom 18.8.26 auf dem
              Klosterplatz in Alpirsbach.
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="hC2xlsfzLNo?si=WKK27UwZzCB42bhC" />
              <p>
                Livemitschnitt - Train - ein aktueller Bluessong von Shanice
                Green.
              </p>
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="lpy4tPSvle0?si=zx2o75nzx8hWxCkC" />
              <p>
                Livemitschnitt - What's the matter with you - Vocalcam - ein
                aktueller Bluessong von Elles Bailey.
              </p>
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
