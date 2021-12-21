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
import { getnewOrder, getSingleOrder, getSingleUID } from '../../Store/Actions/deportmanagerActions';


const NewOrder = (
    {
        sidebarOpen,
        openSidebar,

        deopdefaultSorted,
        handleShow,
    }
) => {
    const dispatch = useDispatch();
    const { SearchBar } = Search;
    const loader = useSelector((state) => state?.logIn?.loader);


    const neworder = useSelector((state) => state?.deport?.neworder);

    useEffect(() => {
            dispatch(getnewOrder());
    // eslint-disable-next-line
      }, []);
    


    //NEW ORDER COLUMN HEADERS
    const DepomanagerNewOrder = [
        { dataField: "order_id", text: "Orders ID", sort: true },
        { dataField: "customer.name", text: "Customer Name", sort: true },
        // {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
        { dataField: "customer.market__street_address", text: "Market Address",  sort: true },
        {
            dataField: "order_datetime",
            text: "Date And Time",
            formatter: dateFormatter,
            sort: true
        },
        { dataField: "payment_type", text: "Payment Type", sort: true },
        {
            dataField: "delivery_status",
            formatter:capitalize,
            text: "Delivery Status",
            style: (cell, row) => {
                if (cell === "pending") return { color: "#C0B627", fontWeight: "500" };
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
            sort: true
        },
        {
            dataField: "payment_status",
            text: "Payment Status",
            formatter:capitalize,
            style: (cell, row) => {
                if (cell === "pending") return { color: "#C0B627", fontWeight: "500" };
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
            sort: true
        },
        { dataField: "ordered_by.name", text: "Proceed By", sort: true },
        { dataField: "customer", formatter: btnFormatterneworder, text: "" },
    ];

  //capitalize Cell
  function capitalize(cell) {
    return <span className="text-capitalize">{cell}</span>;
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

    // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
    function dateFormatter(cell) {
        return <span>{moment.unix(cell).format("MMM DD, YYYY HH:mm A")}</span>;
    }


      //ACTION BUTTON FIELDS
  function btnFormatterneworder(cell, row) {
    return (
      <>
        <div class="btn-group">
        <button
            class="btn dropdown-toggle dropdown_custom_toogle"
            data-toggle="dropdown"
            style={{ borderRadius: "5px",backgroundColor:'#22A6AC' }}
          >
            {/* <button class="btn btn-secondary">Action</button> */}
            <span style={{ fontSize: "14px", fontWeight: "500" ,color:'#fff'}}> Actions </span>
            <span class="sr-only">Toggle Dropdown</span>
          </button> 
          <ul class="dropdown-menu dropdown-menu-right" role="menu">
            <li>
              <i className="fa fa-edit ms-2"></i>
              <Link
                style={{ color: "#0066b3", fontWeight: '500', fontSize: '14px', textDecoration: "none" }}
                onClick={() => {
                  handleShow();
                  dispatch(getSingleUID(row));
                }}

              >
                &nbsp; Update Status
              </Link>

            </li>
            <li>
              <i className="fa fa-eye ms-2"></i>

              <Link
                style={{ color: "#0066b3", fontWeight: '500', fontSize: '14px', textDecoration: "none" }}
                to={{
                  pathname: "/depotmanager-dashboard/new-order/innerdetail",
                }}
                onClick={() => dispatch(getSingleOrder(row))}
              >
                &nbsp;  View
              </Link>

            </li>
          </ul>
        </div>

      </>
    );
  }

  const emptyDataMessage = () => { return 'No Data to Display';}
    return (
        <>
            <NavbarDash
                sidebarOpen={sidebarOpen}
                openSidebar={openSidebar}
                Heading="New Order"
            />


            <DashboardMainCard
              classnamewidth="96%"

                reverse={true}
                TableDiv={
                    <>
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={neworder}
                            columns={DepomanagerNewOrder}
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
                                            {...props.baseProps}
                                            // rowStyle={rowStyle}

                                            defaultSorted={deopdefaultSorted}
                                            // pagination={pagination}
                                            pagination={neworder.length > 10 ? paginationFactory() : null}
                                            bordered={false}
                                            noDataIndication={emptyDataMessage}
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

export default NewOrder
