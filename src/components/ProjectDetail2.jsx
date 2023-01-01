import React from "react";
import mlsBild1 from "../pictures/home/mls_plakat.jpg";
import mlsBild2 from "../pictures/home/mls_band.JPG";

function ProjectDetail2() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">Mein lieber Sohn</h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="">
              <img src={mlsBild1} className="project-card-image" alt="" />
            </div>
            <div className="text-left">
              Weihnachtsgeschichte im Pop/Folk Stil von und mit Theo Ziegler
            </div>
            <div className="">
              <img src={mlsBild2} className="project-card-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail2;
