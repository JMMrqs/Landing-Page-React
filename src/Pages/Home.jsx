import { Banner } from '../views/Banner/Banner.jsx';
import { About } from '../views/About/About.jsx';
import { Service } from '../views/Service/Service.jsx';
import { Skills } from '../views/Skills/Skills.jsx';
import { Portfolio } from '../views/Portfolio/Portfolio.jsx';
import { Contact } from '../views/Contact/Contact.jsx';
import { Header } from '../views/Header/Header.jsx';
import { Footer } from '../views/Footer/Footer.jsx';

export function Home() {
    return (
        <>
            <Header page="home" />
            <Banner />
            <About />
            <Service />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}
