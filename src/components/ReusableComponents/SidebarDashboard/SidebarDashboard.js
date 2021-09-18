import React, { useState } from 'react'
import './SidebarDashboard.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../Statics/assets/Sidebar/sidelogo.png'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import icon2 from '../../../Statics/assets/Sidebar/2.png'
import icon3 from '../../../Statics/assets/Sidebar/3.png'
import icon4 from '../../../Statics/assets/Sidebar/4.png'
import icon5 from '../../../Statics/assets/Sidebar/5.png'
const SidebarDashboard = (props) => {
  const {sidebarOpen, closeSidebar}= props;
  console.log(props);
  return (
      <div className={sidebarOpen ? "sidebar_responsive " : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="d-flex justify-content-center">
           <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            style={{ color: 'red' }}
            aria-hidden="true"
          ></i>
        </div>
        <ul className="d-flex flex-column">
          <li className="d-flex justify-content-center">
            <span style={{ fontSize: '11px', fontWeight: '600' }}>{props.DesignationUser}</span>
          </li>
          <li className="d-flex justify-content-center ms-5">
            <span style={{ fontSize: '11px', fontWeight: '600' }}>{props.Loca}</span>
          </li>
        </ul>
        <div className="sidebar__menu">
         {props.buttonSidebar}
        </div>
      </div>
  )
}

export default SidebarDashboard



