// import React, { useEffect } from "react";
import TableDash from "./TableDash";
import "./TableDash.css";
import { tableinner } from "../TableDash/tableConstant";
import { useSelector } from "react-redux";

const TableInnerPage = (props) => {

  const productidstate = useSelector((state) => state?.deport?.productidstate);
  console.log('productidstate',productidstate);


  const medicinesall =productidstate;

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };
  const formatDate = (timestamp) => {
    return new Intl.DateTimeFormat("en-US").format(timestamp);
  };
  return (
    <>
       <main> 
      <div
        className="container style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          width:'96%',
          padding: "20px",
        }}
      >
        <table className="table table-borderless ms-5">
          <tbody style={{ border: "none" }}>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none" }}>OrderID:</td>
              <td style={{ border: "none" }}>{productidstate?.order_id}</td>
              <td style={{ border: "none" }}>Customer Name:</td>
              <td style={{ border: "none" }}>{productidstate?.customer?.name}</td>
            </tr>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none" }}>Market & Address: </td>
              <td style={{ border: "none" }}>
              {productidstate?.customer?.market?.name}
              </td>
              <td style={{ border: "none" }}>Order Date/Time:</td>
              <td style={{ border: "none" }}>{formatDate(productidstate?.order_datetime)}</td>
            </tr>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none" }}>Proceed By: </td>
              <td style={{ border: "none" }}>{productidstate?.ordered_by.name}</td>
              <td style={{ border: "none" }}>MPO:</td>
              <td style={{ border: "none" }}>{productidstate?.ordered_by.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
   
      <TableDash
        cols={tableinner(handleEdit)}
        data={medicinesall?.medicines?.map((item, index) => {
          return [
            index + 1,
            item?.name,
            item?.quantity,
            item?.price,
            (item?.quantity*item?.price),
            
          ];
        })}
        hoverable
        reverse={true}
        bordered={false}
        Total={
          <>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{productidstate.subtotal_amount}</td>
            </tr>
            <tr>
              <td>A value-added tax %</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{Math.round((productidstate.vat_rate-1)*100)}%</td>
            </tr>
            <tr>
              <td>A value-added tax</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{productidstate.vat_rate*productidstate.subtotal_amount}</td>
            </tr>
            <tr>
              <td>Payment Type</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{productidstate.payment_type}</td>
            </tr>
           
          </>
        }
      />
         </main>
    </>
  );
};

export default TableInnerPage;
