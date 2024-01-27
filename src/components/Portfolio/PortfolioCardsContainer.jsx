import { PortfolioCard } from "./PortfolioCard.jsx";
import { serverUrl } from "../../url.js";
import { fetchIntoState } from "../../composables/DataRequests.js";
import { useState, useEffect } from "react";

export function PortfolioCardsContainer() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetchIntoState("/api/portfolio/", setCardData);
  }, []);

  return (
    <div className="portfolio-cards-container">
      {cardData.map((card) => {
        return (
          <PortfolioCard
            key={card.id}
            image={`${serverUrl}/static/${card.link}`}
            title={card.title}
          />
        );
      })}
    </div>
  );
}
