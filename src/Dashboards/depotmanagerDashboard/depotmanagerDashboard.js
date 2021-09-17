import React,{useState} from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import './depotmanagerDashboard.css'

import { data,stockdata } from '../../components/ReusableComponents/TableDash/mockData';
import { tableConstants,stocks } from '../../components/ReusableComponents/TableDash/tableConstant';

import { BrowserRouter as Router, Route} from 'react-router-dom'

const DepotmanagerDashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item))
  }
  return (
    // #EFFBEF
        <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
        <Router>
       
          <Route exact path="/depotmanager-dashboard">
            <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar}  Heading="Order Request"/>
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/neworder">
          <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} Heading="New Order"  />
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/stocks">
          <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} Heading="Stocks"  />
            <TableDash cols={stocks(handleEdit)} data={stockdata}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/deliverystatus">
          <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} Heading="Delivery Status"  />
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>          </Route>
          <Route exact path="/payment">
          <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar} Heading="Payment" />
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>

        <SidebarDashboard sidebarOpen={sidebarOpen}  closeSidebar={closeSidebar}/>
        </Router>
      </div>
    
  );
};

export default DepotmanagerDashboard;
