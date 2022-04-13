import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  DropboxOutlined,
  CodepenCircleOutlined,
  SlackOutlined,
  AlibabaOutlined,
  RedditOutlined,
} from '@ant-design/icons';
import './style.scss';
import logo from 'assets/icons/logo.png';
import NavHead from './components/NavHead';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;
export interface Iprops {}
const MultiLevel = (props: Iprops) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`menu-sidebar ${!collapsed ? 'open' : ''}`}
      style={{ width: collapsed ? 80 : 256 }}
    >
      <NavHead toggleSidebar={() => setCollapsed(!collapsed)} logo={logo} isOpen={collapsed} />
      <div className="menu-content">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ width: collapsed ? 80 : 251 }}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<DropboxOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<CodepenCircleOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <NavLink to="/users">333</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SlackOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub22" icon={<RedditOutlined />} title="Navigation Three">
            <Menu.Item key="13">Option 9</Menu.Item>
            <Menu.Item key="14">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="15">Option 11</Menu.Item>
              <Menu.Item key="16">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub23" icon={<AlibabaOutlined />} title="Navigation Four">
            <Menu.Item key="17">Option 9</Menu.Item>
            <Menu.Item key="18">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="19">Option 11</Menu.Item>
              <Menu.Item key="20">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};
export default MultiLevel;
