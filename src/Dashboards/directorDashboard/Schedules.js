/* eslint-disable */

import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ColorFullDashCard from "../../components/ReusableComponents/ColorFullDashCard/ColorFullDashCard";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import DependentDropdowns from "../../components/ReusableComponents/DependentDropdowns/DependentDropdowns";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";

//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import moment from "moment";
import {
  getSchedule,
  getSingleScheduleDetail,
  getSingleUIDApproval,
} from "../../Store/Actions/directorActions";

const Schedules = ({
  sidebarOpen,
  openSidebar,
  handleShow1,
  handleShow,
  deopdefaultSorted,
}) => {
  const dispatch = useDispatch();

  let schedule = useSelector((state) => state?.director?.schedule);

  

  // const user = JSON.parse(localStorage.getItem('userConcord'));

  //   const filterdDirector = schedule.filter(
  //   (status) => status?.assigned_to.uid === user.uid
  // );
  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTabbledata, setSelectedTabbledata] = useState(schedule);

  useEffect(() => {
      dispatch(getSchedule(''));
  }, []);
  useEffect(() => {
    setSelectedTabbledata(schedule);
  }, [schedule]);


  const tabledataHandler = async (item) => {
    await setSelectedTabbledata(item);
  };

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
      style: (cell, row) => {
        if (cell === "awaiting_approval")
          return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "cancelled")
          return { color: "red", fontWeight: "500" };
        else if (cell === "approved")
          return { color: "green", fontWeight: "500" };
        else if (cell === "request_for_reschedule")
          return { color: "blue", fontWeight: "500" };
      },
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
      text: "",
    },
  ];

  // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
  function dateFormatter(cell) {
    return <span>{moment.unix(cell).format("MMM DD, YYYY HH:mm A")}</span>;
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
            class="btn dropdown-toggle dropdown_custom_toogle"
            data-toggle="dropdown"
            style={{ borderRadius: "5px", backgroundColor: "#22A6AC" }}
          >
            {/* <button class="btn btn-secondary">Action</button> */}
            <span
              style={{ fontSize: "14px", fontWeight: "500", color: "#fff" }}
            >
              {" "}
              Actions{" "}
            </span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <li className="">
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
                &nbsp;  Update Status
              </Link>
            </li>
            <li className="">
              <i className="fa fa-eye ms-2"></i>

              <Link
                style={{
                  color: "#0066b3",
                  fontWeight: "500",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                to={{
                  pathname: "/director-dashboard/schedule-detail",
                }}
                onClick={() => dispatch(getSingleScheduleDetail(row))}
              >
                &nbsp; View
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }

  const buttonname2 = [
    "All",
    "Approved",
    "Awaiting Approval",
    "Reschedule",
    "Cancelled",
  ];
  const { SearchBar } = Search;
  const loader = useSelector((state) => state?.logIn?.loader);
  const emptyDataMessage = () => { return 'No Data to Display';}
  return (
    <>
      <NavbarDash
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        Heading="Schedule"
      />

      <DashboardMainCard
        classnamewidth="96%"
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
          <>
            <DependentDropdowns data={selectedTabbledata} />
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
                        width: index === 0 ? "100px" : "",
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
          </>
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
                  <div className="row">
                    <div className="col-6">
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
                          minWidth: "250px",
                        }}
                      />
                    </div>

                    <div className="col-lg-6">
                      <>
                        <div className="row">
                          <div className="col d-flex justify-content-end">
                            <Link
                              style={{
                                color: "#fff",
                                fontWeight: "500",
                                fontSize: "14px",
                                textDecoration: "none",
                              }}
                              onClick={() => {
                                handleShow();
                              }}
                            >
                            <div
                              className={` btn me-2`}
                              style={{ backgroundColor: "#22A6AC",color:'#fff' }}
                            >
                                <i className="fa fa-calendar-plus-o ms-2"></i>
                                &nbsp; Add New Schedule
                            </div>
                              </Link>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                  {loader ? (
                    <div className="d-flex justify-content-center">
                      <Loader
                        height={100}
                        width={100}
                        type="Rings"
                        color="#0066b3"
                      />
                    </div>
                  ) : (
                    <div>
                      <BootstrapTable
                        {...props.baseProps}
                        // rowStyle={rowStyle}
                        defaultSorted={deopdefaultSorted}
                        noDataIndication={emptyDataMessage}
                        // pagination={pagination}
                        pagination={
                          selectedTabbledata.length > 10
                            ? paginationFactory()
                            : null
                        }
                        bordered={false}
                        condensed
                         
                      />
                    </div>
                  )}
                </div>
              )}
            </ToolkitProvider>
          </>
        }
      />
    </>
  );
};

export default Schedules;
