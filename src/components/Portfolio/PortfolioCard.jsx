export function PortfolioCard({ image }) {
    return (
        <div className="portfolio-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="portfolio-card-overlay">
                <img src="../../../public/images/PortfolioCardHover.svg" />
                <p>Web Design</p>
            </div>
        </div>
    );
}
