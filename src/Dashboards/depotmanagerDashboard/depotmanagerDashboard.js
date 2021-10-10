import React, { useEffect, useState } from "react";
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
  getStocksProduct,
  getStocksMedicineProduct,
  getStocksGiftProduct,
} from "../../Store/Actions/deportmanagerActions";
// Search Bar Images Import
import StatuschangedModal from "../../components/ReusableComponents/modals/StatuschangedModal/StatuschangedModal";
import moment from "moment";
import OrderHistory from "./OrderHistory";
import NewOrder from "./NewOrder";
import Stocks from "./Stocks";
import DeliveryStatus from "./DeliveryStatus";
import Payment from "./Payment";
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
  const [handle, setHandle] = useState("orderoldhistory");
  const [show, setShow] = useState(false);



  // REDUX STATES
  // const user = useSelector((state) => state?.logIn?.user);
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
    if (stock.length < 1) {
      dispatch(getStocksProduct());
    }
  }, [dispatch, handle, stock]);


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
    if (item === stock) {
      if (stock?.length < 1) {
        const stockapi = await dispatch(getStocksProduct());
        if (stockapi === true) {
          setSelectedTabbledata(stock);
        }
      }

    }
    else if (item === stockmedicine) {
      if (stockmedicine?.length < 1) {
        const stockmedapi = await dispatch(getStocksMedicineProduct());
        if (stockmedapi === true) {
          setSelectedTabbledata(stock);
        }
      }
    }
    else if (item === stockgift) {
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
    if (item === "All") {
      tabledataHandler(stock);
    }
    else if (item === "Medicine") {
      tabledataHandler(stockmedicine);
    }
    else if (item === "Gift") {
      tabledataHandler(stockgift);
    }
  };
  // USE STATES 

  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTabbledata, setSelectedTabbledata] = useState(stock);


  return (

    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/depotmanager-dashboard`}>
          <OrderHistory
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          oldorder={oldorder}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route>
        <Route path={`${props.match.path}/neworder`}>
         
          <NewOrder
          handleShow={handleShow}
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          neworder={neworder}
          deopdefaultSorted={deopdefaultSorted}
          
          />

        </Route>
        <Route path={`${props.match.path}/stocks`}>
         <Stocks
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          deopdefaultSorted={deopdefaultSorted}
          selectedTab1={selectedTab1}
          tabHandler={tabHandler}
          selectedTabbledata={selectedTabbledata}
          />

        </Route>
        <Route path={`${props.match.path}/deliverystatus`}>
          <DeliveryStatus
           sidebarOpen={sidebarOpen}
           openSidebar={openSidebar}
           oldorder={oldorder}
           deopdefaultSorted={deopdefaultSorted}
           />
        </Route>
        <Route path={`${props.match.path}/payment`}>
        <Payment
        order={order}
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
