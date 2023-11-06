export function ServiceCard({ img, title, body }) {
    return (
        <div className="service-card">
            <img src={img} alt="service icon" />
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}
