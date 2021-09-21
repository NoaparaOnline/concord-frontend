import React from "react";
import { Link } from "react-router-dom";
import './DashboardBtnList.css'
const DashboardBtnList = ({
  label,
  className,
  bntStyle,
  labelStyle,
  onClick,
}) => {
  return (
    <div
      className={`dashboardBtnList-item ${className}  btn `}
      style={{ bntStyle }}
      onClick={onClick}
    >
      <Link style={{ labelStyle }} >{label}</Link>
     </div>
    
  );
};

export default DashboardBtnList;
