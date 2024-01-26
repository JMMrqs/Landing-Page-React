import { BannerSocialIcons } from './BannerSocialIcons.jsx';
import { GoToBtn } from '../shared/GoToBtn.jsx';
import { serverUrl } from '../../url.js';

export function BannerContainer() {
    return (
        <div className="banner-container">
            <div className="banner-home-text">
                <h1>
                    Hi, It's me
                    <br />
                    <span className="home-text-large">JOÃO MARCELO MARQUES</span>
                    <br />
                    <span className="home-text-small">And I'm a</span> Developer
                </h1>
                <p>
                    Living life is like climbing a mountain.
                    <br />
                    If the mountain is too tall, you can take a rest and continue climbing, or you
                    can come down and rest before attempting again. There are also many mountains,
                    so you don't have to only try one.
                    <br />
                    [Past Life Regressor]
                </p>
                <BannerSocialIcons />
                <GoToBtn bgColor="orange" text="Download CV" />
            </div>
            <img
                className="banner-img"
                src={`${serverUrl}/static/BannerImage.png`}
                alt="Theme image"
            />
        </div>
    );
}
