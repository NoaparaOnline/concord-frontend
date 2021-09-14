import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import queryString from 'query-string';

import { resetPassword } from "../Store/Actions/loginActions";
const ResetPassword = (props) => {



  let queryStringParse = function(string) {
    let parsed = {}
    if(string != '') {
        string = string.substring(string.indexOf('?')+1)
        let p1 = string.split('&')
        p1.map(function(value) {
            let params = value.split('=')
            parsed[params[0]] = params[1]
        });
    }
    return parsed
}

const params = queryStringParse(props.location.search);
console.log(params.uid)
console.log(params.token)

  // const qid = queryString.parse(new URLSearchParams(props.location.search)); 
  // console.log(qid.uid);


    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
      console.log("submit")
      if (data.password === data.confirmPassword) {
        const apiData = {
          id: params.uid,
          token: params.token,
          new_password: data.password,
        };
        const success = await dispatch(resetPassword(apiData));
        console.log(success);
  
        if (success === "success") {
          props.history.push("/");
        }
      } else {
        toast.error("Please Provide the same password");
      }
    };

    return (

        <div className="row mb-5 mt-4">
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div className="col-lg-4">
            <div class="card" style={{ width: "22rem" }}>
              <div class="card-body">
                <h5 class="modal-title text-center">Reset Password</h5>
                <div className="row px-3 mb-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-4">
                      <div className="col-12">
                        <span className="label-name-login">Password</span>
                        <input
                          className="input-login-modal"
                          type="password"
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
                    <div className="row mt-3 mb-3">
                      <div className="col-12">
                        <span className="label-name-login">Confirm Password</span>
                        <input
                          className="input-login-modal"
                          type="password"
                          {...register("confirmPassword", {
                            required: {
                              value: true,
                              message: "this field is required field",
                            },
                          })}
                        />
                        {errors?.confirmPassword?.message ? (
                          <div className="text-error">
                            {errors?.confirmPassword?.message}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <input
                      type="submit"
                      value="Reset Password"
                      className="headerBtn-red btn-block mx-auto"
                      style={{ width: "85%", textAlign: "center" }}
                    />
                 
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ResetPassword
