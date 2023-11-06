import { MenuItem } from './MenuItem.jsx';
import { GoToBtn } from '../shared/GoToBtn.jsx';

export function MenuRow() {
    return (
        <div className="menu-row">
            <img src="../../../public/images/MenuLogo.png" alt="Menu logo" />
            <MenuItem />
            <GoToBtn text="Hire Me" />
        </div>
    );
}
