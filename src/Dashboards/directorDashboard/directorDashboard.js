import React, { useEffect, useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash1";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import DashCard from "../../components/ReusableComponents/DashboardTableCards/DashCard2";
import {
  directorSchedulDataAll,
  directorSchedulDataCompleted,
  directorproductbody,
  districards,
} from "../../components/ReusableComponents/TableDash/mockData";
import {
  tableConstants,
  Directordashproducthead,
} from "../../components/ReusableComponents/TableDash/tableConstant1";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import icon1 from "../../Statics/assets/Sidebar/6.png";
import icon2 from "../../Statics/assets/Sidebar/7.png";
import icon3 from "../../Statics/assets/Sidebar/8.png";
import icon4 from "../../Statics/assets/Sidebar/9.png";
import icon5 from "../../Statics/assets/Sidebar/10.png";
import iconf from "../../Statics/assets/Sidebar/11.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import DashCharts from "../../components/ReusableComponents/DashCharts/DashCharts";
import ColorFullDashCard from "../../components/ReusableComponents/ColorFullDashCard/ColorFullDashCard";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
import DashboardTableCards from "../../components/ReusableComponents/DashboardTableCards/DashboardTableCards";

//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//

// Search Bar Images Import

import search from "../../Statics/assets/G1.png";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import Loader from "react-loader-spinner";
import { getSchedule } from "../../Store/Actions/directorActions";
import moment from "moment";
import DirectorScheduleCreate from "../../components/ReusableComponents/modals/DirectorScheduleCreate/DirectorScheduleCreate";

const DirectorDashboard = (props) => {
  const { SearchBar } = Search;

  // SORTED DATAFIELDS TABLE
  const deopdefaultSorted = [
    {
      dataField: "assigned_to.role.category.name",

      order: "asc",
    },
    {
      dataField: "customer",

      order: "asc",
    },
    {
      dataField: "approval_status",

      order: "asc",
    },
    {
      dataField: "approval_status",

      order: "asc",
    },
  ];

  const DirectorSchedule = [
    {
      dataField: "assigned_to.role.category.name",
      formatter: uppercase,
      text: "Assigned To",
      sort: true,
    },
    {
      dataField: "customer",
      text: "Doctor/Customer",
      formatter: DocorCus,
      sort: true,
    },
    {
      dataField: "approval_status",
      formatter: capitalize,
      text: "Approval Status",
      sort: true,
    },
    {
      dataField: "datetime",
      formatter: dateFormatter,
      text: "Date",
      sort: true,
    },
    {
      dataField: "assigned_to.role",
      formatter: btnFormatterneworder,
      text: "Actions",
    },
  ];

  // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
  function dateFormatter(cell) {
    return <span>{moment.unix(cell).format("MMM DD, YYYY")}</span>;
  }
  //UpperCase Cell
  function uppercase(cell) {
    return <span className="text-uppercase">{cell}</span>;
  }
  //capitalize Cell
  function capitalize(cell) {
    return <span className="text-capitalize">{cell}</span>;
  }
  function DocorCus(row, cell) {
    if (cell?.is_doctor_customer) {
      return <span>{cell.doctor.name}</span>;
    } else {
      return <span>{cell.customer.name}</span>;
    }

  }

  //ACTION BUTTON FIELDS
  function btnFormatterneworder(cell, row) {
    return (
      <>
        <div class="btn-group">
          <button
            class="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
          >
            {/* <button class="btn btn-secondary">Action</button> */}
            <span class="caret">Action</span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <li>
              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                onClick={() => {
                  handleShow();
                }}
              >
                Add Schedule
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                onClick={() => {
                  // handleShow();
                }}
              >
                Update Status
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "600",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                to={{
                  pathname: "/depotmanager-dashboard/new-order/innerdetail",
                }}
              >
                View
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
  const [show, setShow] = useState(false);
    // MODAL CLOSE FUCNTION
    const handleClose = () => {
      setShow(!show);
    };
    // MODAL OPEN FUCNTION
    const handleShow = () => {
      setShow(!show);
    };
  
  
  // tabledata Toogle State
  const [selectedTabbledata, setSelectedTabbledata] = useState(
    directorSchedulDataAll
  );
  const tabledataHandler = (item) => {
    setSelectedTabbledata(item);
  };

  // Selected Buttons
  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTab2, setSelectedTab2] = useState("List");

  const tabHandler1 = (item) => {
    setSelectedTab1(item);

    if (item === "All") {
      tabledataHandler(schedule);
    } else if (item === "Approved") {
      const filterd = schedule.filter(
        (status) => status?.approval_status === "approved"
      );
      tabledataHandler(filterd);
    } else if (item === "Awaiting Approval") {
      const filterd = schedule.filter(
        (status) => status?.approval_status === "awaiting_approval"
      );
      tabledataHandler(filterd);
    } else if (item === "Reschedule") {
      const filterd = schedule.filter(
        (status) => status?.approval_status === "reshedule"
      );
      tabledataHandler(filterd);
    } else if (item === "Cancelled") {
      const filterd = schedule.filter(
        (status) => status?.approval_status === "cancelled"
      );
      tabledataHandler(filterd);
    }
  };

  const tabHandler2 = (item) => {
    setSelectedTab2(item);

    if (item === "List") {
      tabledataHandler(directorSchedulDataAll);
    } else if (item === "Grid") {
      tabledataHandler(directorSchedulDataCompleted);
    }
  };

  const [handle, setHandle] = useState("orderoldhistory");

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  const dispatch = useDispatch();

  const logouthandler = () => {
    dispatch(logoutUser());
    props.history.push("/");
  };

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };
  const buttonname1 = ["All", "Region"];
  const buttonname2 = [
    "All",
    "Approved",
    "Awaiting Approval",
    "Reschedule",
    "Cancelled",
  ];
  const buttonname3 = ["List", "Grid"];
  const loader = useSelector((state) => state?.logIn?.loader);
  const schedule = useSelector((state) => state?.director?.schedule);

  // API HIT HANDLER ON SIDEBAR BUTTONS
  const ApiTabhandler = (item) => {
    setHandle(item);
    if (item === "schedule") {
      if (schedule?.length < 1) {
        dispatch(getSchedule());
      }
    }
  };

  useEffect(() => {
    if (handle) {
      dispatch(getSchedule());
    }
  }, [dispatch, handle]);

  // USEEFFECT HOOK FOR INITIAL API RENDER ON DASHBOARD LOAD
  // useEffect(() => {
  //   if (schedule?.length < 1) {
  //   dispatch(getSchedule());
  //   }
  // }, [dispatch,schedule]);

  // console.log(schedule)

  return (
    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/director-dashboard`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Reports"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={selectedTabbledata}
            hoverable
            reverse={false}
            floatleftrightbutton={
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="d-flex justify-content-end mb-4 ">
                      {buttonname1.map((item, index) => (
                        <div
                          className="d-flex d-inline-flex"
                          key={index + 1}
                          onClick={() => tabHandler1(item)}
                        >
                          <DashboardBtnList
                            label={item}
                            bntStyle={{
                              borderRadius:
                                index === 0
                                  ? "10px 0px 0px 10px"
                                  : index === buttonname1.length - 1
                                  ? "0px 10px 10px 0px"
                                  : "",
                            }}
                            className={
                              selectedTab1 === item
                                ? "dashboardBtnList-item-active py-2"
                                : "default-color-and-hover py-2"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
            colorfulcards={
              <div className="container">
                <div className="row d-flex justify-content-center mb-3">
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Value"
                      textl="BTK 24,000"
                      textr="34%"
                      classname="colrcardblue"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Product"
                      textl="2,478"
                      textr="64%"
                      classname="colrcardseagreen"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Prescription"
                      textl="1,151"
                      textr="20%"
                      classname="colrcardred"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Customer"
                      textl="1,200"
                      textr="34%"
                      classname="colrcardorange"
                    />
                  </div>
                </div>
              </div>
            }
            DivChartComponent={
              <>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Value" />
                  </div>
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Prescription" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Product" />
                  </div>
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Customer" />
                  </div>
                </div>
              </>
            }
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/schedule`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Schedule"
          />

          {loader ? (
            <DashboardMainCard
              TableDiv={
                <div className="d-flex justify-content-center">
                  <Loader
                    height={100}
                    width={100}
                    type="Rings"
                    color="#0066b3"
                  />
                </div>
              }
              reverse="true"
            />
          ) : (
            <DashboardMainCard
              colorfulcards={
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="Completed"
                      textl="1544"
                      textr="34%"
                      classname="colrcardblue"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="Pending"
                      textl="2,478"
                      textr="64%"
                      classname="colrcardseagreen"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="Due"
                      textl="1,151"
                      textr="20%"
                      classname="colrcardred"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="Resheduled"
                      textl="1,200"
                      textr="34%"
                      classname="colrcardorange"
                    />
                  </div>
                </div>
              }
              SelectedButtons={
                <div className="row my-4">
                  <div className="col ">
                    {buttonname2.map((item, index) => (
                      <div
                        className="d-flex d-inline-flex "
                        key={index + 1}
                        onClick={() => tabHandler1(item)}
                      >
                        <DashboardBtnList
                          label={item}
                          bntStyle={{
                            borderRadius:
                              index === 0
                                ? "10px 0px 0px 10px"
                                : index === buttonname2.length - 1
                                ? "0px 10px 10px 0px"
                                : "",
                          }}
                          className={
                            selectedTab1 === item
                              ? "dashboardBtnList-item-active"
                              : "default-color-and-hover "
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              }
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={selectedTabbledata}
                    columns={DirectorSchedule}
                    search
                  >
                    {(props) => (
                      <div className="">
                        <i
                          className="fa fa-search"
                          id="filtersubmit"
                          style={{ fontSize: "15px" }}
                        />
                        <SearchBar
                          {...props.searchProps}
                          style={{
                            padding: "0.375rem 2.5rem",
                            borderRadius: "10px",
                          }}
                        />
                        <BootstrapTable
                          {...props.baseProps}
                          // rowStyle={rowStyle}

                          defaultSorted={deopdefaultSorted}
                          // pagination={pagination}
                          pagination={
                            selectedTabbledata.length > 10
                              ? paginationFactory()
                              : null
                          }
                          bordered={false}
                          condensed
                          wrapperClasses="table-responsive"
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </>
              }
              reverse="true"
            />
          )}
        </Route>
        <Route path={`${props.match.path}/products`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Products"
          />
          <TableDash
            cols={Directordashproducthead(handleEdit)}
            data={directorproductbody}
            SearchBar={
              <div className="search-box my-4" style={{ width: "230px" }}>
                <form
                  className="form_style_search"
                  style={{ border: "1px solid #707070", borderRadius: "0px" }}
                >
                  <button
                    className="form_style_btn"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <img src={search} alt="" />
                  </button>
                  <input
                    className="form_style_input"
                    type="text"
                    placeholder="Search"
                  />
                </form>
              </div>
            }
            reverse={selectedTab2 === "List" ? true : false}
            hoverable
            SelectedButtons={
              <div className="">
                {buttonname3.map((item, index) => (
                  <div
                    className="d-flex d-inline-flex "
                    key={index + 1}
                    onClick={() => tabHandler2(item)}
                  >
                    <DashboardBtnList
                      label={item}
                      iconclassname={
                        item === "List" ? "fa fa-list" : "fa fa-th"
                      }
                      bntStyle={{
                        borderRadius:
                          index === 0
                            ? "10px 0px 0px 10px"
                            : index === buttonname3.length - 1
                            ? "0px 10px 10px 0px"
                            : "",
                      }}
                      className={
                        selectedTab2 === item
                          ? "dashboardBtnList-item-active "
                          : "default-color-and-hover "
                      }
                    />
                  </div>
                ))}
              </div>
            }
            TableCardGrid={
              <div className="row">
                {directorproductbody.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                      <DashboardTableCards />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/newlylaunched`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Newly Launched"
          />
          <TableDash
            cols={Directordashproducthead(handleEdit)}
            data={directorproductbody}
            reverse={selectedTab2 === "List" ? true : false}
            hoverable
            SearchBar={
              <div className="">
                <div className="search-box my-4" style={{ width: "230px" }}>
                  <form
                    className="form_style_search"
                    style={{ border: "1px solid #707070", borderRadius: "0px" }}
                  >
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={search} alt="" />
                    </button>
                    <input
                      className="form_style_input"
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </div>
            }
            SelectedButtons={
              <div className="">
                {buttonname3.map((item, index) => (
                  <div
                    className="d-flex d-inline-flex"
                    key={index + 1}
                    onClick={() => tabHandler2(item)}
                  >
                    <DashboardBtnList
                      label={item}
                      bntStyle={{
                        borderRadius:
                          index === 0
                            ? "10px 0px 0px 10px"
                            : index === buttonname3.length - 1
                            ? "0px 10px 10px 0px"
                            : "",
                      }}
                      iconclassname={
                        item === "List" ? "fa fa-list" : "fa fa-th"
                      }
                      className={
                        selectedTab2 === item
                          ? "dashboardBtnList-item-active "
                          : "default-color-and-hover "
                      }
                    />
                  </div>
                ))}
              </div>
            }
            TableCardGrid={
              <div className="row">
                {directorproductbody.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashboardTableCards />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/distributioncenter`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Distribution Center"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={selectedTabbledata}
            reverse={false}
            SearchBar={
              <>
                <div className="search-box my-4" style={{ width: "230px" }}>
                  <form
                    className="form_style_search"
                    style={{ border: "1px solid #707070", borderRadius: "0px" }}
                  >
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={search} alt="" />
                    </button>
                    <input
                      className="form_style_input"
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </>
            }
            TableCardGrid={
              <div className="row">
                {districards.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashCard data={ob} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            hoverable
            bordered={false}
            {...props}
          />
        </Route>

        <Route path={`${props.match.path}/departmenthead`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Department Head"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={selectedTabbledata}
            hoverable
            SearchBar={
              <>
                <div className="search-box my-4" style={{ width: "230px" }}>
                  <form
                    className="form_style_search"
                    style={{ border: "1px solid #707070", borderRadius: "0px" }}
                  >
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={search} alt="" />
                    </button>
                    <input
                      className="form_style_input"
                      type="text"
                      placeholder="Search"
                    />
                  </form>
                </div>
              </>
            }
            TableCardGrid={
              <div className="row">
                {districards.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashCard data={ob} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            bordered={false}
            {...props}
          />
        </Route>

        <SidebarDashboard
          buttonSidebar={
            <>
              <SiderbarBtn
                imgbtn={icon1}
                Colr="#089DA4"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #089DA4" }}
                btnroute=""
                // onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Reports"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="schedule"
                onClick={() => ApiTabhandler("schedule")}
                btnName="Schedule"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="products"
                // onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Products"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                // onClick={() => ApiTabhandler("orderoldhistory")}
                btnroute="newlylaunched"
                btnName="Newly Launched"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="distributioncenter"
                // onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Distribution Center"
              />

              <SiderbarBtn
                imgbtn={iconf}
                Colr="#07A04A"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #07A04A" }}
                btnroute="departmenthead"
                // onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Department Head"
              />
              <SiderbarBtn
                imgbtn={icon6}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnName="Logout"
                classlogout={"sidebar__logout"}
                onClick={logouthandler}
              />
            </>
          }
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          Loca="Director"
          {...props}
        />
      </Router>
      {/* <StatuschangedModal show={show} onHide={handleClose} {...props} /> */}
      <DirectorScheduleCreate show={show} onHide={handleClose} {...props}/>
    </div>
  );
};

export default DirectorDashboard;
