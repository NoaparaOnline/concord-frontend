// import React from 'react';

import moment from "moment";
import { Link } from "react-router-dom";

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
  return [
    'Orders ID',
    'Customer Name',
    'Market & Address',
    'Order Date/Time',
    'Payment Type',
    'Delivery Status',
    'Payment Status',
    'Proceed By',
    'Actions',
  ];
};
export const deliverystatus = (handleEdit) => {
  return [
    'Orders ID',
    'Customer Name',
    'Market & Address',
    'Order Date/Time',
    'Delivery Status',
    'Proceed By',
    'Actions',
  ];
};



export const stocks = (handleEdit) => {
  return [
    'S.No',
    'Product Name',
    'Product Formula',
    'Price',
    'Quantity',
  ];
};


export const payment = (handleEdit) => {
  return [
    'Orders ID',
    'Customer Name',
    'Made Of Payment',
    'Payment Recieved',
    'Actions',
  ];
};



export const tableinner = (handleEdit) => {
  return [
    'S.No',
    'Product Name',
    'Quantity',
    'Trade Price',
    'Amount',

  ];
};






export const Directordashschedule = (handleEdit) => {
  return [
    'S.No',
    'Schedule',
    'Doctor/Customer',
    'Status',

    'Actions',
  ];
};



export const Directordashproducthead = (handleEdit) => {
  return [
    'S.No',
    'Name',
    'Trade Price',
    'Retail Price',
    'Added By',


    'Actions',
  ];

};

// const formatDate = (timestamp) => {
//   return new Intl.DateTimeFormat("en-US").format(timestamp);
// };

// export const DepomanagerOrder = [
//   { dataField: 'order_id', text: 'Orders ID', sort: true },
//   { dataField: 'customer.name', text: 'Customer Name', },
//   // {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
//   { dataField: 'customer.market.name', text: 'Market & Address', },
//   { dataField: 'order_datetime', text: 'Order Date/Time', formatter: dateFormatter },
//   { dataField: 'payment_type', text: 'Payment Type', },
//   { dataField: 'delivery_status', text: 'Delivery Status' },
//   { dataField: 'payment_status', text: 'Payment Status', },
//   { dataField: 'ordered_by.name', text: 'Proceed By', },
//   { dataField: 'customer', formatter: btnFormatter, text: 'Actions', },
// ];

// console.log(DepomanagerOrder)

// export const deopdefaultSorted = [{
//   dataField: 'order_id',
//   order: 'asc'
// }];


// function dateFormatter(cell) {
//   return (<span>{moment.unix(cell).format('MMM DD, YYYY')}</span>)
// }

// function btnFormatter(cell) {
//   return (

//     <>
//       <div className="row">
//         <div className="col pr-0">
//           <div
//             className={` btn btn-primary rounded-pill`}
//             style={{ backgroundColor: "#0066b3" }}
//           >
//             <Link
//               style={{ color: "#ffffff", textDecoration: "none" }}
//               to={{
//                 pathname:
//                   "/depotmanager-dashboard/order-request/innerdetail",
//                 state: cell,
//               }}
//             >
//               View
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>

//   )

// }


