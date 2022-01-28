/* eslint-disable */

import React, { useEffect } from 'react'
//REACT-BOOTSTRAP-TABLE IMPORTS
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
//
import NavbarDash from "../../components/ReusableComponents/NavbarDash/NavbarDash";
import { useDispatch, useSelector } from "react-redux";
import DashboardMainCard from "../../components/ReusableComponents/DashboardMainCard/DashboardMainCard";
import Loader from 'react-loader-spinner';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getoldOrder, getSingleOrder } from '../../Store/Actions/deportmanagerActions';
import { useTranslation } from 'react-i18next';

const OrderHistory = (
    {
        sidebarOpen,
        openSidebar,
        deopdefaultSorted,
    }
) => {
    const {t}=useTranslation('common')
    const dispatch = useDispatch();
    const oldorder = useSelector((state) => state?.deport?.oldorder);

    useEffect(() => {
            dispatch(getoldOrder());
    // eslint-disable-next-line
      }, []);
    
    

    const { SearchBar } = Search;
    const loader = useSelector((state) => state?.logIn?.loader);


    //OLD ORDER COLUMN HEADERS
    const DepomanagerOrder = [
        {dataField: "order_id", text: t('order_history.order_id'), sort: true },
        {dataField: "customer.name", text: t('order_history.customer_name'), sort: true },
        {dataField: "customer.market__street_address", text:t('order_history.market_address'),sort: true},
        {dataField: "order_datetime",text: t('order_history.order_date_time'),formatter: dateFormatter,sort: true},
        {dataField: "payment_type", text: t('order_history.payment_type'), sort: true },
        {dataField: "delivery_status",text: t('order_history.delivery_status'), style: (cell, row) => {
                if (cell === "pending" ) return { color: "#C0B627", fontWeight: "500" };
                else if (cell === "cancelled" || cell === "declined")
                    return { color: "red", fontWeight: "500" };
                else if (
                    cell === "paid" ||
                    cell === "delivered" ||
                    cell === "submitted"
                    || cell === "submitted_to_depot"
                    || cell === "received"
                )
                    return { color: "green", fontWeight: "500" };
                else if (cell === "dispatched" ||  cell === "unpaid" ||  cell === "deposited")
                    return { color: "blue", fontWeight: "500" };
            },
            formatter:capitalize,
            sort: true
        },
        {
           dataField: "approved_by_am",
            text:   t('order_history.approved_by'),
            
            style: (cell, row) => {
                if (cell === "pending" ) return { color: "#C0B627", fontWeight: "500" };
                else if (cell === "cancelled" || cell === "declined")
                    return { color: "red", fontWeight: "500" };
                else if (
                    cell === "paid" ||
                    cell === "delivered" ||
                    cell === "submitted"
                    || cell === "submitted_to_depot"
                    || cell === "received"
                    || cell === "approved"
                )
                    return { color: "green", fontWeight: "500" };
                else if (cell === "dispatched" ||  cell === "unpaid" ||  cell === "deposited")
                    return { color: "blue", fontWeight: "500" };
            },
            formatter:capitalize,
            sort: true
        },
        {
            dataField: "payment_status",
            text:  t('order_history.payment_status'),
            style: (cell, row) => {
                if (cell === "pending" ) return { color: "#C0B627", fontWeight: "500" };
                else if (cell === "cancelled" || cell === "declined")
                    return { color: "red", fontWeight: "500" };
                else if (
                    cell === "paid" ||
                    cell === "delivered" ||
                    cell === "submitted" ||
                    cell === "received"
                )
                    return { color: "green", fontWeight: "500" };
                else if (cell === "dispatched" || cell === "unpaid" ||  cell === "deposited")
                    return { color: "blue", fontWeight: "500" };
            },
            formatter:capitalize,
            sort: true
        },
        { dataField: "ordered_by.name", text: t('order_history.proceed_by'),  sort: true },
        { dataField: "customer", formatter: btnFormatterold, text:  t('order_history.actions_text'),  },
    ];

  //capitalize Cell
  function capitalize(cell) {
    return <span className="text-capitalize">{cell}</span>;
  }

    // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
    function dateFormatter(cell) {
        return <span>{moment.unix(cell).format("MMM DD, YYYY  HH:mm A")}</span>;
    }

    //OLD ORDER COLUMN BUTTON FORMATTER
    function btnFormatterold(cell, row) {
        return (
            <>
                <div className="row">
                    <div className="col pr-0">
                    <Link
                                style={{  textDecoration: "none" }}
                                to={{
                                    pathname: "/depotmanager-dashboard/order-request/innerdetail",
                                }}
                                onClick={() => dispatch(getSingleOrder(row))}
                            >
                       <div
                            className={` btn`}
                            style={{ borderRadius: "5px",backgroundColor:'#22A6AC' }}
                        >
                          
                              <span  style={{  color:'#fff' }}> { t('order_history.view_btn_name')} </span>  
                        </div>
                            </Link>
                    </div>
                </div>
            </>
        );
    }

    //APPEND MARKET AND ADDRESS FIELDS
    function appendtwoDatafields(cell, row) {

        return (
            <>
                <div>{`${row.customer.market.name} ,`}</div>
                <div>{`${row.customer.market.parent.name}`}</div>
            </>
        )
    }


    const emptyDataMessage = () => { return  t('order_history.no_data_to_display') }
    return (
        <>
            <NavbarDash
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading={t('order_history.order_request_text')}
            />


            <DashboardMainCard
                reverse={true}
              classnamewidth="96%"

                TableDiv={
                    <>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={oldorder}
                            columns={DepomanagerOrder}
                            search
                        >
                            {(props) => (
                                <div className="">
                                    <i
                                        className="fa fa-search"
                                        id="filtersubmit"
                                        style={{ fontSize: "15px" }}
                                    />
                                    <SearchBar
                                        {...props.searchProps}
                                        style={{
                                            padding: "0.375rem 2.5rem",
                                            borderRadius: "10px",
                                        }}
                                    />

                                    {loader ? (
                                        <div className="d-flex justify-content-center">
                                            <Loader
                                                height={100} width={100}
                                                type="Rings"
                                                color="#0066b3"
                                            />
                                        </div>

                                    ) : (
                                        
                                     
                                        <BootstrapTable
                                            style={{ color: "#565656" }}
                                            {...props.baseProps}
                                            // rowStyle={rowStyle}
                                            headerWrapperClasses="customheaderpad"
                                            defaultSorted={deopdefaultSorted}
                                            // pagination={pagination}
                                            noDataIndication={emptyDataMessage}
                                            pagination={paginationFactory()}
                                            bordered={false}
                                            condensed
                                             
                                        />
                                    )}
                                    </div>
                            )}
                        </ToolkitProvider>
                    </>
                }

            />
        
        </>
    )
}

export default OrderHistory
