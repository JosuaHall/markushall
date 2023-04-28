import React from "react";
import pic_osternacht23 from "../pictures/home/on23.jpg";

function ProjectDetail() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">Neues Video zur Osternacht 2023</h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="">
              <img
                src={pic_osternacht23}
                className="project-card-image"
                alt=""
              />
            </div>
            <div className="text-left">
              Am 8.4.2023 habe ich zusammen mit dem Projektchor der Osternacht
              das Video - Jesus meine Hoffnung lebt - aufgenommen.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
