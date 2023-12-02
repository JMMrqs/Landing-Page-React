import './GoToBtn.css';
import { Link } from 'react-router-dom';

export function GoToBtn({ text, bgColor, route = 'none' }) {
    let bgClass = '';
    if (bgColor === 'orange') {
        bgClass = 'go-to-btn-orange';
    }

    return (
        <button className={`go-to-btn ${bgClass}`} type="button">
            {route == 'none' ? text : <Link to={route}>{text}</Link>}
        </button>
    );
}
