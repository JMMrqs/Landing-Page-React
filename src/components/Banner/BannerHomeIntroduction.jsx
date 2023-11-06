import { BannerSocialIcons } from './BannerSocialIcons.jsx';
import { GoToBtn } from '../shared/GoToBtn.jsx';

export function BannerHomeIntroduction() {
    return (
        <div className="banner-home-introduction">
            <div className="banner-home-text">
                <h1>
                    Hi, It's me
                    <br />
                    <span className="home-text-large">MD RIEAD MIA</span>
                    <br />
                    <span className="home-text-small">And I'm a</span> Frontend Developer
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat
                    quisquam voluptas, quis, expedita distinctio ullam modi eaque aut quidem rerum
                    reprehenderit incidunt! Asperiores aliquam omnis ullam distinctio sed nisi?
                </p>
                <BannerSocialIcons />
                <GoToBtn bgColor="#F86F03" text="Download CV" />
            </div>
            <img
                className="banner-img"
                src="../../../public/images/BannerImage.png"
                alt="Theme image"
            />
        </div>
    );
}
