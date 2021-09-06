import React from "react";
import "./FixedRight.css";
const FixedRight = () => {
  return (
   
   <div className="row no-gutters right-main d-none d-lg-block">
   
      <div className="right-item">
        <i className="fa fa-sign-in right-icon"></i>
      </div>
   
      <div className="right-item right-hover-active">
        
        <div className="emergency-data-refrence">
          <i className="fa fa-phone right-icon"></i>
        </div>
        
        {/* <div className="detail-right-div-emergency text-left">
        <div className="ps-5 py-3">
            <div className="">
          
              <span className="light-Color-Para text-white" >0960621313233</span>
            </div>
         
            <div className="btn-position-emergency-call pt-4">
            
            </div>
          </div>
        </div> */}

      </div>
      
      <div className="right-item">
        <i className="fa fa-envelope right-icon"></i>
      </div>


    </div>
  );
};

export default FixedRight;
