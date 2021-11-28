import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (

    <>

      <div className="backg">


        <div className="container">

          <footer className="text-center text-lg-start text-white">
            <div className="container p-1">
              <div className="row mt-4">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 first1">
                  <h5 className="text-capitalize fhead">Quick Links</h5>

                  <ul className="list-unstyled mb-0" style={{textDecoration:'none'}}>
                  <li>
              
              <Link to="/home" className="linkFoot">
                Home
              </Link>
            
          </li>
          <li>
          
              <Link to='/about' className="linkFoot">
                About Us
              </Link>
            
          </li>
          <li>
          
              <Link to='/facilities' className="linkFoot">
                Our Facility
              </Link>
            
          </li>
          <li>
          {/* Telemedicine Link */}
              <Link to='#' className="linkFoot">
                Tele Medicine
              </Link>
            
          </li>
          <li>
          
              <Link to='/media' className="linkFoot">
                Media
              </Link>
            
          </li>
          <li>
          
              <Link to="/contact" className="linkFoot">
                Contact Us
              </Link>
            
          </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 second2">
                  <h5 className="text-capitalize fhead">Our Products</h5>

                  <ul className="list-unstyled">
                  <li>
              
              <Link to='/products_bytrade' className="linkFoot">
                By Trade Name
              </Link>
            
          </li>
          <li>
          
              <Link to='/products_bygeneric' className="linkFoot">
                By Generic Name
              </Link>
            
          </li>
          <li>
          
              <Link to='/products_therapeutic' className="linkFoot">
                By Therapeutic Class
              </Link>
            
          </li>
          <li>
          
              <Link to='/products_firsttime' className="linkFoot">
                First Class Launching
              </Link>
            
          </li>
           <ul className="list-unstyled list-inline mt-3">
          <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white linkFoot" title="Facebook">
          <i className="fa fa-facebook-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white linkFoot" title="Linkedin">
          <i className="fa fa-linkedin-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white linkFoot" title="Twitter">
          <i className="fa fa-twitter-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="#!" className="sbtn btn-large mx-1 text-white linkFoot" title="Youtube">
          <i className="fa fa-youtube-square fa-2x" ></i>
        </a>
      </li>
      </ul> 

        {/* <div className="widget-area">
              <div className="socialiconm">
                <a className="soicon" href="https://www.facebook.com/concordbd/" title="Facebook" target="_blank" rel="noopener"><i className="fa fa-facebook"></i></a>
                <a className="soicon" href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
                <a className="soicon" href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
                <a className="soicon" href="#" title="Youtube"><i className="fa fa-youtube"></i></a>
            </div>
        </div> */}


                  </ul>
                </div>

                 <div className="col-lg-3 col-md-6  mb-4 mb-md-0 second2 ">
                  <h5 className="text-capitalize fhead">Subscribe for Newsletter</h5>


                  <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control form-control-custom" placeholder="Your Email..."/>
                                            <button type="submit">
                                                <span className="btn-style-custom" style={{fontSize:'12px',fontWeight:'500'}}>SUBSCRIBE</span>
                                            </button>
                                        </div>
                                    </div>

            <h5 className="fhead mt-2">Download Apps</h5>
            <figure style={{ display: "flex", margin: "12px" }}>
             
            <Link to='#' >
             
              <img
              alt=""
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/ios.png"
                }
                className="imghightwidth"
              />
              </Link>



              <Link to='#' >
              <img
              alt=""
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/android.png"
                }
                className="imghightwidth"
              />
              </Link>
            </figure>


                </div>

                <div className="col-lg-3 col-md-12  mb-4 mb-md-0 ">
                  <h5 className="text-capitalize fhead">Get In Touch</h5>

                  <ul className="list-unstyled">
                  <li className="">
              <span className="Typograpy_lastblock_Span">Call :</span> <span>01991146559</span>
              </li>
              <li className="">
              <span className="Typograpy_lastblock_Span">Email:</span> info@concordpharma-bd.com
              </li>
              <li className="mb-2">
              <span className="Typograpy_lastblock_Span">Visitor Count</span>
              <span className="ms-2"><Link to='https://www.freecounterstat.com" title="website hits counter'>
              <img src="https://counter10.stat.ovh/private/freecounterstat.php?c=wg2el4krc3mzdqf834cy12ftxqsuyh4l" border="0" title="website hits counter" alt="website hits counter"/>
              </Link></span>
              </li>
              
               <li >
              
                  <Link to='/' className="" style={{color: '#fff' ,textDecoration: 'none'}}>
                  <i className="fa fa-phone"></i>
                      <span className="ms-2">Enquiry</span>
                  </Link>
                
              </li>
              <li >
            
                  <Link to='/' className="" style={{color: '#fff' ,textDecoration: 'none'}}>
                  <i className="fa fa-globe"></i>
                  <span className="ms-2">Distribution Center</span>
                  </Link>
                
              </li>
                  </ul>
                </div>
              </div>
            </div>

          </footer>

          <div>

            <div>



            </div>


          </div>
        </div>
      </div>



      <div className="FooterlastContainer ">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className="FooterlastContainercolor m-1">
            © Copyright 2021. All Right reserved.
          </p>
          <p className="FooterlastContainercolor m-1">
            Designed and Developed by{" "}

            <Link to="#" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>Ripple Intra</span>
            </Link>

          </p>
        </div>
      </div>
    </>




  );
};

export default Footer;
