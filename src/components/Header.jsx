import React from "react";
import drums from "../pictures/home/mh_drums_platzmeister22.jpg";

function Header() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="header-area">
          <div className="header-markus-hall">
            <h1>Markus Hall</h1>
            <p>
              Sie suchen die passende Livemusik für ihr Event? Ob mit kompletter
              Blues & Rockband oder in kleiner, feiner Akustikbesetzung - wir
              bieten die passende musikalische Begleitung für Ihren Anlass. Mit
              stilvollem, harmonischen Gesang, professioneller Performance und
              modernster Ton- und Lichttechnik sorgen wir für den richtigen
              Sound und eine besondere Atmosphäre - ganz gleich, ob bei privaten
              Feiern, Hochzeiten, Firmenevents oder öffentlichen
              Veranstaltungen. Lassen Sie uns gemeinsam die passende
              musikalische Lösung für Ihr Event finden. Schreiben Sie mich
              einfach an - ich freue mich auf Ihre Anfrage!
            </p>
          </div>
          <div className="drums-img">
            <img src={drums} alt="" />
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
