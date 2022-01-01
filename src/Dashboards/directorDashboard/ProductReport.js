import React from 'react'
import { Col, FormLabel, FormGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Select from 'react-select'
import moment from 'moment';



import CustomSelectInput from '../../components/ReusableComponents/CustomSelectInput';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASEURL } from '../../services/HttpProvider';
import { getStocksProduct } from '../../Store/Actions/deportmanagerActions';

const ProductReport = () => {
    const stocks = useSelector(state => state.deport?.stock)

    const [stockReport,setReport] = useState([])

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStocksProduct())
    }, [dispatch])



    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    let convertFrom = moment(from).unix();
    let convertTo = moment(to).unix();
    const getPrescriptionReport = async (id) => {
        setLoading(true)
        const authToken = JSON.parse(localStorage.getItem('token'))
        let res = await axios.get(BASEURL + `/reports/products?stock_uid=${id}&from_date=${convertFrom}&to_date=${convertTo}`, {
            headers: {
                'x-session-key': authToken?.token,
                'x-session-type': authToken?.type
            }
        })
        setLoading(false)

        setReport(res?.data?.response_data)

    }
    let enumerateDaysBetweenDates = function (startDate, endDate) {
        var dates = [];

        var currDate = moment(startDate).startOf('day');
        var lastDate = moment(endDate).startOf('day');

        while (currDate.add(1, 'days').diff(lastDate) <= 0) {
            dates.push(currDate.clone().format('DD-MM-YY'));
        }

        return dates;
    };
    let stockOptions = [];
    stocks?.map((item) =>
        stockOptions?.push({
            label: item?.product?.name,
            value: item?.product?.name,
            key: item?.uid,
        })
    );
    let dateArray = enumerateDaysBetweenDates(from, to)
    return (
        <>
            
            <Row >
                        <Col xxs="12">
                            {/* <Breadcrumb heading="Doctors" match={match} /> */}
                            <h4>Product Report</h4>
                            <div style={{border:'1px solid #000',width:'100%'}} className="mb-5" />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col lg={6}>
                        <FormLabel>Start Date</FormLabel>

                            <input
                                type="datetime-local"
                                className="input-login-modal"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            ></input>
                        </Col>
                        <Col lg={6}>
                        <FormLabel>End Date</FormLabel>
                            
                            <input
                                type="datetime-local"
                                className="input-login-modal"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            ></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                        <FormGroup>
                                <FormLabel>Select Stock</FormLabel>
                                    <Select
                                        required
                                        components={{ Input: CustomSelectInput }}
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        name="form-field-name-gender"
                                        onChange={async (val) => {
                                            getPrescriptionReport(val?.key)

                                           
                                        }}
                                        options={stockOptions}
                                    />
                            </FormGroup>
                        </Col>
                    </Row>


                    {loading ? <div className="d-flex justify-content-center mt-5">
                        <Loader height={25} width={30} type="Bars" color="black" />
                        &nbsp; Generating Report
                    </div> :
                        from !== undefined && to !== undefined ?
                            <div className='table-responsive' >

                                <table style={{ tableLayout: 'fixed', width: '500px' }}>
                                    {/* className='table-responsive' */}
                                    <thead>
                                        <tr>
                                            <td style={{ width: '120px' ,fontWeight:'bold'}}>Name</td>
                                            {dateArray?.map((item) => {
                                                return (
                                                    <th style={{ width: '80px' }}>{item}</th>
                                                )
                                            })}



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stockReport?.map((item) => {
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

export default ProductReport
