import { MenuItem } from './MenuItem.jsx';
import { GoToBtn } from '../shared/GoToBtn.jsx';
import { MenuItemHome } from './MenuItemHome.jsx';

export function MenuRow({ page = '' }) {
    return (
        <div className="menu-row">
            <div className="menu-row-name">J. M. Marques</div>
            {page === 'home' ? <MenuItemHome /> : <MenuItem />}
            <GoToBtn text="Hire Me" />
        </div>
    );
}
