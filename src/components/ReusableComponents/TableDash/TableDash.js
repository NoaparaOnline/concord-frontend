import React from "react";
import PropTypes from "prop-types";
import "./TableDash.css";
// import search from "../../../Statics/assets/G1.png";
// import filter from "../../../Statics/assets/F1.png";
// import { useHistory } from "react-router-dom";
const 

TableDash = ({
  cols,
  data,
  bordered,
  hoverable,
  striped,
  isDark,
  match,
  location,
  Total,
  SearchBar,
  colorfulcards,
  DivChartComponent,
  DivCardComponent,
  reverse,
  SelectedButtons,
  TableCardGrid,
  floatleftrightbutton,
 
}) => {
  // let history = useHistory();

  // Table Component On True False Toogle

//   const formatDate= (timestamp) => {
//     return new Intl.DateTimeFormat('en-US').format(timestamp);
//  }
  const TableDiv = (
    <div className="table-responsive"
    style={{overflowY:'scroll' }}
    >
      <table
        className={`table ${bordered ? "table-bordered" : "table-borderless"} ${
          hoverable && "table-hover"
        } ${striped && "table-striped"} ${isDark && "table-dark"}`}
        
     >
        <thead style={{ borderBottom: "hidden", borderTop: "hidden" }}>
          <tr
            style={{
              border: "none",
              color: "#707070",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
           

            {cols?.map((item, index) => (
              <th scope="col" key={index + 1} >
                <span className=" patient-appointment-table-heading">
                  {item}
                </span>
              </th>
            ))}


          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={index+1}
              style={{ border: "none" }}
            >
               {item?.map((_item, index) => (
                 <td style={_item === "Pending" ? { color:'#C0B627',fontWeight:'500',border:'none' ,fontSize:'14' }:
                 (_item === "Cancelled" || _item === "Declined"  ) ? { color:'red',fontWeight:'500',border:'none' ,fontSize:'14' }:
                 (_item === "Paid" || _item === "Delivered" || _item === "Submitted") ? { color:'green',fontWeight:'500',border:'none' ,fontSize:'14' }:
                 (_item === "Dispatched" || _item === "Unpaid") ? { color:'blue',fontWeight:'500',border:'none' ,fontSize:'14' }
                 :{ border:'none' ,fontSize:'14' }} key={index + 1}>{_item}</td>
                 ))}
            </tr>
          ))}
          {Total}
        </tbody>
      </table>
    </div>
  );

  return (
    <main>
    <div
      className="container style_custom mt-3"
      style={{
        backgroundColor: "#FFF",
        borderRadius: "10px",
        width: "96%",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Colorful Cards */}
      {/* Search Bar */}
      {floatleftrightbutton}
      {colorfulcards}
      {SelectedButtons}
      {SearchBar}

      {reverse ? (
        <>{TableDiv}</>
      ) : (
        <>
          {DivCardComponent}
          {DivChartComponent}
          {TableCardGrid}
        </>
      )}
    </div>
    </main>
  );
};

TableDash.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  striped: PropTypes.bool,
  isDark: PropTypes.bool,
};

TableDash.defaultProps = {
  bordered: true,
  hoverable: false,
  striped: false,
  isDark: false,
};

export default TableDash;
