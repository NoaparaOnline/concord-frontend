import React,{useState} from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import './depotmanagerDashboard.css'

import { data } from '../../components/ReusableComponents/TableDash/mockData';
import { tableConstants } from '../../components/ReusableComponents/TableDash/tableConstant';

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
        <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar}  />
        <div className="container" style={{backgroundColor:'#FFF'}}>
          <Route exact path="/order-history">
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/neworder">
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/stocks">
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable bordered={false}/>
          </Route>
          <Route exact path="/deliverystatus">
            <TableDash cols={tableConstants(handleEdit)} data={data}  hoverable striped bordered={false}/>
          </Route>
          <Route exact path="/payment">
            <TableDash cols={tableConstants(handleEdit)} data={data} isDark/>
          </Route>
        </div>

        <SidebarDashboard sidebarOpen={sidebarOpen}  closeSidebar={closeSidebar}/>
        </Router>
      </div>
    
  );
};

export default DepotmanagerDashboard;
