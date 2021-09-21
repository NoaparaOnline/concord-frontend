import React from "react";
import "./ColorFullDashCard.css";
const ColorFullDashCard = ({classname,headtext,textl,textr}) => {
  return (
    <>
      <div
        className={`card style_custom ${classname}`}
        style={{
          borderRadius: "10px",
          width: "240px",
          padding: "10px 20px",
          height: "80px",
        }}
      >
        

          <div className="ms-2" style={{color:'#fff',fontSize:'15px',fontWeight:'400'}}>{headtext}</div>
        <nav className="navbar">
          <div className="navbar__left">
            <h6 style={{color:'#fff',fontWeight:'600'}}>
              {textl}
            </h6>
          </div>
          <div className="navbar__right">
              <span style={{color:'#fff',fontSize:'20px',fontWeight:'400',opacity:'0.5'}}>{textr}</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ColorFullDashCard;
