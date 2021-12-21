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
import { Link } from 'react-router-dom';
import { getoldOrder, getSingleOrder } from '../../Store/Actions/deportmanagerActions';
import moment from 'moment';


const DeliveryStatus = (
    {
        sidebarOpen,
        openSidebar,
        deopdefaultSorted,
      }
      ) => {
        
        const oldorder = useSelector((state) => state?.deport?.oldorder);
        const dispatch = useDispatch();
        
  useEffect(() => {
          dispatch(getoldOrder());
  // eslint-disable-next-line
    }, []);

 
     //Delivery Status COLUMN HEADERS
  const DepomanagerDelivery = [
    { dataField: "order_id", text: "Orders ID", sort: true },
    { dataField: "customer.name", text: "Customer Name", sort: true },
    {
      dataField: "customer.market__street_address", text: "Market & Address",
       sort: true
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
        if (cell === "pending") return { color: "#C0B627", fontWeight: "500"};
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
        else if (cell === "dispatched" || cell === "unpaid" ||  cell === "deposited")
          return { color: "blue", fontWeight: "500" };
      },
      sort: true
    },
    {
      dataField: "payment_status",
      text: "Payment Status",
      style: (cell, row) => {
        if (cell === "pending") return { color: "#C0B627", fontWeight: "500" };
        else if (cell === "cancelled" || cell === "declined" ||  cell === "deposited")
          return { color: "red", fontWeight: "500" };
        else if (
          cell === "paid" ||
          cell === "delivered" ||
          cell === "submitted" ||
          cell === "received"
        )
          return { color: "green", fontWeight: "500" };
        else if (cell === "dispatched" || cell === "unpaid")
          return { color: "blue", fontWeight: "500" };
      },
      sort: true
    },
    { dataField: "ordered_by.name", text: "Proceed By", sort: true },
    { dataField: "customer", formatter: btnFormatterdelivery, text: "Actions" },
  ];


    const { SearchBar } = Search;


    const loader = useSelector((state) => state?.logIn?.loader);

    // EPOCH TO DATE FORMATE TABLE USING MOMENT PAKAGE
    function dateFormatter(cell) {
        return <span>{moment.unix(cell).format("MMM DD, YYYY HH:mm A")}</span>;
    }

    //APPEND MARKET AND ADDRESS FIELDS
   
    // function appendtwoDatafields(cell, row) {

    //         return (
    //             <>
    //                 <div>{`${row.customer.market.name} ,`}</div>
    //                 <div>{`${row.customer.market.parent.name}`}</div>
    //             </>
    //         )
    //     }
    

     //DELIVERY STATUS COLUMN BUTTON FORMATTER
  function btnFormatterdelivery(cell, row) {
    return (
      <>
        <div className="row">
          <div className="col pr-0">
            <Link
              style={{  textDecoration: "none" }}
              to={{
                pathname: "/depotmanager-dashboard/delivery-status/innerdetail",
              }}
              onClick={() => dispatch(getSingleOrder(row))}
            >
            <div
             className={`btn`}
             style={{ borderRadius: "5px",backgroundColor:'#22A6AC' }}
            >
              <span style={{  color: "#fff" }}>View</span>  
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
            Heading="Delivery Status"
          />

            <DashboardMainCard
              classnamewidth="96%"
              reverse={true}

              TableDiv={
                <>
                  <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={oldorder}
                    columns={DepomanagerDelivery}
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
                          pagination={oldorder.length > 10 ? paginationFactory() : null}
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

export default DeliveryStatus
