import React, { useState , useEffect } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "./depotmanagerDashboard.css";
import {
  data,
  stockdata,
} from "../../components/ReusableComponents/TableDash/mockData";
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
import { BrowserRouter as Router, Route } from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";

const DepotmanagerDashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const user = useSelector((state) => state?.logIn?.user);
  console.log(user,"dashboard");
  const dispatch = useDispatch()
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  // useEffect(() => {
  //   if(!user)
  //   {
  //     props.history.push('/');
  //   }  
  // });
  const logouthandler = ()=>{
    dispatch(logoutUser())   
  }

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
            data={data}
            hoverable
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
            data={data}
            hoverable
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
            data={stockdata}
            hoverable
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
            data={data}
            hoverable
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
                btnName="Logout"
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
