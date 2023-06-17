/*eslint-disable*/

import React, { useState, useEffect } from "react";

import { Col, FormLabel, FormGroup, Row, Button } from "react-bootstrap";
import CustomSelectInput from "../../components/ReusableComponents/CustomSelectInput";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Select from "react-select";
import axios from "axios";
import { BASEURL } from "../../services/HttpProvider";

import Lightbox from "rhino-react-image-lightbox-rotate";
import "react-image-lightbox/style.css";
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";

const FieldStaffSaleReport = (props) => {
  const CurrentProduct = useSelector((state) => state?.deport?.fielddata);
  const to = CurrentProduct?.to;
  const from = CurrentProduct?.from;
  const [loading, setLoading] = useState(false);
  const [reportdata, setReportdata] = useState([]);
  const { sidebarOpen, openSidebar, selectedTab0 } = props;

  const getFieldStaffReport = async (id) => {
    setLoading(true);
    const authToken = JSON.parse(localStorage.getItem("tokenConcord"));
    let res = await axios.get(
      BASEURL +
        `/reports/field-staff-sale?child_uid=${CurrentProduct?.data?.user?.uid}&from_date=${CurrentProduct?.from}&to_date=${CurrentProduct?.to}`,
      {
        headers: {
          "x-session-key": authToken?.key,
          "x-session-type": authToken?.type,
        },
      }
    );
    if (res?.data?.response_code == 200) {
      setLoading(false);
      setReportdata(res?.data?.response_data);
    }
  };

  useEffect(() => {
    getFieldStaffReport();
  }, []);

  const TotalPrice = (idx) => {
    const sum = [];
    reportdata[idx]?.medicines.map((item) => sum?.push(item?.total_price));
  };

  return (
    <>
      <NavbarDash
        sidebarOpen={sidebarOpen}
        openSidebar={openSidebar}
        Heading="FieldStaff Sale Report"
      />

      <DashboardMainCard
        classnamewidth="96%"
        reverse={false}
        DivChartComponent={
          <>
            <div className="container mt-5">
              {loading ? (
                <div className="d-flex justify-content-center mt-5">
                  <Loader height={25} width={30} type="Bars" color="black" />
                  &nbsp; Generating Report
                </div>
              ) : from !== undefined && to !== undefined ? (
                <div className="table-responsive text-center">
                  <table
                    style={{
                      tableLayout: "fixed",
                      width: "100%",
                      marginTop: "15px",
                      marginBottom: "50px",
                      fontSize: "14px",
                    }}
                    className="table-bordered"
                  >
                    {/* className='table-responsive' */}
                    <thead>
                      <tr className="tableSingleRow">
                        <td style={{ width: "120px", fontWeight: "bold" }}>
                          Sale ID
                        </td>

                        <th style={{ width: "80px" }}>Customer Name</th>
                        <th style={{ width: "80px" }}>Medicine Name</th>
                        <th style={{ width: "80px" }}>Product Code</th>
                        <th style={{ width: "80px" }}>Quantity</th>
                        <th style={{ width: "80px" }}>Price</th>
                        <th style={{ width: "80px" }}>Total</th>
                        <th style={{ width: "80px" }}>Payment Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportdata?.map((item, index) => {
                        return (
                          <>
                            <tr className="tableSingleRow">
                              {/* item?.medicines.length.toString() */}
                              <td
                                rowSpan={
                                  item?.medicines?.length == 1
                                    ? ""
                                    : (item?.medicines.length + 1).toString()
                                }
                              >
                                {item?.order_id}
                              </td>
                              <td
                                rowSpan={
                                  item?.medicines?.length == 1
                                    ? ""
                                    : (item?.medicines.length + 1).toString()
                                }
                              >
                                {item?.customer?.name}{" "}
                                <span>&nbsp;{item?.customer?.customer_id}</span>
                              </td>
                              {item?.medicines?.length == 1 ? (
                                <>
                                  <td>{item?.medicines[0]?.name}</td>
                                  <td>{item?.medicines[0]?.pr_code}</td>
                                  <td>{item?.medicines[0]?.quantity}</td>
                                  <td>{item?.medicines[0]?.total_price}</td>
                                  <td>
                                    {item?.medicines?.reduce(
                                      (total, obj) => obj.total_price + total,
                                      0
                                    )}
                                  </td>
                                  <td>
                                    <span className="text-capitalize">
                                      {item?.payment_type}
                                    </span>
                                  </td>
                                </>
                              ) : (
                                ""
                              )}
                            </tr>

                            {item?.medicines?.length > 1
                              ? item?.medicines?.map((med, idx) => {
                                  return (
                                    <tr className="tableSingleRow">
                                      <td>{med?.name}</td>
                                      <td>{med?.pr_code}</td>
                                      <td>{med?.quantity}</td>
                                      <td>{med?.total_price}</td>
                                      {idx === 0 ? (
                                        <>
                                          <td
                                            rowSpan={item?.medicines.length.toString()}
                                          >
                                            {item?.medicines?.reduce(
                                              (total, obj) =>
                                                obj.total_price + total,
                                              0
                                            )}
                                          </td>
                                          <td
                                            rowSpan={item?.medicines.length.toString()}
                                          >
                                            <span className="text-capitalize">
                                              {item?.payment_type}
                                            </span>
                                          </td>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </tr>
                                  );
                                })
                              : ""}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </div>
          </>
        }
      />
    </>
  );
};

export default FieldStaffSaleReport;
