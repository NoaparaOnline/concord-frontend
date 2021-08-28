import React,{useState} from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button, Figure } from 'react-bootstrap'
import './Navbar.css';
import logo from '../../assets/logo.png';
const Navbars = () => {

    return (
<>
 
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top custom-nav ">
 
 <div className="container">

 <img src={logo} style={{width:280,height:60}}></img>
  <button className="navbar-toggler ms-auto mt-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
  <div className="ms-auto">
<div className="row">
<ul className="navbar-nav mb-2 ms-  mb-lg-0 ms-2 pt-1 text-uppercase fontsizefamily">

  
        <li className="nav-item ms-auto">
          <a className="nav-link firstnav" aria-current="page" href="#">Sitemap</a>
        </li>
        <li className="nav-item">
          <a className="nav-link firstnav" aria-current="page" href="#">careers</a>
        </li>
     <div className="col-sm-3">
     <div className="input-group my-1">
  <input style={{height:'28px' ,borderRadius:0,borderColor:'none'}} type="text" className="form-control " placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span style={{height:'28px' ,borderRadius:0}} className="input-group-text" id="basic-addon2">@</span>
  </div>
</div>
     </div>
        <li className="nav-item">
          <a className="nav-link secnav" aria-current="page" href="#">login</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link firstnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT-US
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item conCapitalized " href="#">english</a></li>
            <li><a className="dropdown-item conCapitalized" href="#">arabic</a></li>
            <li><a className="dropdown-item conCapitalized" href="#">bengali</a></li>
          </ul>
        </li>
        </ul>
   
</div> 

<div className="row">
<ul className="navbar-nav mb-auto mt-1 mb-lg-0 ms-auto pt-1 text-uppercase fontsizefamily aa">

        <li className="nav-item ">
          <a className="nav-link secnav active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link secnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT-US
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Vision & Mission</a></li>
            <li><a className="dropdown-item" href="#">Health Associates    </a></li>
            <li><a className="dropdown-item" href="#">Chairman’s Profile   </a></li>
            <li><a className="dropdown-item" href="#">Message from Chairman</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link secnav" href="#">global operation</a>
        </li>
      
    
        <li className="nav-item dropdown">
          <a className="nav-link secnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">By trade name</a></li>
            <li><a className="dropdown-item" href="#">By generic name</a></li>
            <li><a className="dropdown-item" href="#">By therapeutic class</a></li>
            <li><a className="dropdown-item" href="#">first time launching</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link secnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facilities
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Research and Development</a></li>
            <li><a className="dropdown-item" href="#">Product</a></li>
            <li><a className="dropdown-item" href="#">Quality Control</a></li>
            <li><a className="dropdown-item" href="#">Warehouse</a></li>
            <li><a className="dropdown-item" href="#">Our distribution network</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link secnav" href="#">Tele-Medicine</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link secnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            media
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">video</a></li>
            <li><a className="dropdown-item" href="#">photo</a></li>
            <li><a className="dropdown-item" href="#">social media post</a></li>
            <li><a className="dropdown-item" href="#">mile stones</a></li>
            <li><a className="dropdown-item" href="#">social responsibilities</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link secnav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            contact
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">our distribution network</a></li>
            <li><a className="dropdown-item" href="#">contact us</a></li>
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
