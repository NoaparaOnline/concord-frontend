// import React from 'react';

import moment from "moment";

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
  'Actions',
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

const formatDate = (timestamp) => {
  return new Intl.DateTimeFormat("en-US").format(timestamp);
};

export const DepomanagerOrder = [
      {dataField:'order_id'        ,text:'Orders ID'    ,sort:true},
      {dataField:(data) => moment('order_datetime').format("L")  ,text:'Customer Name',},
      {dataField:'customer.market.name',text:'Market & Address',
      formatter: (cell, row) => {
        console.log(row);
        return <div>{`${row.customer.market.name} ${row.customer.market.parent.name}`}</div>;
      }
      },
      {dataField:'Order Date/Time' ,text:'Order Date/Time' ,},
      {dataField:'payment_type'    ,text:'Payment Type'    ,},
      {dataField:'delivery_status' ,text:'Delivery Status' ,},
      {dataField:'payment_status'  ,text:'Payment Status'  ,},
      {dataField:'ordered_by.name'      ,text:'Proceed By'      ,},
      {dataField:'Actions'         ,text:'Actions'         ,},  
  ];


 export const deopdefaultSorted = [{
    dataField: 'order_id',
    order: 'asc'
  }];
