import React, { useState } from "react";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import DashboardBtnList from "../../components/ReusableComponents/DashboardBtnList/DashboardBtnList";

import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import DashboardHeaderAndTile from "../../components/ReusableComponents/dashboardheaderandtile/DashboardHeaderAndTile";
import { useEffect } from "react";
import DepotSaleReport from "./DepotSaleReport";

import { useTranslation } from "react-i18next";

const Reports = (props) => {
  const { t } = useTranslation("common");

  const { sidebarOpen, openSidebar, tabHandler0, selectedTab0 } = props;

  const [selectedtile, setselectedtile] = useState("Depot Sale Report");
  const FromView = props?.location?.state?.key;
  const tabHandler = (item) => {
    setselectedtile(item);
  };
  useEffect(() => {
    if (FromView === "fromPrescription") {
      setselectedtile("Depot Sale Report");
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
        colorfulcards={
          <DashboardHeaderAndTile
            options={["Depot Sale Report"]}
            classname={[
              "colrcardblue",
              "colrcardseagreen",
              "colrcardred",
              "colrcardorange",
            ]}
            tabHandler={tabHandler}
            value={selectedtile}
          />
        }
        DivChartComponent={
          <>
            <div className="container mt-5">
              {selectedtile === "Depot Sale Report" ? (
                <DepotSaleReport {...props} />
              ) : null}
            </div>
          </>
        }
      />
    </>
  );
};

export default Reports;
