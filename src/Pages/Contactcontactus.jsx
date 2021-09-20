import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/contactusbanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const Contact_contactus = () => {
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

  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Contact Us"}
        subHeading={`CONTACT US`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7 ">
            <div className="form-div">
              {/* Bootstrap Form */}
              <form style={{minHeight:'450px'}}>
                <div className="form-group">
                  <select className="form-control form-select" id="exampleFormControlSelect1">
                    <option >General Inquiry</option>
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
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="Contact Number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id=""
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="btn btn-primary rounded-pill px-5 colr" style={{fontWeight:'600',backgroundColor:'#0066b3'}}>
                  <span>SUBMIT</span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="serviceBox1">
              <div className="service-content1">
                <h3>For, International Business</h3>
                <span style={{color:'#565656'}}>Faysal Md. Shaheen Manager &amp; Head, Int’l Business Department</span>
              </div>

              <div className="service-icon1">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Phone</h3>
               <span style={{color:'#565656'}}>88-02-9146311-13</span> 
              </div>
              <div className="service-icon1">
                <i className="fa fa-phone"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1" 
              >
                <h3>Fax</h3>
                <span style={{color:'#565656'}}>+88-02-9146483</span>
              </div>
              <div className="service-icon1">
                <i className="fa fa-fax" aria-hidden="true"></i>
              </div>
            </div>

            <div className="serviceBox1">
              <div className="service-content1">
                <h3>Email</h3>
                <a  className="secnav" href="mailto:info@concordpharma-bd.com"
                 style={{color:'#565656',textDecoration:'none'}}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.935862213!2d88.10073676858228!3d23.495632366328973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sin!4v1624536563451!5m2!1sen!2sin"
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
