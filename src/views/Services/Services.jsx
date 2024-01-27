import "./Services.css";
import { Heading } from "../../components/shared/Heading";
import { ServicesCard } from "../../components/Services/ServicesCard";
import { useState, useEffect } from "react";
import { fetchIntoState } from "../../composables/DataRequests";

export function Services() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetchIntoState("/api/services/", setCardsData);
  }, []);

  return (
    <div className="services">
      <Heading firstWord="My" secondWord="Services" />
      <div className="services-cards">
        {cardsData.map((card) => {
          return (
            <ServicesCard
              key={card.id}
              imgName={card.imgName}
              imgDesc={card.imgDesc}
              title={card.title}
              body={card.body}
            />
          );
        })}
      </div>
    </div>
  );
}
