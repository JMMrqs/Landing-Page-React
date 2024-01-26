import { GoToBtn } from '../shared/GoToBtn';

export function AboutText({ title, text }) {
    return (
        <div className="about-text">
            <h2>{title}</h2>
            {text?.map((item) => {
                return (
                    <p key={crypto.randomUUID()} style={{ whiteSpace: 'pre-wrap' }}>
                        {item}
                    </p>
                );
            })}
            <GoToBtn text="Read More..." route="about" />
        </div>
    );
}
