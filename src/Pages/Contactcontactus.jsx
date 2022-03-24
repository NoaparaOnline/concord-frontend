import React, { useState } from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/contactusbanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { useDispatch, useSelector } from "react-redux";
import { SendGridMailApi } from "../Store/Actions/directorActions";
import { toast } from "react-toastify";
import { filterComponentData, validateEmail } from '../Utils/functions'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Contact_contactus = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const contact_us_international_business = filterComponentData(component, "contact_us_international_business", lang)
  const contact_us_corporate_business = filterComponentData(component, "contact_us_corporate_business", lang)
  const contact_form_services = filterComponentData(component, "contact_form_services", lang)
  const contact_us_form_labels = filterComponentData(component, "contact_us_form_labels", lang)
  console.log(contact_us_international_business, "contact_us_international_business");


  const dispatch = useDispatch();
  const { t } = useTranslation('common')
  const LinksBan = [
    {
      subLinkName: t('contact_contact_us.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('contact_contact_us.contact_text'),
      subDash: "/",
      subLink: "/contact",
    },
  ];

  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    if (validateEmail(data.email)) {
      const RecipentEmail = 'info@concordpharma-bd.com'
      // const RecipentEmail ='shahzaibqadir7@gmail.com'
      const apiData = {
        recipients: [RecipentEmail],
        subject: data?.dropsel,
        body: `<p>Email enquiry from Contact-Us form Concord Pharma</p>
          <strong>Name</strong> : ${data?.name}
                        <br/>
                        <strong>Email</strong> : ${data?.email}
                        <br/>
                        <strong>Number</strong> : ${data?.phone}
                        <br/>
                        <strong>Subject</strong> : ${data?.subject}
                        <br/>
                        <strong>Message</strong> : <span className="text-justify">${data?.message}</span>
                        <br/>
                        `,
      };
      const res = await dispatch(SendGridMailApi(apiData));
      if (res?.response_code === 200) {
        setSuccess(true);
        toast.info(t('contact_contact_us.email_sent'))
      }
      else {
        setSuccess(false)
        toast.error(t('contact_contact_us.email_not_sent'))
      }

    }
    else {
      toast.error(t('contact_contact_us.invalid_email'))
    }


  };

  return (
    <>
      <Helmet>
        <title>{t('contact_contact_us.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('contact_contact_us.contact_text')}
        subHeading={t('contact_contact_us.contact_text').toUpperCase()}
        LinksBan={LinksBan}

        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">
          {
            contact_us_corporate_business?.length < 1 ?
              <div className="col-lg-6">
                <div className="serviceBox1">
                  <div className="service-content1">
                    <h3>{t('contact_contact_us.corporate_business')}</h3>
                    <span style={{ color: "#565656" }}>
                      {t('contact_contact_us.address')}
                    </span>
                  </div>

                  <div className="service-icon1">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="serviceBox1">
                  <div className="service-content1">
                    <h3>{t('contact_contact_us.phone_text')}</h3>
                    <span style={{ color: "#565656" }}>{t('contact_contact_us.phone_number')}</span>
                  </div>
                  <div className="service-icon1">
                    <i className="fa fa-phone"></i>
                  </div>
                </div>

                <div className="serviceBox1">
                  <div className="service-content1">
                    <h3>{t('contact_contact_us.fax_text')}</h3>
                    <span style={{ color: "#565656" }}>{t('contact_contact_us.fax_num')}</span>
                  </div>
                  <div className="service-icon1">
                    <i className="fa fa-fax" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="serviceBox1">
                  <div className="service-content1">
                    <h3>{t('contact_contact_us.email_text')}</h3>
                    <a
                      className="secnav"
                      href="mailto:headoffice@concordpharma-bd.com"
                      style={{ color: "#565656", textDecoration: "none" }}
                    >
                      headoffice@concordpharma-bd.com
                    </a>
                  </div>
                  <div className="service-icon1">
                    <i className="fa fa-envelope-open"></i>
                  </div>
                </div>
              </div> :
              <div className="col-lg-6">
                {contact_us_corporate_business?.map((item, idx) => (
                  <div className="serviceBox1">
                    <div className="service-content1">
                      <h3>{item?.heading}</h3>
                      <span style={{ color: "#565656" }}>
                        {item?.desc}
                      </span>
                    </div>

                    <div className="service-icon1">
                      {/* <i className="fa fa-map-marker" aria-hidden="true"></i> */}
                      <img src={item?.image} />

                    </div>
                  </div>
                ))}


              </div>

          }

          {
            contact_us_international_business?.length < 1 ? <div className="col-lg-6">
              <div className="serviceBox1">
                <div className="service-content1">
                  <h3>{t('contact_contact_us.int_business')}</h3>
                  <span style={{ color: "#565656" }}>
                    {t('contact_contact_us.name')} &amp; {t('contact_contact_us.business_deprt')}
                  </span>
                </div>

                <div className="service-icon1">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
              </div>

              <div className="serviceBox1">
                <div className="service-content1">
                  <h3> {t('contact_contact_us.phone_text')}</h3>
                  <span style={{ color: "#565656" }}><br />{t('contact_contact_us.int_phone_number')}<b></b> </span>
                </div>
                <div className="service-icon1">
                  <i className="fa fa-phone"></i>
                </div>
              </div>

              <div className="serviceBox1">
                <div className="service-content1">
                  <h3>{t('contact_contact_us.fax_text')}</h3>
                  <span style={{ color: "#565656" }}>{t('contact_contact_us.int_fax')}</span>
                </div>
                <div className="service-icon1">
                  <i className="fa fa-fax" aria-hidden="true"></i>
                </div>
              </div>

              <div className="serviceBox1">
                <div className="service-content1">
                  <h3>
                    {t('contact_contact_us.email_text')}
                  </h3>
                  <a
                    className="secnav"
                    href="mailto:info@concordpharma-bd.com"
                    style={{ color: "#565656", textDecoration: "none" }}
                  >
                    info@concordpharma-bd.com
                  </a>
                </div>
                <div className="service-icon1">
                  <i className="fa fa-envelope-open"></i>
                </div>
              </div>
            </div> : <div className="col-lg-6">
              {contact_us_international_business?.map((item, idx) => (
                <div className="serviceBox1">
                  <div className="service-content1">
                    <h3>{item?.heading}</h3>
                    <span style={{ color: "#565656" }}>
                      {item?.desc}
                    </span>
                  </div>

                  <div className="service-icon1">
                    {/* <i className="fa fa-map-marker" aria-hidden="true"></i> */}
                    <img src={item?.image} />
                  </div>
                </div>
              ))}


            </div>
          }

        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="form-div">
              <form onSubmit={handleSubmit(submitHandler)} style={{ minHeight: "450px" }}>
                <div className="form-group">
                  <select
                    className="form-control form-select"
                    id="exampleFormControlSelect1"
                    name="DropSel"
                    required="required"
                    {...register("dropsel", {
                      required: {
                        value: true,
                        message: "This field is required field",
                      },
                    })}

                  >
                    {contact_form_services?.length < 1 ? <> <option>
                      {t('contact_contact_us.opt_1')}
                    </option>
                      <option>
                        {t('contact_contact_us.opt_2')}
                      </option>
                      <option>
                        {t('contact_contact_us.opt_3')}
                      </option>
                      <option>
                        {t('contact_contact_us.opt_4')}
                      </option></> : contact_form_services?.map((item) => (
                        <option>
                          {item?.name}
                        </option>
                      ))}

                  </select>
                  {errors?.dropsel?.message ? (
                    <div className="text-error">{errors?.dropsel?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="name"
                    className="form-control"
                    id=""
                    placeholder={contact_us_form_labels?.name ? contact_us_form_labels?.name : t('contact_contact_us.text_1')}
                    required="required"
                    name="Name"
                    autocomplete="off"
                    {...register("name", {
                      required: {
                        value: true,
                        message: t('contact_contact_us.field_req_text'),
                      },
                    })}
                  />

                  {errors?.name?.message ? (
                    <div className="text-error">{errors?.name?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    name="Email"
                    required="required"
                    placeholder={contact_us_form_labels?.email ? contact_us_form_labels?.email : t('contact_contact_us.text_2')}
                    autocomplete="off"
                    {...register("email", {
                      required: {
                        value: true,
                        message: t('contact_contact_us.field_req_text'),
                      },
                    })}
                  />
                  {errors?.email?.message ? (
                    <div className="text-error">{errors?.email?.message}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="numbers"
                    className="form-control"
                    id=""
                    name="Numbers"
                    required="required"
                    placeholder={contact_us_form_labels?.contact ? contact_us_form_labels?.contact : t('contact_contact_us.text_3')}
                    autocomplete="off"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: t('contact_contact_us.field_req_text'),
                      },
                    })}
                  />

                  {errors?.phone?.message ? (
                    <div className="text-error">{errors?.phone?.message}</div>
                  ) : (
                    ""
                  )}

                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="Subject"
                    required="required"
                    placeholder={contact_us_form_labels?.subject ? contact_us_form_labels?.subject : t('contact_contact_us.text_4')}
                    autocomplete="off"
                    {...register("subject", {
                      required: {
                        value: true,
                        message: t('contact_contact_us.field_req_text'),
                      },
                    })}

                  />
                  {errors?.subject?.message ? (
                    <div className="text-error">{errors?.subject?.message}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id=""
                    rows="3"
                    name="Message"
                    required="required"
                    placeholder={contact_us_form_labels?.message ? contact_us_form_labels?.message : t('contact_contact_us.text_5')}
                    {...register("message", {
                      required: {
                        value: true,
                        message: t('contact_contact_us.field_req_text'),
                      },
                    })}

                  >
                    {errors?.message?.message ? (
                      <div className="text-error">{errors?.message?.message}</div>
                    ) : (
                      ""
                    )}

                  </textarea>
                </div>
                <div className="form-group">
                  {
                    success ?
                      <label style={{ color: '#0066b3' }}>
                        {t('contact_contact_us.resp_sent_text')}
                      </label> : ""
                  }
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-5 colr"
                  style={{ fontWeight: "600", backgroundColor: "#0066b3" }}
                >
                  <span>
                    {contact_us_form_labels?.button ? contact_us_form_labels?.button : t('contact_contact_us.submit_btn')}
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-md-12 mappadns">
              <iframe
                title="myFrame"
                loading="lazy"
                style={{
                  border: "1px #ccc solid",
                  bordeRadius: "3px",

                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9408966712035!2d90.37438092917422!3d23.755808526510663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8acb1b88a2d%3A0x498d307161c801f7!2sConcord%20Pharmaceuticals%20Limited!5e0!3m2!1sen!2sbd!4v1633578534075!5m2!1sen!2sbd"
                width="100%"
                height="500"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Contact_contactus;
