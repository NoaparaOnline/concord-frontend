import React from "react";
import { Col, FormLabel, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Select from "react-select";
import moment from "moment";

import CustomSelectInput from "../../components/ReusableComponents/CustomSelectInput";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../services/HttpProvider";
import {
  GetSMDoctors,
  GetSMStocks,
  ViewChildSalesManagerManagerAction,
} from "../../Store/Actions/directorActions";
import { useTranslation } from "react-i18next";

const ProductReport = () => {
  const {t}=useTranslation('common')
  const [doctor, setDoctor] = useState(null);
  const [smID, setSMID] = useState(null);

  const stocks = useSelector((state) => state.director?.stock);
  const doctors = useSelector((state) => state.director?.doctor1);
  const loadingDoctor = useSelector((state) => state.director?.loadingDoctor);
  const sm = useSelector((state) => state?.director?.salesManager);
  const loadingSM = useSelector((state) => state?.director?.loadingSm);

  const loadingStocks = useSelector((state) => state?.director?.loadingStocks);

  const [stockReport, setReport] = useState([]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ViewChildSalesManagerManagerAction());
  }, [dispatch]);

  let smOptions = [];
  sm.map((item) =>
    smOptions?.push({
      label: item?.name,
      value: item?.name,
      key: item?.uid,
    })
  );

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  let convertFrom = moment(from).unix();
  let convertTo = moment(to).unix();
  const getPrescriptionReport = async (id) => {
    let reqEndPoint =
      BASEURL +
      `/reports/products?stock_uid=${id}&child_uid=${smID}&from_date=${convertFrom}&to_date=${convertTo}`;

    setLoading(true);
    const authToken = JSON.parse(localStorage.getItem("tokenConcord"));

    let res = await axios.get(
      doctor === null
        ? reqEndPoint
        : BASEURL +
            `/reports/products?stock_uid=${id}&child_uid=${smID}&doctor_uid=${doctor}&from_date=${convertFrom}&to_date=${convertTo}`,
      {
        headers: {
          "x-session-key": authToken?.key,
          "x-session-type": authToken?.type,
        },
      }
    )
    setLoading(false);

    setReport(res?.data?.response_data);
  };
  let enumerateDaysBetweenDates = function (startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) <= 0) {
      dates.push(currDate.clone().format("DD-MM-YY"));
    }

    return dates;
  };
  const getDoctorOfSM = async (id) => {
    dispatch(GetSMDoctors(id));
  };

  let doctorOptions = [];
  doctors?.map((item) =>
    doctorOptions?.push({
      label: item?.name,
      value: item?.name,
      key: item?.uid,
    })
  );
  let stockOptions = [];
  stocks?.map((item) =>
    stockOptions.push({
      label: item?.product?.name,
      value: item?.product?.name,
      key: item?.uid,
    })
  );
  let dateArray = enumerateDaysBetweenDates(from, to);
  return (
    <>
      <Row>
        <Col xxs="12">
          {/* <Breadcrumb heading="Doctors" match={match} /> */}
          <h4> {t('product_report.prod_report_text')}</h4>
          <div
            style={{ border: "1px solid #000", width: "100%" }}
            className="mb-5"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6}>
          <FormLabel>{t('product_report.start_date')} </FormLabel>

          <input
            type="date"
            className="input-login-modal"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          ></input>
        </Col>
        <Col lg={6}>
          <FormLabel> {t('product_report.end_date')}</FormLabel>

          <input
            type="date"
            className="input-login-modal"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          ></input>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <FormGroup>
            <FormLabel>{t('product_report.select_sales_manager')}</FormLabel>
            {loadingSM ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  // getPrescriptionReport(val?.key)
                  dispatch(GetSMStocks(val?.key));
                  getDoctorOfSM(val?.key);

                  setSMID(val?.key);
                }}
                options={smOptions}
              />
            )}
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <FormLabel> {t('product_report.select_doctor')} </FormLabel>
            {loadingDoctor ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  // getPrescriptionReport(val?.key)
                  setDoctor(val?.key);
                }}
                options={doctorOptions}
              />
            )}
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <FormLabel> {t('product_report.select_stock')}</FormLabel>
            {loadingStocks ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ Input: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  getPrescriptionReport(val?.key);
                }}
                options={stockOptions}
              />
            )}
          </FormGroup>
        </Col>
      </Row>

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Loader height={25} width={30} type="Bars" color="black" />
          &nbsp; {t('product_report.gener_report_text')}
        </div>
      ) : from !== undefined && to !== undefined ? (
        <div className="table-responsive">
          <table
            style={{ tableLayout: "fixed", width: "500px", marginTop: "15px" }}
          >
            {/* className='table-responsive' */}
            <thead>
              <tr>
                <td style={{ width: "120px", fontWeight: "bold" }}>{t('product_report.name_text')}</td>
                {dateArray?.map((item) => {
                  return <th style={{ width: "80px" }}>{item}</th>;
                })}
                <th style={{ width: "80px" }}>{t('product_report.sum_text')}</th>
              </tr>
            </thead>
            <tbody>
              {stockReport?.map((item) => {
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
                  >
                    <td>{item?.user?.name}</td>

                    {item?.visits?.map((item_) => (
                      <td>{item_}</td>
                    ))}
                    <td>{item?.sum}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </>
  );
};

export default ProductReport;
