import React,{useState} from "react";
import HeaderDash from "../../components/ReusableComponents/HeaderDash/HeaderDash";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import './depotmanagerDashboard.css'
const DepotmanagerDashboard = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    // #EFFBEF
        <div className="sidecontainer" style={{ background: "#EFFBEF" }}>
        <NavbarDash sidebarOpen={sidebarOpen} openSidebar={openSidebar}  />
        <div className="container" style={{backgroundColor:'#FFF'}}>
        <TableDash/>
        </div>
        <SidebarDashboard sidebarOpen={sidebarOpen}  closeSidebar={closeSidebar}/>
      </div>
    
  );
};

export default DepotmanagerDashboard;
