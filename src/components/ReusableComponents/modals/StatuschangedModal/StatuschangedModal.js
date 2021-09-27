import React from 'react'
import Modal from "react-bootstrap/Modal";
import { Link } from 'react-router-dom';

const StatuschangedModal = (props) => {
    return (
        <>
          <Modal show={props.show} onHide={props.onHide} centered size="sm">
       
       <Modal.Header>
     
         
       
        <span className="" style={{ fontWeight: "600" ,fontSize:'22px',color:'#0066b3' }}> Status </span>
         
       </Modal.Header>
       <Modal.Body className="p-0">
        
      
        
          <div className="row ">
            <div className="col mb-5">
              <div className="row "></div>
              <div className="d-flex justify-content-center  me-3 ">
                <div
                  className="card cardlogmodel"
                  style={{ minWidth: "50%", width: "400px", height: "200px" }}
                >

                      <div className=""> 
                     
                     

                      <div className="formpx px-3 pt-4" style={{  padding: '10px',height: '180px'}}>
                       
                    
                      <div className="form-group">
                          <label>Delivery Statuses</label>
                  <select className="form-control form-select" id="exampleFormControlSelect1">
                    <option >Pending</option>
                    <option>Dispatched</option>
                    <option>Delivered</option>
                    <option>Declined</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                      <div className="form-group">
                      <label>Delivery Statuses</label>
                  <select className="form-control form-select" id="exampleFormControlSelect1">
                    <option >Pending</option>
                    <option>Unpaid</option>
                    <option>Paid</option>
                    <option>Submitted</option>
                    <option>Declined</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                        
                        <button
                          className="btn btn-primary rounded-pill btn-block mb-2"
                          style={{
                            color: "#fff",
                            backgroundColor: "#0066b3",
                            fontSize: "13px",
                            fontWeight: "500",
                          }}
                        //   onClick={onSubmitEmail}
                        >
                          Change
                        </button>
                        <div className="">
                          <label
                            className="form-check-label "
                            htmlFor="gridCheck1"
                            style={{ fontSize: "12px" }}
                          >
                            {/* <Link onClick={()=>{
                              props.setShowdiv(true);
                              }} to="#" style={{textDecoration:'none' ,color:'#0066b3'}}>Back To Login </Link> */}
                          </label>
                        </div>
                      </div>
                      </div>


                              

                      

                    </div>


                  </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>   
        </>
    )
}

export default StatuschangedModal
