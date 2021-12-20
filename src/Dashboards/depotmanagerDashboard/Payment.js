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
import { Link } from 'react-router-dom';
import {  getOrder, getSingleOrder } from '../../Store/Actions/deportmanagerActions';

const Payment = ({
  sidebarOpen,
  openSidebar,
  deopdefaultSorted,
}) => {


  const order = useSelector((state) => state?.deport?.order);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getOrder());
// eslint-disable-next-line
  }, []);



  const loader = useSelector((state) => state?.logIn?.loader);
  //PAYMENT COLUMN HEADERS
  const DepomanagerPayment = [
    { dataField: "customer.name", text: "Customer Name", sort: true },
   
  
    { dataField: "payment_type", text: "Payment Type", sort: true },

    {
      dataField: "payment_status",
      text: "Payment Status",
      style: (cell, row) => {
        if (cell === "pending") return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "cancelled" || cell === "declined")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "paid" ||
          cell === "delivered" ||
          cell === "submitted"  ||
          cell === "received"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "dispatched" || cell === "unpaid" ||  cell === "deposited")
          return { color: "blue", fontWeight: "500" };
      }, sort: true
    },

    { dataField: "vat_rate", text: "Vat", formatter:Vitval, sort: true },
    
    { dataField: "subtotal_amount", text: "Total",formatter:Totalval, sort: true },  
    
    
    { dataField: "customer", formatter: btnFormatterpay, text: "Actions" },
  ];

  const { SearchBar } = Search;


  function Totalval(cell,row)
  {
    return (
      <>
      {row.vat_rate*row.subtotal_amount}
      </>
    )
  }
  function Vitval(cell,row)
  {
    return (
      <>
      {Math.round((row.vat_rate-1)*100)}%
      </>
    )
  }

  //PAYMENT COLUMN BUTTON FORMATTER
  function btnFormatterpay(cell, row) {
    return (
      <>
        <div className="row">
          <div className="col pr-0">
            <Link
              style={{ color: "#ffffff", textDecoration: "none" }}
              to={{
                pathname: "/depotmanager-dashboard/payment-ord/innerdetail",
              }}
              onClick={() => dispatch(getSingleOrder(row))}
            >
            <div
             className={` btn`}
             style={{ borderRadius: "5px",backgroundColor:'#22A6AC' }}
            >
                <span style={{color:'#fff'}}>View</span>
            </div>
              </Link>
          </div>
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
        Heading="Payment"
      />

      <DashboardMainCard
              classnamewidth="96%"

        reverse={true}

        TableDiv={
          <>
            <ToolkitProvider
              bootstrap4
              keyField="id"
              data={order}
              columns={DepomanagerPayment}
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
                      noDataIndication={emptyDataMessage}
                      pagination={order.length > 10 ? paginationFactory() : null}
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

export default Payment
