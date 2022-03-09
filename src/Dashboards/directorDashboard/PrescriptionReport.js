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
  getUsers,
  ViewChildSalesManagerManagerAction,
} from "../../Store/Actions/directorActions";
import { useTranslation } from "react-i18next";

const PrescriptionReport = () => {
  const dispatch = useDispatch();
  const {t}=useTranslation('common')
  const [loading, setLoading] = useState(false);
  const loadingSM = useSelector((state) => state?.director?.loadingSm);
  const [prescription, setPrescription] = useState([]);
  const loadingAM = useSelector((state) => state?.director?.loadingAm);

  const loadingRSM = useSelector((state) => state?.director?.loadingRsm);
  const loadingMPO = useSelector((state) => state?.director?.loadingMpo);
  const sm = useSelector((state) => state?.director?.salesManager);


  const rsm = useSelector((state) => state?.director?.rsm);
  const am = useSelector((state) => state?.director?.am);
  const mpo = useSelector((state) => state?.director?.mpo);


  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  let convertFrom = moment(from).unix();
  let convertTo = moment(to).unix();
  const getPrescriptionReport = async (id) => {
    setLoading(true);
    const authToken = JSON.parse(localStorage.getItem("tokenConcord"));
    let res = await axios.get(
      BASEURL +
        `/reports/prescriptions?child_uid=${id}&from_date=${convertFrom}&to_date=${convertTo}`,
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

  let areaManagerOption = [];
  am?.map((item) =>
    areaManagerOption?.push({
      label: item?.name,
      value: item?.name,
      key: item?.uid,
    })
  );
  let salesManagerOption = [];
  sm?.map((item) =>
    salesManagerOption?.push({
      label: item?.name,
      value: item?.uid,
      key: item?.uid,
    })
  );

  let regionalSalesManagerOption = [];
  rsm?.map((item) =>
    regionalSalesManagerOption?.push({
      label: item?.name,
      value: item?.name,
      key: item?.uid,
    })
  );
  let mpoOption = [];
  mpo?.map((item) =>
    mpoOption?.push({
      label: item?.name,
      value: item?.name,
      key: item?.uid,
    })
  );

 
  useEffect(() => {
    dispatch(ViewChildSalesManagerManagerAction());
  }, [dispatch]);
  let enumerateDaysBetweenDates = function (startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).startOf("day");

    while (currDate.add(1, "days").diff(lastDate) <= 0) {
      dates.push(currDate.clone().format("DD-MM-YY"));
    }

    return dates;
  };
  let dateArray = enumerateDaysBetweenDates(from, to);

  return (
    <>
      <Row>
        <Col xxs="12">
          {/* <Breadcrumb heading="Doctors" match={match} /> */}
          <h4>{t('prescription_report.presc_report_text')}</h4>
          <div
            style={{ border: "1px solid #000", width: "100%" }}
            className="mb-5"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col lg={6}>
          <FormLabel>{t('prescription_report.start_date')}</FormLabel>
          <input
            type="date"
            className="input-login-modal"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          ></input>
        </Col>
        <Col lg={6}>
          <FormLabel> {t('prescription_report.end_date')}</FormLabel>

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
            <FormLabel> {t('prescription_report.select_sales_manager')}</FormLabel>
            {loadingSM ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ FormGroup: CustomSelectInput }}
                className="react-select "
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  dispatch(getUsers(val.key, "rsm"));
                  getPrescriptionReport(val?.key);

                  //   setTimeout(async() => {
                  //     await console.log(targets[0]?.start_date);
                  //   }, 3000);
                }}
                options={salesManagerOption}
              />
            )}
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <FormLabel> {t('prescription_report.select_reg_sales_manager')}</FormLabel>
            {loadingRSM ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ FormGroup: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  dispatch(getUsers(val.key, "am"));
                  getPrescriptionReport(val?.key);
                }}
                options={regionalSalesManagerOption}
              />
            )}
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <FormLabel> {t('prescription_report.select_area_manager')}</FormLabel>
            {loadingAM ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ FormGroup: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={async (val) => {
                  dispatch(getUsers(val.key, "mpo"));
                  getPrescriptionReport(val?.key);
                }}
                options={areaManagerOption}
              />
            )}
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            <FormLabel> {t('prescription_report.select_mpo')}</FormLabel>
            {loadingMPO ? (
              <div className="">
                <Loader height={18} width={18} type="Oval" color="#0066B3" />
                &nbsp;
              </div>
            ) : (
              <Select
                required
                components={{ FormGroup: CustomSelectInput }}
                className="react-select"
                classNamePrefix="react-select"
                name="form-field-name-gender"
                onChange={(val) => {
                  getPrescriptionReport(val?.key);
                }}
                options={mpoOption}
              />
            )}
          </FormGroup>
        </Col>
      </Row>


      {loading ? <div className="d-flex justify-content-center mt-5">
                        <Loader height={25} width={30} type="Bars" color="black" />
                        &nbsp;  {t('prescription_report.gener_report_text')} 
                    </div> :
                        from !== undefined && to !== undefined ?
                            <div className='table-responsive' >

                                <table style={{ tableLayout: 'fixed', width: '500px' ,marginTop:'15px'}}>
                                    {/* className='table-responsive' */}
                                    <thead>
                                        <tr>
                                            <td style={{ width: '120px', fontWeight: 'bold' }}> {t('prescription_report.name_text')}</td>
                                            {dateArray?.map((item) => {
                                                return (
                                                    <th style={{ width: '80px' }}>{item}</th>
                                                )
                                            })}
                                            <th style={{ width: '80px' }}>  {t('prescription_report.sum_text')}</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prescription?.map((item) => {

                                            return (
                                                <tr style={{backgroundColor:item?.user?.role === "mpo" ? 'lightgray' : item?.user?.role === "rsm" ? 'lightgoldenrodyellow' : item?.user?.role === "am" ? 'lightskyblue' : item?.user?.role === "sm" ? 'lightslategray':null}}>
                                                    <td>
                                                        {item?.user?.name}

                                                    </td>

                                                    {item?.prescription?.map((item_) => <td>{item_}</td>)}
                                                    <td>{item?.sum}</td>
                                                </tr>
                                            )
                                        })}
                                

                                    </tbody>
                                </table>
                            </div> : null}
    </>
  );
};

export default PrescriptionReport;
