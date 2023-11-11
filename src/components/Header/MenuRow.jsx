import { MenuItem } from './MenuItem.jsx';
import { GoToBtn } from '../shared/GoToBtn.jsx';

export function MenuRow() {
    return (
        <div className="menu-row">
            <div className="menu-row-name">J. M. Marques</div>
            <MenuItem />
            <GoToBtn text="Hire Me" />
        </div>
    );
}
