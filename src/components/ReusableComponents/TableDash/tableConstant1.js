import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
  return [
    {
      title: 'Orders ID',
      render: rowData => {
        return <span>{rowData.orderid}</span>;
      },
    },
    {
      title: 'Customer Name',
      render: rowData => {
        return <span>{rowData.cusname}</span>;
      },
    },
    {
      title: 'Market & Address',
      render: rowData => {
        return <span>{rowData.marketadd}</span>;
      },
    },
    {
      title: 'Order Date/Time',
      render: rowData => {
        return <span>{rowData.orddate}</span>;
      },
    },
    {
      title: 'Proceed By',
      render: rowData => {
        return <span>{rowData.proceed}</span>;
      },
    },
    
  ];
};



export const stocks = (handleEdit) => {
  return [
    {
      title: 'S.No',
      render: rowData => {
        return <span>{rowData.sno}</span>;
      },
    },
    {
      title: 'Product Name',
      render: rowData => {
        return <span>{rowData.prodname}</span>;
      },
    },
    {
      title: 'Product Formula',
      render: rowData => {
        return <span>{rowData.prodfor}</span>;
      },
    },
    {
      title: 'Quantity',
      render: rowData => {
        return <span>{rowData.quan}</span>;
      },
    },
    
  ];
};



export const tableinner = (handleEdit) => {
  return [
    {
      title: 'S.No',
      render: rowData => {
        return <span>{rowData.sno}</span>;
      },
    },
    {
      title: 'Product Name',
      render: rowData => {
        return <span>{rowData.prodname}</span>;
      },
    },
    {
      title: 'Quantity',
      render: rowData => {
        return <span>{rowData.quantity}</span>;
      },
    },
    {
      title: 'Trade Price',
      render: rowData => {
        return <span>{rowData.tradeprice}</span>;
      },
    },
    {
      title: 'Amount',
      render: rowData => {
        return <span>{rowData.amount}</span>;
      },
    },
    
  ];
};






export const Directordashschedule = (handleEdit) => {
  return [
    {
      title: 'S.No',
      render: rowData => {
        return <span>{rowData.sno}</span>;
      },
    },
    {
      title: 'Schedule',
      render: rowData => {
        return <span>{rowData.schedule}</span>;
      },
    },
    {
      title: 'Doctor/Customer',
      render: rowData => {
        return <span>{rowData.doccus}</span>;
      },
    },
    {
      title: 'Status',
      render: rowData => {
        return <span>{rowData.status}</span>;
      },
    },
    
  ];
};



export const Directordashproducthead = (handleEdit) => {
  return [
    {
      title: 'S.No',
      render: rowData => {
        return <span>{rowData.sno}</span>;
      },
    },
    {
      title: 'Name',
      render: rowData => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: 'Trade Price',
      render: rowData => {
        return <span>{rowData.tr}</span>;
      },
    },
    {
      title: 'Retail Price',
      render: rowData => {
        return <span>{rowData.rp}</span>;
      },
    },
    {
      title: 'Added By',
      render: rowData => {
        return <span>{rowData.addby}</span>;
      },
    },
    
  ];

};