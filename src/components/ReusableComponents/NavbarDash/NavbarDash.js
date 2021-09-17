import React from 'react'
import { Heading } from '../../../components'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import HeaderDash from '../HeaderDash/HeaderDash'
import './NavbarDash.css'
const NavbarDash = ({ openSidebar,Heading }) => {
    return (
      <div className="container mt-3" style={{backgroundColor:'#EFFBEF',borderRadius:'10px',width:'96%',padding:'20px',height:'100%'}}>
        
        <nav className="navbar">
        <div className="nav_icon nav_icon_custom" onClick={() => openSidebar()}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
        <h6 className=""style={{fontSize:'20px', fontWeight:'600',color:'#3F4254'}} >{Heading}</h6>
        </div>
        <div className="navbar__right">
         <HeaderDash/>
        </div>
      </nav>
      </div>

    )
}

export default NavbarDash
