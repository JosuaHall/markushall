import React from "react";
import mlsBild1 from "../pictures/home/mls_plakat.jpg";
import mlsBild2 from "../pictures/home/mls_band.JPG";
import pic_osternacht23 from "../pictures/home/osternacht23.png";

function ProjectDetail3() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <div className="bands-card-layout mt-2 p-1">
            <h1>Osternacht Mitteltal 2023</h1>
            <p>Ostersonntag - Christuskirche Mitteltal</p>
            <div className="">
              <img
                src={pic_osternacht23}
                className="project-card-image"
                alt=""
              />
            </div>
            <p>
              Im Dunkel unsrer Nacht entzünde das Feuer, das nie mehr erlischt
            </p>
            <p>
              Mit einigen Instrumentalisten und einem Projektchor wollen wir die
              Osternacht in der Christuskirche in Mitteltal feiern.
              Voraussichtlicher Beginn ist 6.00Uhr, vor dem Sonnenaufgang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail3;
