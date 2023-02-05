import React from "react";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="projects">
          <div className="projects-area">
            <div>
              <strong>
                <h2>News</h2>
              </strong>
            </div>
            <div>
              <p className="text-center-align">
                Termine - Konzertvorschau und Rückblicke - Presse -
                Ankündigungen
              </p>
            </div>
            <div className="card-area">
              <div className="projects-card">
                <div>
                  <strong>1.Januar, 2023</strong>
                  <br />-<br />
                  Start meiner neuen Homepage, danke an Josua für die tolle
                  Umsetzung.
                </div>

                {/*<Link to="/project/detail">Read more</Link>*/}
              </div>
              <div className="projects-card">
                <div>
                  <strong>30 Jahre Frozen Heart</strong>
                  <br />-<br />
                  Livevideo zum 30jährigen Jubiläum der CD - Heart of stone
                </div>

                <Link to="/project/detail2">Read more</Link>
              </div>
              <div className="projects-card">
                <div>
                  <strong>9.4.2023 / 6.00Uhr</strong>
                  <br />-<br />
                  Kirche Mitteltal Osternacht mit Chor
                </div>

                <Link to="/project/detail3">Read more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
