import './About.css';
import { Heading } from '../../components/shared/Heading.jsx';
import { AboutText } from '../../components/About/AboutText.jsx';

export function About() {
    return (
        <div className="about">
            <Heading firstWord="About" secondWord="Me" />
            <div className="about-container">
                <div className="about-image-container">
                    <img id="profile-img" src="/images/AboutImageAnime.jpeg" alt="" />
                </div>
                <AboutText />
            </div>
        </div>
    );
}
