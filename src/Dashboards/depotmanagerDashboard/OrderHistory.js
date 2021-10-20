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


const OrderHistory = (
    {
        sidebarOpen,
        openSidebar,
        deopdefaultSorted,
    }
) => {

    const dispatch = useDispatch();
    const oldorder = useSelector((state) => state?.deport?.oldorder);

    useEffect(() => {
        if (oldorder?.length < 1) {
            dispatch(getoldOrder());
          }
    // eslint-disable-next-line
      }, []);
    
    

    const { SearchBar } = Search;
    const loader = useSelector((state) => state?.logIn?.loader);


    //OLD ORDER COLUMN HEADERS
    const DepomanagerOrder = [
        { dataField: "order_id", text: "Orders ID", sort: true },
        { dataField: "customer.name", text: "Customer Name", sort: true },
        {
            dataField: "customer.market.name", text: "Market & Address",
            formatter: appendtwoDatafields, sort: true
        },
        {
            dataField: "order_datetime",
            text: "Order Date/Time",
            formatter: dateFormatter,
            sort: true
        },
        { dataField: "payment_type", text: "Payment Type", sort: true },
        {
            dataField: "delivery_status",
            text: "Delivery Status",
            style: (cell, row) => {
                if (cell === "Pending") return { color: "#C0B627", fontWeight: "500", border: '1px solid #565656' };
                else if (cell === "Cancelled" || cell === "Declined")
                    return { color: "red", fontWeight: "500" };
                else if (
                    cell === "Paid" ||
                    cell === "Delivered" ||
                    cell === "Submitted"
                )
                    return { color: "green", fontWeight: "500" };
                else if (cell === "Dispatched" || cell === "Unpaid")
                    return { color: "blue", fontWeight: "500" };
            },
            sort: true
        },
        {
            dataField: "payment_status",
            text: "Payment Status",
            style: (cell, row) => {
                if (cell === "Pending") return { color: "#C0B627", fontWeight: "500" };
                else if (cell === "Cancelled" || cell === "Declined")
                    return { color: "red", fontWeight: "500" };
                else if (
                    cell === "Paid" ||
                    cell === "Delivered" ||
                    cell === "Submitted"
                )
                    return { color: "green", fontWeight: "500" };
                else if (cell === "Dispatched" || cell === "Unpaid")
                    return { color: "blue", fontWeight: "500" };
            },
            sort: true
        },
        { dataField: "ordered_by.name", text: "Proceed By", sort: true },
        { dataField: "customer", formatter: btnFormatterold, text: "Actions" },
    ];


    // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
    function dateFormatter(cell) {
        return <span>{moment.unix(cell).format("MMM DD, YYYY")}</span>;
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
                          
                              <span  style={{  color:'#fff' }}>View</span>  
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



    return (
        <>
            <NavbarDash
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading="Order Request"
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
                                            pagination={paginationFactory()}
                                            bordered={false}
                                            condensed
                                            wrapperClasses="table-responsive"
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
