import React,{useEffect} from 'react'
import './SidebarDashboard.css'
import { Link } from 'react-router-dom'
import logo from '../../../Statics/assets/Sidebar/sidelogo.png'
import icon1 from '../../../Statics/assets/Sidebar/1.png'
import icon2 from '../../../Statics/assets/Sidebar/2.png'
import icon3 from '../../../Statics/assets/Sidebar/3.png'
import icon4 from '../../../Statics/assets/Sidebar/4.png'
import icon5 from '../../../Statics/assets/Sidebar/5.png'
const SidebarDashboard = () => {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
  
    closeBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
      menuBtnChange();//calling the function(optional)
  },[]);
  

  
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
     if(sidebar.classList.contains("open")){
       closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
     }else {
       closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
     }
    }
  }, []);
 
  return (
    <div>

<div class="sidebar">
    <div class="logo-details">
        <div class="logo_name">

        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none ">
  <img alt="" className="ms-3" src={logo} />
  </Link>

        </div>
        <i class='fa fa-bars' id="btn" style={{color:'red',fontSize:'24px'}} ></i>
    </div>

    <ul className="logo-details flex-column">
     
    <li className="d-flex justify-content-end">
      <span class="links_name" style={{fontSize:'12px'}}>Depot Manager</span>
    </li>
    <li className="d-flex justify-content-end">
      <span class="links_name" style={{fontSize:'12px'}}>Dhaka</span>
    </li>
    
  </ul>

    <ul class="nav-list">
      
      <li className="ms-2">
        <a href="#">
          
        <img src={icon1} alt=""/>
          <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#089DA4'}}>Order History</span>
        </a>
      </li>
      <li className="mt-5 ms-2">
       <a href="#">
        <img src={icon2} alt=""/>
        <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#CB912B'}}>New Order</span>
       </a>
     </li>
     <li className="mt-5 ms-2">
       <a href="#">
       <img src={icon3} alt=""/>
       <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#7F2987'}}>Stocks</span>
       </a>
     </li>
     <li className="mt-5 ms-2">
       <a href="#">
       <img src={icon4} alt=""/>
        <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#4B8F8C'}}>Delivery Status</span>
       </a>
     </li>
     <li className="mt-5 ms-2">
       <a href="#">
       <img src={icon5} alt=""/>
         <span class="links_name" style={{fontSize:'12px',padding:'10px',color:'#BB2026'}}>Payment</span>
       </a>
       <span class="tooltip">Files</span>
     </li>
     <li class="profile">
         <div class="profile-details">
           <i class="fa fa-user" style={{fontSize:'24px',color:'black'}}></i>
           <div class="name_job" >
             <div class="name">Concord</div>
             <div class="job">Depot Manager</div>
           </div>
         </div>
         <i class='fa fa-sign-out' style={{fontSize:'24px',color:'#0066b3'}} id="log_out" ></i>
     </li>
    </ul>
  </div>

    </div>
  )
}

export default SidebarDashboard
