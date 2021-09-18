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
