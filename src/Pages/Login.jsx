import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch,useSelector } from "react-redux";
import { loginUser,forgotPassword } from "../Store/Actions/loginActions";
import { Link } from "react-router-dom";
// import { forgotPassword } from "../Store/Actions/loginActions";

//USE FORM HOOKS
import { useForm } from "react-hook-form";

//USE HISTORY HOOKS
import { useHistory } from "react-router";

import Loader from "react-loader-spinner";




const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state?.logIn?.loader);
  const onSubmit = async (data) => {
    const apiData = {
      email_address: data.email,
      password: data.password,
      fcm_token:localStorage.getItem("fcm")
    };

    const type = await dispatch(loginUser(apiData));

    if (type === "depot_manager") {
      history?.push("/depotmanager-dashboard");
    }
    else if (type === "director") {
      history?.push('/director-dashboard')
    }
    if(type !== "error")
    {  props.onHide();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmitEmail = async (data) => {
    const apiData = {
      email_address: data.email,
    };
    dispatch(forgotPassword(apiData));
    props.onHide();
  };









  return (
    <div>
      <Modal show={props.show} onHide={props.onHide} centered size="sm">

        <Modal.Header>


          {props.showdiv ?
            <span className="" style={{ fontWeight: "600", fontSize: '22px', color: '#0066b3' }}> Login  </span>
            :
            <span className="" style={{ fontWeight: "600", fontSize: '22px', color: '#0066b3' }}> Forgot Password </span>
          }

        </Modal.Header>
        <Modal.Body className="p-0">



          <div className="row ">
            <div className="col mb-5">
              <div className="row ">


                {props.showdiv ?
                  <div>

                    <form onSubmit={handleSubmit(onSubmit)} style={{padding:'15px',height: '220px'}}>
                      <div className="row">
                        <div className="col-12">
                          <span className="label-name-login">Email</span>
                          {/* &nbsp; */}
                          <input
                            className="input-login-modal"
                            type="email"
                            placeholder="Username/Email"
                            {...register("email", {
                              required: {
                                value: true,
                                message: "this field is required field",
                              },
                            })}
                          />
                          {errors?.email?.message ? (
                            <div className="text-error">{errors?.email?.message}</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="row mb-1">
                        <div className="col-12">
                          <span className="label-name-login">Password</span>
                          {/* &nbsp; */}
                          <input
                            className="input-login-modal"
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                              required: {
                                value: true,
                                message: "this field is required field",
                              },
                            })}
                          />
                          {errors?.password?.message ? (
                            <div className="text-error">
                              {errors?.password?.message}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-block rounded-pill  mb-2 mx-auto"
                        style={{
                          width: "85%", textAlign: "center", color: "#fff",
                          backgroundColor: "#0066b3",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}

                      >
                        {loader ? 
                      <div className="d-flex justify-content-center">
                      <Loader
                        height={20} width={20}
                        type="ThreeDots"
                        color="#fff"
                      />
                    </div> : "LOG IN"    
                      }
                      </button>
                      </div>

                      <div className="">
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck1"
                          style={{ fontSize: "12px" }}
                        >
                          <Link onClick={() => props.setShowdiv(false)} to="#" style={{ textDecoration: 'none', color: '#0066b3' }}>Forgot Password ?</Link>
                        </label>
                      </div>


                    </form>
                  </div>
                  :

                  <div className="">



                    <form onSubmit={handleSubmit(onSubmitEmail)} style={{ padding: '15px', height: '170px' }}>
                     
                     
                     
                    <div className="row">
                        <div className="col-12 mb-3">
                          <span className="label-name-login">Email</span>
                          <input
                            className="input-login-modal"
                            type="email"
                            placeholder="Enter Email For Verfication"
                            {...register("email", {
                              required: {
                                value: true,
                                message: "this field is required field",
                              },
                            })}
                          />
                          {errors?.email?.message ? (
                            <div className="text-error">{errors?.email?.message}</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                     
                     
                     

                      <div className="d-flex justify-content-center">
                      <input
                        type="submit"
                        value="SUBMIT"
                        className="btn btn-block rounded-pill  mb-2 mx-auto"
                        style={{
                          width: "85%", textAlign: "center", color: "#fff",
                          backgroundColor: "#0066b3",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}

                      />
                      </div>

                     

                      
                      <div className="">
                        <label
                          className="form-check-label "
                          htmlFor="gridCheck1"
                          style={{ fontSize: "12px" }}
                        >
                          <Link onClick={() => {
                            props.setShowdiv(true);
                          }} to="#" style={{ textDecoration: 'none', color: '#0066b3' }}>Back To Login </Link>
                        </label>
                      </div>
                    </form>
                  </div>


                }





              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Login;
