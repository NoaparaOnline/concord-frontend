import React, { useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import SidebarDashboard from "../../components/ReusableComponents/SidebarDashboard/SidebarDashboard";
import TableDash from "../../components/ReusableComponents/TableDash/TableDash";
import "../depotmanagerDashboard/depotmanagerDashboard.css";
import DashCard from "../../components/ReusableComponents/DashboardTableCards/DashCard2";
import {
  data,
  stockdata,
  directorSchedulDataAll,
  directorSchedulDataCompleted,
  directorSchedulDataPending,
  directorSchedulDataDue,
  directorSchedulCancelled,
  directorproductbody,
  districards

} from "../../components/ReusableComponents/TableDash/mockData";
import {
  tableConstants,
  stocks,
  Directordashschedule,
  Directordashproducthead,
} from "../../components/ReusableComponents/TableDash/tableConstant";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InnerPage from "../../components/ReusableComponents/TableDash/InnerPage";
import SiderbarBtn from "../../components/ReusableComponents/SidebarDashboard/SiderbarBtn";
import icon1 from "../../Statics/assets/Sidebar/6.png";
import icon2 from "../../Statics/assets/Sidebar/7.png";
import icon3 from "../../Statics/assets/Sidebar/8.png";
import icon4 from "../../Statics/assets/Sidebar/9.png";
import icon5 from "../../Statics/assets/Sidebar/10.png";
import iconf from "../../Statics/assets/Sidebar/11.png";
import icon6 from "../../Statics/assets/Sidebar/logout.png";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Store/Actions/loginActions";
import DashCharts from "../../components/ReusableComponents/DashCharts/DashCharts";
import ColorFullDashCard from "../../components/ReusableComponents/ColorFullDashCard/ColorFullDashCard";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
import DashboardTableCards from "../../components/ReusableComponents/DashboardTableCards/DashboardTableCards";

// Search Bar Images Import

import search from '../../Statics/assets/G1.png'
import filter from '../../Statics/assets/F1.png'

const DirectorDashboard = (props) => {

  // tabledata Toogle State
  const [selectedTabbledata, setSelectedTabbledata] = useState(data);
  const tabledataHandler = (item) => {
    setSelectedTabbledata(item);
  };

  // Selected Buttons
  const [selectedTab1, setSelectedTab1] = useState("All");
  const [selectedTab2, setSelectedTab2] = useState("List");
  
  const tabHandler1 = (item) => {
    setSelectedTab1(item);
    
      if(item === "All")
      {
        tabledataHandler(directorSchedulDataAll)
      }
      else if(item === "Completed") {
        tabledataHandler(directorSchedulDataCompleted)
      }
      else if(item === "Pending") {
        tabledataHandler(directorSchedulDataPending)
      }
      else if(item === "Due") {
        tabledataHandler(directorSchedulDataDue)
      }
      else if(item === "Cancelled") {
        tabledataHandler(directorSchedulCancelled)
      }
     
       
    
  };


  const tabHandler2 = (item) => {
    setSelectedTab2(item);
    
      if(item === "List")
      {
        tabledataHandler(directorSchedulDataAll)
      }
      else if(item === "Grid") {
        tabledataHandler(directorSchedulDataCompleted)
      }
   
       
    
  };


  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  const dispatch = useDispatch();

  const logouthandler = () => {
    dispatch(logoutUser());
  };

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
            data={selectedTabbledata}
            hoverable
            reverse={false}
            floatleftrightbutton={
              <>
              <div className="d-flex justify-content-end mb-4">

              {["All", "Region"].map(
          (item, index) => (
            <div
              className="d-flex d-inline-flex"
              key={index + 1}
              onClick={() => tabHandler1(item)}
            >
              <DashboardBtnList
                label={item}
                labelStyle={selectedTab1 === item ? { color: "#fff",borderRadius:'10px'} : ""}
                className={
                  selectedTab1 === item
                    ? "dashboardBtnList-item-active py-2"
                    : "default-color-and-hover py-2"
                }
              />
            </div>
          )
        )}
              </div> 
              </>
            }
            colorfulcards={
              <>
                <div className="container mb-5">
                  <div className="row">
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="By Value"
                      textl="BTK 24,000"
                      textr="34%"
                      classname="colrcardblue"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="By Product"
                      textl="2,478"
                      textr="64%"
                      classname="colrcardseagreen"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="By Prescription"
                      textl="1,151"
                      textr="20%"
                      classname="colrcardred"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="By Customer"
                      textl="1,200"
                      textr="34%"
                      classname="colrcardorange"
                      />
                    </div>
                  </div>
                </div>
              </>
            }
            DivChartComponent={
              <>
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-5 ">
                      <DashCharts heading="By Value" />
                    </div>
                    <div className="col-lg-5 ms-5">
                      <DashCharts heading="By Prescription" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5">
                    <div className="col-lg-5 ">
                      <DashCharts heading="By Product" />
                    </div>
                    <div className="col-lg-5 ms-5">
                      <DashCharts heading="By Customer" />
                    </div>
                  </div>
                </div>
              </>
            }
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
            cols={Directordashschedule(handleEdit)}
            data={selectedTabbledata}
            hoverable
            reverse={true}
            SelectedButtons={
              <>
              <div className="mb-3 d-flex justify-content-center">
             
              {["All", "Completed", "Pending","Due","Cancelled"].map(
          (item, index) => (
            <div
              className="d-flex d-inline-flex "
              key={index + 1}
              onClick={() => tabHandler1(item)}
            >
              <DashboardBtnList
                label={item}
                labelStyle={selectedTab1 === item ? { color: "#fff",borderRadius:'10px'} : ""}
                className={
                  selectedTab1 === item
                    ? "dashboardBtnList-item-active"
                    : "default-color-and-hover "
                }
              />
            </div>
          )
        )}
              </div>
        

              </>
            }
            colorfulcards={
              <>
                <div className="container mb-5">
                  <div className="row">
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="Completed"
                      textl="1544"
                      textr="34%"
                      classname="colrcardblue"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="Pending"
                      textl="2,478"
                      textr="64%"
                      classname="colrcardseagreen"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="Due"
                      textl="1,151"
                      textr="20%"
                      classname="colrcardred"
                      />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                      <ColorFullDashCard
                      headtext="Resheduled"
                      textl="1,200"
                      textr="34%"
                      classname="colrcardorange"
                      />
                    </div>
                  </div>
                </div>
              </>
            }
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
            cols={Directordashproducthead(handleEdit)}
            data={directorproductbody}

            SearchBar={
              <>
              
              <div class="search-box ms-5 my-4" style={{width: '240px'}} >
                <form className="form_style_search"style={{border:'1px solid #707070',borderRadius:'10px' }}>
                <button className="form_style_btn" style={{ background:'transparent',border:'none'}}><img src={search} alt="" /></button>
                <input className="form_style_input" type="text" placeholder="Search" />
                <button className="form_style_btn" style={{ background:'transparent',border:'none'}}><img src={filter} alt="" /></button>
                </form>
            </div>
              
              </>
            }

            reverse={selectedTab2 === "List" ? true : false}
            hoverable
           
            SelectedButtons={
              <>
              <div className="ms-5 mb-3">

              {["List", "Grid"].map(
          (item, index) => (
            <div
              className="d-flex d-inline-flex "
              key={index + 1}
              onClick={() => tabHandler2(item)}
            >
              <DashboardBtnList
                label={item}
                labelStyle={selectedTab2 === item ? { color: "#fff",borderRadius:'10px'} : ""}
                className={
                  selectedTab2 === item
                    ? "dashboardBtnList-item-active py-2"
                    : "default-color-and-hover py-2"
                }
              />
            </div>
          )
        )}
              </div>
        

              </>
            }
            TableCardGrid={
              <>
             <div className="row">

               {directorproductbody.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className="col-lg-3 mb-3 d-flex justify-content-center">
              <DashboardTableCards/>
              </div>
              </React.Fragment>
          )
          )}
             </div>
              </>
            }
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
            cols={Directordashproducthead(handleEdit)}
            data={directorproductbody}
            reverse={selectedTab2 === "List" ? true : false}
            hoverable
            SearchBar={
              <>
              
              <div class="search-box ms-5 my-4" style={{width: '240px'}} >
                <form className="form_style_search"style={{border:'1px solid #707070',borderRadius:'10px' }}>
                <button className="form_style_btn" style={{ background:'transparent',border:'none'}}><img src={search} alt="" /></button>
                <input className="form_style_input" type="text" placeholder="Search" />
                <button className="form_style_btn" style={{ background:'transparent',border:'none'}}><img src={filter} alt="" /></button>
                </form>
            </div>
              
              </>
            }

            SelectedButtons={
              <>
              <div className="ms-5 mb-3">

              {["List", "Grid"].map(
          (item, index) => (
            <div
              className="d-flex d-inline-flex"
              key={index + 1}
              onClick={() => tabHandler2(item)}
            >
              <DashboardBtnList
                label={item}
                labelStyle={selectedTab2 === item ? { color: "#fff",borderRadius:'10px'} : ""}
                className={
                  selectedTab2 === item
                    ? "dashboardBtnList-item-active py-2"
                    : "default-color-and-hover py-2"
                }
              />
            </div>
          )
        )}
              </div>
        

              </>
            }
            TableCardGrid={
              <>
             <div className="row">

               {directorproductbody.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className="col-lg-3 mb-3 d-flex justify-content-center">
              <DashboardTableCards/>
              </div>
              </React.Fragment>
          )
          )}
             </div>
              </>
            }
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
            data={selectedTabbledata}
            reverse={false}
            
            TableCardGrid={
              <>
             <div className="row">

               {districards.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className="col-lg-3 mb-3 d-flex justify-content-center">
  
              <DashCard data={ob}/>

              </div>
              </React.Fragment>
          )
          )}
             </div>
              </>
            }
            
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
            data={selectedTabbledata}
            hoverable
            TableCardGrid={
              <>
             <div className="row">

               {districards.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className="col-lg-3 mb-3 d-flex justify-content-center">
              <DashCard data={ob}/>

              </div>
              </React.Fragment>
          )
          )}
             </div>
              </>
            }
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
                imgbtn={iconf}
                Colr="#07A04A"
                {...props}
                borderSidebtn={{ borderRight: "6px solid #07A04A" }}
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
