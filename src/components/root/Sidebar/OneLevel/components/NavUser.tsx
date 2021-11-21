import { Avatar, Image } from 'antd';
import React from 'react';

const NavUser = ({ name, title, avatar }) => {
  return (
    <li className="profile">
      <div className="profile-details">
        {/* <img src={avatar} alt="profileImg" /> */}
        <Avatar alt="Remy Sharp" src={avatar} />
        <div className="name_job">
          <div className="name">{name}</div>
          <div className="job">{title}</div>
        </div>
      </div>
      <i className="bx bx-log-out" id="log_out"></i>
    </li>
  );
};

export default NavUser;
