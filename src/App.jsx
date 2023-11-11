import './css/Views.css';

import { Header } from './views/Header.jsx';
import { Banner } from './views/Banner.jsx';
import { About } from './views/About.jsx';
import { Service } from './views/Service.jsx';
import { Skills } from './views/Skills.jsx';
import { Portfolio } from './views/Portfolio.jsx';
import { Contact } from './views/Contact.jsx';
import { Footer } from './views/Footer.jsx';

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
