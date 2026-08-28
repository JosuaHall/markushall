import React from "react";
import { useEffect } from "react";
import poster_liederschatz from "../pictures/Projects/ls_flyer.jpg";
import hp25 from "../pictures/bands/hp25.jpg";
import lb1 from "../pictures/bands/pic2LadyBlueFlyer.JPG";
import lb2 from "../pictures/bands/pic6LadyBlueSubiaco26.jpg";
import lb3 from "../pictures/bands/pic10LadyBlueSubiaco26.jpg";
import ce from "../pictures/bands/ce_cat.jpg";
import ejw from "../pictures/bands/cvjm1.jpg";
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
                src={lb1}
                alt=""
              />
            </div>
            {/* Youtube video embedded */}
            <YoutubeEmbed embedId="p2esMrYvEVk?si=NavWDUsF1EEYVU98" />
            <div>
              <img
                className="project-card-image p-3" //p-3 -> means padding = 3
                src={lb3}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>
                  Lady Blue & The Band - ein Abend voller Blues, Rock und
                  musikalischer Highlights
                </b>
              </p>
              <p> </p>
              <p>
                Mit einer besonderen Auswahl aus Blues- und Rockklassikern von
                Künstlern wie U2, den Beatles oder Tina Turner<br></br>sowie
                aktuellen Bluessongs, unter anderem von Elles Bailey, bietet
                Lady Blue & The Band ein abwechslungsreiches und stimmungsvolles
                Konzerterlebnis.<br></br>Im Mittelpunkt steht die
                außergewöhnliche Stimme von Lorena, die den Songs ihre ganz
                eigene Note verleiht und jeden Auftritt zu einem besonderen
                musikalischen Erlebnis macht.<br></br>Ob Konzert, private Feier,
                Hochzeit, Firmenevent oder ein anderer Anlass - Lady Blue & The
                Band sorgt für die passende Atmosphäre und einen unvergesslichen
                Abend.<br></br>Sie haben Interesse? Schreiben Sie mich gerne an,
                ich freue mich auf Ihre Anfrage! <br></br>info@markushall.de -
                ladyblueandtheband@gmx.de
                <div>
                  <img
                    className="project-card-image p-3" //p-3 -> means padding = 3
                    src={lb2}
                    alt=""
                  />
                </div>
              </p>
              {/* Youtube video embedded */}
              <YoutubeEmbed embedId="5qza2g6jrlY" />
            </div>
          </div>

          <h3 className="text-center mt-3">CVJM-Band</h3>
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
                <b>CVJM Band Mitteltal/Obertal</b>
              </p>
              <p>aktuell mit Hannah, Jenny, Toby und Jonas</p>
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
