import React from "react";
import PropTypes from "prop-types";
import "./TableDash.css";
import search from "../../../Statics/assets/G1.png";
import filter from "../../../Statics/assets/F1.png";
import { useHistory } from "react-router-dom";
const TableDash1 = ({
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
  let history = useHistory();
  console.log(history);
  console.log(match, location);

  // Table Component On True False Toogle
  const TableDiv = (
   
    <div class="table-responsive ">
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
              fontSize: "18px",
            }}
          >
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ cursor: "pointer" }}>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{ border: "none" }}
              onClick={() => history.push("/innertablepage", item)}
            >
              {cols.map((col, key) => (
                <td key={key} style={{ border: "none" }}>
                  {col.render(item)}
                </td>
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

TableDash1.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  striped: PropTypes.bool,
  isDark: PropTypes.bool,
};

TableDash1.defaultProps = {
  bordered: true,
  hoverable: false,
  striped: false,
  isDark: false,
};

export default TableDash1;