export function PortfolioCard({ image, title }) {
  return (
    <div
      className="portfolio-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="portfolio-card-overlay">
        <img src="/images/PortfolioCardHover.svg" />
        <p>Web Design</p>
      </div>
    </div>
  );
}
