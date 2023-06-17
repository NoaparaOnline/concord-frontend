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
import { useTranslation } from "react-i18next";

const Reports = (props) => {
  const { t } = useTranslation("common");

  const { sidebarOpen, openSidebar, tabHandler0, selectedTab0 } = props;

  const [selectedtile, setselectedtile] = useState(t("reports.presc_report"));
  const FromView = props?.location?.state?.key;
  const tabHandler = (item) => {
    setselectedtile(item);
  };
  const buttonname1 = [t("reports.all_text"), t("reports.region_text")];
  useEffect(() => {
    if (FromView === "fromPrescription") {
      setselectedtile(t("reports.presc_report"));
    } else if (FromView === "fromDCR") {
      setselectedtile(t("reports.dcr_report"));
    } else if (FromView === "fromDoctor") {
      setselectedtile(t("reports.dctr_report"));
    } else if (FromView === "fromProduct") {
      setselectedtile(t("reports.dcr_report"));
    }
    // eslint-disable-next-line
  }, [FromView]);
  return (
    <>
      <NavbarDash
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        Heading={t("reports.reports_text")}
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
              t("reports.presc_report"),
              t("reports.dcr_report"),
              t("reports.dctr_report"),
              t("reports.prod_report"),
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
        DivChartComponent={
          <>
            <div className="container mt-5">
              {selectedtile === t("reports.presc_report") ? (
                <PrescriptionReport {...props} />
              ) : selectedtile === t("reports.dcr_report") ? (
                <DCRReport ort {...props} />
              ) : selectedtile === t("reports.dctr_report") ? (
                <DoctorReport {...props} />
              ) : selectedtile === t("reports.prod_report") ? (
                <ProductReport {...props} />
              ) : null}
            </div>
          </>
        }
      />
    </>
  );
};

export default Reports;
