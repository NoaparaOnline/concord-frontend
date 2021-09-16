import React from "react";

const HeaderDash = () => {
  const today = new Date();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = today.getFullYear() + " / " + (today.getMonth() + 1) + " / " + today.getDate();
  const day = days[today.getDay()];
  return (
    <div className="card">

        <div style={{backgroundColor:'#FFF'}} className="d-flex flex-column p-3">
            <div style={{fontWeight:'bold',fontSize:'9px'}} className="ms-1">{day}</div>
            <div style={{fontSize:'10px'}}>{date}</div>
            
        </div>
      </div>
  );
};

export default HeaderDash;
