import React, { useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";
// import ColorFullDashCard from "../../components/ReusableComponents/ColorFullDashCard/ColorFullDashCard";
// import DashCharts from "../../components/ReusableComponents/DashCharts/DashCharts";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import DashboardHeaderAndTile from "../../components/ReusableComponents/dashboardheaderandtile/DashboardHeaderAndTile";
import { useEffect } from "react";
import PrescriptionReport from "./PrescriptionReport";
import DCRReport from "./DCRReport";
import DoctorReport from "./DoctorReport";
import ProductReport from "./ProductReport";

const Reports = (props) => {
  
 
  const { sidebarOpen, openSidebar, tabHandler0, selectedTab0 } = props;

  const [selectedtile, setselectedtile] = useState("Prescription Report");
  const FromView = props?.location?.state?.key;
  const tabHandler = (item) => {
    setselectedtile(item);
  };
  const buttonname1 = ["All", "Region"];
  useEffect(() => {
    console.log(FromView);
   
    if (FromView === "fromPrescription") {
      setselectedtile("Prescription Report");
    } else if (FromView === "fromDCR") {
      setselectedtile("DCR Report");
    } else if (FromView === "fromDoctor") {
      setselectedtile("Doctor Report");
    } else if (FromView === "fromProduct") {
      setselectedtile("Product Report");
    } 
    // eslint-disable-next-line
  }, [FromView]);
  return (
    <>
      <NavbarDash
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        Heading="Reports"
      />
      <DashboardMainCard
        classnamewidth="96%"
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
                        label={selectedTab0 === item ? item : <>{item}</>}
                        bntStyle={{
                          borderRadius:
                            index === 0
                              ? "10px 0px 0px 10px"
                              : index === buttonname1.length - 1
                              ? "0px 10px 10px 0px"
                              : "",
                          width: index === 0 ? "80px" : "",
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

          <DashboardHeaderAndTile
            options={[
              "Prescription Report",
              "DCR Report",
              "Doctor Report",
              "Product Report",
            ]}
            classname={[
              "colrcardblue",
              "colrcardseagreen",
              "colrcardred",
              "colrcardorange",
            ]}
            // icons={[
            //   appointment,
            //   prescription,
            //   MyDoctors,
            //   appointmentBook,
            //   payment,
            //   medical,
            //   cart,
            // ]}
            tabHandler={tabHandler}
            value={selectedtile}
          />
        }
        DivChartComponent={<>
        
        <div className="container mt-5">
        {selectedtile === "Prescription Report" ? (
          <PrescriptionReport {...props} />
        ) : selectedtile === "DCR Report" ? (
          <DCRReport {...props} />
        ) : selectedtile === "Doctor Report" ? (
          <DoctorReport {...props} />
        ) : selectedtile === "Product Report" ? (
          <ProductReport {...props} />
        ) : null}
      </div>

        </>}
      />
    </>
  );
};

export default Reports;
