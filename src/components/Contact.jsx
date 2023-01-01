import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <div className="inner-wrapper">
      <div className="content">
        <div className="contact-content">
          <h2>Contact</h2>
          <div className="social-icons">
            <div
              onClick={() =>
                window.open("https://www.facebook.com/MarkusHall160263/")
              }
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                color="#3b5998"
                size={"2x"}
              />
            </div>

            <div
              onClick={() =>
                window.open("https://www.instagram.com/rocky160263/")
              }
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className="insta"
                color="#d6249f"
                size={"2x"}
              />
            </div>
            <div
              onClick={() =>
                window.open("https://www.youtube.com/@markushall/")
              }
            >
              <FontAwesomeIcon
                icon={["fab", "youtube"]}
                size={"2x"}
                color="#c4302b"
              />
            </div>
            <div onClick={() => window.open("mailto:info@markushall.de")}>
              <FontAwesomeIcon
                icon={["fab", "google"]}
                size={"2x"}
                color="#3cba54"
              />
            </div>
            <div
              onClick={() =>
                window.open("https://soundcloud.com/user-433784109/")
              }
            >
              <FontAwesomeIcon
                icon={["fab", "soundcloud"]}
                size={"2x"}
                color="#F26F23"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
