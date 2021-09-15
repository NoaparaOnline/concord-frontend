import React from 'react'
import './SidebarDashboard.css'
import { Link } from 'react-router-dom'
import logo from '../../../Statics/assets/Sidebar/sidelogo.png'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import icon2 from '../../../Statics/assets/Sidebar/2.png'
import icon3 from '../../../Statics/assets/Sidebar/3.png'
import icon4 from '../../../Statics/assets/Sidebar/4.png'
import icon5 from '../../../Statics/assets/Sidebar/5.png'
const SidebarDashboard = () => {
  return (
    <div>
      <main>


<div className="b-example-divider"></div>

<div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '260px'}}>
 

  <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ">
  <img alt="" className="ms-3" src={logo} />
  </Link>
  <ul className="nav nav-pills flex-column my-2 ">
    <li className="d-flex justify-content-center">
      <span style={{fontSize:'11px'}}>Depot Manager</span>
    </li>
    <li className="d-flex justify-content-center">
      <span style={{fontSize:'11px'}}>Dhaka</span>
    </li>
  </ul>
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="mb-3" >
      <Link href="#" className="nav-link link-dark" aria-current="page">
        <img src={icon1} alt=""/>
        <span style={{fontSize:'12px',padding:'10px',color:'#089DA4'}}>Order History</span>
      </Link>
    </li>
    <li className="mb-3">
      <Link href="#" className="nav-link link-dark">
      <img src={icon2} alt=""/>
      <span style={{fontSize:'12px',padding:'10px',color:'#CB912B'}}>New Order</span>
      </Link>
    </li>
    <li className="mb-3">
      <Link href="#" className="nav-link link-dark">
      <img src={icon3} alt=""/>
      <span style={{fontSize:'12px',padding:'10px',color:'#7F2987'}}>Stock</span>
      </Link>
    </li>
    <li className="mb-3">
      <a href="#" className="nav-link link-dark">
      <img src={icon4} alt=""/>
      <span style={{fontSize:'12px',padding:'10px',color:'#4B8F8C'}}>Delivery Status</span>
      </a>
    </li>
    <li className="mb-3">
      <a href="#" className="nav-link link-dark">
      <img src={icon5} alt=""/>
      <span style={{fontSize:'12px',padding:'10px',color:'#BB2026'}}>Payment </span>
      </a>
    </li>
  </ul>
  <hr/>
  <div className="dropdown ">
    <Link to="#" className="d-flex align-items-center link-dark text-decoration-none " id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
      <i className="fa fa-sign-out rounded-circle me-2 text-danger" ></i>
      <strong className="text-danger" style={{fontSize:'12px',padding:'10px'}}>Logout</strong>
    </Link>
   
  </div>
</div>


</main>
        </div>
  )
}

export default SidebarDashboard
