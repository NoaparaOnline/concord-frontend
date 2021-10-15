import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const CareersInnerPage = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-7">
            <div className="row my-5">
              <i className="fa fa-clock-o mb-4" style={{ color: "#666666" }}>
                &nbsp;{moment().format("MMMM-DD-YYYY")}
              </i>
              <hr />
            </div>
            <div className="row mb-3">
              <p className="px-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="row mb-3">
              <div className="col">
                <span  style={{ color: "#0066b3", fontWeight: "600" }}>
                  Apply Online
                </span>
              </div>
            </div>
            <div className="row">
                <form>
                <div className="row">
                <div className="col-lg-3 mb-4">
                <label for="jobapp_full_name">Full Name<span class="required" style={{color:'#f00' , fontSize:'16px'}}>*</span></label>
                </div>
                <div className="col-lg-9 ">
                  <input style={{borderRadius:'0px'}} className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 mb-4 ">
                <label for="jobapp_full_name">Email<span class="required" style={{color:'#f00' , fontSize:'16px'}}>*</span></label>
                  
                </div>
                <div className="col-lg-9 ">
                  <input style={{borderRadius:'0px'}} className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 mb-4 ">
                <label for="jobapp_full_name">Phone<span class="required" style={{color:'#f00' , fontSize:'16px'}}>*</span></label>
                  
                </div>
                <div className="col-lg-9 ">
                  <input type="tel" name="jobapp_phone" class="form-control sjb-phone-number sjb-numbers-only sjb-required" id="jobapp_phone" required="required" autocomplete="off" placeholder="0301 2345678"></input>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 mb-4 ">
                <label for="jobapp_full_name">Attach Resume<span class="required" style={{color:'#f00' , fontSize:'16px'}}>*</span></label>
                  </div>
                <div className="col-lg-9 ">
                <div class="file"><input type="file" name="applicant_resume" id="applicant-resume" class="sjb-attachment form-control " required="required"  /></div>
                </div>
              </div>
             
                </form>
           
             
            </div>
            <div className="row">
              <div className="col mb-3">
                <Link to="#" style={{ textDecoration: "none" }}>
                  <div
                    className="btn "
                    style={{
                      fontSize: "15px",
                      backgroundColor: "#0066b3",
                      color: "#FFF",
                      borderRadius: "0px",
                    }}
                  >
                    Submit
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersInnerPage;
