import React from "react";
import pic38_mukis_markus2 from "../pictures/Gallery/pic151_mh_mukis.jpg";

import YoutubeEmbed from "./YoutubeEmbed";

function ProjectDetail2() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">20 Jahre Mukis</h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="">
              <img
                src={pic38_mukis_markus2}
                className="project-card-image"
                alt=""
              />
            </div>
            <div className="text-left">
              Vor 20 Jahren habe ich den Kinderchor "Mukis" gegründet und mit
              den Kids mehrere Musicals veranstaltet. Zu diesem Anlass werde ich
              in den kommenden Wochen einige Ausschnitte dieser Musicals
              veröffentlichen.
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="KtALB0slHuw?si=16wLLPoT3jC9KUnP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail2;
