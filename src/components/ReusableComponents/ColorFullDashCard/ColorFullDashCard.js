import React from "react";
import "./ColorFullDashCard.css";
const ColorFullDashCard = ({classname,headtext,textl,textr}) => {
  return (
    <>
      <div
        className={`card style_custom ${classname}`}
        style={{
          borderRadius: "10px",
          padding: "10px 10px",
        }}
      >
        

          <div className="ms-2" style={{color:'#fff',fontSize:'15px',fontWeight:'400'}}>{headtext}</div>
        <nav className="navbar">
          <div className="navbar__left navbar_left_float_custom">
            <h6 style={{color:'#fff',fontWeight:'600'}}>
              {textl}
            </h6>
          </div>
          <div className="navbar__right navbar_right_float_custom">
              <span style={{color:'#fff',fontSize:'20px',fontWeight:'400',opacity:'0.5'}}>{textr}</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ColorFullDashCard;
