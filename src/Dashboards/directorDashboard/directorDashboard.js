import React, { useEffect, useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash1";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import DashCard from "../../components/ReusableComponents/DashboardTableCards/DashCard2";
import {
  districards,
} from "../../components/ReusableComponents/TableDash/mockData";
import {
  tableConstants,
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
import { getProductsall, getProductsnew, getSchedule, getSingleUIDApproval,getDistributioncenter,getDepartmenthead } from "../../Store/Actions/directorActions";
import moment from "moment";
import DirectorScheduleCreate from "../../components/ReusableComponents/modals/DirectorScheduleCreate/DirectorScheduleCreate";
import DirectorApprovalStatusChange from "../../components/ReusableComponents/modals/DirectorApprovalStatusChange/DirectorApprovalStatusChange";
import { InputGroup } from "react-bootstrap";

const DirectorDashboard = (props) => {
  const { SearchBar } = Search;

  const loader = useSelector((state) => state?.logIn?.loader);
  const schedule = useSelector((state) => state?.director?.schedule);
  const productall = useSelector((state) => state?.director?.productall);
  const productnew = useSelector((state) => state?.director?.productnew);
  const distributioncenter = useSelector((state) => state?.director?.distributioncenter);
  const departmenthead = useSelector((state) => state?.director?.departmenthead);

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
      formatter: btnFormatterschedule,
      text: "Actions",
    },
  ];
  const DirectorProductsAll = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "category.name",
      text: "Category Name",
      sort: true,
    },
    {
      dataField: "quantity",
      text: "Quantity",
      formatter: nullChecker,
      sort: true,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "price",
      text: "Retail Price",
      sort: true,
    },
    {
      dataField: "created_by._cls",
      text: "Added By",
      formatter: nullChecker,
      sort: true,
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
  function btnFormatterschedule(cell, row) {
    return (
      <>
        <div class="btn-group">
          <button
            class="btn btn-secondary "
            data-toggle="dropdown"
            style={{borderRadius:'5px'}}
          >
            {/* <button class="btn btn-secondary">Action</button> */}
            <span style={{fontSize:'18px',fontWeight:'600'}}> ... </span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <li>
            <i className="fa fa-user-plus ms-2"></i>

              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                onClick={() => {
                  handleShow();
                }}
              >
               &nbsp; Add Schedule
              </Link>
            </li>
            <li>
            <i className="fa fa-edit ms-2"></i>

              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                onClick={() => {
                  handleShow1();
                  dispatch(getSingleUIDApproval(row));
                }}
              >
              &nbsp; Update Status
              </Link>
            </li>
            <li>
            <i className="fa fa-eye ms-2"></i>

              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                to={{
                  pathname: "/depotmanager-dashboard/new-order/innerdetail",
                }}
              >
              &nbsp;  View
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
    //===================2nd Modal
  const [show1, setShow1] = useState(false);
    // MODAL CLOSE FUCNTION
    const handleClose1 = () => {
      setShow1(!show1);
    };
    // ===================2nd Modal
    const handleShow1 = () => {
      setShow1(!show1);
    };
  
  //NULLABLE VALUE CHECKER FUNCTION TABLE DATA FIELDS
  function nullChecker(cell) {
    return (
      <>
        <div>{!cell ? "N/A" : cell}</div>
      </>
    );
  }

  
  // tabledata Toogle State
  const [selectedTabbledata, setSelectedTabbledata] = useState(schedule);
  const tabledataHandler = async (item) => {
    setSelectedTabbledata(item);
    if (item === schedule) {
      if (schedule?.length < 1) {
        const scheduleapi = await dispatch(getSchedule());
        if (scheduleapi === true) {
          setSelectedTabbledata(schedule);
        }
      }

    }
    if (item === productall) {
      if (productall?.length < 1) {
        const productallapi = await dispatch(getProductsall());
        if (productallapi === true) {
          setSelectedTabbledata(productall);
        }
      }

    }
    if (item === productnew) {
      if (productnew?.length < 1) {
        const productallapi = await dispatch(getProductsnew());
        if (productallapi === true) {
          setSelectedTabbledata(productall);
        }
      }

    }
  };

  // Selected Buttons
  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTab2, setSelectedTab2] = useState("List");
  const [selectedTab3, setSelectedTab3] = useState("List");

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
      tabledataHandler(productall);
    } else if (item === "Grid") {
      tabledataHandler(productall);
    }
  };


  const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = productall.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        console.log("filteredData",filteredData)
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(productall)
    }
}
  const tabHandler3 = (item) => {
    setSelectedTab3(item);

    if (item === "List") {
      tabledataHandler(productnew);
    } else if (item === "Grid") {
      tabledataHandler(productnew);
    }
  };

  const [handle, setHandle] = useState("distributioncenter");

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
 

  // API HIT HANDLER ON SIDEBAR BUTTONS
  const ApiTabhandler = (item) => {
    setHandle(item);
    // if (item === "productnew") {
    //   if (productnew?.length < 1) {
    //     dispatch(getProductsnew());
    //   }
    // }
    if (item === "distributioncenter") {
      if (distributioncenter?.length < 1) {
        dispatch(getDistributioncenter());
      }
    }
    else if (item === "departmenthead") {
      if (departmenthead?.length < 1) {
        dispatch(getDepartmenthead());
      }
    }
  };


  useEffect(() => {
   
    if (productall?.length < 1) {
        dispatch(getProductsall());
      }
  }, [dispatch,productall,handle]);


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
            reverse={true}

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
            reverse={true}

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







{loader ? (
            <DashboardMainCard
            reverse={true}

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
            reverse={selectedTab2 === "List" ? true : false}

             
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
                <>
               
              <div className="row">
              <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
                {console.log("HelloWorl",filteredResults)}
              {searchInput.length >= 1 ? (
                    filteredResults.map((item,index) => {
                      return(
                      <React.Fragment key={item.id}>
                      <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                      <DashboardTableCards ob={item}/>
                       </div>
                  </React.Fragment>
                      )
                    })
                ) : (
                  productall.map((item, index) => (
                    
                    <React.Fragment key={item.id}>
                   <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                   <DashboardTableCards ob={item}/>
                    </div>
               </React.Fragment>
            ))
          
                )}
                {console.log("filteredResults",filteredResults)}
              {/* {productall.map((ob, index) => (
                 <React.Fragment key={ob.id}>
                <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                <DashboardTableCards ob={ob}/>
                 </div>
            </React.Fragment>
         ))} */}
       </div>
       </>
            }
            TableDiv={
              <>
                <ToolkitProvider
                  bootstrap4
                  keyField="id"
                  data={selectedTabbledata}
                  columns={DirectorProductsAll}
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
            />
          )}

         
        </Route>
        <Route path={`${props.match.path}/newlylaunched`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Newly Launched"
          />
         
         
         
          {loader ? (
            <DashboardMainCard
            reverse={true}

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
            reverse={selectedTab3 === "List" ? true : false}

             
               SelectedButtons={
              <div className="">
                {buttonname3.map((item, index) => (
                  <div
                    className="d-flex d-inline-flex "
                    key={index + 1}
                    onClick={() => tabHandler3(item)}
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
                        selectedTab3 === item
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
              {productnew.map((ob, index) => (
                 <React.Fragment key={ob.id}>
                <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4 ">
                <DashboardTableCards ob={ob}/>
                 </div>
            </React.Fragment>
         ))}
       </div>
             
            }
            TableDiv={
              <>
                <ToolkitProvider
                  bootstrap4
                  keyField="id"
                  data={selectedTabbledata}
                  columns={DirectorProductsAll}
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
            />
          )}

       
        </Route>
        <Route path={`${props.match.path}/distributioncenter`}>
        
    
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Distribution Center"
          />

 {loader ? (
          <DashboardMainCard
            reverse={true}

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
            />
          ) : (
            <DashboardMainCard
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
                {distributioncenter.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashCard 
                      datahead={ob.name}
                      dataname={ob.head.name}
                      datadesignation={ob.head.designation}
                      dataemail={ob.head.email}
                      dataphone={ob.head.phone}
                      dataaddress={ob.head.address}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            />
          )}







        </Route>
        <Route path={`${props.match.path}/departmenthead`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Department Head"
          />
          

          {loader ? (
            <DashboardMainCard
            reverse={true}

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
            />
          ) : (
            <DashboardMainCard
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
                {console.log(departmenthead)}
                {departmenthead.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <div className="col-xl-4 col-lg-4 col-lg-6 col-lg-6 col-md-6 col-sm-12 mb-4">
                      <DashCard 
                      datahead="Department Head"
                      dataname={ob.name}
                      datadesignation={ob.designation}
                      dataemail={ob.email}
                      dataphone={ob.phone}
                      dataaddress={ob.address}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            }
            />
          )}


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
                onClick={() => tabHandler1('All')}
                btnName="Schedule"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="products"
                onClick={() => tabHandler2("List")}
                btnName="Products"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                onClick={() => tabHandler3("List")}
                btnroute="newlylaunched"
                btnName="Newly Launched"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="distributioncenter"
                onClick={() => ApiTabhandler("distributioncenter")}
                btnName="Distribution Center"
              />

              <SiderbarBtn
                imgbtn={iconf}
                Colr="#07A04A"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #07A04A" }}
                btnroute="departmenthead"
                onClick={() => ApiTabhandler("departmenthead")}
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
      <DirectorApprovalStatusChange show={show1} onHide={handleClose1} {...props}/>
    </div>
  );
};

export default DirectorDashboard;
