import React from "react";
import { Card, Button, Figure } from "react-bootstrap";
import "./Footer.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 backg">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mb-md-0 mb-3 centcol">
            <h3 className="fhead  centcolul">Quick Links</h3>
            <ul className="list-unstyled centcolul">
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    Home
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    About Us
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    Our Facility
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    Tele Medicine
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    Media
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    Contact Us
                  </Link>
                </Router>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 centcol">
            <h3 className="fhead centcolul fmar">Our Products</h3>
            <ul className="list-unstyled centcolul">
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    By Trade Name
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    By Generic Name
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    By Therapeutic Class
                  </Link>
                </Router>
              </li>
              <li>
                <Router>
                  <Link to="/" className="linkFoot">
                    First Class Launching
                  </Link>
                </Router>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />
          <div className="col-md-3 mb-md-0 mb-3 centcol fsubs ">
            <h5 className="fhead ">Subscribe for Newsletter</h5>

     <div className="input-group mb-3" >
  <input style={{height:'28px' }} type="text" className="form-control " placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append ">
    <span style={{height:'28px' }} className="input-group-text me-5" id="basic-addon2">@</span>
  </div>
</div>

            <h5 className="fhead">Download Apps</h5>
            <figure style={{ display: "flex", margin: "12px" }}>
              <img
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/ios.png"
                }
                className="imghightwidth"
              />
              <img
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/android.png"
                }
                className="imghightwidth"
              />
            </figure>
          </div>
          <div className="col-md-3 mb-md-0 mb-3 centcol">
            <h5 className="fhead fmarr">Get In Touch</h5>
            <ul className="list-unstyled centcolul">
              <li className="linkFoot centcolul">
              Call: +8801991145006
              </li>
              <li className="linkFoot">
              Email: info@concordpharma-bd.com
              </li>
              <li className="linkFoot">
              Visitor Count
              </li>
              {/* <img 
              border="0" 
              src={"https://counter5.freecounterstat.com/private/counter.php?c=a73kmb8gymkgwsj35d9kmag1p9a7dekp&amp;init=1629806900785&amp;init_freecounterstat=0&amp;library=library_counters&amp;coef=1&amp;type=150&amp;lenght=9&amp;pv=0"}
              alt="Click to see detail of visits and stats for this site"
                title="Click to see detail of visits and stats for this site"
              /> */}
               <li >
               <Router>
                  <Link to="/" className="linkFoot">
                  <i className="fas fa-phone"></i>
                    Enquiry
                  </Link>
                </Router>
              </li>
              <li >
              <Router>
                  <Link to="/" className="linkFoot">
                  <i className="fas fa-globe"></i>
                    Distribution Center
                  </Link>
                </Router>
              </li>
              </ul>
          
          </div>
        </div>
      </div>

      <div className="FooterlastContainer ">
        <div
          className="container "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className="FooterlastContainercolor m-1">
            © Copyright 2021. All Right reserved.
          </p>
          <p className="FooterlastContainercolor m-1">
            Designed and Developed by{" "}
            <Router>
              <Link to="#" style={{ textDecoration: "none" }}>
                <span style={{ color: "#fff" }}>Ripple Intra</span>
              </Link>
            </Router>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
