import { serverUrl } from "../../url";

export function ServicesCard({ imgName, title, body, imgDesc }) {
  return (
    <div className="services-card">
      <img src={`${serverUrl}/static/${imgName}`} alt="services icon" />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
