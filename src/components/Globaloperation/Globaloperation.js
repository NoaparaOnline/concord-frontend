import React from "react";
import imgss from '../../assets/bigCardimag.jpg'
import { Link } from "react-router-dom";
import "./Globaloperation.css";
const Globaloperation = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 test-border">
          <div className="test-back"></div>
          <div className="test-position">
            <div className="test-overlay">
              <h6 className="test-subHead">What we do</h6>
              <h3 className="test-heading p-0">Manufacturing</h3>
              <h3 className="test-heading p-0">Exporting </h3>
              <h3 className="test-heading p-0">Serving</h3>
            </div>
              <Link
                to="/"
                className="btn btn-primary d-flex justify-content-center rounded-pill btn-test m-0 mt-2 "
              >
                Read More
              </Link>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="card card_custom">
            <div className="card-body">
              <h1 className="card-title colrry">Global Operation</h1>
              <img src={imgss} className="card-img-top" alt="..." />
            </div>
            <h4 className="card-title text-title px-2 ml-3">
              <strong className="Typography_styling">
                Concord Pharmaceuticals Limited (CPL)
              </strong>
              , leading human medicine manufacturer in....
            </h4>
            <Link
              to="/"
              className="btn btn-primary d-flex justify-content-center rounded-pill colr_btn m-auto "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globaloperation;