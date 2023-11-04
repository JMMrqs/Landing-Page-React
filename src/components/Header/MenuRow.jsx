import { MenuItem } from '../../index';
import { MenuHireMeBtn } from '../../index';

export function MenuRow() {
    return (
        <div>
            <img src="../assets/images/MenuLogo.png" alt="Menu logo" />
            <MenuItem />
            <MenuHireMeBtn />
        </div>
    );
}
