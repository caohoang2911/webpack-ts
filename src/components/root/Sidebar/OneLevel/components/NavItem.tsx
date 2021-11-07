import BaseIcon from "components/commons/BaseIcon";
import { Link, Route } from "react-router-dom";


interface MenuLink {
    label: string;
    icon: string
    to: string;
    exactActive?: any;
}
const NavItem = ({ label, to, icon, exactActive }: MenuLink) => {
    return (
        <Route
            path={to}
            exact={exactActive}
            children={({ match }: any) => {
                const active = match?.isExact ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            <BaseIcon icon={icon} />
                            <span className="links_name">{label}</span>
                        </Link>
                        <span className="tooltip">{label}</span>
                    </li>
                );
            }}
        />
    )
}

export default NavItem;
