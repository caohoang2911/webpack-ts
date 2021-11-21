import { Menu } from 'antd';
const { SubMenu } = Menu;
import './style.scss';
function HeaderMenu() {
  const handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="header-menu">
      <Menu
        onClick={handleClick}
        selectedKeys={['mail']}
        mode="horizontal"
        style={{ borderBottom: 0 }}
      >
        <Menu.Item key="mail">Home</Menu.Item>
        <SubMenu key="SubMenu" title="Platform">
          <Menu>
            <Menu.Item key="setting:1">Momo platform</Menu.Item>
            <Menu.Item key="setting:2">Momo member</Menu.Item>
          </Menu>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default HeaderMenu;
