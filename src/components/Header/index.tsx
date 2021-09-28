import { memo, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './style.scss';
interface MenuLink {
  label: string;
  to: string;
  exactActive?: any;
}
const Header = () => {
  useEffect(() => {
    console.log('render Header');
  }, []);

  const CustomLink = ({ label, to, exactActive }: MenuLink) => {
    return (
      <Route
        path={to}
        exact={exactActive}
        children={({ match }: any) => {
          const active = match?.isExact ? 'active' : '';
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
        <CustomLink to="/" exactActive={true} label="Home" />
        <CustomLink to="/user" label="About" />
        <CustomLink to="/user/template" label="Detail" />
        <CustomLink to="/t/temp" label="Temp" />
        <CustomLink to="/tele" label="Notfound" />
        <CustomLink to="/detail" label="My detail" />
      </ul>
    </nav>
  );
};
export default memo(Header);
