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
            <h1>6.12.26</h1>
            <p>CVJM-Band - Christuskirche Mitteltal - 10Uhr</p>
            <p>
              mit Hannah (Klavier), Jenny (Gitarre, Gesang) und Jonas Gesang.
            </p>
            <div className="">
              <img src={pic_cvjm1} className="project-card-image" alt="" />
            </div>
          </div>

          <div className="bands-card-layout mt-2 p-1">
            <h1>22.11.2026</h1>
            <p>Gottesdienstbegleitung Christuskirche Mitteltal - 10.00Uhr</p>
          </div>
          <div className="bands-card-layout mt-2 p-1">
            <h1>10.1.2027</h1>
            <p>Gottesdienstbegleitung Christuskirche Mitteltal - 10.00Uhr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail3;
