import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import {
  statusChange,
} from "../../../../Store/Actions/deportmanagerActions";

import { useDispatch, useSelector } from "react-redux";



const StatuschangedModal = (props) => {




  const dispatch = useDispatch();

  const productuid = useSelector((state) => state?.deport?.productuid);
  const [dropdown1, setDropdown1] = useState(productuid?.delivery_status);
  const [dropdown2, setDropdown2] = useState(productuid?.payment_status);


  const onSubmit = () => {
    const apiData = {
      delivery_status: dropdown1,
      payment_status: dropdown2,
      uid: productuid.uid,
    }
    console.log("apiData",apiData)
    dispatch(statusChange(apiData));
    props.onHide();
  };


  return (


    <>


      <Modal show={props.show} onHide={props.onHide} centered size="sm">

        <Modal.Header>



          <span className="" style={{ fontWeight: "600", fontSize: '22px', color: '#0066b3' }}> Status </span>

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



                    <div className="form  px-3 pt-4" style={{ padding: '10px', height: '180px' }}>


                      <div className="form-group">
                        <label>Delivery Status</label>
                        <select className="form-control form-select" id="exampleFormControlSelect1" onChange={(e) => {
                          setDropdown1(e.target.value)
                        }}>

                          <option selected >{productuid?.delivery_status}</option>
                          {
                            productuid?.delivery_status === "Pending" || "pending" ? "" :
                              <option >pending</option>
                          }
                          {
                            productuid?.delivery_status === "Dispatched" || "dispatched" ? "" :
                              <option>dispatched</option>
                          }

                          <option>delivered</option>
                          <option>returned</option>
                          <option>cancelled</option>
                          <option>submitted_to_depot</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>payment Status</label>
                        <select className="form-control form-select" id="exampleFormControlSelect1" onChange={(e) => { setDropdown2(e.target.value) }}>
                          <option selected >{productuid?.payment_status}</option>
                          {
                            productuid?.payment_status === "Pending" || "pending" ? "" :
                              <option>pending</option>
                          }
                          {
                            productuid?.payment_status === "Unpaid" || "unpaid" ? "" :
                              <option>unpaid</option>
                          }
                          {
                            productuid?.payment_status === "Dispatched" || "dispatched" ? "" :
                              <option>dispatched</option>
                          }
                          <option>received</option>
                          <option>deposited</option>
                          <option>declined</option>
                          <option>cancelled</option>
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
                        onClick={onSubmit}
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
