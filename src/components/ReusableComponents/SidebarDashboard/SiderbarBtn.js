import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarDashboard.css'
const SiderbarBtn = (props) => {
    const {borderSidebtn,btnroute,imgbtn,btnName,match,Colr} = props;
    return (
        <>
          <div className="mt-3">
            <NavLink
              activeClassName="sidebar__link"
              className="sidebar__link"
              exact={true}
              activeStyle={borderSidebtn}
              onClick={props.onClick}
              to={`${match.path}/${btnroute}`}>
              <li className="mb-2 ms-4">
                <img src={imgbtn} alt="" width="36" height="36" />
                <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: Colr, fontWeight: '700' }}>{btnName}</span>
              </li>
            </NavLink>
          </div>  
        </>
    )
}

export default SiderbarBtn
