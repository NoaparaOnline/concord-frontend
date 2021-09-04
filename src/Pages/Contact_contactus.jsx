import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../assets/contactusbanner.jpg";
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
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-7 ">
            <div className="form-div">
              {/* Bootstrap Form */}
              <form style={{minHeight:'450px'}}>
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1">
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
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id=""
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    id=""
                    placeholder="Contact Number"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Subject"
                  />
                </div>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    id=""
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button className="btn btn-primary rounded-pill px-5 colr" style={{fontWeight:'600',backgroundColor:'#0066b3'}}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div class="serviceBox1">
              <div class="service-content1">
                <h3>For, International Business</h3>
                Faysal Md. Shaheen Manager &amp; Head, Int’l Business Department
              </div>

              <div class="service-icon1">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
            </div>

            <div class="serviceBox1">
              <div class="service-content1">
                <h3>Phone</h3>
                88-02-9146311-13
              </div>
              <div class="service-icon1">
                <i class="fa fa-phone"></i>
              </div>
            </div>

            <div class="serviceBox1">
              <div class="service-content1">
                <h3>Fax</h3>
                +88-02-9146483
              </div>
              <div class="service-icon1">
                <i class="fa fa-fax" aria-hidden="true"></i>
              </div>
            </div>

            <div class="serviceBox1">
              <div class="service-content1">
                <h3>Email</h3>
                <a href="mailto:info@concordpharma-bd.com">
                  info@concordpharma-bd.com
                </a>
              </div>
              <div class="service-icon1">
                <i class="fa fa-envelope-open"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="col-md-12 mappadns">
              <iframe
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
