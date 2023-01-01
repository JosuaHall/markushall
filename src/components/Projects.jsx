import React, { useEffect } from "react";
import liederSchatzProjekt from "../pictures/Projects/ls_flyer.jpg";
import ls_pic40 from "../pictures/Gallery/pic40_ls_grp3.jpg";
import touchTheSky from "../pictures/Projects/tts_plakat.jpg";
import bilderDerPassion from "../pictures/Projects/bdp_plakat.jpg";
import bilderDerWeihnacht from "../pictures/Projects/bdw_plakat.jpg";
import derBarmherzigeVater from "../pictures/Projects/dbv_plakat.jpg";
import noah from "../pictures/Projects/noah_plakat2.jpg";
import friedeAufErden from "../pictures/Projects/fae_plakat.gif";
import vaterMartin from "../pictures/Projects/vm_plakat.jpg";

function Projects() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="content">
          <h1 className="mb-2">Projects</h1>
          {/* ---------------------content1--------------------------------- */}
          <h3 className="text-center">Muscials</h3>
          {/* ---------------------card1--------------------------------- */}
          <div className="projects-card-layout mt-2">
            <div>
              <img className="project-card-image" src={touchTheSky} alt="" />
            </div>
            <div className="project-card-description">
              <p>
                <b>Touch the sky - König David</b>
              </p>
              <p>2004</p>
              <p>
                3 Aufführungen in Mitteltal und Baiersbronn, ein Musical über
                König David im Orginal von Udo Zimmermann.
              </p>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          {/*-----------------------card2---------------------------------*/}
          <div className="projects-card-layout mt-2">
            <div>
              <img
                className="project-card-image"
                src={derBarmherzigeVater}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Der barmherzige Vater</b>
              </p>
              <p>2006</p>
              <p>
                Erstes großes Musical der Mukis, über 100 Kinder mit 2 kpl.
                Besetzungen spielten das Musical vom verlorenen Sohn im Orginal
                von den KISI-Kids in der Schwarzwaldhalle in Baiersbronn.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          {/*-----------------------card3---------------------------------*/}
          <div className="projects-card-layout mt-2">
            <div>
              <img className="project-card-image" src={noah} alt="" />
            </div>
            <div className="project-card-description">
              <p>
                <b>Noah</b>
              </p>
              <p>2009</p>
              <p>
                Ein halbes Jahr Vorbereitung, über 100 Tierkostüme, aufwendige
                Bühnenbilder ließen das Musical Noah und die coole Arche in
                Baiersbronn lebendig werden.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          {/*-----------------------card3---------------------------------*/}
          <div className="projects-card-layout mt-2">
            <div>
              <img className="project-card-image" src={friedeAufErden} alt="" />
            </div>
            <div className="project-card-description">
              <p>
                <b>Friede auf Erden - das Weihnachtsmusical</b>
              </p>
              <p>2006</p>
              <p>
                3.Musical der Mukis erzählten die Weihnachtsgeschichte,
                aufgeführt in Mitteltal und Baiersbronn.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          {/*-----------------------card4---------------------------------*/}
          <div className="projects-card-layout mt-2">
            <div>
              <img className="project-card-image" src={vaterMartin} alt="" />
            </div>
            <div className="project-card-description">
              <p>
                <b>Vater Martin - ein Weihnachtsmusical</b>
              </p>
              <p>2003</p>
              <p>
                Die bekannte Weihnachtsgeschichte von Leo Tolstoi als Musical
                umgesetzt. Eindrücklich wurde die Geschichte mit den Kindern und
                Eltern des Kindergartens aus Mitteltal in Mitteltal und
                Baiersbronn aufgeführt.
              </p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}

          {/* ------------------------------------------------------------- */}
          {/*---------------------content2--------------------------------- */}
          <h3 className="mt-4 text-center">Konzert-Projekte</h3>
          {/* ---------------------card1--------------------------------- */}
          <div className="projects-card-layout mt-2">
            <div>
              <img
                className="project-card-image"
                src={liederSchatzProjekt}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Liederschatzprojekt</b>
              </p>
              <p>2019/20</p>
              <p>
                Mit der Triologie - Glaube - Liebe - Hoffnung - wurden alte
                Kirchenlieder modern interpretiert. Die schönsten Lieder aus der
                Serie wurden 2x in Mitteltal, in Dornstetten und in Knittlingen
                aufgeführt.
              </p>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}

          {/* ---------------------card2--------------------------------- */}
          <div className="projects-card-layout mt-2">
            <div>
              <img
                className="project-card-image"
                src={bilderDerPassion}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Bilder der Passion</b>
              </p>
              <p>2008</p>
              <p>
                Tiefgehende Lieder, im Orginal von C.Bittlinger über das Sterben
                Jesu, wurden mit Spielszenen, einem Chor und einer Live-Band
                2mal in Mitteltal aufgeführt.
              </p>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
          {/* ---------------------card3--------------------------------- */}
          <div className="projects-card-layout mt-2">
            <div>
              <img
                className="project-card-image"
                src={bilderDerWeihnacht}
                alt=""
              />
            </div>
            <div className="project-card-description">
              <p>
                <b>Bilder der Weihnacht</b>
              </p>
              <p>2005</p>
              <p>
                Mit Spielszenen, einem Chor und vielen Solisten wurde das
                bekannte Stück von C.Bittlinger umgesetzt.
              </p>
            </div>
          </div>
          {/* -------------------------------------------------------------- */}
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
        {/* ------------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Projects;
