import React from "react";
import DashboardTile from "./DashboardTile";
const DashboardHeaderAndTile = ({
  heading,
  options,
  tabHandler,
  value,
  icons,
  classname,
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {options?.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12 mb-3" key={index + 1}>
              <DashboardTile
                label={item}
                // icon={icons[index]}
                classname={classname[index]}
                active={item === value}
                onClick={tabHandler}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardHeaderAndTile;
