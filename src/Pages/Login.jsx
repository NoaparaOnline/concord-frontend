import React from "react";
// import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { loginUser } from "../Store/Actions/loginActions";
import { Link } from "react-router-dom";
// import { forgotPassword } from "../Store/Actions/loginActions";

//USE FORM HOOKS
import { useForm } from "react-hook-form";

//USE HISTORY HOOKS
import { useHistory } from "react-router";





const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const apiData = {
      email_address: data.email,
      password: data.password,
    };

    const type = await dispatch(loginUser(apiData));

    if (type === "depot_manager") {
      history?.push("/depotmanager-dashboard");
    }
    else if (type === "director") {
      history?.push('/director-dashboard')
    }
    props.onHide();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmitEmail = async () => {
    // const apiData = {
    //   email_address: email,
    // };

    props.onHide();
  };


  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");







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
                      <input
                        type="submit"
                        value="LOG IN"
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



                    <div className="formpx px-3 pt-4" style={{ padding: '15px', height: '220px' }}>
                      <div className="input-group mb-4 mr-sm-2">
                        <div className="input-group-prepend">
                          {/* <div className="input-group-text">
                              <i
                                className="fa fa-user"
                                style={{ color: "#555" }}
                              ></i>
                            </div> */}
                        </div>
                        <input
                          type="email"
                          className="form-control logmod mt-4"
                          id="inlineFormInputGroupUsername2"
                          placeholder="Username/Email"
                          // onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <button
                        className="btn btn-primary rounded-pill btn-block mb-2"
                        style={{
                          color: "#fff",
                          backgroundColor: "#0066b3",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                        onClick={onSubmitEmail}
                      >
                        Submit
                      </button>
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
                    </div>
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
