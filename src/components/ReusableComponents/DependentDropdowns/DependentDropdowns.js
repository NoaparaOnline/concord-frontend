import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getChildsData,
  getSchedule,
} from "../../../Store/Actions/directorActions";

const DependentDropdowns = (props) => {
  const dispatch = useDispatch();

  const [assignto, setAssginto] = useState();

  const assignedtoforchilduid = useSelector(
    (state) => state?.director?.assignedto
  );

  const rsmdata = useSelector((state) => state?.director?.assignedtorsm);
  const amdata = useSelector((state) => state?.director?.assignedtoam);
  const mpodata = useSelector((state) => state?.director?.assignedtompo);

  const filterd = assignedtoforchilduid?.filter(
    (status) => status?.role?.category?.name === "sm"
  );

  // console.log("rsmdata",rsmdata);
  // console.log("amdata",amdata);
  // console.log("mpodata",mpodata);
  // console.log("filterd",filterd);

  const [defaultval, setDefaultval] = useState({
    sm: "Select SM ...",
    rsm: "Select RSM ...",
    am: "Select AM ...",
    mpo: "Select MPO ...",
  });

  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");

  const [disabletrue1, setDisabletrue1] = useState(true);
  const [disabletrue2, setDisabletrue2] = useState(true);
  const [disabletrue3, setDisabletrue3] = useState(true);

  return (
    <>
      {/* Selected Dropdown For Child Users */}
      <div className="row">
        <div className="col-lg-2 mt-3">
          <select
            className="form-control form-select"
            name="sm"
            onChange={(e) => {
              dispatch(getChildsData(e.target.value, "rsm"));
              setAssginto(e.target.value);
              setDisabletrue1(false);
              setSelected(e.target.value);
            }}
            value={selected}
          >
            <option selected={defaultval.sm}>{defaultval.sm}</option>
            {filterd.map((item, index) => {
              return (
                <option
                  
                  value={item?.uid}
                  key={index + 1}
                >
                  {item?.role?.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-lg-2 mt-3">
          <select
            className="form-control form-select "
            name="rsm"
            onChange={(e) => {
              dispatch(getChildsData(e.target.value, "am"));
              setAssginto(e.target.value);
              setDisabletrue2(false);
              setSelected1(e.target.value);
            }}
            value={selected1}
            disabled={disabletrue1}
          >
            <option selected={defaultval.rsm}>{defaultval.rsm}</option>
            {rsmdata
              .filter((status) => status?.role?.category?.name === "rsm")
              .map((item, index) => {
                return (
                  <option
                    
                    value={item?.uid}
                    key={index + 1}
                  >
                    {item?.role?.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-lg-2 mt-3">
          <select
            className="form-control form-select "
            name="am"
            onChange={(e) => {
              dispatch(getChildsData(e.target.value, "mpo"));
              setAssginto(e.target.value);
              setDisabletrue3(false);
              setSelected2(e.target.value);
            }}
            disabled={disabletrue2}
            value={selected2}
          >
            <option selected={defaultval.am}>{defaultval.am}</option>
            {amdata
              .filter((status) => status?.role?.category?.name === "am")
              .map((item, index) => {
                return (
                  <option
                    
                    value={item?.uid}
                    key={index + 1}
                  >
                    {item?.role?.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-lg-2 mt-3">
          <select
            className="form-control form-select "
            name="mpo"
            onChange={(e) => {
              setAssginto(e.target.value);
              setSelected3(e.target.value);
            }}
            disabled={disabletrue3}
            value={selected3}
          >
            <option selected={defaultval.mpo}>{defaultval.mpo}</option>
            {mpodata
              .filter((status) => status?.role?.category?.name === "mpo")
              .map((item, index) => {
                return (
                  <option
                    
                    value={item?.uid}
                    key={index + 1}
                  >
                    {item?.role?.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="col-lg-4 d-flex justify-content-end mt-3">
          <div className={` btn me-2 `} style={{ backgroundColor: "#22A6AC" }}>
            <Link
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: "14px",
                textDecoration: "none",
              }}
              onClick={() => {
                dispatch(getSchedule(""));
                setDisabletrue1(true);
                setDisabletrue2(true);
                setDisabletrue3(true);
                setSelected("");
                setSelected1("");
                setSelected2("");
                setSelected3("");
              }}
            >
              <i className="fa fa-times ms-2"></i>
              &nbsp; Clear
            </Link>
          </div>
          <div className={` btn me-2 `} style={{ backgroundColor: "#22A6AC" }}>
            <Link
              style={{
                color: "#fff",
                fontWeight: "500",
                fontSize: "14px",
                textDecoration: "none",
              }}
              onClick={() => {
                dispatch(getSchedule(assignto));
                }}
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
