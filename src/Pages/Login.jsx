import React from "react";
import Modal from "react-bootstrap/Modal";
import logmod from "../Statics/assets/loginmodal.jpg";

const Login = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered size="lg">
        <Modal.Body className="p-0">
          <div className="row ">
            <div className="col-lg-3  d-none d-lg-block  ">
              <img
                alt=""
                src={logmod}
                className=""
                style={{ minWidth: "50%", width: "375px", height: "500" }}
              />
            </div>

            <div className="col-lg-9">
              <div className="row ">
                <i
                  className="fa fa-times-circle d-flex justify-content-end fs-2 iconhover"
                  onClick={props.onHide}
                >
                  {" "}
                </i>
              </div>
              <div className="d-flex justify-content-end  me-3 mt-4">
                <div
                  className="card cardlogmodel"
                  style={{ minWidth: "50%", width: "375px", height: "500"}}
                >
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item text-center">
                      {" "}
                      <a
                        className="nav-link active btl"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <span style={{fontWeight:'600'}}>Login</span>
                      </a>{" "}
                    </li>
                    <li className="nav-item text-center">
                      {" "}
                      <a
                        className="nav-link btr"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                         <span style={{fontWeight:'600'}}>Sign Up</span>
                      </a>{" "}
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="form logform px-4 pt-5">
                        {" "}
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-user"style={{color:'#555'}}></i></div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Username/Email"
                          />
                          </div>
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-lock"style={{color:'#555'}}></i></div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Password"
                          />
                          </div>


                          <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                          />
                          <div className="d-flex justify-content-between">
                          <label className="form-check-label " for="gridCheck1" style={{fontSize:'14px'}}>
                            <strong>Remember me</strong>
                          </label>
                          <label className="form-check-label" for="gridCheck1" style={{fontSize:'17px'}}>
                            Forgot Password ?
                          </label>
                          </div>
                        </div>

                        <button className="btn btn-primary rounded-pill btn-block" style={{color:'#fff',backgroundColor:'#0066b3',fontSize:'15px' ,fontWeight:'500'}}>SIGN IN</button>{" "}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="form logform px-4">
                        {" "}
                        <label
                          className="sr-only"
                          for="inlineFormInputGroupUsername2"
                        >
                          Username
                        </label>
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-envelope" style={{color:'#555'}}></i></div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Email"
                          />
                        </div>{" "}
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="input-group mb-3 mr-sm-2">
                              <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-user"style={{color:'#555'}}></i></div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroupUsername2"
                                placeholder="Firstname"
                              />
                            </div>{" "}
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group mb-3 mr-sm-2">
                              <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fa fa-user"style={{color:'#555'}}></i></div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroupUsername2"
                                placeholder="Lastname"
                              />
                            </div>{" "}
                          </div>
                        </div>
                        <label
                          className="sr-only"
                          for="inlineFormInputGroupUsername2"
                        >
                          Username
                        </label>
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-lock"style={{color:'#555'}} ></i></div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Password"
                          />
                        </div>{" "}
                        <label
                          className="sr-only"
                          for="inlineFormInputGroupUsername2"
                        >
                          Username
                        </label>
                        <div className="input-group mb-3 mr-sm-2">
                          <div className="input-group-prepend">
                            <div className="input-group-text"><i className="fa fa-lock"style={{color:'#555'}}></i></div>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername2"
                            placeholder="Confirm Password"
                          />
                        </div>{" "}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                          />
                          <label className="form-check-label" for="gridCheck1" style={{fontSize:'14px'}}>
                            Subscribe to our newsletter
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                          />
                          <label className="form-check-label" for="gridCheck1" style={{fontSize:'14px'}}>
                            I accept the Terms of Service and Privacy Policy
                          </label>
                        </div>

  


                        <button className="btn btn-primary rounded-pill btn-block" style={{color:'#fff',backgroundColor:'#0066b3',fontSize:'15px' ,fontWeight:'500'}}>SIGN UP</button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
