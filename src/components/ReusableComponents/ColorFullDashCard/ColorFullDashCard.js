import React from "react";
import "./ColorFullDashCard.css";
const ColorFullDashCard = () => {
  return (
    <>
      <div
        className="card style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          width: "240px",
          padding: "10px 20px",
          height: "80px",
        }}
      >
        

          <div className="ms-2">Completed</div>
        <nav className="navbar">
          <div className="navbar__left">
            <h6>
              1544
            </h6>
          </div>
          <div className="navbar__right">
              64%
          </div>
        </nav>
      </div>
    </>
  );
};

export default ColorFullDashCard;
