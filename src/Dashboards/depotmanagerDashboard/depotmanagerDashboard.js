import React, { useState, useEffect } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "./depotmanagerDashboard.css";
import {
  tableConstants,
  stocks,
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
import { getOrder } from "../../Store/Actions/deportmanagerActions";
// Search Bar Images Import

import search from "../../Statics/assets/G1.png";
import filter from "../../Statics/assets/F1.png";

const DepotmanagerDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);


  const user = useSelector((state) => state?.logIn?.user);
  const order = useSelector((state) => state?.deport?.order);

  console.log("DepotReducer Order State", order);

  console.log(user, "user Roollee");

  const dispatch = useDispatch();

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };


  useEffect(() => {
    // if (!user) {
    //   props.history.push("/");
    // } ,[user]
    if (order?.length < 1) {
      dispatch(getOrder());
    }
  }, [dispatch, order ]);

  console.log("Order Wala ", order);

  const logouthandler = () => {
    dispatch(logoutUser());
    props.history.replace('/');
  };

  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US").format(timestamp);
  };

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };


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
            data={order?.map((item, index) => {
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
                        className={` btn btn-primary`}
                        style={{ backgroundColor: '#0066b3' }}
                      >
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>View</Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            SearchBar={
              <>
                <div class="search-box mb-4" style={{ width: "240px", minWidth: '240px' }}>
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
        <Route path={`${props.match.path}/neworder`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="New Order"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={order?.map((item, index) => {
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
                        className={` btn btn-primary`}
                        style={{ backgroundColor: '#0066b3' }}
                      >
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>View</Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            SearchBar={
              <>
                <div class="search-box mb-4" style={{ width: "240px", minWidth: '240px' }}>
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
            data={order?.map((item, index) => {
              return [
                item?.order_id,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary`}
                        style={{ backgroundColor: '#0066b3' }}
                      >
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>View</Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div class="search-box mb-4" style={{ width: "240px", minWidth: '240px' }}>
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
            cols={tableConstants(handleEdit)}
            data={order?.map((item, index) => {
              return [
                index + 1,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                item?.ordered_by?.name,
                item?.delivery_status,
                item?.payment_status,
                item?.ordered_by?.name,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary`}
                        style={{ backgroundColor: '#0066b3' }}
                      >
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>View</Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div className="search-box mb-4" style={{ width: "240px", minWidth: '240px' }}>
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
            cols={tableConstants(handleEdit)}
            data={order?.map((item, index) => {
              return [
                index + 1,
                item?.customer?.name,
                item?.customer?.market?.name,
                formatDate(item?.order_datetime),
                item?.ordered_by?.name,
                item?.delivery_status,
                item?.payment_status,
                item?.ordered_by?.name,
                <>
                  <div className="row">
                    <div className="col pr-0">
                      <div
                        className={` btn btn-primary`}
                        style={{ backgroundColor: '#0066b3' }}
                      >
                        <Link style={{ color: '#ffffff', textDecoration: 'none' }} to={{ pathname: "/depotmanager-dashboard/order-request/innerdetail", state: item }}>View</Link>
                      </div>
                    </div>
                  </div>
                </>,
              ];
            })}
            reverse={true}
            SearchBar={
              <>
                <div class="search-box mb-4" style={{ width: "240px", minWidth: '240px' }}>
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
                btnName="Order History"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="neworder"
                btnName="New Order"
              />
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="stocks"
                btnName="Stocks"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                btnroute="deliverystatus"
                btnName="Delivery Status"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="payment"
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
    </div>
  );
};

export default DepotmanagerDashboard;
