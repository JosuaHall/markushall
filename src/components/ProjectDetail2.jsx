import React from "react";
import pic_fh_roll from "../pictures/bands/fh_rollschuhplatz.jpg";

import YoutubeEmbed from "./YoutubeEmbed";

function ProjectDetail2() {
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content py-2">
          <h1 className="mb-2 text-center">30 Jahre Frozen Heart</h1>

          <div className="bands-card-layout mt-2 p-1">
            <div className="">
              <img src={pic_fh_roll} className="project-card-image" alt="" />
            </div>
            <div className="text-left">
              Vor 30 Jahren habe ich mit der Stuttgarter Formation Frozen Heart
              die CD Heart of stone aufgenommen. Aus meinem Archiv habe ich ein
              altes Live Video herausgekramt, die schlechte Bildqualität möchte
              ich entschuldigen.
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="Rx3qtKYBqNU" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail2;
