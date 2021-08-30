import React from "react";
import FlipCard from "../FlipCard/FlipCard";
import imgss from '../../assets/bigCardimag.jpg'
import { Link } from 'react-router-dom'
import './Globaloperation.css'
const Globaloperation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8"></div>
        <div className="col-lg-4">
          <div className="card card_custom">
           
           
           
            <div className="card-body">
              <h1 className="card-title colrry">Global Operation</h1>
                <img src={imgss} className="card-img-top p-3" alt="..." />
              <h4 className="card-title text-title"><strong className="Typography_styling" >Concord Pharmaceuticals Limited (CPL)</strong>, a leading human medicine manufacturer in Bangladesh. We always thrive to introduce top notch quality</h4>
            </div>
              
            <Link to="/" className="btn btn-primary rounded-pill colr_btn mx-5 mb-4">
              Read More
            </Link>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Globaloperation;
