import React, { useState } from 'react'
import './SidebarDashboard.css'
import { NavLink } from 'react-router-dom'
import logo from '../../../Statics/assets/Sidebar/sidelogo.png'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import icon2 from '../../../Statics/assets/Sidebar/2.png'
import icon3 from '../../../Statics/assets/Sidebar/3.png'
import icon4 from '../../../Statics/assets/Sidebar/4.png'
import icon5 from '../../../Statics/assets/Sidebar/5.png'
const SidebarDashboard = ({ sidebarOpen, closeSidebar }) => {

  return (
    
      <div className={sidebarOpen ? "sidebar_responsive " : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="d-flex justify-content-center">
            <img src={logo} alt="logo" />
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
            <span style={{ fontSize: '11px', fontWeight: '600' }}>Depot Manager</span>
          </li>
          <li className="d-flex justify-content-center ms-5">
            <span style={{ fontSize: '11px', fontWeight: '600' }}>Dhaka</span>
          </li>
        </ul>
        <div className="sidebar__menu">
          <div className="mt-3">
            <NavLink
              activeClassName="sidebar__link"
              className="sidebar__link"
              exact={true}
              activeStyle={{
                borderRight: '6px solid #089DA4'
              }}
              to="/depotmanager-dashboard">
              <li className="mb-2 ms-4">
                <img src={icon1} alt="" width="36" height="36" />
                <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: '#089DA4', fontWeight: '700' }}>Order History</span>
              </li>
            </NavLink>
          </div>
          <div className="mt-3" >
            <NavLink
              className="sidebar__link"
              activeStyle={{
                borderRight: '6px solid #CB912B'
              }}
              to="/neworder">
              <li className="mb-2 ms-4 ">
                <img src={icon2} alt="" width="36" height="36" />
                <span class="links_name" style={{ fontSize: '12px', padding: '10px', color: '#CB912B', fontWeight: '700' }}>New Order</span>
              </li>
            </NavLink>
          </div>
          <div className="mt-3" >
            <NavLink
              className="sidebar__link"
              activeStyle={{
                borderRight: '6px solid #7F2987'
              }}
              to="/stocks">
              <li className="mb-2 ms-4 ">
                <img src={icon3} alt="" width="36" height="36" />
                <span class="links_name" style={{ fontSize: '12px', padding: '10px', color: '#7F2987', fontWeight: '700' }}>Stocks</span>
              </li>
            </NavLink>
          </div>
          <div className="mt-3" >
            <NavLink
              className="sidebar__link"
              activeStyle={{
                borderRight: '6px solid #4B8F8C'
              }}
              to="/deliverystatus">
              <li className="mb-2 ms-4 ">
                <img src={icon4} alt="" width="36" height="36" />
                <span class="links_name" style={{ fontSize: '12px', padding: '10px', color: '#4B8F8C', fontWeight: '700' }}>Delivery Status</span>
              </li>
            </NavLink>
          </div>
          <div className="mt-3"  >
            <NavLink
              className="sidebar__link"
              activeStyle={{
                borderRight: '6px solid #BB2026'
              }}
              to="/payment">
              <li className="mb-2 ms-4 ">
                <img src={icon5} alt="" width="36" height="36" />
                <span class="links_name" style={{ fontSize: '12px', padding: '10px', color: '#BB2026', fontWeight: '700' }}>Payment</span>
              </li>
            </NavLink>
          </div>
          {/* <div   >
      <li className="mt-
      className="sidebar__link"
       <NavLink to="#">
         <i className="fa fa-sign-out" style={{fontSize:'20px',color:'red'}}></i>
         <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'red'}}>Logout</span>
       </NavLink>
     </li>
        
      </div> */}
        </div>
      </div>
  )
}

export default SidebarDashboard



