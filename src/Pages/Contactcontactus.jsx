import React, { useState } from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/contactusbanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { useDispatch } from "react-redux";
import { SendGridMailApi } from "../Store/Actions/directorActions";
import { toast } from "react-toastify";
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
  const [state, setState] = React.useState({
    DropSel: "",
    Name: "",
    Email: "",
    Numbers: "",
    Subject: "",
    Message: "",
  });
  console.log("state", state);
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    const RecipentEmail ='info@concordpharma-bd.com'
    // const RecipentEmail ='shahzaibqadir7@gmail.com'
    const apiData = {
      recipients: [RecipentEmail],
      subject: state.DropSel,
      body: `<p>Email enquiry from Contact-Us form Concord Pharma</p>
      <strong>Name</strong> : ${state.Name}
                    <br/>
                    <strong>Email</strong> : ${state.Email}
                    <br/>
                    <strong>Number</strong> : ${state.Numbers}
                    <br/>
                    <strong>Subject</strong> : ${state.Subject}
                    <br/>
                    <strong>Message</strong> : <span className="text-justify">${state.Message}</span>
                    <br/>
                    `,
    };
    e.preventDefault();
    const res = dispatch(SendGridMailApi(apiData));
    if(res){
      setSuccess(true);
      toast.info("Email Send Successfully")
      setState({
        DropSel: "",
        Name: "",
        Email: "",
        Numbers: "",
        Subject: "",
        Message: "",
      })
    }
    else{
      toast.error("Email Not Send")
    }
  };

  return (
    <div>
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
          <div className="col-lg-7 ">
            <div className="form-div">
              <form style={{ minHeight: "450px" }}>
                <div className="form-group">
                  <select
                    className="form-control form-select"
                    id="exampleFormControlSelect1"
                    onChange={handleChange}
                    name="DropSel"
                    value={state.DropSel}
                  >
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Delivery Service</option>
                    <option>Complaints & Suggestions</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="name"
                    className="form-control"
                    id=""
                    placeholder="Name"
                    name="Name"
                    onChange={handleChange}
                    value={state.Name}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    name="Email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={state.Email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="numbers"
                    className="form-control"
                    id=""
                    name="Numbers"
                    placeholder="Contact Number"
                    onChange={handleChange}
                    value={state.Numbers}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="Subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    value={state.Subject}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id=""
                    rows="3"
                    name="Message"
                    placeholder="Message"
                    onChange={handleChange}
                    value={state.Message}
                  ></textarea>
                </div>
                <div className="form-group">
                 {success ? 
                 <label style={{color:'#0066b3'}}>Your response has been sent successfully</label> : ""
                } 
                 </div>
                <button
                  className="btn btn-primary rounded-pill px-5 colr"
                  style={{ fontWeight: "600", backgroundColor: "#0066b3" }}
                  onClick={handleSubmit}
                >
                  <span>SUBMIT</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="serviceBox1">
              <div className="service-content1">
                <h3>For, International Business</h3>
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
                <span style={{ color: "#565656" }}>88-02-9146311-13</span>
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
        <div className="row">
          <div className="col-lg-12">
            <div className="col-md-12 mappadns">
              <iframe
                title="myFrame"
                loading="lazy"
                style={{
                  border: "1px #ccc solid",
                  marginTop: "35px",
                  bordeRadius: "3px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.9408966712035!2d90.37438092917422!3d23.755808526510663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8acb1b88a2d%3A0x498d307161c801f7!2sConcord%20Pharmaceuticals%20Limited!5e0!3m2!1sen!2sbd!4v1633578534075!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Contact_contactus;
