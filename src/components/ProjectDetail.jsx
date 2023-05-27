import React from "react";
import pic_hp22 from "../pictures/bands/hp22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";

function ProjectDetail() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">
            Termine Bluesband HP's Hauskapelle 2023
          </h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="">
              <img src={pic_hp22} className="project-card-image" alt="" />
            </div>
            <div className="text-left">
              3.Aug 2023 Alpirsbach - Klosterhof.
              <p>5.Aug. 2023 Obertal - Buhlbachbeleuchtung.</p>
              Video "White room"
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="VVH1grtTq-E" />
              <p>Aufgenommen im Platzmeisterhaus in Christophstal 2022.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
