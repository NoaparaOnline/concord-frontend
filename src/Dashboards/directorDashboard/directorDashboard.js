import React, { useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import {
  data,
  stockdata,
} from "../../components/ReusableComponents/TableDash/mockData";
import {
  tableConstants,
  stocks,
} from "../../components/ReusableComponents/TableDash/tableConstant";

import { BrowserRouter as Router, Route } from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import icon1 from "../../Statics/assets/Sidebar/1.png";
import icon2 from "../../Statics/assets/Sidebar/2.png";
import icon3 from "../../Statics/assets/Sidebar/3.png";
import icon4 from "../../Statics/assets/Sidebar/4.png";
import icon5 from "../../Statics/assets/Sidebar/5.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";

const DirectorDashboard = (props) => {

  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  const dispatch = useDispatch()

  const logouthandler = ()=>{
    dispatch(logoutUser())   
  }


  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };

  return (
    <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
      <Router>
        <Route exact path={`/director-dashboard`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Reports"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={data}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/schedule`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Schedule"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={data}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/products`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Products"
          />
          <TableDash
            cols={stocks(handleEdit)}
            data={stockdata}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/newlylaunched`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Newly Launched"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={data}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>
        <Route path={`${props.match.path}/distributioncenter`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Distribution Center"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={data}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>



        <Route path={`${props.match.path}/departmenthead`}>
          <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Department Head"
          />
          <TableDash
            cols={tableConstants(handleEdit)}
            data={data}
            hoverable
            bordered={false}
            {...props}
          />
        </Route>



        {/* Inner Pages Routes */}
        <Route path={`/innertablepage`}>
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
                btnName="Reports"
              />
              <SiderbarBtn
                imgbtn={icon2}
                Colr="#CB912B"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #CB912B" }}
                btnroute="schedule"
                btnName="Schedule"
              />
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
                imgbtn={icon4}
                Colr="lightgreen"
                {...props}
                borderSidebtn={{ borderRight: "6px solid lightgreen" }}
                btnroute="departmenthead"
                btnName="Department Head"
              />
              <SiderbarBtn
                imgbtn={icon6}
                Colr="#BB2026"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #BB2026" }}
                btnName="Logout"
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
    </div>
  );
};

export default DirectorDashboard;
