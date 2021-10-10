import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChildsData,  getSchedule } from "../../../Store/Actions/directorActions";

const DependentDropdowns = (props) => {
  const dispatch = useDispatch();
  

  
  const [assignto,setAssginto]=useState();

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


  // console.log("rsmdata",rsmdata);
  // console.log("amdata",amdata);
  // console.log("mpodata",mpodata);
  // console.log("filterd",filterd);

  const defaultSm = {
    Username: "Select SM ...",
  };
  const defaultRsm = {
    Username: "Select RSM ...",
  };
  const defaultAm = {
    Username: "Select AM ...",
  };
  const defaultMPO = {
    Username: "Select MPO ...",
  };

  return (
    <>
      {/* Selected Dropdown For Child Users */}
      <div className="row">
        <div className="col-2">
          <select
            className="form-control form-select text-uppercase "
            name="sm"
            onChange={(e) => {
             dispatch(getChildsData(e.target.value ,"rsm"))
             setAssginto(e.target.value)
            }}
          >
            <option defaultValue={defaultSm}>{defaultSm.Username}</option>
            {filterd.map((item, index) => {
              return (
                <option className="text-uppercase" value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control form-select text-uppercase"
            name="rsm"
            onChange={(e) => {
            
              dispatch(getChildsData(e.target.value ,"am"))
             setAssginto(e.target.value)

             }}
          >
            <option defaultValue={defaultRsm}>{defaultRsm.Username}</option>
            {rsmdata.filter(
    (status) => status?.role?.category?.name === "rsm"
  ).map((item, index) => {
              return (
                <option className="text-uppercase" value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control form-select text-uppercase"
            name="am"
            onChange={(e) => {
            
              dispatch(getChildsData(e.target.value ,"mpo"))
             setAssginto(e.target.value)

             }}
          >
            <option defaultValue={defaultAm}>{defaultAm.Username}</option>
            {amdata
            .filter(
              (status) => status?.role?.category?.name === "am"
            ).map((item, index) => {
              return (
                <option className="text-uppercase" value={item?.uid} key={index + 1}>
                  {item?.role?.category?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2">
          <select
            className="form-control form-select text-uppercase"
            name="mpo"
            onChange={(e) => {
              setAssginto(e.target.value)
             }}

          >
            <option defaultValue={defaultMPO}>{defaultMPO.Username}</option>
            {mpodata
             .filter(
              (status) => status?.role?.category?.name === "mpo"
            ).map((item, index) => {
              return (
                <option className="text-uppercase" value={item?.uid} key={index + 1}>
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
