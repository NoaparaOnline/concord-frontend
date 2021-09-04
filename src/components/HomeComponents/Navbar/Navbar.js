import React from 'react'
import './Navbar.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom'

const Navbars = () => {

    return (
<>
 
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top custom-nav ">
 
 <div className="container">

 <img alt="" src={logo} style={{width:280,height:60}}></img>
  <button className="navbar-toggler toggle-iconcustome ms-auto mt-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
  <div className="ms-auto">
<div className="row">
<ul className="navbar-nav  justify-content-end text-uppercase fontsizefamily">

        <li className="nav-item ">
          <Link className="nav-link firstnav" aria-current="page" to="/sitemap">Sitemap</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link firstnav" aria-current="page" to="/careers">careers</Link>
        </li>
     <div className="col-sm-3">
     <div className="input-group my-1">
  <input style={{height:'28px' ,borderRadius:0,borderColor:'none'}} type="text" className="form-control " placeholder="Enter here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
          
    <span style={{height:'28px' ,borderRadius:0}} className="input-group-text" id="basic-addon2">
    <i className="fa fa-search"></i>
    </span>
  </div>
</div>
     </div>
        <li className="nav-item">
          <Link  className="nav-link secnav" aria-current="page" to="/login">login</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link firstnav dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT-US
          </Link>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item conCapitalized " to="/">english</Link></li>
            <li><Link className="dropdown-item conCapitalized" to="/">arabic</Link></li>
            <li><Link className="dropdown-item conCapitalized" to="/">bengali</Link></li>
          </ul>
        </li>
        </ul>
   
</div> 

<div className="row">
<ul className="navbar-nav mb-auto mt-1 mb-lg-0 ms-auto pt-1 text-uppercase fontsizefamily aa">

        <li className="nav-item ">
          <Link className="nav-link secnav active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link secnav dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT-US
          </Link>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/about_vision_mission">Vision & Mission</Link></li>
            <li><Link className="dropdown-item" to="/">Health Associates    </Link></li>
            <li><Link className="dropdown-item" to="/">Chairman’s Profile   </Link></li>
            <li><Link className="dropdown-item" to="/about_message_chairmen">Message from Chairman</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link secnav" to="/globalOperations">global operation</Link>
        </li>
      
    
        <li className="nav-item dropdown">
          <Link className="nav-link secnav dropdown-toggle" to="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/products_bytrade">By trade name</Link></li>
            <li><Link className="dropdown-item" to="/products_bygeneric">By generic name</Link></li>
            <li><Link className="dropdown-item" to="/products_therapeutic">By therapeutic class</Link></li>
            <li><Link className="dropdown-item" to="/products_firsttime">first time launching</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link secnav dropdown-toggle" to="/facilities" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facilities
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/facilities_researchdevrsttime">Research and Development</Link></li>
            <li><Link className="dropdown-item" to="/facilities_product">Product</Link></li>
            <li><Link className="dropdown-item" to="/facilities_quality">Quality Control</Link></li>
            <li><Link className="dropdown-item" to="/facilities_warhouse">Warehouse</Link></li>
            <li><Link className="dropdown-item" to="/facilities_ourdistribution">Our distribution network</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link secnav" to="/teleMedicine">Tele-Medicine</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link secnav dropdown-toggle" to="/media" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            media
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/media_video">video</Link></li>
            <li><Link className="dropdown-item" to="/media_photo">photo</Link></li>
            <li><Link className="dropdown-item" to="/media_socialmedia">social media post</Link></li>
            <li><Link className="dropdown-item" to="/media_milestone">mile stones</Link></li>
            <li><Link className="dropdown-item" to="/media_socialresponsiblities">social responsibilities</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link secnav dropdown-toggle" to="/contact" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            contact
          </Link>
          <ul className="dropdown-menu hovercolr" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/facilities_ourdistribution">our distribution network</Link></li>
            <li><Link className="dropdown-item" to="/contact_contactus">contact us</Link></li>
          </ul>
        </li>
      </ul>
   
</div>
    </div>
   
  </div>
 </div>
</nav>

  </>
    )
}

export default Navbars
