import React, { useState } from "react";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import "./depotmanagerDashboard.css";
import icon0 from "../../Statics/assets/Sidebar/0.png";
import icon1 from "../../Statics/assets/Sidebar/1.png";
import icon2 from "../../Statics/assets/Sidebar/2.png";
import icon3 from "../../Statics/assets/Sidebar/3.png";
import icon4 from "../../Statics/assets/Sidebar/4.png";
import icon5 from "../../Statics/assets/Sidebar/5.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import icon111 from "../../Statics/assets/Sidebar/111.png";
import icon112 from "../../Statics/assets/Sidebar/112.png";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";
import OrderHistory from "./OrderHistory";
import NewOrder from "./NewOrder";
import Stocks from "./Stocks";
import DeliveryStatus from "./DeliveryStatus";
import Payment from "./Payment";
import Notifications from "../../components/ReusableComponents/modals/Notifications/Notifications";
import ChangePassword from "../../components/ReusableComponents/modals/ChangePassword/ChangePassword";
import Error404 from "../../Pages/Error404";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Reports from "./Reports";
import FieldStaffSaleReport from "./FieldStaffSaleReport";

const DepotmanagerDashboard = (props) => {
  const { t } = useTranslation("common");

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

  // =================================================================//
  // USE STATES
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [show3, setShow3] = useState(false);
  // MODAL CLOSE FUCNTION
  const handleClose3 = () => {
    setShow3(!show3);
  };
  // MODAL OPEN FUCNTION
  const handleShow3 = () => {
    setShow3(!show3);
  };

  //Change Password
  const [show4, setShow4] = useState(false);
  // MODAL CLOSE FUCNTION
  const handleClose4 = () => {
    setShow4(!show4);
  };
  // MODAL OPEN FUCNTION
  const handleShow4 = () => {
    setShow4(!show4);
  };

  const dispatch = useDispatch();

  // SIDEBAR TOGGLE OPEN
  const openSidebar = () => {
    setsidebarOpen(true);
  };

  // SIDEBAR TOGGLE CLOSE
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

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

  const homepage = () => {
    props.history.replace("/");
  };
  // Selected Buttons
  const [selectedTab0, setSelectedTab0] = useState(
    t("director_dashboard.all_text")
  );

  return (
    <>
      <Helmet>
        <title>{t("depot_dashboard.helmet.title_text")}</title>
      </Helmet>
      <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
        <Router>
          <Switch>
            <Route exact path={`/depotmanager-dashboard`}>
              <OrderHistory
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route exact path={`/depotmanager-dashboard`}>
              <OrderHistory
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route path={`${props.match.path}/neworder`}>
              <NewOrder
                handleShow={handleShow}
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route path={`${props.match.path}/stocks`}>
              <Stocks
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route path={`${props.match.path}/deliverystatus`}>
              <DeliveryStatus
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route path={`${props.match.path}/payment`}>
              <Payment
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                deopdefaultSorted={deopdefaultSorted}
              />
            </Route>
            <Route path={`${props.match.path}/report`}>
              <Reports
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                selectedTab0={selectedTab0}
                {...props}
              />
            </Route>

            {/* Inner Pages Routes */}

            <Route path={`${props.match.path}/reports/fieldstaff-sale`}>
              <FieldStaffSaleReport
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                selectedTab0={selectedTab0}
                {...props}
              />
            </Route>

            <Route path={`/depotmanager-dashboard/order-request/innerdetail`}>
              <InnerPage
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={t("depot_dashboard.order_history_text")}
                linkRoute="/depotmanager-dashboard"
                {...props}
              />
            </Route>
            <Route path={`/depotmanager-dashboard/new-order/innerdetail`}>
              <InnerPage
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={t("depot_dashboard.new_order_text")}
                linkRoute="/depotmanager-dashboard/neworder"
                {...props}
              />
            </Route>
            <Route path={`/depotmanager-dashboard/delivery-status/innerdetail`}>
              <InnerPage
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={t("depot_dashboard.delivery_stat_text")}
                linkRoute="/depotmanager-dashboard/deliverystatus"
                {...props}
              />
            </Route>
            <Route path={`/depotmanager-dashboard/payment-ord/innerdetail`}>
              <InnerPage
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={t("depot_dashboard.payment_text")}
                linkRoute="/depotmanager-dashboard/payment"
                {...props}
              />
            </Route>

            {/* 404 Page */}
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          <SidebarDashboard
            buttonSidebar={
              <>
                <SiderbarBtn
                  imgbtn={icon0}
                  Colr="#0066b3"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #089DA4" }}
                  btnName={t("depot_dashboard.home_text")}
                  disablelink={true}
                  classlogout={"sidebar__logout"}
                  onClick={homepage}
                />
                <SiderbarBtn
                  imgbtn={icon1}
                  Colr="#089DA4"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #089DA4" }}
                  btnroute=""
                  btnName={t("depot_dashboard.order_history_text")}
                />
                <SiderbarBtn
                  imgbtn={icon2}
                  Colr="#CB912B"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                  btnroute="neworder"
                  btnName={t("depot_dashboard.new_order_text")}
                />
                <SiderbarBtn
                  imgbtn={icon3}
                  Colr="#7F2987"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                  btnroute="stocks"
                  btnName={t("depot_dashboard.stocks_text")}
                />
                <SiderbarBtn
                  imgbtn={icon4}
                  Colr="#4B8F8C"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                  btnroute="deliverystatus"
                  btnName={t("depot_dashboard.delivery_stat_text")}
                />
                <SiderbarBtn
                  imgbtn={icon5}
                  Colr="#BB2026"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                  btnroute="payment"
                  btnName={t("depot_dashboard.payment_text")}
                />
                <SiderbarBtn
                  imgbtn={icon1}
                  Colr="#089DA4"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #089DA4" }}
                  btnroute="report"
                  btnName={t("director_dashboard.reports_text")}
                />
                <div className="mt-3">
                  <NavLink
                    activeClassName="sidebar__link"
                    className="sidebar__link"
                    onClick={() => {
                      handleShow3();
                    }}
                    to="#"
                  >
                    <li className="mb-2 ms-4">
                      <img src={icon111} alt="icon" width="36" height="36" />
                      <span
                        className="links_name"
                        style={{
                          fontSize: "12px",
                          padding: "10px",
                          color: "#DB2323",
                          fontWeight: "700",
                        }}
                      >
                        {" "}
                        {t("depot_dashboard.notification_text")}{" "}
                      </span>
                    </li>
                  </NavLink>
                </div>
                <div className="mt-3">
                  <NavLink
                    activeClassName="sidebar__link"
                    className="sidebar__link"
                    onClick={() => {
                      handleShow4();
                    }}
                    to="#"
                  >
                    <li className="mb-2 ms-4">
                      <img src={icon112} alt="icon" width="36" height="36" />
                      <span
                        className="links_name"
                        style={{
                          fontSize: "12px",
                          padding: "10px",
                          color: "#6421FF",
                          fontWeight: "700",
                        }}
                      >
                        {" "}
                        {t("depot_dashboard.change_pass_text")}
                      </span>
                    </li>
                  </NavLink>
                </div>
                <SiderbarBtn
                  imgbtn={icon6}
                  Colr="#BB2026"
                  {...props}
                  borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                  disablelink={true}
                  btnName={t("depot_dashboard.logout_text")}
                  classlogout={"sidebar__logout"}
                  onClick={logouthandler}
                />
              </>
            }
            sidebarOpen={sidebarOpen}
            closeSidebar={closeSidebar}
            DesignationUser={t("depot_dashboard.depot_manager_text")}
            Loca={t("depot_dashboard.dhaka_text")}
            {...props}
          />
        </Router>
        <StatuschangedModal show={show} onHide={handleClose} {...props} />
        <Notifications show={show3} onHide={handleClose3} {...props} />
        <ChangePassword show={show4} onHide={handleClose4} {...props} />
      </div>
    </>
  );
};

export default DepotmanagerDashboard;
