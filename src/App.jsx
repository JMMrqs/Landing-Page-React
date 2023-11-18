import './views/Views.css';

import { Header } from './views/Header/Header.jsx';
import { Banner } from './views/Banner/Banner.jsx';
import { About } from './views/About/About.jsx';
import { Service } from './views/Service/Service.jsx';
import { Skills } from './views/Skills/Skills.jsx';
import { Portfolio } from './views/Portfolio/Portfolio.jsx';
import { Contact } from './views/Contact/Contact.jsx';
import { Footer } from './views/Footer/Footer.jsx';

export function App() {
    return (
        <>
            <Header />
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
