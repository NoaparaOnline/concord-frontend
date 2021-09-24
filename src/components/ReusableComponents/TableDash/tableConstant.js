import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
  return [
      'Orders ID',
      'Customer Name',
      'Market & Address',
      'Order Date/Time',
      'Payment Status',
      'Delivery Status',
      'Payment Status',
      'Proceed By',
      'Actions',  
    ];
};



export const stocks = (handleEdit) => {
  return [
   'S.No',
   'Product Name',
   'Product Formula',
   'Quantity',
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
   
'Actions',  
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


