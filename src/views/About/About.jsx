import "./About.css";
import { Heading } from "../../components/shared/Heading.jsx";
import { AboutText } from "../../components/About/AboutText.jsx";
import { useState, useEffect } from "react";
import { fetchIntoState } from "../../composables/DataRequests.js";
import { serverUrl } from "../../url.js";

export function About() {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetchIntoState("/api/about/", setAboutData);
  }, []);

  return (
    <div className="about">
      <Heading firstWord="About" secondWord="Me" />
      <div className="about-container">
        <div className="about-image-container">
          <img
            id="profile-img"
            src={`${serverUrl}/static/${aboutData?.imgName}`}
            alt={aboutData?.imgDesc}
          />
        </div>
        <AboutText title={aboutData?.title} text={aboutData?.text} />
      </div>
    </div>
  );
}
