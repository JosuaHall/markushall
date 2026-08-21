import React from "react";
import pic from "../pictures/home/mh_facebook.png";

function About() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="header-content">
          <div className="header-content-left">
            <div>
              <h2>Sie suchen die passende Livemusik für ihr Event?</h2>
              <p>
                Ob mit kompletter Blues & Rockband oder in kleiner, feiner
                Akustikbesetzung -<br></br>wir bieten die passende musikalische
                Begleitung für Ihren Anlass.
                <br></br>Mit stilvollem, harmonischen Gesang, professioneller
                Performance und modernster Ton- und Lichttechnik sorgen wir für
                den richtigen Sound und eine besondere Atmosphäre - ganz gleich,
                ob bei privaten Feiern, Hochzeiten, Firmenevents oder
                öffentlichen Veranstaltungen.<br></br>Lassen Sie uns gemeinsam
                die passende musikalische Lösung für Ihr Event finden. Schreiben
                Sie mich einfach an - ich freue mich auf Ihre Anfrage!
              </p>
            </div>
          </div>
          <div className="about-content-right">
            <img src={pic} className="about-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
