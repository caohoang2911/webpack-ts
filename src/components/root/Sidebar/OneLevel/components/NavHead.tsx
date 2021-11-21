import React from 'react';

const NavHead = ({ toggleSidebar, logo, isOpen }) => {
  return (
    <div className="logo-details">
      <img className="icon" src={logo} width="40" height="40" />
      <i
        onClick={toggleSidebar}
        className={`bx bx-menu ${isOpen ? 'bx-menu-alt-right' : 'bx-menu'}`}
        id="btn"
      ></i>
    </div>
  );
};

export default NavHead;
