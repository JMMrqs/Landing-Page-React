import { GoToBtn } from '../shared/GoToBtn';

export function AboutText() {
    return (
        <div className="about-text">
            <h2>Developer</h2>
            <p>
                - Wu Xiang
                <br />
                _Wu is simply a lack, or emptiness.
                <br />
                _Xiang has many meanings, but in this context refers to Buddhist concept of form or
                external manifestation. Often as opposed to something's intrinsic, unchanging core
                nature.
                <br />
                -Wu Xiang as a term is thus used to signify something so abstract or profound that
                it has no external manifestation.
            </p>
            <p>
                Alternative:
                <br />
                Wu means emptiness;
                <br />
                Xiang means eternal manifestation.
            </p>
            <GoToBtn text="Read More..." />
        </div>
    );
}
