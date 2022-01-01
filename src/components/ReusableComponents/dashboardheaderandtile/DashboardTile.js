import React from "react";
import ColorFullDashCard from "../ColorFullDashCard/ColorFullDashCard";

const DashboardTile = ({ classname,label, icon, onClick, active }) => {
  return (
    <div
      onClick={() => onClick(label)}
  >
   
   <ColorFullDashCard
                  active={active}
                  headtext={label}
                  textl=""
                  textr=""
                  classname={classname}
                />
      {/* <div className="text-center">{label}</div> */}
      {/* <div className="ml-3 text-center w-50" style={{position:'relative'}}>{label}</div>
      <img src={icon} alt=""  style={{position:'absolute',left:'10%'}}/> */}
    </div>
  );
};

export default DashboardTile;
