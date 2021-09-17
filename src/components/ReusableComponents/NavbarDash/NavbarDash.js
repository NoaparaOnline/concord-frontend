import React from 'react'
import { Heading } from '../../../components'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import HeaderDash from '../HeaderDash/HeaderDash'
import './NavbarDash.css'
const NavbarDash = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
        <div className="nav_icon nav_icon_custom" onClick={() => openSidebar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
        <h6 className=""style={{fontSize:'20px', fontWeight:'600',color:'#3F4254'}} >Order History</h6>
        </div>
        <div className="navbar__right">
         <HeaderDash/>
        </div>
      </nav>
    )
}

export default NavbarDash
