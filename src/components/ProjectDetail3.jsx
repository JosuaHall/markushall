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
              Mit einigen Instrumentalisten und einem Projektchor wollen wir die
              Osternacht wieder in der Christuskirche in Mitteltal feiern.
            </p>
            <p>
              Am Mittwoch, den 22.02. um 19.00Uhr trifft sich zum ersten Mal der
              Projektchor im Gemeindehaus in Mitteltal, jeder der mitsingen
              möchte ist herzlich eingeladen. 7 Chorlieder werden wir in 4
              Proben am 8./15./22. u.29.3 einstudieren und in der Osternacht am
              9.April um 6.00Uhr früh aufführen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail3;
