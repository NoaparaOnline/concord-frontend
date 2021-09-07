import React from "react";
import "./FixedRight.css";
const FixedRight = () => {
  return (

    <div className="flotmenuright">
    <a href="/#" title="Login/Register"><i className='fa fa-sign-in' style={{fontSize:'22px'}}></i></a>
     <a href="tel:+8801991145006" title="Call" className="call"><i className='fa fa-phone' style={{fontSize:'22px'}}></i><span>+8801991145006</span></a>
      <a href="mailto:info@concordpharma-bd.com" title="Email" className="float_email">
          <i className='fa fa-envelope' style={{fontSize:'22px'}}></i>
      </a>
</div>
 
  );
};

export default FixedRight;
