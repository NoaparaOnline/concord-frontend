/* eslint-disable */
import React, { useState, useEffect } from "react";

import { Col, FormLabel, FormGroup, Row, Button } from "react-bootstrap";
import CustomSelectInput from "../../components/ReusableComponents/CustomSelectInput";
import { Link } from "react-router-dom";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Select from "react-select";
import axios from "axios";
import { BASEURL } from "../../services/HttpProvider";

import Lightbox from "rhino-react-image-lightbox-rotate";
import "react-image-lightbox/style.css";
import {
  GetDistributionCenter,
  getFieldStaffData,
} from "../../Store/Actions/deportmanagerActions";

export default function DepotSaleReport(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [uid, setUid] = useState("");
  const [prescription, setPrescription] = useState([]);
  const user = useSelector((state) => state?.logIn?.user);
  // const staticdata = useSelector((state) => state?.orderReducer?.staticdata);
  // useEffect(() => {
  //   // dispatch(StaticDataGet());
  //   dispatch(ViewSalesManagerManagerAction());
  // }, [dispatch]);

  useEffect(() => {
    // dispatch(GetDistributionCenter());
  }, []);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  let convertFrom = moment(from)
    .startOf("day")
    .unix();
  let convertTo = moment(to)
    .endOf("day")
    .unix();
  const getPrescriptionReport = async (id) => {
    setLoading(true);
    const authToken = JSON.parse(localStorage.getItem("tokenConcord"));
    let res = await axios.get(
      BASEURL +
        `/reports/depot-sale?uid=${user?.uid}&from_date=${convertFrom}&to_date=${convertTo}`,
      {
        headers: {
          "x-session-key": authToken?.key,
          "x-session-type": authToken?.type,
        },
      }
    );
    setLoading(false);
    setPrescription(res?.data?.response_data);
  };

  let date1 = new Date();
  const sevenDaysBeforeDate = new Date(
    new Date().setDate(new Date().getDate() - 7)
  );
  let enumerateDaysBetweenDates = function(startDate, endDate) {
    var dates = [];
    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).endOf("day");
    dates.push(currDate.clone().format("DD-MM-YY"));
    while (currDate.add(1, "days").diff(lastDate) <= 0) {
      dates.push(currDate.clone().format("DD-MM-YY"));
    }
    return dates;
  };
  let dateArray = enumerateDaysBetweenDates(from, to);
  // let prescription_approved_option = []
  // staticdata?.prescription__is_approved?.map((item) => (
  //     prescription_approved_option.push({ label: item?.name, value: item?.value, key: item?.id })
  // ))
  const handleClick = (item) => {
    setData(item);
    setShow(true);
  };

  return (
    <>
      <Row>
        <Col xxs="12">
          {/* <Breadcrumb heading="Doctors" match={match} /> */}
          <h4>Depot Sale Report</h4>
          <hr />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={6}>
          <FormGroup>
            <FormLabel>Start Date</FormLabel>

            <input
              type="date"
              className="input-login-modal"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            ></input>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <FormLabel>End Date</FormLabel>

            <input
              type="date"
              className="input-login-modal"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            ></input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
          <Button
            style={{ backgroundColor: "#0066b3" }}
            onClick={() => getPrescriptionReport(uid)}
          >
            <span className="spinner d-inline-block">
              <span className="bounce1" />
              <span className="bounce2" />
              <span className="bounce3" />
            </span>
            <span className="label">Generate Report</span>
          </Button>
        </Col>
      </Row>

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader height={25} width={30} type="Bars" color="black" />
          &nbsp; Generating Report
        </div>
      ) : from !== undefined && to !== undefined ? (
        <div className="table-responsive">
          <table
            style={{
              tableLayout: "fixed",
              width: "100%",
              marginTop: "15px",
              marginBottom: "50px",
            }}
          >
            {/* className='table-responsive' */}
            <thead>
              <tr>
                <td style={{ width: "120px", fontWeight: "bold" }}>Name</td>

                <th style={{ width: "80px" }}>Cash Sale</th>
                <th style={{ width: "80px" }}>Credit Sale</th>
                <th style={{ width: "80px" }}>Dcc Sale</th>
                <th style={{ width: "80px" }}>Total Sale</th>
                <th style={{ width: "80px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {prescription?.map((item) => {
                return (
                  <tr
                    style={{
                      backgroundColor:
                        item?.user?.role === "mpo"
                          ? "lightgray"
                          : item?.user?.role === "rsm"
                          ? "lightgoldenrodyellow"
                          : item?.user?.role === "am"
                          ? "lightskyblue"
                          : item?.user?.role === "sm"
                          ? "lightslategray"
                          : null,
                    }}
                    className="tableSingleRow"
                  >
                    <td>
                      {item?.user?.name}
                      <span className="text-uppercase font-weight-bold">
                        &nbsp; ({item?.user.role})
                      </span>
                    </td>

                    <td>{item?.sale?.cash}</td>
                    <td>{item?.sale?.credit}</td>
                    <td>{item?.sale?.dcc}</td>
                    <td>{item?.sale?.total}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `${props.match.path}/reports/fieldstaff-sale`,
                        }}
                        onClick={() =>
                          dispatch(
                            getFieldStaffData({
                              data: item,
                              to: convertTo,
                              from: convertFrom,
                            })
                          )
                        }
                      >
                        <Button
                          style={{
                            backgroundColor: "#22A6AC",
                            color: "#fff",
                            border: "none",
                          }}
                        >
                          View Report
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      {show && (
        <Lightbox
          mainSrc={data[photoIndex]}
          nextSrc={data[(photoIndex + 1) % data.length]}
          prevSrc={data[(photoIndex + data.length - 1) % data.length]}
          onCloseRequest={() => setShow(!show)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + data.length - 1) % data.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.length)
          }
        />
      )}
    </>
  );
}
