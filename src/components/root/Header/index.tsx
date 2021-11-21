import { Avatar } from 'antd';
import { memo } from 'react';
import './style.scss';
import { Menu, Dropdown } from 'antd';
import { useSidebar } from 'core/layout/DefaultLayout';
import HeaderMenu from './components/HeaderMenu';
const Header = () => {
  const [, dispatch] = useSidebar();
  const menu = (
    <Menu>
      <Menu.Item key="name-user" className="menu-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="bx bx-user"></div> &nbsp;
          <div className="w-40 overflow-ellipsis overflow-hidden truncate ">
            CAO XUÂN HOÀNG - ITC - AI & Big Data - Front-end Developer
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="logout" className="menu-item">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="bx bx-log-out"></div> &nbsp;
          <div>Logout</div>
        </div>
      </Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item key="development" className="menu-item ">
        <div className="px-2">Development</div>
      </Menu.Item>
      <Menu.Item key="staging" className="menu-item ">
        <div className="px-2">Staging</div>
      </Menu.Item>
      <Menu.Item key="production" className="menu-item">
        <div className="px-2">Production</div>
      </Menu.Item>
    </Menu>
  );
  function handleButtonClick(e) {
    console.info('Click on left button.');
    console.log('click left button', e);
  }
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <h3 className="title-obj">Hello Momo </h3>
          <span className="bars" onClick={() => dispatch('open')}>
            <i className="bx bx-menu bx-menu" id="btn"></i>
          </span>
          <HeaderMenu />
          <div className="flex justify-center items-center">
            <div className="env mr-3">
              <Dropdown.Button onClick={handleButtonClick} overlay={menu2}>
                Development
              </Dropdown.Button>
            </div>
            <div className="avatar">
              <Dropdown overlay={menu} placement="bottomRight">
                <div>
                  <Avatar src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" />
                  {/* <span>&nbsp;Hoang.cao</span> */}
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default memo(Header);
