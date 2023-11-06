import { PortfolioCard } from './PortfolioCard.jsx';

export function PortfolioCardsContainer() {
    const cardImgs = [
        '../../../public/images/PortfolioCardImg1.png',
        '../../../public/images/PortfolioCardImg1.png',
        '../../../public/images/PortfolioCardImg2.png',
        '../../../public/images/PortfolioCardImg3.png',
        '../../../public/images/PortfolioCardImg4.png',
        '../../../public/images/PortfolioCardImg5.png',
        '../../../public/images/PortfolioCardImg6.png',
        '../../../public/images/PortfolioCardImg7.png',
    ];
    return (
        <div className="portfolio-cards-container">
            {cardImgs.map((image) => {
                return <PortfolioCard image={image} />;
            })}
        </div>
    );
}
