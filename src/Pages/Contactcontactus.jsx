import React, { useState } from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/contactusbanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { useDispatch } from "react-redux";
import { SendGridMailApi } from "../Store/Actions/directorActions";
import { toast } from "react-toastify";
import {validateEmail} from '../Utils/functions'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Contact_contactus = () => {
  const dispatch = useDispatch();
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: "Contact",
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
      if(validateEmail(data.email)){
        const RecipentEmail ='info@concordpharma-bd.com'
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
        if(res?.response_code === 200){
          setSuccess(true);
          toast.info("Email Send Successfully")
        }
        else{
            setSuccess(false)
          toast.error("Email Not Send")
        }

      }
      else{
        toast.error("Please Enter Valid Email")
      }
     
    
  };

  return (
    <>
    <Helmet>
        <title>Contactus - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Contact Us"}
        subHeading={`CONTACT US`}
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
          <div className="col-lg-6">
            <div className="serviceBox1">
              <div className="service-content1">
                <h3>For Corporate Business</h3>
                <span style={{ color: "#565656" }}>
               Head-Office : Sima Blossom (11th Floor), House#3(New) 390(Old) Road#16(New) #27(old), Dhanmondi,Dhaka-1206
                </span>
              </div>

              <div className="service-icon1">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Phone</h3>
                <span style={{ color: "#565656" }}>+01991146559</span>
              </div>
              <div className="service-icon1">
                <i className="fa fa-phone"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Fax</h3>
                <span style={{ color: "#565656" }}>01991146559</span>
              </div>
              <div className="service-icon1">
                <i className="fa fa-fax" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Email</h3>
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
          </div>
          <div className="col-lg-6">
            <div className="serviceBox1">
              <div className="service-content1">
                <h3>For International Business</h3>
                <span style={{ color: "#565656" }}>
                  Faysal Md. Shaheen Manager &amp; Head, Int’l Business
                  Department
                </span>
              </div>

              <div className="service-icon1">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Phone</h3>
                <span style={{ color: "#565656" }}><br/>01991145006 , 880248120339<b></b> </span>
              </div>
              <div className="service-icon1">
                <i className="fa fa-phone"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Fax</h3>
                <span style={{ color: "#565656" }}>+88-02-9146483</span>
              </div>
              <div className="service-icon1">
                <i className="fa fa-fax" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Email</h3>
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
          </div>
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
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Delivery Service</option>
                    <option>Complaints & Suggestions</option>
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
                    placeholder="Name"
                    required="required"
                    name="Name"
                    autocomplete="off"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "This field is required field",
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
                    placeholder="Email"
                    autocomplete="off"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required field",
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
                    placeholder="Contact Number"
                    autocomplete="off"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "This field is required field",
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
                    placeholder="Subject"
                    autocomplete="off"
                    {...register("subject", {
                      required: {
                        value: true,
                        message: "This field is required field",
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
                    placeholder="Message"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "This field is required field",
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
                    <label style={{color:'#0066b3'}}>Your response has been sent successfully</label> : ""
                  } 
                 </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 colr"
                    style={{ fontWeight: "600", backgroundColor: "#0066b3" }}
                  >
                  <span>SUBMIT</span>
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
