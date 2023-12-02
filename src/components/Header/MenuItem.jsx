import { Link } from 'react-router-dom';

export function MenuItem() {
    return (
        <div className="menu-item">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/service">Services</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
