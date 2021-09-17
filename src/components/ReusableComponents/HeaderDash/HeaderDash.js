import React from "react";

const HeaderDash = () => {
  const today = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = today.getFullYear() + " / " + (today.getMonth() + 1) + " / " + today.getDate();
  const day = days[today.getDay()];
  return (
    <div className="card style_custom" style={{backgroundColor:'#FFF',borderRadius:'10px',width:'130px',padding:'10px 20px',height:'60px'}}>

        <div className="d-flex flex-column">
            <div style={{fontWeight:'bold',fontSize:'15px'}} className="ms-2">{day}</div>
            <div style={{fontSize:'15px'}} className="ms-1">{date}</div>
            
        </div>
      </div>
  );
};

export default HeaderDash;
