import '../css/About.css';
import { Heading } from '../components/shared/Heading.jsx';
import { AboutText } from '../components/About/AboutText.jsx';

export function About() {
    return (
        <div className="about">
            <Heading firstWord="About" secondWord="Me" />
            <div className="about-container">
                <img src="../../public/images/AboutImg.png" alt="" />
                <AboutText />
            </div>
        </div>
    );
}
