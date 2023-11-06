export function Heading({ firstWord, secondWord }) {
    return (
        <h1 className="heading">
            {firstWord} <span>{secondWord}</span>
        </h1>
    );
}
