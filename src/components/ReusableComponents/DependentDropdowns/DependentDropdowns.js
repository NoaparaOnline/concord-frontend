import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAssignedto, getChildsData, getRsmData, getSchedule } from "../../../Store/Actions/directorActions";

const DependentDropdowns = (props) => {
  const dispatch = useDispatch();
  

  
  const [assignto,setAssginto]=useState();
  console.log("data",assignto);

  const assignedtoforchilduid = useSelector(
    (state) => state?.director?.assignedto
  );

  const rsmdata = useSelector(
    (state) => state?.director?.assignedtorsm
  );
  const amdata = useSelector(
    (state) => state?.director?.assignedtoam
  );
  const mpodata = useSelector(
    (state) => state?.director?.assignedtompo
  );
 
  const filterd = assignedtoforchilduid?.filter(
    (status) => status?.role?.category?.name === "sm"
  );


  console.log("rsmss" , rsmdata)
  console.log("amdata" , amdata)
  console.log("mpodata" , mpodata)



  return (
    <>
      {/* Selected Dropdown For Child Users */}
      <div className="row">
        <div className="col-2">
          <select
            className="form-control"
            name="sm"
            onChange={(e) => {
             dispatch(getChildsData(e.target.value ,"rsm"))
             setAssginto(e.target.value)
            }}
          >
            <option defaultValue>Select SM</option>
            {filterd.map((item, index) => {
              return (
                <option value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control"
            name="rsm"
            onChange={(e) => {
            
              dispatch(getChildsData(e.target.value ,"am"))
             setAssginto(e.target.value)

             }}
          >
            <option value>Select RSM's</option>
            {rsmdata.filter(
    (status) => status?.role?.category?.name === "rsm"
  ).map((item, index) => {
              return (
                <option value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control"
            name="am"
            onChange={(e) => {
            
              dispatch(getChildsData(e.target.value ,"mpo"))
             setAssginto(e.target.value)

             }}
          >
            <option value>Select AM's</option>
            {amdata
            .filter(
              (status) => status?.role?.category?.name === "am"
            ).map((item, index) => {
              return (
                <option value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control"
            name="mpo"
            onChange={(e) => {
              setAssginto(e.target.value)
             }}
          >
            <option value>Select MPO's</option>
            {mpodata
             .filter(
              (status) => status?.role?.category?.name === "mpo"
            ).map((item, index) => {
              return (
                <option value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-4 d-flex justify-content-end">
          <div
            className={` btn btn-primary me-2 `}
            style={{ backgroundColor: "#0066b3" }}
          >
            <Link
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: "14px",
                textDecoration: "none",
              }}
              onClick={()=> dispatch(getSchedule(assignto))}
            >

              <i className="fa fa-filter ms-2"></i>
              &nbsp; Filter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DependentDropdowns;
