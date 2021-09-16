import React,{useEffect} from 'react'
import './SidebarDashboard.css'
import { Link } from 'react-router-dom'
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
        style={{color:'red'}}
        aria-hidden="true"
      ></i>
      
      

    </div>

    <ul className="d-flex flex-column">
    <li className="d-flex justify-content-center">
      <span style={{fontSize:'11px'}}>Depot Manager</span>
    </li>
    <li className="d-flex justify-content-center ms-5">
      <span style={{fontSize:'11px'}}>Dhaka</span>
    </li>
  </ul>

    <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
      <li className="mt-4 ms-2">
        <Link to="/">
          
        <img src={icon1} alt="" width="36" height="36"/>
          <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#089DA4'}}>Order History</span>
        </Link>
      </li>
        
      </div>
      <div className="sidebar__link">
      

      <li className="mt-4 ms-2">
       <Link to="/">
        <img src={icon2} alt="" width="36" height="36"/>
        <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#CB912B'}}>New Order</span>
       </Link>
     </li>


      </div>
      <div className="sidebar__link">
       

      <li className="mt-4 ms-2">
       <Link to="/">
       <img src={icon3} alt="" width="36" height="36"/>
       <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#7F2987'}}>Stocks</span>
       </Link>
     </li>


      </div>
      <div className="sidebar__link">
        
      <li className="mt-4 ms-2">
       <Link to="/">
       <img src={icon4} alt="" width="36" height="36"/>
        <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#4B8F8C'}}>Delivery Status</span>
       </Link>
     </li>


      </div>
      <div className="sidebar__link">
      <li className="mt-4 ms-2">
       <Link to="/">
       <img src={icon5} alt="" width="36" height="36"/>
         <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#BB2026'}}>Payment</span>
       </Link>
       <span class="tooltip">Files</span>
     </li>
      </div>
      <div className="sidebar__link">
      <li className="mt-5 ms-2">
       <Link to="/">
         <i className="fa fa-sign-out" style={{fontSize:'20px',color:'red'}}></i>
         <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'red'}}>Logout</span>
       </Link>
     </li>
        
      </div>
    </div>
  </div>
  )
}

export default SidebarDashboard



