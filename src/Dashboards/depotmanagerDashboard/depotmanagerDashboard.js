import React, {  useState } from "react";
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
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";
import OrderHistory from "./OrderHistory";
import NewOrder from "./NewOrder";
import Stocks from "./Stocks";
import DeliveryStatus from "./DeliveryStatus";
import Payment from "./Payment";
import Notifications from "../../components/ReusableComponents/modals/Notifications/Notifications";


const DepotmanagerDashboard = (props) => {




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
  const handleShow3= () => {
    setShow3(!show3);
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

  const homepage =()=>{
    props.history.replace('/');
} 

  return (

    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
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
                imgbtn={icon0}
                Colr="#0066b3"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #089DA4" }}
                btnName="Home"
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
                <img src={icon111} alt="" width="36" height="36" />
                <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: "#DB2323", fontWeight: '700' }}>Notification</span>
              </li>
            </NavLink>
            </div>
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
      <Notifications
        show={show3}
        onHide={handleClose3}
        {...props}
      />
    </div>
  );
};

export default DepotmanagerDashboard;
