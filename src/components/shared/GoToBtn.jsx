import '../../css/shared.css';
export function GoToBtn({ text, bgColor }) {
    return (
        <button className="go-to-btn" type="button" style={{ backgroundColor: bgColor }}>
            {text}
        </button>
    );
}
