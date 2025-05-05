import React from "react";
import { useEffect } from "react";
import poster_liederschatz from "../pictures/Projects/ls_flyer.jpg";
import hp25 from "../pictures/bands/hp25.jpg";
import ce from "../pictures/bands/ce_cat.jpg";
import ejw from "../pictures/bands/ejw_2019.jpg";
import fh from "../pictures/bands/fh.jpg";
import uc from "../pictures/bands/uc_patch.jpg";
import markushall from "../pictures/home/mh_drums_platzmeister22.jpg";
import YoutubeEmbed from "./YoutubeEmbed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bands = () => {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content">
          <h1 className="mb-2">Bands</h1>
          <h3 className="text-center">Lady Blue & The Band</h3>
          <div className="bands-card-layout mt-2">
            {/*mt-2 means margin top = 2 */}

            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={hp25}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Blues Band aus Freudenstadt</b>
              </p>
              <p>ehemals HP's Hauskapelle</p>
              <p>
                Blues und Rock Covers, aktuell mit HP, Lorena, Charly, Dieter
                und Norbert.
              </p>
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="5qza2g6jrlY" />
            </div>
          </div>

          <h3 className="text-center mt-3">EJM-Band</h3>
          <div className="bands-card-layout mt-2">
            {/*mt-2 means margin top = 2 */}

            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={ejw}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Band der Ev. Jugend Mitteltal</b>
              </p>
              <p>seit 2014</p>
              <p>Bandprojekt der Kirchengemeinde Mitteltal</p>
            </div>
          </div>

          <h3 className="text-center mt-3">Cat's Eyes</h3>
          <div className="bands-card-layout mt-2">
            {/*mt-2 means margin top = 2 */}

            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={ce}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Cats Eyes</b>
              </p>
              <p>1993-2019</p>
              <p>
                Die wohl eindrücklichste Zeit. 2019 spielten wir zuletzt beim
                Fleckafescht in Baiersbronn. 2021 verstarb mein langjähriger
                musikalischer Wegbegleiter Norbert Forstreuter, Mitbegründer der
                Band Cats Eyes.
              </p>
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="fl_GGSZce5U" />
            </div>
          </div>

          <h3 className="text-center mt-3">Frozen Heart</h3>
          <div className="bands-card-layout mt-2">
            {/*mt-2 means margin top = 2 */}

            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={fh}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Frozen Heart</b>
              </p>
              <p>2000-2004</p>
              <p>
                Rockband aus Kirchheim Teck mit Pee Bonfert, 2003 haben wir
                unsere CD- Heart of stone veröffentlicht.
              </p>
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="3A-FzSiUGd4" />
            </div>
          </div>

          <h3 className="text-center mt-3">Undercover</h3>
          <div className="bands-card-layout mt-2">
            {/*mt-2 means margin top = 2 */}

            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={uc}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Undercover</b>
              </p>
              <p>1988-92</p>
              <p>
                Erste Band mit Axel, Paul und Jochen, mega tolle Zeit, wir
                hatten viel Spaß miteinander.
              </p>
            </div>
          </div>
          {""}

          <div
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              position: "fixed",
              fontSize: "30px",
              bottom: "40px",
              right: "40px",

              color: "#fff",
              textAlign: "center",
            }}
            className="up-arrow"
          >
            ^
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bands;
