import React from "react";
import icon from '../../../Statics/assets/TabletsFrontBack/Acedol-Tabletfr.jpg'
const DashboardTableCards = () => {
  return (
    <>
      <div
        className="card style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          width: "280px",
          padding: "10px 20px",
          height: "240px",
        }}
      >
        <div className="container">
            <div className="row mb-3">
                <div className="col-6 d-flex">
                    <img src={icon} width="50px" height="50px" alt=""
                    style={{border:'5px solid lightgrey' ,borderRadius:'10px'}}
                    />
                    <div className="ms-4 ">
                    <span style={{fontSize:'20px',fontWeight:'600',textTransform:'uppercase'}}>Aceloben</span>  
                    <span style={{fontSize:'15px',fontWeight:'500',textTransform:'lowercase'}}><br/>aceclofenac</span>
                    </div>
                    
                </div>
                
            </div>
            <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start">
                    
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'capitalize',color:'grey'}}>T.P</span>

                </div>
                <div className="col-6 d-flex justify-content-end">
                    
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'capitalize',color:'grey'}}>R.P</span>

                </div>
            </div>
            <div className="row mb-3">
                <div className="col-6 d-flex justify-content-start">
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'uppercase'}}>152</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span style={{fontSize:'15px',fontWeight:'600',tepxtTransform:'uppercase'}}>152</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <span style={{fontSize:'17px',fontWeight:'600',textTransform:'capitalize',color:'grey'}}>Product Added By</span>
                </div>
                <div className="col-12">
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'capitalize'}}>Yasir sheikh</span>
                </div>
             </div>
        </div>
      
      </div>
    </>
  );
};

export default DashboardTableCards;
