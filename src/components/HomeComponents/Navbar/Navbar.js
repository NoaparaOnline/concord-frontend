import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../Statics/assets/logo.png";
import langlogo from "../../../Statics/assets/languagelogo.png";
import enlang from "../../../Statics/assets/languages/english.jpg";
import arlang from "../../../Statics/assets/languages/arbic.jpg";
import bnlang from "../../../Statics/assets/languages/bangali.jpg";
import { NavLink, Link } from "react-router-dom";
import Login from "../../../Pages/Login";
import { useLocation } from 'react-router-dom';



// 
import { useDispatch, useSelector } from "react-redux";
import {
  logoutUser,
} from "../../../Store/Actions/loginActions";
import profileLogo from "../../../Statics/assets/profile-logo.png";

// 






const Navbars = (props) => {

  console.log(props);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    props?.history?.push("/");
  };
const user = useSelector((state) => state?.logIn?.user);
  const profileHandler = () => {
      if (!user) {
        props.history.push("/depotmanager-dashboard");
      }
  };






  const [show, setShow] = useState(false);
  const [langbtnshow, setLangbtnshow] = useState(false);
  const [showdiv, setShowdiv] = useState(true);

  const handleClose = () => 
  {
      setShow(!show);
      setShowdiv(true);

  }
  const handleShow = () => {

    setShow(!show);
  };
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top custom-nav ">
        <div className="container">
          <Link to="/">
            <img
              alt=""
              src={logo}
              style={{ minWidth: "150px", minHeight: "40px", height: 60 }}
            />
          </Link>

          <button
            className="navbar-toggler toggle-iconcustome ms-auto mt-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
     
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-auto">
              <div className="row">
                <ul className="navbar-nav  justify-content-end text-uppercase fontsizefamily">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link firstnav"
                      aria-current="page"
                      to="/sitemap"
                    >
                      <span className="">Sitemap</span>
                      {/* <span className="custom_span_style"></span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link firstnav"
                      aria-current="page"
                      to="/careers"
                    >
                      careers
                    </NavLink>
                  </li>
                  <div className="col-sm-3">
                    <div className="input-group my-1">
                      <input
                        style={{
                          height: "28px",
                          borderRadius: 0,
                          borderColor: "none",
                        }}
                        type="text"
                        className="form-control "
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <span
                          style={{ height: "28px", borderRadius: 0 }}
                          className="input-group-text"
                          id="basic-addon2"
                        >
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>







                  {user ? (
              <>
                <div className="mr-4" id="navbar-list-4">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link dropdown-toggle"
                        // to="/patient-dashboard"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={profileLogo}
                          alt=""
                          width="40"
                          height="40"
                          className="rounded-circle"
                        />
                      </Link>
                      <div
                        className="dropdown-menu profile-nav-dropdown"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <Link
                          className="dropdown-item"
                          to="/depotmanager-dashboard"
                          onClick={() => profileHandler()}
                        >
                          <i
                            className="fa fa-id-card ms-2"
                            style={{ fontSize: "14.5px" }}
                          ></i>{" "}
                          Dashboard
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="/"
                          onClick={() => logoutHandler()}
                        >
                          <i
                            className="fa fa-sign-out ms-2"
                            style={{ fontSize: "14.5px" }}
                          ></i>{" "}
                          Log Out
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <li className="nav-item ">
              <i className="fa fa-user fs-5 ms-3" aria-hidden="true"></i>
              <Link
                className="nav-link secnav text-capitalize "
                onClick={() => {
                  handleShow();
                }}
                style={{ clear: "both", marginTop: "-10px" }}
                aria-current="page"
                to="#"
              >
                login
              </Link>
            </li>
        
            )}






























                  <li className="nav-item dropdown disablehover">
                    <span
                      className="nav-link firstnav dropdown-toggle"
                      role="button"
                      id="dropdownMenuOffset"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-offset="10,20"
                      onClick={()=>setLangbtnshow(!langbtnshow)}
                    >
                      <img
                        src={langlogo}
                        alt="language"
                        style={{ width: "23px" }}
                      />
                    </span>

                   
                      <ul
                        className={ langbtnshow ?`dropdown-menu enablehover-menu dropdown-menu-right` : `disablehover-menu dropdown-menu-right`}
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <Link
                            className="dropdown-item conCapitalized "
                            to="#"
                          >
                            <span>
                              {" "}
                              <img
                                src={enlang}
                                alt="english"
                                style={{ width: "22px", marginRight: "10px" }}
                              />{" "}
                              english
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item conCapitalized" to="#">
                            <span>
                              {" "}
                              <img
                                src={arlang}
                                alt="arabic"
                                style={{ width: "22px", marginRight: "10px" }}
                              />
                              arabic{" "}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item conCapitalized" to="#">
                            <span>
                              {" "}
                              <img
                                src={bnlang}
                                alt="bengali"
                                style={{ width: "22px", marginRight: "10px" }}
                              />
                              bengali
                            </span>
                          </Link>
                        </li>
                      </ul>
                  </li>
                </ul>
              </div>

              <div className="row">
                <ul className="navbar-nav mb-auto mt-1 mb-lg-0 ms-auto pt-1 text-uppercase fontsizefamily aa">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link secnav "
                      aria-current="page"
                      to="/" 
                      exact={true}
                      activeClassName="active"

                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown ">
                    <NavLink
                      className="nav-link secnav dropdown-toggle "
                      role="button"
                      to="/about"
                      id="dropdownMenuOffset"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-offset="10,20"
                      activeClassName="active"
                    >
                      ABOUT-US
                    </NavLink>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuOffset"
                      style={{
                        paddingTop: "15px",
                        border: "none",
                        background: "transparent",

                      }}
                    >
                      <ul
                        className="dropdown-menu navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white"}}
                      >
                        <li>
                          <NavLink
                            className="dropdown-item navmenu_custome_li"
                            to="/about_vision_mission"
                          >
                           

                           Vision & Mission

                           
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="#"
                          >
                            Health Associates{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="#"
                          >
                            Chairman’s Profile{" "}
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/about_message_chairmen"
                          >
                            Message from Chairman
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link secnav" to="/globalOperations" activeClassName="active">
                      global operation
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link secnav dropdown-toggle"
                      to="/products"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      activeClassName="active"
                    >
                      Products
                    </NavLink>

                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuOffset"
                      style={{
                        paddingTop: "15px",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <ul
                        className="dropdown-menu navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/products_bytrade"
                          >
                            By trade name
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/products_bygeneric"
                          >
                            By generic name
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/products_therapeutic"
                          >
                            By therapeutic class
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/products_firsttime"
                          >
                            first time launching
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link secnav dropdown-toggle"
                      to="/facilities"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      activeClassName="active"
                    >
                      Facilities
                    </NavLink>

                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuOffset"
                      style={{
                        paddingTop: "15px",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <ul
                        className="dropdown-menu navmenu_custome"
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_researchdevrsttime"
                          >
                            Research and Development
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_product"
                          >
                            Product
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_quality"
                          >
                            Quality Control
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_warhouse"
                          >
                            Warehouse
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_ourdistribution"
                          >
                            Our distribution network
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item">
                    {/* TeleMedicine Routing Path = /teleMedicine */}
                    <Link className="nav-link secnav" to="#" >
                      Tele-Medicine
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link secnav dropdown-toggle"
                      to="/media"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      activeClassName="active"
                    >
                      media
                    </NavLink>

                    <ul
                      className="dropdown-menu dropdown-menu-right hovercolr "
                      aria-labelledby="dropdownMenuOffset"
                      style={{
                        paddingTop: "15px",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <ul
                        className="dropdown-menu dropdown-menu-right navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        {/* Video Routing Path = /media_video */}
                        {/* social responsibilities Routing Path = /media_socialresponsiblities */}

                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="#"
                          >
                            video
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/media_photo"
                          >
                            photo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/media_socialmedia"
                          >
                            social media post
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/media_milestone"
                          >
                            mile stones
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="#"
                          >
                            social responsibilities
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link secnav dropdown-toggle"
                      to="/contact"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      activeClassName="active"
                    >
                      contact
                    </NavLink>

                    <ul
                      className="dropdown-menu  dropdown-menu-right hovercolr "
                      aria-labelledby="dropdownMenuOffset"
                      style={{
                        paddingTop: "15px",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <ul
                        className="dropdown-menu  dropdown-menu-right navmenu_custome"
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/facilities_ourdistribution"
                          >
                            our distribution network
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/contact_contactus"
                          >
                            contact us
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Login show={show} onHide={handleClose} showdiv={showdiv} setShowdiv={setShowdiv} />
    </>
  );
};

export default Navbars;
