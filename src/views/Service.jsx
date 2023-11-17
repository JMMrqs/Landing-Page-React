import '../css/Service.css';
import { Heading } from '../components/shared/Heading';
import { ServiceCard } from '../components/Service/ServiceCard';

export function Service() {
    const cardsData = [
        {
            id: crypto.randomUUID(),
            img: '/images/ServiceLaptopCode.svg',
            title: 'BackEnd Web Development',
            body: 'Creation and Maintenance of Node and Flask based back ends and SQL based databases (Maintenance)',
        },
        {
            id: crypto.randomUUID(),
            img: '/images/ServiceLaptopCode.svg',
            title: 'FrontEnd Web Development',
            body: 'Creation and Maintenance of Vanilla Stack and React based front ends',
        },
        {
            id: crypto.randomUUID(),
            img: '/images/ServiceChartBar.svg',
            title: '[PLACEHOLDER]',
            body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        },
    ];
    return (
        <div className="service">
            <Heading firstWord="My" secondWord="Services" />
            <div className="service-cards">
                {cardsData.map((card) => {
                    return (
                        <ServiceCard
                            key={card.id}
                            img={card.img}
                            title={card.title}
                            body={card.body}
                        />
                    );
                })}
            </div>
        </div>
    );
}
