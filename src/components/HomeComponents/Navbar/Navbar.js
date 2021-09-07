import React,{useState} from "react";
import "./Navbar.css";
import logo from "../../../Statics/assets/logo.png";
import langlogo from "../../../Statics/assets/languagelogo.png";
import enlang from "../../../Statics/assets/languages/english.jpg";
import arlang from "../../../Statics/assets/languages/arbic.jpg";
import bnlang from "../../../Statics/assets/languages/bangali.jpg";
import { NavLink, Link } from "react-router-dom";
import Login from "../../../Pages/Login";


const Navbars = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top custom-nav ">
        <div className="container">
          <Link to="/">
            <img alt="" src={logo} style={{ minWidth: '150px', minHeight: '40px',height:60 }} />
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
                      Sitemap
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
                  <li className="nav-item dropdown">
                    <span
                      className="nav-link firstnav dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={langlogo}
                        alt="language"
                        style={{ width: "23px" }}
                      />
                    </span>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item conCapitalized " to="#">
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
                      to="/home"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link secnav dropdown-toggle"
                      to="/about"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ABOUT-US
                    </NavLink>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/about_vision_mission"
                        >
                          Vision & Mission
                        </NavLink>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Health Associates{" "}
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Chairman’s Profile{" "}
                        </Link>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/about_message_chairmen"
                        >
                          Message from Chairman
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link secnav" to="/globalOperations">
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
                    >
                      Products
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/products_bytrade"
                        >
                          By trade name
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/products_bygeneric"
                        >
                          By generic name
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/products_therapeutic"
                        >
                          By therapeutic class
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/products_firsttime"
                        >
                          first time launching
                        </NavLink>
                      </li>
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
                    >
                      Facilities
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_researchdevrsttime"
                        >
                          Research and Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_product"
                        >
                          Product
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_quality"
                        >
                          Quality Control
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_warhouse"
                        >
                          Warehouse
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_ourdistribution"
                        >
                          Our distribution network
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    {/* TeleMedicine Routing Path = /teleMedicine */}
                    <Link className="nav-link secnav" to="#">
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
                    >
                      media
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {/* Video Routing Path = /media_video */}
                      {/* social responsibilities Routing Path = /media_socialresponsiblities */}

                      <li>
                        <Link className="dropdown-item" to="#">
                          video
                        </Link>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/media_photo">
                          photo
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/media_socialmedia"
                        >
                          social media post
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/media_milestone"
                        >
                          mile stones
                        </NavLink>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          social responsibilities
                        </Link>
                      </li>
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
                    >
                      contact
                    </NavLink>
                    <ul
                      className="dropdown-menu hovercolr"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/facilities_ourdistribution"
                        >
                          our distribution network
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/contact_contactus"
                        >
                          contact us
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Login 
      show={show} onHide={handleClose}
      />

    </>
  );
};

export default Navbars;
