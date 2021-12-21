import React, { useState } from "react";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import { BrowserRouter as Router,  Route , NavLink} from "react-router-dom";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import icon0 from "../../Statics/assets/Sidebar/0.png";
import icon1 from "../../Statics/assets/Sidebar/6.png";
// import icon2 from "../../Statics/assets/Sidebar/7.png";
import icon3 from "../../Statics/assets/Sidebar/8.png";
import icon4 from "../../Statics/assets/Sidebar/9.png";
import icon5 from "../../Statics/assets/Sidebar/10.png";
import iconf from "../../Statics/assets/Sidebar/11.png";
import icon111 from "../../Statics/assets/Sidebar/111.png";
import icon112 from "../../Statics/assets/Sidebar/112.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import DirectorScheduleCreate from "../../components/ReusableComponents/modals/DirectorScheduleCreate/DirectorScheduleCreate";
import DirectorApprovalStatusChange from "../../components/ReusableComponents/modals/DirectorApprovalStatusChange/DirectorApprovalStatusChange";
// import Schedules from "./Schedules";
import Products from "./Products";
import NewlyProducts from "./NewlyProducts";
import DistributionCenter from "./DistributionCenter";
import Departmentheads from "./Departmentheads";
import Reports from "./Reports";
// import ScheduleInnerPage from "./ScheduleInnerPage";
import Notifications from "../../components/ReusableComponents/modals/Notifications/Notifications";
import ChangePassword from "../../components/ReusableComponents/modals/ChangePassword/ChangePassword";
import Distributionstocksdetails from "./Distributionstocksdetails";



const DirectorDashboard = (props) => {


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
  // const handleShow = () => {
  //   setShow(!show);
  // }; 


  const [show3, setShow3] = useState(false);
  // MODAL CLOSE FUCNTION
  const handleClose3 = () => {
    setShow3(!show3);
  };
  // MODAL OPEN FUCNTION
  const handleShow3= () => {
    setShow3(!show3);
  };

  // Change Password
  const [show4, setShow4] = useState(false);
  // MODAL CLOSE FUCNTION
  const handleClose4 = () => {
    setShow4(!show4);
  };
  // MODAL OPEN FUCNTION
  const handleShow4= () => {
    setShow4(!show4);
  };
  //===================2nd Modal
  const [show1, setShow1] = useState(false);
  // MODAL CLOSE FUCNTION
  const handleClose1 = () => {
    setShow1(!show1);
  };
  // ===================2nd Modal
  // const handleShow1 = () => {
  //   setShow1(!show1);
  // };

 
  // Selected Buttons
  const [selectedTab0, setSelectedTab0] = useState("All");


//  BUTTON TAB HANDLER FUNCTIONS
  const tabHandler0 = (item) => {
    setSelectedTab0(item);

    if (item === "All") {
      // tabledataHandler(schedule);
    } else if (item === "Regions") {
      // tabledataHandler(filterd);
    } 
  };

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

  const homepage =()=>{
    props.history.replace('/');
}
  
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
        {/* <Route path={`${props.match.path}/schedule`}>
          <Schedules
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          handleShow1={handleShow1}
          handleShow={handleShow}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route> */}
        <Route path={`${props.match.path}/products`}>
          <Products
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          deopdefaultSorted={deopdefaultSorted}
          />
        </Route>
        <Route path={`${props.match.path}/newlylaunched`}>
          <NewlyProducts
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
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

        {/* <Route path={`/director-dashboard/schedule-detail`}>
          <ScheduleInnerPage
             sidebarOpen={sidebarOpen}
             openSidebar={openSidebar}
             Heading="Schedule"
             linkRoute="/director-dashboard/schedule"
             {...props}
          />
        </Route> */}

        <Route path={`/director-dashboard/distribution-center/stocksdetails`}>
          <Distributionstocksdetails
             sidebarOpen={sidebarOpen}
             openSidebar={openSidebar}
             deopdefaultSorted={deopdefaultSorted}
             Heading="Distribution Center Stock Details"
             linkRoute="/director-dashboard/distributioncenter"
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
                btnName="Reports"
              />
              {/* <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="schedule"
                
                btnName="Schedule"
              /> */}
              <SiderbarBtn
                imgbtn={icon3}
                Colr="#7F2987"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #7F2987" }}
                btnroute="products"
                btnName="Products"
              />
              <SiderbarBtn
                imgbtn={icon4}
                Colr="#4B8F8C"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #4B8F8C" }}
                btnroute="newlylaunched"
                btnName="Newly Launched"
              />
              <SiderbarBtn
                imgbtn={icon5}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnroute="distributioncenter"
                btnName="Distribution Center"
              />

              <SiderbarBtn
                imgbtn={iconf}
                Colr="#07A04A"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #07A04A" }}
                btnroute="departmenthead"
                btnName="Department Head"
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
                <img src={icon112} alt="" width="36" height="36" />
                <span className="links_name" style={{ fontSize: '12px', padding: '10px', color: "#6421FF", fontWeight: '700' }}>Change Password</span>
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
      <Notifications
        show={show3}
        onHide={handleClose3}
        {...props}
      />
      <ChangePassword show={show4} onHide={handleClose4} {...props}  />

    </div>
  );
};

export default DirectorDashboard;