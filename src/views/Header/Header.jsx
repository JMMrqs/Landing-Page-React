import './Header.css';
import { MenuRow } from '../../components/Header/MenuRow.jsx';

export function Header({ page }) {
    return (
        <div className="header">
            <MenuRow page={page} />
        </div>
    );
}
