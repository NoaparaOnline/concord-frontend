import React from "react";
import { Link } from "react-router-dom";
import './DashboardBtnList.css'
const DashboardBtnList = ({
  label,
  className,
  bntStyle,
  labelStyle,
  onClick,
  iconclassname,
}) => {
  return (
    <div
      className={`dashboardBtnList-item ${className}  btn `}
      style={ bntStyle }
      onClick={onClick}
    >
      <i className={`${iconclassname}`} style={{color:'#565656'}}></i>
      <Link to='#' style={{ labelStyle }} >&nbsp;<span style={{fontSize:'14px'}}>{label}</span></Link>
     </div>
    
  );
};

export default DashboardBtnList;
