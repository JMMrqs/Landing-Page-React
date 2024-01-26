import './About.css';
import { Heading } from '../../components/shared/Heading.jsx';
import { AboutText } from '../../components/About/AboutText.jsx';
import { useState, useEffect } from 'react';
import { fetchFromServer } from '../../composables/DataRequests.js';

export function About() {
    const [aboutData, setAboutData] = useState(null);
    const url = 'http://localhost:4000';
    // TODO: FIX USEEFFECT POSSIBLY NOT WAITING FOR FETCH FUNCTION
    useEffect(async () => {
        setAboutData(fetchFromServer('/api/about/'));
    }, []);
    return (
        <div className="about">
            <Heading firstWord="About" secondWord="Me" />
            <div className="about-container">
                <div className="about-image-container">
                    <img
                        id="profile-img"
                        src={`${url}/static/${aboutData?.imgName}`}
                        alt={aboutData?.imgDesc}
                    />
                </div>

                <AboutText title={aboutData?.title} text={aboutData?.text} />
            </div>
        </div>
    );
}
