import React from 'react'
import { NavLink } from 'react-router-dom'
import './SidebarDashboard.css'
const SiderbarBtn = (props) => {
    const {borderSidebtn,btnroute,imgbtn,btnName,match,Colr,classlogout,disablelink} = props;
    return (
        <>
          <div className="mt-3">
            {disablelink ? 
            
            <NavLink
            activeClassName="sidebar__link"
            className={`sidebar__link ${classlogout}`}
            exact
            activeStyle={borderSidebtn}
            onClick={props.onClick}                                                                                                                
            to='/'
            >
            <li className="mb-2 ms-4">
              <img src={imgbtn} alt="logo" width="36" height="36" />
              <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: Colr, fontWeight: '700' }}>{btnName}</span>
            </li>
          </NavLink>
              :
              <NavLink
              activeClassName="sidebar__link"
              className={`sidebar__link ${classlogout}`}
              exact
              activeStyle={borderSidebtn}
              onClick={props.onClick}
              id={props.idclicked}
              to={`${match.path}/${btnroute}`} 
              >
              <li className="mb-2 ms-4">
                <img src={imgbtn} alt="logo" width="36" height="36" />
                <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: Colr, fontWeight: '700' }}>{btnName}</span>
              </li>
            </NavLink>
            }
            
          </div>  
        </>
    )
}

export default SiderbarBtn
