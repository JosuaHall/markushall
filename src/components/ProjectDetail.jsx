import React from "react";
import pic_ladyblue from "../pictures/bands/ladyblueKI.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
import pic_ladyblue2 from "../pictures/bands/hp25_betz.jpg";

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
              Am 13.Dezember 2025 spielt Lady Blue & The Band in der Kellerassel
              in Baiersbronn ab 21.00Uhr. Der Eintritt ist frei.
              <div className="">
                <img src={pic_ladyblue} className="project-card-image" alt="" />
              </div>
              <div className="">
                <img
                  src={pic_ladyblue2}
                  className="project-card-image"
                  alt=""
                />
              </div>
              Video "Wishing Well"
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="5qza2g6jrlY" />
              <p>Aufgenommen bei der HP-Homesession April 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
