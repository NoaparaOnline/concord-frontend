import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { changePassword, setUserFromLocal } from "../../../../Store/Actions/loginActions";
import {  getUser } from "../../../../Utils/auth.util";
const ChangePassword = (props) => {
 
 
  const dispatch = useDispatch();
  

  const user = useSelector((state) => state?.logIn?.user);
  const onSubmit = async (data) => {
    
    if (data.new_password === data.new_password_next) {
      const apiData = {
        old_password: data.password,
        new_password: data.new_password,
      };
      const success = await dispatch(changePassword(apiData));
  
      if (success === "success") {
      toast.info("Password Changed Successfully");
      }
      props.onHide();
    }
    else {
        toast.error("Please Provide the same password");
        }
    
  };




  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        centered
        size="md"
        id="notificationmodal"
      >
        <Modal.Header>
          <span
            className=""
            style={{ fontWeight: "600", fontSize: "22px", color: "#0066b3" }}
          >
            Change Password
          </span>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row ">
            <div className="col mb-5">
              <div className="row ">
                <div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ padding: "15px", height: "300px" }}
                  >
                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                          Enter Old Password
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder="Old Password"
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
                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                          Enter New Password
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder="New Password"
                          {...register("new_password", {
                            required: {
                              value: true,
                              message: "this field is required field",
                            },
                          })}
                        />
                        {errors?.new_password?.message ? (
                          <div className="text-error">
                            {errors?.new_password?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="row mb-1">
                      <div className="col-12">
                        <span className="label-name-login">
                          Enter New Password Again
                        </span>
                        {/* &nbsp; */}
                        <input
                          className="input-login-modal"
                          type="password"
                          placeholder="New Password Confirm"
                          {...register("new_password_next", {
                            required: {
                              value: true,
                              message: "this field is required field",
                            },
                          })}
                        />
                        {errors?.new_password_next?.message ? (
                          <div className="text-error">
                            {errors?.new_password_next?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <input
                        type="submit"
                        value="Change Password"
                        className="btn btn-block rounded-pill  mb-2 mx-auto"
                        style={{
                          width: "85%",
                          textAlign: "center",
                          color: "#fff",
                          backgroundColor: "#0066b3",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePassword;
