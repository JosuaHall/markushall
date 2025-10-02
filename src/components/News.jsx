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
                  <strong>Lady Blue & The Band</strong>
                  <br />-<br />
                  13.Dezember Kellerassel - Baiersbronn
                  <br />-<br />
                </div>

                <Link to="/project/detail">Read more</Link>
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
                  <strong>Musik zum Gottesdienst</strong>
                  <br />-<br />
                  Christuskirche Mitteltal am 9.11.2025
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
