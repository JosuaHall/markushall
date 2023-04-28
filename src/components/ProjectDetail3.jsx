import React from "react";
import mlsBild1 from "../pictures/home/mls_plakat.jpg";
import mlsBild2 from "../pictures/home/mls_band.JPG";
import pic_osternacht23 from "../pictures/home/on23.jpg";

function ProjectDetail3() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <div className="bands-card-layout mt-2 p-1">
            <h1>Projektchor für Osternacht</h1>
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
              Mit einigen Instrumentalisten und einem Projektchor feierten wir
              zusammen mit Pfarrer Fellmeth die Osternacht in der Christuskirche
              in Mitteltal.
            </p>
            <p>
              Mit Liedern, Lesungen und Gebeten, sowie den Bildern zur Passion
              von Bärbel Schairer haben wir die Auferstehungsfeier Jesu Christi
              am Ostermorgen gefeiert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail3;
