import { serverUrl } from "../../url";

export function BannerSocialIcons({
  socialIcon1,
  socialIcon2,
  socialIconDesc1,
  socialIconDesc2,
}) {
  return (
    <div className="banner-social-icons">
      <img src={`${serverUrl}/static/${socialIcon1}`} alt={socialIconDesc1} />
      <img src={`${serverUrl}/static/${socialIcon2}`} alt={socialIconDesc2} />
    </div>
  );
}
