import React from "react";
import "./Navbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navLeft">
        <div className="logo">Sapine System</div>
      </div>
      <div className="navRight">
        <div className="icons">
          <IoIosNotificationsOutline className='icon' />
          <CgMenuGridR className='icon' />
          <div className="profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
