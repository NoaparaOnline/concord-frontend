import React, { useEffect, useState } from "react";

//
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//

import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "./depotmanagerDashboard.css";
import {
  tableConstants,
  stocks,
  payment,
  deliverystatus,
  DepomanagerOrder,
  deopdefaultSorted,
  nameFormatter,
} from "../../components/ReusableComponents/TableDash/tableConstant";
import icon1 from "../../Statics/assets/Sidebar/1.png";
import icon2 from "../../Statics/assets/Sidebar/2.png";
import icon3 from "../../Statics/assets/Sidebar/3.png";
import icon4 from "../../Statics/assets/Sidebar/4.png";
import icon5 from "../../Statics/assets/Sidebar/5.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import {
  getnewOrder,
  getoldOrder,
  getOrder,
  getSingleOrder,
  getSingleUID,
  getStocksProduct,
} from "../../Store/Actions/deportmanagerActions";
// Search Bar Images Import
import search from "../../Statics/assets/G1.png";
import filter from "../../Statics/assets/F1.png";
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";
import Loader from "../../components/ReusableComponents/Loader/Loader";
import moment from "moment";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";

const DepotmanagerDashboard = (props) => {





  // Data Table Paginition and Search Functionality
  // const pagination = paginationFactory({
  //   page: 1,
  //   sizePerPage: 5,
  //   lastPageText: '>>',
  //   firstPageText: '<<',
  //   nextPageText: '>',
  //   prePageText: '<',
  //   showTotal: true,
  //   alwaysShowAllBtns: true,
  //   onPageChange: function (page, sizePerPage) {
  //     console.log('page', page);
  //     console.log('sizePerPage', sizePerPage);
  //   },
  //   onSizePerPageChange: function (page, sizePerPage) {
  //     console.log('page', page);
  //     console.log('sizePerPage', sizePerPage);
  //   }
  // });
  const { SearchBar } = Search;

  //Header Column DataFields And Constants

  //OLD ORDER COLUMN HEADERS
  const DepomanagerOrder = [
    { dataField: "order_id", text: "Orders ID", sort: true },
    { dataField: "customer.name", text: "Customer Name" },
    // {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
    { dataField: "customer.market.name", text: "Market & Address" },
    {
      dataField: "order_datetime",
      text: "Order Date/Time",
      formatter: dateFormatter,
    },
    { dataField: "payment_type", text: "Payment Type" },
    {
      dataField: "delivery_status",
      text: "Delivery Status",
      style: (cell, row) => {
        if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" ,border:'1px solid #565656' };
        else if (cell === "Cancelled" || cell === "Declined")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "Paid" ||
          cell === "Delivered" ||
          cell === "Submitted"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "Dispatched" || cell === "Unpaid")
          return { color: "blue", fontWeight: "500" };
      },
    },
    {
      dataField: "payment_status",
      text: "Payment Status",
      style: (cell, row) => {
        if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "Cancelled" || cell === "Declined")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "Paid" ||
          cell === "Delivered" ||
          cell === "Submitted"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "Dispatched" || cell === "Unpaid")
          return { color: "blue", fontWeight: "500" };
      },
    },
    { dataField: "ordered_by.name", text: "Proceed By" },
    { dataField: "customer", formatter: btnFormatter, text: "Actions" },
  ];

  //NEW ORDER COLUMN HEADERS
  const DepomanagerNewOrder = [
    { dataField: "order_id", text: "Orders ID", sort: true },
    { dataField: "customer.name", text: "Customer Name" },
    // {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
    { dataField: "customer.market.name", text: "Market & Address" },
    {
      dataField: "order_datetime",
      text: "Order Date/Time",
      formatter: dateFormatter,
    },
    { dataField: "payment_type", text: "Payment Type" },
    {
      dataField: "delivery_status",
      text: "Delivery Status",
      style: (cell, row) => {
        if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "Cancelled" || cell === "Declined")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "Paid" ||
          cell === "Delivered" ||
          cell === "Submitted"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "Dispatched" || cell === "Unpaid")
          return { color: "blue", fontWeight: "500" };
      },
    },
    {
      dataField: "payment_status",
      text: "Payment Status",
      style: (cell, row) => {
        if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "Cancelled" || cell === "Declined")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "Paid" ||
          cell === "Delivered" ||
          cell === "Submitted"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "Dispatched" || cell === "Unpaid")
          return { color: "blue", fontWeight: "500" };
      },
    },
    { dataField: "ordered_by.name", text: "Proceed By" },
    { dataField: "customer", formatter: btnFormatterneworder, text: "Actions" },
  ];


 //PAYMENT COLUMN HEADERS
 const DepomanagerPayment = [
  { dataField: "customer.name", text: "Customer Name" },
 
  { dataField: "payment_type", text: "Payment Type" },
 
  {
    dataField: "payment_status",
    text: "Payment Status",
    style: (cell, row) => {
      if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" };
      else if (cell === "Cancelled" || cell === "Declined")
        return { color: "red", fontWeight: "500" };
      else if (
        cell === "Paid" ||
        cell === "Delivered" ||
        cell === "Submitted"
      )
        return { color: "green", fontWeight: "500" };
      else if (cell === "Dispatched" || cell === "Unpaid")
        return { color: "blue", fontWeight: "500" };
    },
  },
  { dataField: "customer", formatter: btnFormatterpayment, text: "Actions" },
];


  // STOCKS COLUMN HEADERS
  // const DepomanagerStock = [
  //   { dataField: "name", text: "Product Name" },

  //   { dataField: "price", text: "Price" },

  //   { dataField: "category.name", text: "Price" },
   
  // ];

  const deopdefaultSorted = [
    {
      dataField: "order_id",
      order: "asc",
    },
  ];

  //   const rowStyle = (row, rowIndex) => {
  //     if (row.delivery_status === "Delivered") {
  //         return {color: 'green' };
  //     }
  // };

  function dateFormatter(cell) {
    return <span>{moment.unix(cell).format("MMM DD, YYYY")}</span>;
  }
  //OLD ORDER COLUMN BUTTON FORMATTER
  function btnFormatter(cell, row) {
    return (
      <>
        <div className="row">
          <div className="col pr-0">
            <div
              className={` btn btn-primary rounded-pill`}
              style={{ backgroundColor: "#0066b3" }}
            >
              <Link
                style={{ color: "#ffffff", textDecoration: "none" }}
                to={{
                  pathname: "/depotmanager-dashboard/order-request/innerdetail",
                }}
                onClick={() => dispatch(getSingleOrder(row))}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  //STOCKS COLUMN BUTTON FORMATTER
  // function btnFormatterstocks(cell, row) {
  //   return (
  //     <>
  //       <div className="row">
  //         <div className="col pr-0">
  //           <div
  //             className={` btn btn-primary rounded-pill`}
  //             style={{ backgroundColor: "#0066b3" }}
  //           >
  //             <Link
  //               style={{ color: "#ffffff", textDecoration: "none" }}
  //               to={{
  //                 pathname: "/depotmanager-dashboard/order-request/innerdetail",
  //               }}
  //               onClick={() => dispatch(getSingleOrder(row))}
  //             >
  //               View
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  //NEW ORDER COLUMN BUTTON FORMATTER
  function btnFormatterneworder(cell, row) {
    return (
      <>
        <div className="row">
          <div className="col pr-0">
            <div
              className={` btn btn-primary rounded-pill`}
              style={{ backgroundColor: "#0066b3" }}
            >
              <Link
                style={{ color: "#ffffff", textDecoration: "none" }}
                onClick={() => {
                  handleShow();
                  dispatch(getSingleUID(row.uid));
                }}
              >
                Status
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }


  //PAYMENT COLUMN BUTTON FORMATTER
  function btnFormatterpayment(cell, row) {
    return (
      <>
        <div className="row">
          <div className="col pr-0">
            <div
              className={` btn btn-primary rounded-pill`}
              style={{ backgroundColor: "#0066b3" }}
            >
              <Link
                style={{ color: "#ffffff", textDecoration: "none" }}
                to={{
                  pathname: "/depotmanager-dashboard/order-request/innerdetail",
                }}
                onClick={() => dispatch(getSingleOrder(row))}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }



  //Header Column DataFields And Constants And Functions

  // End Of Paginition And Search Functionality

  const [sidebarOpen, setsidebarOpen] = useState(false);

  // const user = useSelector((state) => state?.logIn?.user);
  const oldorder = useSelector((state) => state?.deport?.oldorder);
  const neworder = useSelector((state) => state?.deport?.neworder);
  const order = useSelector((state) => state?.deport?.order);
  const stock = useSelector((state) => state?.deport?.stock);
  // const productidstatestock = useSelector((state) => state?.deport?.stock);

  const dispatch = useDispatch();

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  const [handle, setHandle] = useState("orderoldhistory");

  const ApiTabhandler = (item) => {
    setHandle(item);
    if (item === "stock") {
      if (stock?.length < 1) {
        dispatch(getStocksProduct());
      }
    } else if (item === "orderoldhistory") {
      if (oldorder?.length < 1) {
        dispatch(getoldOrder());
      }
    } else if (item === "Neworder") {
      if (neworder?.length < 1) {
        dispatch(getnewOrder());
      }
    } else if (item === "order") {
      if (order?.length < 1) {
        dispatch(getOrder());
      }
    }
  };

  useEffect(() => {
    if (handle) {
      dispatch(getoldOrder());
    }
  }, [dispatch, handle]);

  console.log("old order", oldorder);

  console.log("Order Ka Data", order);

  const logouthandler = () => {
    dispatch(logoutUser());
    props.history.replace("/");
  };

  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US").format(timestamp);
  };

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };

  const handleClose = () => {
    setShow(!show);
  };
  const handleShow = () => {
    setShow(!show);
  };
  const loader = useSelector((state) => state?.logIn?.loader);
  const [show, setShow] = useState(false);
  // const [stateitem,setStateitem]= useState(false);





  return (
    // #EFFBEF
    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/depotmanager-dashboard`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Order Request"
          />

          {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={oldorder}
                    columns={DepomanagerOrder}
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
                          style={{color: "#565656"}}
                          {...props.baseProps}
                          // rowStyle={rowStyle}
                          headerWrapperClasses="customheaderpad"
                          defaultSorted={deopdefaultSorted}
                          // pagination={pagination}
                          pagination={paginationFactory()}
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

          {/* <TableDash
            cols={tableConstants(handleEdit)}
            data={oldorder?.map((item, index) => {
              return [
                item?.order_id,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                item?.payment_type,
                item?.delivery_status,
                item?.payment_status,
                item?.ordered_by?.name,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary rounded-pill`}
                        style={{ backgroundColor: "#0066b3" }}
                      >
                        <Link
                          style={{ color: "#ffffff", textDecoration: "none" }}
                          to={{
                            pathname:
                              "/depotmanager-dashboard/order-request/innerdetail",
                            state: item,
                          }}
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            SearchBar={
              <>
                <div
                  className="search-box mb-4"
                  style={{ width: "240px", minWidth: "240px" }}
                >
                  <form
                    className="form_style_search"
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
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
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={filter} alt="" />
                    </button>
                  </form>
                </div>
              </>
            }
            reverse={true}
            bordered={false}
            {...props}
          /> */}
        </Route>
        {console.log(neworder)}
        <Route path={`${props.match.path}/neworder`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="New Order"
          />

          {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={neworder}
                    columns={DepomanagerNewOrder}
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
                          pagination={paginationFactory()}
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

          {/* <TableDash
            cols={tableConstants(handleEdit)}
            data={neworder?.map((item, index) => {
              return [
                item?.order_id,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                item?.payment_type,
                item?.delivery_status,
                item?.payment_status,
                item?.ordered_by?.name,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary rounded-pill`}
                        style={{ backgroundColor: "#0066b3" }}
                      >
                        <Link
                          style={{ color: "#ffffff", textDecoration: "none" }}
                          onClick={() => {
                            handleShow();
                            dispatch(getSingleUID(item?.uid));
                          }}
                        >
                          Status
                        </Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            SearchBar={
              <>
                <div
                  className="search-box mb-4"
                  style={{ width: "240px", minWidth: "240px" }}
                >
                  <form
                    className="form_style_search"
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
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
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={filter} alt="" />
                    </button>
                  </form>
                </div>
              </>
            }
            reverse={true}
            bordered={false}
            {...props}
          /> */}
        </Route>
        <Route path={`${props.match.path}/stocks`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Stocks"
          />

          {/* {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={stocks}
                    columns={DepomanagerStock}
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
                          pagination={paginationFactory()}
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
          )} */}
 {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
          <TableDash
            cols={stocks(handleEdit)}
            data={stock?.map((item, index) => {
              return [
                index + 1,
                item?.name,
                "N/A",
                item?.price,
                // item?.formula,
                "N/A",
              
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div
                  className="search-box mb-4"
                  style={{ width: "250px", minWidth: "250px" }}
                >
                  <form
                    className="form_style_search"
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
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
            bordered={false}
            {...props}
          />
          )}
        </Route>
        <Route path={`${props.match.path}/deliverystatus`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Delivery Status"
          />

          {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={oldorder}
                    columns={DepomanagerOrder}
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
                          pagination={paginationFactory()}
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

          {/* <TableDash
            cols={deliverystatus(handleEdit)}
            data={order?.map((item, index) => {
              return [
                item?.order_id,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                item?.delivery_status,
                item?.payment_status,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary rounded-pill`}
                        style={{ backgroundColor: "#0066b3" }}
                      >
                        <Link
                          style={{ color: "#ffffff", textDecoration: "none" }}
                          to={{
                            pathname:
                              "/depotmanager-dashboard/order-request/innerdetail",
                            state: item,
                          }}
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div
                  className="search-box mb-4"
                  style={{ width: "240px", minWidth: "240px" }}
                >
                  <form
                    className="form_style_search"
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
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
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={filter} alt="" />
                    </button>
                  </form>
                </div>
              </>
            }
            bordered={false}
            {...props}
          /> */}
        </Route>
        <Route path={`${props.match.path}/payment`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Payment"
          />

          {loader ? (
            <DashboardMainCard TableDiv={<Loader />} reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={order}
                    columns={DepomanagerPayment}
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
                          pagination={paginationFactory()}
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

          {/* <TableDash
            cols={payment(handleEdit)}
            data={order?.map((item, index) => {
              return [
                index + 1,
                item?.customer?.name,
                item?.payment_type,
                item?.payment_status,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={`btn btn-primary rounded-pill`}
                        style={{ backgroundColor: "#0066b3" }}
                      >
                        <Link
                          style={{ color: "#ffffff", textDecoration: "none" }}
                          to={{
                            pathname:
                              "/depotmanager-dashboard/order-request/innerdetail",
                            state: item,
                          }}
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div
                  className="search-box mb-4"
                  style={{ width: "240px", minWidth: "240px" }}
                >
                  <form
                    className="form_style_search"
                    style={{
                      border: "1px solid #707070",
                      borderRadius: "10px",
                    }}
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
                    <button
                      className="form_style_btn"
                      style={{ background: "transparent", border: "none" }}
                    >
                      <img src={filter} alt="" />
                    </button>
                  </form>
                </div>
              </>
            }
            bordered={false}
            {...props}
          /> */}
        </Route>

        {/* Inner Pages Routes */}
        <Route path={`/depotmanager-dashboard/order-request/innerdetail`}>
          <InnerPage
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
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
                onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Order History"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="neworder"
                onClick={() => ApiTabhandler("Neworder")}
                btnName="New Order"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="stocks"
                onClick={() => ApiTabhandler("stock")}
                btnName="Stocks"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                btnroute="deliverystatus"
                onClick={() => ApiTabhandler("order")}
                btnName="Delivery Status"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="payment"
                onClick={() => ApiTabhandler("orderhistory")}
                btnName="Payment"
              />
              <SiderbarBtn
                imgbtn={icon6}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                disablelink={true}
                btnName="Logout"
                classlogout={"sidebar__logout"}
                onClick={logouthandler}
              />
            </>
          }
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          DesignationUser="Depot Manager"
          Loca="Dhaka"
          {...props}
        />
      </Router>
      <StatuschangedModal show={show} onHide={handleClose} {...props} />
    </div>
  );
};

export default DepotmanagerDashboard;
