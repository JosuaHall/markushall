import React from "react";
import pic_assel from "../pictures/bands/hp_assel23.jpg";
import pic_sub from "../pictures/bands/hp_sub23.jpg";
import pic_bbb from "../pictures/bands/hp_bbb23.jpg";
import pic_lns from "../pictures/bands/hp_late_night_shopping23.jpg";
import pic_bnn_eanner from "../pictures/bands/hp_banner.jpg";
import pic_term23 from "../pictures/bands/hp_termine23.jpg";
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
            <div className="text-left">
              <div className="">
                <img src={pic_sub} className="project-card-image" alt="" />
              </div>
              <div className="">
                <img src={pic_lns} className="project-card-image" alt="" />
              </div>
              Video "White room"
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="VVH1grtTq-E" />
              <p>Aufgenommen im Platzmeisterhaus in Christophstal 2022.</p>
              <div className="">
                <img src={pic_bbb} className="project-card-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
