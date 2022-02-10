// import React, { useEffect } from "react";
import TableDash from "./TableDash";
import "./TableDash.css";
import { tableinner } from "../TableDash/tableConstant";
import { useSelector } from "react-redux";
import moment from "moment";
const TableInnerPage = (props) => {

  const productidstate = useSelector((state) => state?.deport?.productidstate);


  
  const medicinesall =productidstate;

  const handleEdit = (item) => () => {
    // write your logic
    alert(JSON.stringify(item));
  };
 
  return (
    <>
       <main> 
      <div
        className="container style_custom "
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          width:'96%',
          padding: "20px",
          minWidth:'250px'
        }}
      >

<div className="row  "
            
            >
              
              <div className="row py-3   ">
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                  OrderID : &nbsp;
                  </span>{" "}
                  {productidstate?.order_id}
                
                </div>
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                  Customer Name: &nbsp;
                  </span>
                  {productidstate?.customer?.name}
                 
                </div>
              </div>
             
              <div className="row py-3  ">
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                  Market Address: &nbsp;
                  </span>{" "}
                  {productidstate?.customer?.market__street_address}
                  </div>
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                  Order Date/Time: &nbsp;
                  </span>{" "}
                  {moment.unix(productidstate?.order_datetime).format("MMM DD, YYYY")}
                </div>
              </div>
              <div className="row py-3  ">
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                   Proceed By: &nbsp;
                  </span>
                  {productidstate?.ordered_by?.name}
                </div>
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                     MPO: &nbsp;
                  </span>{" "}
                  {productidstate?.ordered_by?.name}
                </div>
              </div>
              <div className="row py-3  ">
              
                <div className="col-lg-6">
                  <span style={{ fontWeight: "600", color: "#565656"  }}>
                     Ordered By: &nbsp;
                  </span>{" "}
                  <span className="text-capitalize" style={{color:'green' ,fontWeight:'500'}}>{productidstate?.approved_by_am}</span>
                  
                </div>
              </div>
              
            </div>


        {/* <table className="table  table-borderless ms-5" >
          <tbody style={{ border: "none" }}>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none",fontWeight: "500" }}>OrderID:</td>
              <td style={{ border: "none" }}>{productidstate?.order_id}</td>
              <td style={{ border: "none",fontWeight: "500" }}>Customer Name:</td>
              <td style={{ border: "none" }}>{productidstate?.customer?.name}</td>
            </tr>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none" ,fontWeight: "500"}}>Market Address: </td>
              <td style={{ border: "none" }}>
              {productidstate?.customer?.market?.name}
              <br/>
              {productidstate?.customer?.market?.parent?.name}
              </td>
              <td style={{ border: "none",fontWeight: "500" }}>Order Date/Time:</td>
              <td style={{ border: "none" }}>
              {moment.unix(productidstate?.order_datetime).format("MMM DD, YYYY")}
              </td>
            </tr>
            <tr style={{ border: "none", padding: "10px" }}>
              <td style={{ border: "none",fontWeight: "500" }}>Proceed By: </td>
              <td style={{ border: "none" }}>{productidstate?.ordered_by?.name}</td>
              <td style={{ border: "none" ,fontWeight: "500"}}>MPO:</td>
              <td style={{ border: "none" }}>{productidstate?.ordered_by?.name}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
   
      <TableDash
        cols={tableinner(handleEdit)}
        data={medicinesall?.medicines?.map((item, index) => {
          return [
            index + 1,
            item?.name,
            item?.quantity,
            item?.price?.toFixed(2),
            (item?.quantity*item?.price).toFixed(2),
            
          ];
        })}
       
        reverse={true}
        bordered={false}
        Total={
          <>
            <tr>
              <td>Sub Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{productidstate?.subtotal_amount?.toFixed(2)}</td>
            </tr>
            <tr>
              <td>A value-added tax %</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{Math.round((productidstate.vat_rate-1)*100).toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Payment Type</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{productidstate?.payment_type}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>{(productidstate?.vat_rate*productidstate?.subtotal_amount).toFixed(2)}</td>
            </tr>
           
          </>
        }
      />
         </main>
    </>
  );
};

export default TableInnerPage;
