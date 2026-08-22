import React from "react";
import mlsBild1 from "../pictures/home/mls_plakat.jpg";
import mlsBild2 from "../pictures/home/mls_band.JPG";
import pic_cvjm1 from "../pictures/bands/cvjm1.jpg";
import YoutubeEmbed from "./YoutubeEmbed";

function ProjectDetail3() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <div className="bands-card-layout mt-2 p-1">
            <h1>CVJM-Band am 11.10. und 6.12.2026 jew.um 10.00Uhr</h1>
            <p>Christuskirche Mitteltal</p>
            <p>
              mit Hannah (Klavier), Jenny (Gitarre, Gesang) und Jonas Gesang.
            </p>
            <div className="">
              <img src={pic_cvjm1} className="project-card-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail3;
