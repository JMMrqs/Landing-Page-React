import { BannerSocialIcons } from "./BannerSocialIcons.jsx";
import { GoToBtn } from "../shared/GoToBtn.jsx";
import { serverUrl } from "../../url.js";
import { fetchIntoState } from "../../composables/DataRequests.js";
import { useState, useEffect } from "react";

export function BannerContainer() {
  const [bannerData, setBannerData] = useState({});
  useEffect(() => {
    fetchIntoState("/api/banner/", setBannerData);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-home-text">
        <h1>
          {bannerData.title1}
          <br />
          <span className="home-text-large">{bannerData.titleSpan1}</span>
          <br />
          <span className="home-text-small">{bannerData.titleSpan2}</span>
          {bannerData.title2}
        </h1>
        <p>{bannerData.paragraph}</p>
        <BannerSocialIcons
          socialIcon1={bannerData.socialIcon1}
          socialIcon2={bannerData.socialIcon2}
          socialIconDesc1={bannerData.socialIconDesc1}
          socialIconDesc2={bannerData.socialIconDesc2}
        />
        <GoToBtn bgColor="orange" text="Download CV" />
      </div>
      <img
        className="banner-img"
        src={`${serverUrl}/static/${bannerData.imgName}`}
        alt={bannerData.imgDesc}
      />
    </div>
  );
}
