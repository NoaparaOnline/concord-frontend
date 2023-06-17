import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { BASEURL } from "../services/HttpProvider";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { filterComponentData } from "../Utils/functions";

const CareersInnerPage = (props) => {
  const location = useLocation()
  const { data } = location?.state;
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const careers_job_form = filterComponentData(component, "careers_job_form", lang)
  const { t } = useTranslation('common')
  const history = useHistory();
  const { job_id } = useParams();

  const jobLevelList = [
    { name: t('career_inner_page.name_text_1') },
    { name: t('career_inner_page.name_text_2') },
    { name: t('career_inner_page.name_text_3') },
    { name: t('career_inner_page.name_text_4') },
    { name: t('career_inner_page.name_text_5') },
    { name: t('career_inner_page.name_text_6') },
    { name: t('career_inner_page.name_text_7') },
    { name: t('career_inner_page.name_text_8') },
    { name: t('career_inner_page.name_text_9') },
  ]


  const [file, setFile] = useState();
  const [disableBtn, setdisableBtn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const thanaList = useSelector(state => state.static.thanaList)

  const submitHandler = async (data) => {
    setdisableBtn(true);
    let formdata = new FormData();
    if (file === undefined || file === null) {
      toast.error(t('career_inner_page.upload_report'));
      return;
    } else {
      formdata.append("recipients", "hr@concordpharma-bd.com");
      formdata.append("attachment", file[0]);
      formdata.append("subject", "Applied for Job");
      formdata.append(
        "body",
        `<span> Email : ${data?.email}</span> <br/> 
          <span>Phone : ${data?.phone}</span> <br/> 
          <span>Full Name : ${data?.name}</span> <br/> 
          <span>Interested Area: ${data?.interested_area}</span> </br>
          <span>Interested Job Level: ${data.interested_job}</span></br>`
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
        toast.success(t('career_inner_page.applied_success_text'));
        setdisableBtn(false);
        history.push('/careers')
      } else {
        toast.error(res?.data?.response_message);
        setdisableBtn(false);
      }
    }
  };
  return (
    <>
      <Helmet>
        <title> {t('career_inner_page.helmet.title_text')}</title>
      </Helmet>
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
                {data?.desc ? data?.desc : t('career_inner_page.desc_text')}
              </p>
            </div>
            <div className="row mb-3">
              <div className="col">
                <span style={{ color: "#0066b3", fontWeight: "600" }}>
                  {careers_job_form?.title ? careers_job_form?.title : ('career_inner_page.apply_online_text')}
                </span>
              </div>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="row">
                  <div className="col-lg-3 my-2">
                    <label for="jobapp_full_name">
                      {careers_job_form?.fullname ? careers_job_form?.fullname : t('career_inner_page.full_name_text')}

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
                          message: t('career_inner_page.field_req_text'),
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
                  <div className="col-lg-3 my-2 ">
                    <label for="jobapp_full_name">
                      {careers_job_form?.email ? careers_job_form?.email : t('career_inner_page.email_text')}
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
                          message: t('career_inner_page.field_req_text'),
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
                  <div className="col-lg-3 my-2 ">
                    <label for="jobapp_full_name">
                      {careers_job_form?.phone ? careers_job_form?.phone : t('career_inner_page.phone_text')}

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
                      placeholder={t('career_inner_page.placeholder_phone')}
                      {...register("phone", {
                        required: {
                          value: true,
                          message: t('career_inner_page.field_req_text'),
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
                {
                  job_id === '3' &&
                  <div className="row">
                    <div className="col-lg-3 my-2 ">
                      <label for="jobapp_full_name">
                        {careers_job_form?.industry ? careers_job_form?.industry : t('career_inner_page.interested_job_lvl')}

                      </label>
                    </div>
                    <div className="col-lg-9">
                      <select
                        name="interested_job"
                        class="form-control sjb-required"
                        id="interested_job"
                        autocomplete="off"
                        {...register("interested_job", {
                          required: {
                            value: true,
                            message: t('career_inner_page.field_req_text'),
                          },
                        })}
                      >
                        <option value=""> {t('career_inner_page.opt_text_level')} </option>
                        {
                          jobLevelList.map((ob, index) => {
                            return <option value={ob.name}>{ob.name}</option>
                          })
                        }
                      </select>
                      {errors?.interested_job?.message ? (
                        <div className="text-error">{errors?.interested_job?.message}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                }


                <div className="row">
                  <div className="col-lg-3 my-3 ">
                    <label for="jobapp_full_name">
                      {t('career_inner_page.interested_area_text')}
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <select
                      name="interested_area"
                      class="form-control sjb-required"
                      id="interested_area"
                      autocomplete="off"
                      {...register("interested_area", {
                        required: {
                          value: true,
                          message: t('career_inner_page.field_req_text'),
                        },
                      })}
                    >
                      <option value=""> {t('career_inner_page.opt_1_text_area')}</option>
                      {
                        thanaList.map((ob, index) => {
                          return <option value={ob.name}>{ob.name}</option>
                        })
                      }
                    </select>
                    {errors?.interested_area?.message ? (
                      <div className="text-error">{errors?.interested_area?.message}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 my-2 ">
                    <label for="jobapp_full_name">
                      {t('career_inner_page.attach_resume')}
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
                  <div className="col my-5">
                    <input
                      className="btn "
                      type="submit"
                      style={{
                        fontSize: "15px",
                        backgroundColor: "#0066b3",
                        color: "#FFF",
                        borderRadius: "0px",
                      }}
                      value={careers_job_form?.button ? careers_job_form?.button : t('career_inner_page.submit_text')}
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
