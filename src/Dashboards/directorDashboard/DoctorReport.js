import React from 'react'
import { Col, FormLabel, Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import moment from 'moment';



import { useState } from 'react';
import axios from 'axios';
import { BASEURL } from '../../services/HttpProvider';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const DoctorReport = () => {
    const {t}=useTranslation('common')
    const [loading, setLoading] = useState(false)
    const [prescription, setPrescription] = useState([])


    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    let convertFrom = moment(from).unix();
    let convertTo = moment(to).unix();
    const getPrescriptionReport = async () => {
        if(from === undefined || to === undefined){
            toast.error(t('doctor_report.enter_date_to_gen_rep'))
             return;   
        }
        setLoading(true)
        const authToken = JSON.parse(localStorage.getItem('tokenConcord'))
        let res = await axios.get(BASEURL + `/reports/doctors?from_date=${convertFrom}&to_date=${convertTo}`, {
            headers: {
                'x-session-key': authToken?.key,
                'x-session-type': authToken?.type
            }
        })
        setLoading(false)

        setPrescription(res?.data?.response_data)

    }
    // let date1 = new Date()
    // const sevenDaysBeforeDate = new Date(new Date().setDate(new Date().getDate() - 7));
    let enumerateDaysBetweenDates = function (startDate, endDate) {
        var dates = [];

        var currDate = moment(startDate).startOf('day');
        var lastDate = moment(endDate).startOf('day');

        while (currDate.add(1, 'days').diff(lastDate) <= 0) {
            dates.push(currDate.clone().format('DD-MM-YY'));
        }

        return dates;
    };
    let dateArray = enumerateDaysBetweenDates(from, to)
    return (
        <>
            
            <Row >
                        <Col xxs="12">
                            {/* <Breadcrumb heading="Doctors" match={match} /> */}
                            <h4>{t('doctor_report.dctr_report_text')}</h4>
                            <div style={{border:'1px solid #000',width:'100%'}} className="mb-5" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                        <FormLabel>{t('doctor_report.start_date')} </FormLabel>

                            <input
                                type="date"
                                className="input-login-modal"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            ></input>
                        </Col>
                        <Col lg={6}>
                        <FormLabel>{t('doctor_report.end_date')} </FormLabel>
                            
                            <input
                                type="date"
                                className="input-login-modal"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            ></input>
                        </Col>
                    </Row>

                    <Row>
                            <Col lg={4}>
                                <button className={`btn me-2`} style={{ backgroundColor: "#22A6AC",color:'#fff' }} onClick={getPrescriptionReport}>{t('doctor_report.generate_report_btn')}</button>
                            </Col>
                        </Row>




                        {loading ? <div className="d-flex justify-content-center mt-5">
                        <Loader height={25} width={30} type="Bars" color="black" />
                        &nbsp; {t('doctor_report.gener_report_text')}
                    </div>
                        :
                        from !== undefined && to !== undefined ?
                            <div className='table-responsive' >

                                <table style={{ tableLayout: 'fixed', width: '500px' }}>
                                    {/* className='table-responsive' */}
                                    <thead>
                                        <tr>
                                            <td style={{ width: '120px',fontWeight:'bold' }}>{t('doctor_report.name_text')}</td>
                                            {dateArray?.map((item) => {
                                                return (
                                                    <th style={{ width: '80px' }}>{item}</th>
                                                )
                                            })}



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {prescription?.map((item) => {
                                            return <tr>
                                                <td>{item?.user}</td>
                                                {item?.visits?.map((item) => (
                                                    <td>{item}</td>
                                                ))}
                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                            </div> : null}

        </>
    )
}

export default DoctorReport
