import '../../css/shared.css';
export function GoToBtn({ text, bgColor }) {
    let bgClass = '';
    if (bgColor === 'orange') {
        bgClass = 'go-to-btn-orange';
    }
    return (
        <button className={`go-to-btn ${bgClass}`} type="button">
            {text}
        </button>
    );
}
