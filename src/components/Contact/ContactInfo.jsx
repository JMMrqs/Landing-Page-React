import { serverUrl } from "../../url";

export function ContactInfo({
  phoneNumber,
  phoneIcon,
  phoneIconDesc,
  email,
  emailIcon,
  emailIconDesc,
  location,
  locationIcon,
  locationIconDesc,
}) {
  return (
    <div className="contact-info">
      <div className="contact-info-item">
        <img src={`${serverUrl}/static/${phoneIcon}`} alt={phoneIconDesc} />
        <p>{phoneNumber}</p>
      </div>
      <div className="contact-info-item">
        <img src={`${serverUrl}/static/${emailIcon}`} alt={emailIconDesc} />
        <p>{email}</p>
      </div>
      <div className="contact-info-item">
        <img
          src={`${serverUrl}/static/${locationIcon}`}
          alt={locationIconDesc}
        />
        <p>{location}</p>
      </div>
    </div>
  );
}
