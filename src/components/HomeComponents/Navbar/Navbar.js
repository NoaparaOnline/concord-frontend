/* eslint-disable */

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../Statics/assets/logo.png";
import langlogo from "../../../Statics/assets/languagelogo.png";
import enlang from "../../../Statics/assets/languages/english.jpg";
import arlang from "../../../Statics/assets/languages/arbic.jpg";
import bnlang from "../../../Statics/assets/languages/bangali.jpg";
import { NavLink, Link } from "react-router-dom";
import Login from "../../../Pages/Login";

import { useHistory } from "react-router-dom";

//
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Store/Actions/loginActions";
import profileLogo from "../../../Statics/assets/profile-logo.png";
import Notifications from "../../ReusableComponents/modals/Notifications/Notifications";
import ChangePassword from "../../ReusableComponents/modals/ChangePassword/ChangePassword";
import SearchBar from "../../ReusableComponents/SearchComponent/SearchBar";
import { ByTherapeutic } from "../ProductsData/productbytheraputic";
import { FirstTime } from "../ProductsData/productsfirstimelaunch";
import { useTranslation } from "react-i18next";
import {
  readLanguageAction,
  SelectedLanguage,
} from "../../../Store/Actions/cmsAction";
import ReactFlagsSelect from "react-flags-select";
//

const Navbars = (props) => {
  const [selected, setSelected] = useState("US");

  const { t, i18n } = useTranslation("common");
  const [langtoggle, setLangtoggle] = useState("en");
  const history = useHistory();
  const lang = useSelector((state) => state?.cmsReducer?.languages);
  const selectedLang = useSelector((state) => state?.cmsReducer?.language);
  const [Local, setLocal] = useState([]);
  const [customlocal, setCustomlocal] = useState([]);
  const [customlabel, setCustomlabel] = useState();

  let locvar =
    localStorage.getItem("lang") === null
      ? "US"
      : localStorage.getItem("lang").split("-")[1];

  useEffect(() => {}, [locvar]);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(SelectedLanguage("en-US"));
    dispatch(readLanguageAction());
  }, []);

  const getids = () => {
    let localcode = [];
    let localcodebef = [];
    lang?.map((item) => {
      const firword = item?.locale;
      let id = firword.split("-")[1];
      let id0 = firword.split(id)[0];
      localcode?.push(id);
      localcodebef?.push(id0);
    });

    setLocal(localcode);
    setCustomlocal(localcodebef);
  };

  const customlabels = () => {
    let locallabel = {};
    lang?.map((item) => {
      const firword = item?.locale;
      let id = firword.split("-")[1];
      locallabel = {
        ...locallabel,
        [id]: item?.name,
      };
    });

    setCustomlabel(locallabel);
  };

  useEffect(() => {
    getids();
    customlabels();
  }, [lang]);

  const allarray = [ByTherapeutic, FirstTime];
  const AllmergeData = [];
  allarray.map((item) => {
    return item.map((item1) => {
      AllmergeData.push(item1);
    });
  });

  const userRole = useSelector((state) => state?.logIn?.userRole);
  const logoutHandler = () => {
    dispatch(logoutUser());
    history?.push("/");
  };
  const user = useSelector((state) => state?.logIn?.user);
  const profileHandler = () => {
    if (userRole === "depot_manager") {
      history.push("/depotmanager-dashboard");
    } else if (userRole === "director") {
      history.push("/director-dashboard");
    }
  };

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [langbtnshow, setLangbtnshow] = useState(false);
  const [showdiv, setShowdiv] = useState(true);

  const handleClose = () => {
    setShow(!show);
    setShowdiv(true);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const handleShow1 = () => {
    setShow1(!show1);
  };
  const handleClose1 = () => {
    setShow1(!show1);
  };

  const handleShow2 = () => {
    setShow2(!show2);
  };
  const handleClose2 = () => {
    setShow2(!show2);
  };
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top custom-nav ">
        <div className="container">
          <Link to="/">
            <img
              alt="logo"
              src={logo}
              style={{ minWidth: "150px", minHeight: "40px", height: 60 }}
            />
          </Link>

          <button
            className="navbar-toggler toggle-iconcustome ms-auto mt-3 "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
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
                      <span className="">{t("header.site_map_text")}</span>
                      {/* <span className="custom_span_style"></span> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link firstnav"
                      aria-current="page"
                      to="/careers"
                    >
                      {t("header.careers_text")}
                    </NavLink>
                  </li>
                  <div className="col-sm-3">
                    <SearchBar
                      placeholder={t("header.search_text")}
                      data={AllmergeData}
                    />
                  </div>

                  {user ? (
                    <>
                      <div className="me-4" id="navbar-list-4">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown ">
                            <Link
                              className="nav-link dropdown-toggle"
                              id="navbarDropdownMenuLink"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src={profileLogo}
                                alt="user"
                                width="25"
                                height="25"
                                className="rounded-circle"
                              />
                            </Link>
                            <div
                              className="dropdown-menu dropdown-menu-right profile-nav-dropdown"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <Link
                                className="dropdown-item navmenu_custome_li"
                                onClick={() => profileHandler()}
                                // style={{ color:'#0066b3' ,fontWeight:'600' }}
                              >
                                <i
                                  className="fa fa-id-card "
                                  style={{ fontSize: "13px" }}
                                ></i>{" "}
                                &nbsp; {t("header.dashboard_text")}
                              </Link>

                              <Link
                                className="dropdown-item navmenu_custome_li"
                                onClick={() => {
                                  handleShow1();
                                }}
                                // style={{ color:'#0066b3' ,fontWeight:'600' }}
                              >
                                <i
                                  className="fa fa-bell "
                                  style={{ fontSize: "13px" }}
                                ></i>{" "}
                                &nbsp; {t("header.notifications_text")}
                              </Link>

                              {/* Change Password */}
                              <Link
                                className="dropdown-item navmenu_custome_li"
                                onClick={() => {
                                  handleShow2();
                                }}
                                // style={{ color:'#0066b3' ,fontWeight:'600' }}
                              >
                                <i
                                  className="fa fa-key"
                                  style={{ fontSize: "13px" }}
                                ></i>{" "}
                                &nbsp; {t("header.change_password_text")}
                              </Link>

                              <Link
                                className="dropdown-item navmenu_custome_li"
                                onClick={() => logoutHandler()}
                                // style={{ color:'#0066b3' ,fontWeight:'600' }}
                              >
                                <i
                                  className="fa fa-sign-out "
                                  style={{ fontSize: "13px" }}
                                ></i>
                                &nbsp; {t("header.logout_text")}
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <li className="nav-item ">
                      <i
                        className="fa fa-user fs-5 ms-3"
                        aria-hidden="true"
                      ></i>
                      <Link
                        className="nav-link secnav text-capitalize "
                        onClick={() => {
                          handleShow();
                        }}
                        style={{ clear: "both", marginTop: "-10px" }}
                        aria-current="page"
                        to="#"
                      >
                        {t("header.login_text")}
                      </Link>
                    </li>
                  )}

                  <ReactFlagsSelect
                    countries={Local}
                    selected={locvar}
                    optionsSize={13}
                    selectedSize={13}
                    customLabels={customlabel}
                    onSelect={(code) => {
                      localStorage.removeItem("lang");
                      dispatch(
                        SelectedLanguage(
                          lang.filter((item) => item?.locale.includes(code))[0]
                            ?.locale
                        )
                      );
                      localStorage.setItem(
                        "lang",
                        lang.filter((item) => item?.locale.includes(code))[0]
                          ?.locale
                      );
                      setSelected(code);
                    }}
                  />
                </ul>
              </div>

              <div className="row">
                <ul className="navbar-nav mb-auto mt-1 mb-lg-0 ms-auto pt-1 text-uppercase fontsizefamily aa">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link secnav "
                      aria-current="page"
                      to="/"
                      exact
                      activeClassName="active"
                    >
                      {t("header.home_text")}
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
                      {t("header.about_us_text")}
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
                        className="navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            className="dropdown-item navmenu_custome_li"
                            to="/vision-mission"
                          >
                            {t("header.vision_mission_text")}
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/health-associates"
                          >
                            {t("header.health_ass_text")}
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/chairmen-profile"
                          >
                            {t("header.chairmans_profile")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/message-from-chairmen"
                          >
                            {t("header.msg_frm_chair")}
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link secnav"
                      to="/global-operation"
                      activeClassName="active"
                    >
                      {t("header.global_operation")}
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
                      {t("header.products_text")}
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
                        className="navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/by-trade-name"
                          >
                            {t("header.by_trade_name")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/by-generic-name"
                          >
                            {t("header.by_generic_name")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/by-therapeutic-class"
                          >
                            {t("header.by_therap_class")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/first-time-launching"
                          >
                            {t("header.first_time_launch")}
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
                      {t("header.facilities_text")}
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
                        className="navmenu_custome"
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/research-and-development"
                          >
                            {t("header.reserch_and_develop")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/product"
                          >
                            {t("header.production_text")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/quality"
                          >
                            {t("header.quality_control_text")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/warhouse"
                          >
                            {t("header.warehouse_text")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/our-distribution-network"
                          >
                            {t("header.our_distribution_network")}
                          </NavLink>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-item">
                    {/* TeleMedicine Routing Path = /teleMedicine */}
                    <a
                      href="https://www.mdxdmfr.com"
                      className="nav-link secnav"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("header.tele_medicine")}
                    </a>
                    {/* <Link className="nav-link secnav" to="#" >
                      
                    </Link> */}
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
                      {t("header.media_text")}
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
                        className="navmenu_custome "
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        {/* Video Routing Path = /video */}
                        {/* social responsibilities Routing Path = /social-responsiblities */}

                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/video"
                          >
                            {t("header.video_text")}
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/events"
                          >
                            {t("header.events_text")}
                          </NavLink>
                        </li>
                        {/* <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/photo"
                          >
                            photo
                          </NavLink>
                        </li> */}
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/social-media-post"
                          >
                            {t("header.social_media_post")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/milestones"
                          >
                            {t("header.mile_stones_text")}
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/social-responsiblities"
                          >
                            {t("header.social_resp_text")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/journal"
                          >
                            {t("header.journal_text")}
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
                      {t("header.contact")}
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
                        className="navmenu_custome"
                        aria-labelledby="dropdownMenuOffset"
                        style={{ listStyle: "none", background: "white" }}
                      >
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/our-distribution-network"
                          >
                            {t("header.our_dist_net_text")}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            style={{ fontSize: "13px", fontWeight: "500" }}
                            className="dropdown-item navmenu_custome_li"
                            to="/contactus"
                          >
                            {t("header.contact_us")}
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

      <Login
        show={show}
        onHide={handleClose}
        showdiv={showdiv}
        setShowdiv={setShowdiv}
      />
      <Notifications show={show1} onHide={handleClose1} />
      <ChangePassword show={show2} onHide={handleClose2} />
    </>
  );
};

export default Navbars;
