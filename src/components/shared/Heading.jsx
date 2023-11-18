import '../../css/shared.css';
export function Heading({ firstWord = null, secondWord = null }) {
    return (
        <h1 className="heading">
            {firstWord} {secondWord && <span>{secondWord}</span>}
        </h1>
    );
}
