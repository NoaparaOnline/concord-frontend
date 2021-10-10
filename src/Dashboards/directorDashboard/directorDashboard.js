import React, { useEffect, useState } from "react";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import { BrowserRouter as Router,  Route } from "react-router-dom";
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
import {
  getProductsall,
  getProductsnew,
  getSchedule,
  getDistributioncenter,
  getDepartmenthead,
} from "../../Store/Actions/directorActions";
import DirectorScheduleCreate from "../../components/ReusableComponents/modals/DirectorScheduleCreate/DirectorScheduleCreate";
import DirectorApprovalStatusChange from "../../components/ReusableComponents/modals/DirectorApprovalStatusChange/DirectorApprovalStatusChange";
import Schedules from "./Schedules";
import Products from "./Products";
import NewlyProducts from "./NewlyProducts";
import DistributionCenter from "./DistributionCenter";
import Departmentheads from "./Departmentheads";
import Reports from "./Reports";



const DirectorDashboard = (props) => {

  const schedule = useSelector((state) => state?.director?.schedule);
  const productall = useSelector((state) => state?.director?.productall);
  const productnew = useSelector((state) => state?.director?.productnew);
  const distributioncenter = useSelector((state) => state?.director?.distributioncenter);
  const departmenthead = useSelector((state) => state?.director?.departmenthead);

  // SORTED DATAFIELDS TABLE OF REACT-BOOTSTRAP-DATATABLES
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

  // MODAL SHOW USESTATE
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

  

  // tabledata Toogle State
  const [selectedTabbledata, setSelectedTabbledata] = useState(schedule);

  // SELECTED TABLE DATA OBJECT HANDLER
  const tabledataHandler = async (item) => {
    setSelectedTabbledata(item);
    if (item === schedule) {
      if (schedule?.length < 1) {
        const scheduleapi = await dispatch(getSchedule(''));
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
        const productnewapi = await dispatch(getProductsnew());
        if (productnewapi === true) {
          setSelectedTabbledata(productnew);
        }
      }
    }
  };

  // Selected Buttons
  const [selectedTab0, setSelectedTab0] = useState("All");
  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTab2, setSelectedTab2] = useState("List");
  const [selectedTab3, setSelectedTab3] = useState("List");

//  BUTTON TAB HANDLER FUNCTIONS
  const tabHandler0 = (item) => {
    setSelectedTab0(item);

    if (item === "All") {
      // tabledataHandler(schedule);
    } else if (item === "Regions") {
      // tabledataHandler(filterd);
    } 
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

  const tabHandler2 = (item) => {
    setSelectedTab2(item);

    if (item === "List") {
      tabledataHandler(productall);
    } else if (item === "Grid") {
      tabledataHandler(productall);
    }
  };

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

  // SIDEBAR TOGGLE FUNCTION 
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  const dispatch = useDispatch();


  // LOGOUT HANDLER FUNCTION
  const logouthandler = () => {
    dispatch(logoutUser());
    props.history.replace("/");
  };


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
    } else if (item === "departmenthead") {
      if (departmenthead?.length < 1) {
        dispatch(getDepartmenthead());
      }
    }
  };

  useEffect(() => {
    if (productall?.length < 1) {
      dispatch(getProductsall());
    }
    if (productnew?.length < 1) {
      dispatch(getProductsnew());
    }
  }, [dispatch, productall, handle]);


  return (
    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/director-dashboard`}>
          <Reports
          tabHandler0={tabHandler0}
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          selectedTab0={selectedTab0}
          />
        </Route>
        <Route path={`${props.match.path}/schedule`}>
          <Schedules
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          selectedTabbledata={selectedTabbledata}
          tabHandler1={tabHandler1}
          selectedTab1={selectedTab1}
          handleShow1={handleShow1}
          handleShow={handleShow}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route>
        <Route path={`${props.match.path}/products`}>
          <Products
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          selectedTabbledata={selectedTabbledata}
          tabHandler2={tabHandler2}
          selectedTab2={selectedTab2}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route>
        <Route path={`${props.match.path}/newlylaunched`}>
          <NewlyProducts
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          selectedTabbledata={selectedTabbledata}
          tabHandler3={tabHandler3}
          selectedTab3={selectedTab3}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route>
        <Route path={`${props.match.path}/distributioncenter`}>
         <DistributionCenter
         sidebarOpen={sidebarOpen}
         openSidebar={openSidebar}         
         />
        </Route>
        <Route path={`${props.match.path}/departmenthead`}>
          <Departmentheads
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}          
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
                onClick={() => tabHandler1("All")}
                
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
                disablelink={true}
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

      {/* CREATE NEW SCHEDULE MODAL COMPONENT */}
      <DirectorScheduleCreate show={show} onHide={handleClose} {...props} />
      
      {/* UPDATE SCHEDULE MODAL */}
      <DirectorApprovalStatusChange
        show={show1}
        onHide={handleClose1}
        {...props}
      />
    </div>
  );
};

export default DirectorDashboard;