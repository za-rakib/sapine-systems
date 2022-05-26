import React from "react";

import classes from "./Sidebar.module.css";
import { AiOutlineHome,AiOutlineSchedule } from "react-icons/ai";
import { BsChatLeft, BsGear } from "react-icons/bs";
import { MdOutlinePeople, MdOutlineLibraryBooks } from "react-icons/md";
import { BiMoney, BiPackage } from "react-icons/bi";

const Sidebar = () => {
  // console.log(sideBarItem)
  return (
    <div className={classes.sidebar}>
      <ul className={classes.sidebarList}>
        <li className={classes.sidebarListItem}>
          <AiOutlineHome className={classes.sidebarIcon}/>
          Home
        </li>
        <li  className={classes.sidebarListItem}>
          <BsChatLeft className={classes.sidebarIcon}/>
          Chats
        </li>
        <li  className={classes.sidebarListItem}>
          <AiOutlineSchedule className={classes.sidebarIcon}/>
          Schedules
        </li>
        <li  className={classes.sidebarListItem}>
          <MdOutlinePeople className={classes.sidebarIcon}/>
         Clients
        </li >
        <li  className={classes.sidebarListItem}>
          <MdOutlineLibraryBooks className={classes.sidebarIcon}/>
          Booking
        </li>
        <li  className={classes.sidebarListItem}>
          <BiMoney className={classes.sidebarIcon}/>
          Finance
        </li>
    
        <li  className={classes.sidebarListItem}>
          <BiPackage className={classes.sidebarIcon}/>
          Packages
        </li>
        <li  className={classes.sidebarListItem}>
          <BsGear className={classes.sidebarIcon}/>
          Setting
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
