import { PortfolioCard } from './PortfolioCard.jsx';

export function PortfolioCardsContainer() {
    const cardImgs = [
        { link: '/images/PortfolioCardImg1.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg1.png', id: crypto.randomUUID() },
        { link: 'images/PortfolioCardImg2.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg3.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg4.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg5.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg6.png', id: crypto.randomUUID() },
        { link: '/images/PortfolioCardImg4.png', id: crypto.randomUUID() },
    ];
    return (
        <div className="portfolio-cards-container">
            {cardImgs.map((image) => {
                return <PortfolioCard key={image.id} image={image.link} />;
            })}
        </div>
    );
}
