import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BASEURL } from "../services/HttpProvider";

const CareersInnerPage = (props) => {
  const [file, setFile] = useState();
  const [disableBtn, setdisableBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    setdisableBtn(true);
    let formdata = new FormData();
    if (file === undefined || file === null) {
      toast.error("please upload Report");
      return;
    } else {
      formdata.append("recipients", "hr@concordpharma-bd.com");
      formdata.append("attachment", file[0]);
      formdata.append("subject", "Applied for Job");
      formdata.append(
        "body",
        `<span>Email : ${data?.email}</span> <br/> <span>Phone : ${data?.phone}</span> <br/> <span>Full Name : ${data?.name}</span> <br/>  `
      );

      let res = await axios.post(
        `${BASEURL}/users/mail/send_w_attachment`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res?.data?.response_code === 200) {
        toast.success("Applied Successfully");
        setdisableBtn(false);
      } else {
        toast.error(res?.data?.response_message);
        setdisableBtn(false);
      }
    }
    console.log(data);
  };
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
                <span style={{ color: "#0066b3", fontWeight: "600" }}>
                  Apply Online
                </span>
              </div>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="row">
                  <div className="col-lg-3 mb-4">
                    <label for="jobapp_full_name">
                      Full Name
                      <span
                        class="required"
                        style={{ color: "#f00", fontSize: "16px" }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div className="col-lg-9 ">
                    <input
                      style={{ borderRadius: "0px" }}
                      className="form-control"
                      required="required"
                      autocomplete="off"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "this field is required field",
                        },
                      })}
                    />
                    {errors?.name?.message ? (
                      <div className="text-error">{errors?.name?.message}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-4 ">
                    <label for="jobapp_full_name">
                      Email
                      <span
                        class="required"
                        required="required"
                        autocomplete="off"
                        style={{ color: "#f00", fontSize: "16px" }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div className="col-lg-9 ">
                    <input
                      style={{ borderRadius: "0px" }}
                      className="form-control"
                      required="required"
                      type="email"
                      autocomplete="off"
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
                <div className="row">
                  <div className="col-lg-3 mb-4 ">
                    <label for="jobapp_full_name">
                      Phone
                      <span
                        class="required"
                        style={{ color: "#f00", fontSize: "16px" }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div className="col-lg-9 ">
                    <input
                      type="tel"
                      name="jobapp_phone"
                      class="form-control sjb-phone-number sjb-numbers-only sjb-required"
                      id="jobapp_phone"
                      required="required"
                      autocomplete="off"
                      placeholder="0301 2345678"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "this field is required field",
                        },
                      })}
                    />
                    {errors?.phone?.message ? (
                      <div className="text-error">{errors?.phone?.message}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 mb-4 ">
                    <label for="jobapp_full_name">
                      Attach Resume
                      <span
                        class="required"
                        style={{ color: "#f00", fontSize: "16px" }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div className="col-lg-9 ">
                    <div class="file">
                      <input
                        type="file"
                        name="applicant_resume"
                        id="applicant-resume"
                        class="sjb-attachment form-control "
                        required="required"
                        onChange={(e) => {
                          setFile(e.target.files);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <input
                      className="btn "
                      type="submit"
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#0066b3",
                        color: "#FFF",
                        borderRadius: "0px",
                      }}
                      value={"Submit"}
                      disabled={disableBtn}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersInnerPage;
