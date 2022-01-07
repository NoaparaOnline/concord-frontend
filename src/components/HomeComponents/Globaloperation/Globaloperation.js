import React from "react";
import imgss from '../../../Statics/assets/bigCardimag.jpg'
import { Link } from "react-router-dom";
import "./Globaloperation.css";

const Globaloperation = () => {
  return (

    
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 section-card-border">
          <div className="section-card-back"></div>
          <div className="section-card-position">
            <div className="section-card-overlay">
              <h6 className="section-card-subHead">What we do</h6>
              <h3 className="section-card-heading p-0">Manufacturing</h3>
              <h3 className="section-card-heading p-0">Exporting </h3>
              <h3 className="section-card-heading p-0">Serving</h3>
            </div>
              <Link
                to="/"
                className="btn btn-primary d-flex justify-content-center rounded-pill btn-section-card m-0 mt-2 " style={{color:'#fff',backgroundColor:'#0066b3'}}
             >Read More
             </Link>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="card card_custom">
            <div className="card-body">
              <h1 className="card-title colrry">Global Operation</h1>
              <img src={imgss} className="card-img-top" alt="global operation" />
            </div>
            <h4 className="card-title text-title px-2 ml-3">
              <strong className="Typography_styling">
                Concord Pharmaceuticals Limited (CPL)
              </strong>
              , a leading human medicine manufacturer in Bangladesh. We always thrive to introduce top notch quality
            </h4>
            <Link to="/global-operation" className="btn btn-primary d-flex justify-content-center rounded-pill colr_btn m-auto mb-3" style={{color:'#fff',backgroundColor:'#0066b3'}}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globaloperation;