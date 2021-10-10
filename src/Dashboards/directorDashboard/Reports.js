import React from 'react'
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
import ColorFullDashCard from "../../components/ReusableComponents/ColorFullDashCard/ColorFullDashCard";
import DashCharts from "../../components/ReusableComponents/DashCharts/DashCharts";
import DashboardMainCard from '../../components/ReusableComponents/DashboardMainCard/DashboardMainCard';

const Reports = ({
  
    sidebarOpen,
    openSidebar,
    tabHandler0,    
    selectedTab0,
}) => {
  const buttonname1 = ["All", "Region"];

  return (
        <>
            <NavbarDash
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
            Heading="Reports"
          />
          <DashboardMainCard
            reverse={false}
            floatleftrightbutton={
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="d-flex justify-content-end mb-4 ">
                      {buttonname1.map((item, index) => (
                        <div
                          className="d-flex d-inline-flex"
                          key={index + 1}
                          onClick={() => tabHandler0(item)}
                        >
                          <DashboardBtnList
                            label={item}
                            bntStyle={{
                              borderRadius:
                                index === 0
                                  ? "10px 0px 0px 10px"
                                  : index === buttonname1.length - 1
                                    ? "0px 10px 10px 0px"
                                    : "",
                              width:
                                index === 0
                                  ? "80px"
                                    : "",
                            }}
                            className={
                              selectedTab0 === item
                                ? "dashboardBtnList-item-active py-2"
                                : "default-color-and-hover py-2"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
            colorfulcards={
              <div className="container">
                <div className="row d-flex justify-content-center mb-3">
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Value"
                      textl="BTK 24,000"
                      textr="34%"
                      classname="colrcardblue"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Product"
                      textl="2,478"
                      textr="64%"
                      classname="colrcardseagreen"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Prescription"
                      textl="1,151"
                      textr="20%"
                      classname="colrcardred"
                    />
                  </div>
                  <div className="col-xl-3 col-md-6 col-sm-6 mb-3">
                    <ColorFullDashCard
                      headtext="By Customer"
                      textl="1,200"
                      textr="34%"
                      classname="colrcardorange"
                    />
                  </div>
                </div>
              </div>
            }
            DivChartComponent={
              <>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Value" />
                  </div>
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Prescription" />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Product" />
                  </div>
                  <div className="col-lg-6 mb-3 ">
                    <DashCharts heading="By Customer" />
                  </div>
                </div>
              </>
            }
          />  
        </>
    )
}

export default Reports
