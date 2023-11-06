import { Heading } from '../components/shared/Heading';
import { ServiceCard } from '../components/Service/ServiceCard';

export function Service() {
    const cardsData = [
        {
            img: '../../public/images/ServiceLaptopCode.svg',
            title: 'Web Development',
            body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        },
        {
            img: '../../public/images/ServiceMobileAlt.svg',
            title: 'Apps Development',
            body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        },
        {
            img: '../../public/images/ServiceChartBar.svg',
            title: 'Digital Marketing',
            body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        },
    ];
    return (
        <div className="service">
            <Heading firstWord="My" secondWord="Services" />
            <div className="service-cards">
                {cardsData.map((card) => {
                    return <ServiceCard img={card.img} title={card.title} body={card.body} />;
                })}
            </div>
        </div>
    );
}
