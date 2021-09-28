import React, { useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "./depotmanagerDashboard.css";
import {
  tableConstants,
  stocks,
  payment,
  deliverystatus,
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
  getStocksProduct,
  statusChange
} from "../../Store/Actions/deportmanagerActions";
// Search Bar Images Import
import search from "../../Statics/assets/G1.png";
import filter from "../../Statics/assets/F1.png";
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";

const DepotmanagerDashboard = (props) => {
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


  


  // const {pathname} = history?.location
  // const currentroute = props.match.path

  const ApiTabhandler = (item) => {
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

  console.log("old order",oldorder);

  // useEffect(() => {
  //   // if (!user) {
  //   //   props.history.push("/");
  //   // } ,[user]

  //   if(pathname===`${currentroute}/neworder`)
  //   {
  //     alert("Stock First if")
  //     if (stock?.length < 1) {
  //       dispatch(getStocksProduct());
  //     }
  //   }
  //   else if (pathname==='/depotmanager-dashboard')
  //   {
  //     alert("Order First if")
  //     if (order?.length < 1) {
  //       dispatch(getOrder());
  //     }
  //   }

  //     }, [dispatch, order,stock,pathname ]);

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

  const handleClose = () => 
  {
      setShow(!show);

  }
  const handleShow = () => {

    setShow(!show);
  };
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

          <TableDash
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
          />
        </Route>
        {console.log(neworder)}
        <Route path={`${props.match.path}/neworder`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="New Order"
          />
          <TableDash
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
                        }}
                        to={{
                          state: item,
                          
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
          />
        </Route>
        <Route path={`${props.match.path}/stocks`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Stocks"
          />
          <TableDash
            cols={stocks(handleEdit)}
            data={stock?.map((item, index) => {
              return [
                index + 1,
                item?.name,
                "N/A",
                item?.price,
                // item?.formula,
                formatDate(item?.order_datetime),
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
                // <>
                //   <div className="row">
                //     <div className="col pr-0">
                //       <div
                //         className={` btn btn-primary rounded-pill`}
                //         style={{ backgroundColor: "#0066b3" }}
                //       >
                //         <Link
                //           style={{ color: "#ffffff", textDecoration: "none" }}
                //           onClick={() => {
                //             handleShow();
                //           }}
                //           to="#"
                //         >
                //           Status Changed
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // </>,
                // <>
                //   <div className="row">
                //     <div className="col pr-0">
                //       <div
                //         className={` btn btn-primary rounded-pill`}
                //         style={{ backgroundColor: '#0066b3' }}
                //       >
                //         <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>Status Changed</Link>
                //       </div>
                //     </div>
                //   </div>
                // </>,

                //   <>
                //   <div className="me-4" id="navbar-list-4">
                //     <ul className="navbar-nav">
                //       <li className="nav-item dropdown ">
                //         <Link
                //           className="nav-link dropdown-toggle"
                //           id="navbarDropdownMenuLink"
                //           role="button"
                //           data-toggle="dropdown"
                //           aria-haspopup="true"
                //           aria-expanded="false"
                //         >
                //           <i class="fa fa-chevron-circle-down"
                //           style={{ fontSize: "14.5px" }}
                //           aria-hidden="true"></i>
                //         </Link>
                //         <div
                //           className="dropdown-menu profile-nav-dropdown"
                //           aria-labelledby="navbarDropdownMenuLink"
                //         >
                //           <Link
                //             className="dropdown-item"
                //             to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}
                //           >
                //            <i class="fa fa-eye" aria-hidden="true"
                //            style={{ fontSize: "14.5px" }}></i>

                //            View
                //           </Link>

                //           <Link
                //             className="dropdown-item"
                //           >
                //             <i
                //               className="fa fa-sign-out ms-2"
                //               style={{ fontSize: "14.5px" }}
                //             ></i>
                //             Status
                //           </Link>
                //         </div>
                //       </li>
                //     </ul>
                //   </div>
                // </>
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
          />
        </Route>
        <Route path={`${props.match.path}/deliverystatus`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Delivery Status"
          />
          <TableDash
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
          />
        </Route>
        <Route path={`${props.match.path}/payment`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Payment"
          />
          <TableDash
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
          />
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
                onClick={()=> ApiTabhandler("orderoldhistory")}
                btnName="Order History"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="neworder"
                onClick={()=> ApiTabhandler("Neworder")}
                btnName="New Order"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="stocks"
                onClick={()=> ApiTabhandler("stock")}
                btnName="Stocks"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                btnroute="deliverystatus"
                onClick={()=> ApiTabhandler("order")}
                btnName="Delivery Status"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="payment"
                onClick={()=> ApiTabhandler("orderhistory")}
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
