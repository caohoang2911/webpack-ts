import { Avatar } from 'antd';
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
        //  <nav className="top-menu">
        //    <ul>
        //      <CustomLink to="/" exactActive={true} label="Home" />
        //      <CustomLink to="/user" label="About" />
        //      <CustomLink to="/user/template" label="Detail" />
        //      <CustomLink to="/t/temp" label="Temp" />
        //      <CustomLink to="/tele" label="Notfound" />
        //      <CustomLink to="/detail" label="My detail" />
        //    </ul>
        //  </nav>
        <>
            <header className="header">
                <div className="header-wrapper">
                    <h3 className="title-obj">Hello Momo </h3>
                    <div className="avatar">
                        {/* <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" alt="profileImg" /> */}
                        <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
                        <span>&nbsp;Hoang.cao</span>
                    </div>
                </div>
            </header>
            <ul className="temp">
                <li>Home</li> &nbsp;/&nbsp;
                <li>Product</li> &nbsp;/&nbsp;
                <li className="active">Product detail</li>
            </ul>
        </>
    );
};
export default memo(Header);
