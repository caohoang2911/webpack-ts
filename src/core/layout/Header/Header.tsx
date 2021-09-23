import { Link, Route } from 'react-router-dom';
import './style.scss';
interface MenuLink {
  label: string;
  to: string;
  exactActive?: any;
}
export const Header = () => {
  const CustomLink = ({ label, to, exactActive }: MenuLink) => {
    return (
      <Route
        path={to}
        exact={exactActive}
        children={({ match }) => {
          console.log(match, 'match');
          const active = match ? 'active' : '';
          return (
            <li className={active}>
              <Link to={to}>{label}</Link>
            </li>
          );
        }}
      />
    );
  };
  return (
    <nav className="top-menu">
      <ul>
        <CustomLink to="/" exactActive label="Home" />
        <CustomLink to="/about" label="About" />
      </ul>
    </nav>
  );
};
