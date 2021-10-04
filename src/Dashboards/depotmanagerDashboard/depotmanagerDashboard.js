import React, { useEffect, useState } from "react";

//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//

import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import "./depotmanagerDashboard.css";
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
  getStocksMedicineProduct,
  getStocksGiftProduct,
} from "../../Store/Actions/deportmanagerActions";
// Search Bar Images Import
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";
import moment from "moment";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
import Loader from "react-loader-spinner";

const DepotmanagerDashboard = (props) => {



  


  const { SearchBar } = Search;

  //Header Column DataFields And Constants

  //OLD ORDER COLUMN HEADERS
  const DepomanagerOrder = [
    { dataField: "order_id", text: "Orders ID", sort: true },
    { dataField: "customer.name", text: "Customer Name", sort: true },
    { dataField: "customer.market.name", text: "Market & Address",
    formatter: appendtwoDatafields,sort: true
    },
    {
      dataField: "order_datetime",
      text: "Order Date/Time",
      formatter: dateFormatter,
      sort: true
    },
    { dataField: "payment_type", text: "Payment Type",sort:true },
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
      sort: true 
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
      sort: true 
    },
    { dataField: "ordered_by.name", text: "Proceed By",sort: true },
    { dataField: "customer", formatter: btnFormatterold, text: "Actions" },
  ];

  //NEW ORDER COLUMN HEADERS
  const DepomanagerNewOrder = [
    { dataField: "order_id", text: "Orders ID", sort: true },
    { dataField: "customer.name", text: "Customer Name",sort: true },
    // {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
    { dataField: "customer.market.name", text: "Market & Address" , formatter:appendtwoDatafields ,sort: true},
    {
      dataField: "order_datetime",
      text: "Order Date/Time",
      formatter: dateFormatter,
      sort: true
    },
    { dataField: "payment_type", text: "Payment Type",sort: true },
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
      sort: true
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
      sort: true
    },
    { dataField: "ordered_by.name", text: "Proceed By" ,sort: true},
    { dataField: "customer", formatter: btnFormatterneworder, text: "Actions" },
  ];


 //Delivery Status COLUMN HEADERS
 const DepomanagerDelivery = [
  { dataField: "order_id", text: "Orders ID", sort: true },
  { dataField: "customer.name", text: "Customer Name", sort: true },
  { dataField: "customer.market.name", text: "Market & Address",
  formatter: appendtwoDatafields,sort: true
  },
  {
    dataField: "order_datetime",
    text: "Order Date/Time",
    formatter: dateFormatter,
    sort: true
  },
  { dataField: "payment_type", text: "Payment Type",sort:true },
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
    sort: true 
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
    sort: true 
  },
  { dataField: "ordered_by.name", text: "Proceed By",sort: true },
  { dataField: "customer", formatter: btnFormatterdelivery, text: "Actions" },
];

 //PAYMENT COLUMN HEADERS
 const DepomanagerPayment = [
  { dataField: "customer.name", text: "Customer Name" ,sort:true },
 
  { dataField: "payment_type", text: "Payment Type" ,sort:true},
 
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
    },sort:true
  },
  { dataField: "customer", formatter: btnFormatterpay, text: "Actions" },
];


 // STOCKS COLUMN HEADERS
  const DepomanagerStock = [
    
    { dataField: "name", text: "Product Name" ,sort:true},

    { dataField: "category.name", text: "Category Name" ,sort:true},
    
    
    { dataField: "quantity", text: "Quantity" ,formatter : nullChecker,sort:true},
    
    
    { dataField: "formula", text: "Formula" ,formatter : nullChecker,sort:true},
    
    { dataField: "price", text: "Price" ,sort:true},
   
  ];


 // SORTED DATAFIELDS TABLE
  const deopdefaultSorted = [
    {
      dataField: "order_id",
      
      order: "asc",
    },
    {
      dataField: "customer.name",
      
      order: "asc",
    },
    {
      dataField: "customer.market.name",
      
      order: "asc",
    },
    {
      dataField: "order_datetime",
      
      order: "asc",
    },
    {
      dataField: "delivery_status",
      
      order: "asc",
    },
    {
      dataField: "payment_type",
      
      order: "asc",
    },
    {
      dataField: "payment_status",

      order: "asc",
    },
    {
      dataField: "ordered_by.name",

      order: "asc",
    },
    {
      dataField: "name",

      order: "asc",
    },
    {
      dataField: "category.name",

      order: "asc",
    },
    {
      dataField: "quantity",

      order: "asc",
    },
    {
      dataField: "formula",

      order: "asc",
    },
    {
      dataField: "price",

      order: "asc",
    },
  ];


 // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
  function dateFormatter(cell) {
    return <span>{moment.unix(cell).format("MMM DD, YYYY")}</span>;
  }

  //OLD ORDER COLUMN BUTTON FORMATTER
  function btnFormatterold(cell, row) {
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

  //NEW ORDER COLUMN BUTTON FORMATTER
  // function btnFormatternew(cell, row) {
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
  //                 pathname: "/depotmanager-dashboard/new-order/innerdetail",
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

  //DELIVERY STATUS COLUMN BUTTON FORMATTER
  function btnFormatterdelivery(cell, row) {
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
                  pathname: "/depotmanager-dashboard/delivery-status/innerdetail",
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

  //PAYMENT COLUMN BUTTON FORMATTER
  function btnFormatterpay(cell, row) {
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
                  pathname: "/depotmanager-dashboard/payment-ord/innerdetail",
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

  //APPEND MARKET AND ADDRESS FIELDS
  function appendtwoDatafields(cell,row){
    
    return (
      <>
        <div>{`${row.customer.market.name} ,`}</div>
        <div>{`${row.customer.market.parent.name}`}</div>
      </>
    )
  }

  //ACTION BUTTON FIELDS
  function btnFormatterneworder(cell, row) {
    return (
      <>
        {/* <div className="row">
          <div className="col pr-0">
            <div
              className={` btn btn-primary rounded-pill`}
              style={{ backgroundColor: "#0066b3" }}
            >
              <Link
                style={{ color: "#ffffff", textDecoration: "none" }}
                onClick={() => {
                  handleShow();
                  dispatch(getSingleUID(row));
                }}
                
              >
                Status
              </Link>
            </div>
          </div>
        </div> */}
 <div class="btn-group">
  <button type="button" class="btn btn-secondary">Action</button>
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
    <span class="caret"></span>
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu" role="menu">
    <li>

              <Link
                style={{ color: "#0066b3",fontWeight:'600',fontSize:'14px', textDecoration: "none" }}
                onClick={() => {
                  handleShow();
                  dispatch(getSingleUID(row));
                }}
                
              >
                Status
              </Link>

    </li>
    <li>

    <Link
                style={{ color: "#0066b3",fontWeight:'600',fontSize:'14px', textDecoration: "none" }}
                to={{
                  pathname: "/depotmanager-dashboard/new-order/innerdetail",
                }}
                onClick={() => dispatch(getSingleOrder(row))}
              >
                View
              </Link>    

    </li>
  </ul>
</div>

      </>
    );
  }

  //NULLABLE VALUE CHECKER FUNCTION TABLE DATA FIELDS
  function nullChecker(cell) {
    return (
      <>
        <div>{!cell ? "N/A" : cell}</div>
      </>
    );
  }

  
 //Header Column DataFields And Constants And Functions

  // End Of Paginition And Search Functionality


  // =================================================================//
// USE STATES 
const [sidebarOpen, setsidebarOpen] = useState(false);
const [handle, setHandle] = useState("orderoldhistory");
const [show, setShow] = useState(false);

  
  
  // REDUX STATES
  // const user = useSelector((state) => state?.logIn?.user);
  const loader = useSelector((state) => state?.logIn?.loader);
  const oldorder = useSelector((state) => state?.deport?.oldorder);
  const neworder = useSelector((state) => state?.deport?.neworder);
  const order = useSelector((state) => state?.deport?.order);
  const stock = useSelector((state) => state?.deport?.stock);
  const stockmedicine = useSelector((state) => state?.deport?.stockmedicine);
  const stockgift = useSelector((state) => state?.deport?.stockgift);
  // const productidstatestock = useSelector((state) => state?.deport?.stock);



  const dispatch = useDispatch();

  // SIDEBAR TOGGLE OPEN
  const openSidebar = () => {
    setsidebarOpen(true);
  };

  // SIDEBAR TOGGLE CLOSE
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  // API HIT HANDLER ON SIDEBAR BUTTONS
  const ApiTabhandler = (item) => {
    setHandle(item);
    if (item === "orderoldhistory") {
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

  // USEEFFECT HOOK FOR INITIAL API RENDER ON DASHBOARD LOAD
  useEffect(() => {
    if (handle) {
      dispatch(getoldOrder());
    }
    if (stock.length < 1){
      dispatch(getStocksProduct());
    }
  }, [dispatch, handle,stock]);


  // LOGOUT HANDLER FUNCTION
  const logouthandler = () => {
    dispatch(logoutUser());
    props.history.replace("/");
  };


  // MODAL CLOSE FUCNTION
  const handleClose = () => {
    setShow(!show);
  };
  // MODAL OPEN FUCNTION
  const handleShow = () => {
    setShow(!show);
  };

  
  
  
  
  
  // STOCKS SELECTED TAB HANDLER FUNCTION
  const tabledataHandler = async (item) => {
     setSelectedTabbledata(item);
     if(item === stock)
    {
      if (stock?.length < 1) {
        const stockapi = await dispatch(getStocksProduct());
        if (stockapi === true) {
          setSelectedTabbledata(stock);
        } 
      }
     
    }
    else if(item === stockmedicine)
    {
      if (stockmedicine?.length < 1) {
        const stockmedapi = await dispatch(getStocksMedicineProduct());
        if (stockmedapi === true) {
          setSelectedTabbledata(stock);
        } 
      }
    }
    else if(item === stockgift) {
      if (stockgift?.length < 1) {
        const stockgiftapi = await dispatch(getStocksGiftProduct());
        if (stockgiftapi === true) {
          setSelectedTabbledata(stock);
        } 
      }
    }
  };

  // Tabhandler Medicine And Gift
const tabHandler = (item) => {
  setSelectedTab1(item);
    if(item === "All")
    {
      tabledataHandler(stock);
      
     
    }
    else if(item === "Medicine")
    {
      tabledataHandler(stockmedicine);
      
    }
    else if(item === "Gift") {
      tabledataHandler(stockgift);
      
    }

   
};

const buttonname =["All","Medicine", "Gift"]


  // USE STATES 

  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTabbledata, setSelectedTabbledata] = useState(stock);


  return (
   
    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/depotmanager-dashboard`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Order Request"
          />

          {loader ? (
            <DashboardMainCard TableDiv={      
            <div className="d-flex justify-content-center">
            <Loader
              height={100} width={100}
              type="Rings"
              color="#0066b3"
            />
            </div>
      } reverse="true" />
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

         
        </Route>
        <Route path={`${props.match.path}/neworder`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="New Order"
          />

          {loader ? (
            <DashboardMainCard TableDiv={

              <div className="d-flex justify-content-center">
              <Loader
                height={100} width={100}
                type="Rings"
                color="#0066b3"
              />
              </div>

            } reverse="true" />
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
                          pagination={neworder.length > 10 ? paginationFactory() : null}  
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
        <Route path={`${props.match.path}/stocks`}>
         
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Stocks"
          />

  {loader ? (
            <DashboardMainCard TableDiv={

              <div className="d-flex justify-content-center">
              <Loader
                height={100} width={100}
                type="Rings"
                color="#0066b3"
              />
              </div>

            } reverse="true" />
          ) : (
            <DashboardMainCard
            
            SelectedButtons={
              <div className="row my-4">
            <div className="col ">
           
            {buttonname.map(
        (item, index) => (
          <div
            className="d-flex d-inline-flex "
            key={index + 1}
            onClick={() => tabHandler(item)}
          >
            <DashboardBtnList
              label={item}
              bntStyle={{borderRadius:index=== 0 ? '10px 0px 0px 10px' : index=== buttonname.length-1 ? '0px 10px 10px 0px' : ''  }}
              className={
                selectedTab1 === item
                  ? "dashboardBtnList-item-active"
                  : "default-color-and-hover "
              }
            />
          </div>
        )
      )}
            </div>
      
            </div>
          }
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={selectedTabbledata}
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
                          pagination={selectedTabbledata.length > 10 ? paginationFactory() : null}  
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
        <Route path={`${props.match.path}/deliverystatus`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Delivery Status"
          />

          {loader ? (
            <DashboardMainCard TableDiv={

              <div className="d-flex justify-content-center">
              <Loader
                height={100} width={100}
                type="Rings"
                color="#0066b3"
              />
              </div>

            } reverse="true" />
          ) : (
            <DashboardMainCard
              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={oldorder}
                    columns={DepomanagerDelivery}
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
                          pagination={oldorder.length > 10 ? paginationFactory() : null}  
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
        <Route path={`${props.match.path}/payment`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Payment"
          />

          {loader ? (
            <DashboardMainCard TableDiv={

              <div className="d-flex justify-content-center">
              <Loader
                height={100} width={100}
                type="Rings"
                color="#0066b3"
              />
              </div>

            } reverse="true" />
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
                          pagination={order.length > 10 ? paginationFactory() : null}  
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

        {/* Inner Pages Routes */}
        
        <Route path={`/depotmanager-dashboard/order-request/innerdetail`}>
          <InnerPage
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Order History"
            linkRoute="/depotmanager-dashboard"
            {...props}
          />          
        </Route>
        <Route path={`/depotmanager-dashboard/new-order/innerdetail`}>
          <InnerPage
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="New Order"
            linkRoute="/depotmanager-dashboard/neworder"
            {...props}
          />          
        </Route>
        <Route path={`/depotmanager-dashboard/delivery-status/innerdetail`}>
          <InnerPage
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Delivery Status"
            linkRoute="/depotmanager-dashboard/deliverystatus"
            {...props}
          />          
        </Route>
        <Route path={`/depotmanager-dashboard/payment-ord/innerdetail`}>
          <InnerPage
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Payment"
            linkRoute="/depotmanager-dashboard/payment"
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
                // btnroute1="order-request/innerdetail"
                onClick={() => ApiTabhandler("orderoldhistory")}
                btnName="Order History"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="neworder"
                // btnroute1="new-order/innerdetail"
                onClick={() => ApiTabhandler("Neworder")}
                btnName="New Order"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="stocks"
                onClick={() => tabHandler('All')}
                btnName="Stocks"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                btnroute="deliverystatus"
                // btnroute1="delivery-status/innerdetail"
                onClick={() => ApiTabhandler("order")}
                btnName="Delivery Status"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="payment"
                // btnroute1="payment-ord/innerdetail"
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
