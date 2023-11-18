import './Portfolio.css';
import { Heading } from '../../components/shared/Heading.jsx';
import { PortfolioCardsContainer } from '../../components/Portfolio/PortfolioCardsContainer.jsx';

export function Portfolio() {
    return (
        <div className="portfolio">
            <Heading firstWord="Portfolio" />
            <PortfolioCardsContainer />
        </div>
    );
}
