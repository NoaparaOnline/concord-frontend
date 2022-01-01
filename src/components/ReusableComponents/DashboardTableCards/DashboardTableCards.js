import React from "react";
import icon from '../../../Statics/assets/TabletsFrontBack/Acedol-Tabletfr.jpg'
const DashboardTableCards = ({ob}) => {
  return (
    <>
      <div
        className="card style_custom1"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          padding: "20px",
          minHeight:'230px',
          minWidth:'230px',
        }}
      >
            <div className="row mb-3">
                <div className="col-12 d-flex">
                    <img src={icon} width="50px" height="50px" alt="product img"
                    style={{border:'5px solid lightgrey' ,borderRadius:'10px'}}
                    />
                    <div className="ms-4 ">
                    <span style={{fontSize:'20px',fontWeight:'600',textTransform:'uppercase'}}>{ob.name}</span>  
                    <span style={{fontSize:'15px',fontWeight:'500',textTransform:'lowercase'}}><br/>{ob.name}</span>
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
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'uppercase'}}>{ob.price}</span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <span style={{fontSize:'15px',fontWeight:'600',tepxtTransform:'uppercase'}}>{ob.price}</span>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <span style={{fontSize:'17px',fontWeight:'600',textTransform:'capitalize',color:'grey'}}>Product Added By</span>
                </div>
                <div className="col-12">
                    <span style={{fontSize:'15px',fontWeight:'600',textTransform:'capitalize'}}>{ob.created_by._cls ? ob.created_by._cls : "N/A"}</span>
                </div>
             </div>
        </div>
      
    </>
  );
};

export default DashboardTableCards;
