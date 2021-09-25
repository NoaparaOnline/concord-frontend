import React from "react";
import TableDash from "./TableDash";
import "./TableDash.css";
import { tableinnerdata } from "../TableDash/mockData";
import { tableinner } from "../TableDash/tableConstant";

const handleEdit = (item) => () => {
  // write your logic
  alert(JSON.stringify(item));
};

const TableInnerPage = () => {
  return (
    <>
      <div
        className="container style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          width: "96%",
          padding: "20px",
          height: "100%",
        }}
      >
        <table class="table table-borderless ms-5">
          <tbody style={{ border: 'none' }}>
            <tr  style={{ border: 'none',padding:'10px'  }}>
              <td style={{ border: 'none' }}>OrderID:</td>
              <td style={{ border: 'none' }}>#000598734</td>
              <td style={{ border: 'none' }}>Customer Name:</td>
              <td style={{ border: 'none' }}>Abbas Medico</td>
            </tr>
            <tr  style={{ border: 'none' ,padding:'10px' }}>
              <td style={{ border: 'none' }}>Market & Address: </td>
              <td style={{ border: 'none' }}>Banani Model Town,Dhaka-123,Bangladesh</td>
              <td style={{ border: 'none' }}>Order Date/Time:</td>
              <td style={{ border: 'none' }}>03/05/2021 13:00</td>
            </tr>
            <tr style={{ border: 'none' ,padding:'10px' }}>
              <td style={{ border: 'none' }}>Proceed By: </td>
              <td style={{ border: 'none' }}>Yasir(RSM)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TableDash
        cols={tableinner(handleEdit)}
        data={tableinnerdata}
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
              <td>100,500</td>
            </tr>
            <tr>
              <td>A value-added tax %</td>
              <td></td>
              <td></td>
              <td></td>
              <td>15%</td>
            </tr>
            <tr>
              <td>A value-added tax</td>
              <td></td>
              <td></td>
              <td></td>
              <td>15050</td>
            </tr>
            <tr>
              <td>Payment Type</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Cash On Delivery</td>
            </tr>
          </>
        }
      />
    </>
  );
};

export default TableInnerPage;
