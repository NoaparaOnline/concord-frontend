import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../../../Utils/functions";

const Footer = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const contact_us_footer = filterComponentData(component, "contact_us_footer", lang)
  const {t}=useTranslation('common')
  return (

    <>
      <div className="backg">


        <div className="container">

          <footer className="text-center text-lg-start text-white">
            <div className="container p-1">
              <div className="row mt-4">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 first1">
                  <h5 className="text-capitalize fhead"> {t('footer.quick_links')}</h5>

                  <ul className="list-unstyled mb-0" style={{textDecoration:'none'}}>
                  <li>
              
              <Link to="/home" className="linkFoot">
                {t('footer.home_text')}
              
              </Link>
            
          </li>
          <li>
          
              <Link to='/about' className="linkFoot">
              {t('footer.about_us_text')}
              
              </Link>
            
          </li>
          <li>
          
              <Link to='/facilities' className="linkFoot">
              {t('footer.facility_text')}
               
              </Link>
            
          </li>
          <li>
          {/* Telemedicine Link */}
              <a target="_blank" rel="noreferrer" href='https://mdxdmfr.com' className="linkFoot">
              {t('footer.tele_med_text')}
              
              </a>
            
          </li>
          <li>
          
              <Link to='/media' className="linkFoot">
              {t('footer.media_text')}
              
              </Link>
            
          </li>
          <li>
          
              <Link to="/contact" className="linkFoot">
              {t('footer.contact_us_text')}
               
              </Link>
            
          </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0 second2">
                  <h5 className="text-capitalize fhead">
                  {t('footer.our_prod_text')}
                   </h5>

                  <ul className="list-unstyled">
                  <li>
              
              <Link to='/by-trade-name' className="linkFoot">
              {t('footer.our_trade_name_text')}
                
              </Link>
            
          </li>
          <li>
          
              <Link to='/by-generic-name' className="linkFoot">
              {t('footer.by_generic_name_text')}
              
              </Link>
            
          </li>
          <li>
          
              <Link to='/by-therapeutic-class' className="linkFoot">
              {t('footer.by_therap_text')}
               
              </Link>
            
          </li>
          <li>
          
              <Link to='/first-time-launching' className="linkFoot">
              {t('footer.first_class_laun')}
               
              </Link>
            
          </li>
           <ul className="list-unstyled list-inline mt-3">
          <li className="list-inline-item">
        <a href="https://www.facebook.com/concordbd" target="_blank" rel="noreferrer"  className="sbtn btn-large mx-1 text-white linkFoot" title="Facebook">
          <i className="fa fa-facebook-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.linkedin.com/company/concord-pharmaceauticals-ltd" target="_blank" rel="noreferrer" className="sbtn btn-large mx-1 text-white linkFoot" title="Linkedin">
          <i className="fa fa-linkedin-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://twitter.com/concord_ltd" target="_blank" className="sbtn btn-large mx-1 text-white linkFoot" title="Twitter">
          <i className="fa fa-twitter-square fa-2x" ></i>
        </a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.youtube.com/channel/UCMmBlHrIraXle71-M1g_m6w" target="_blank" rel="noreferrer" className="sbtn btn-large mx-1 text-white linkFoot" title="Youtube">
          <i className="fa fa-youtube-square fa-2x" ></i>
        </a>
      </li>
      </ul> 

     
                  </ul>
                </div>

                 <div className="col-lg-3 col-md-6  mb-4 mb-md-0 second2 ">
                  <h5 className="text-capitalize fhead"> 
                  {t('footer.subsc_news_text')}
                 </h5>


                  <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control form-control-custom" placeholder= {t('footer.your_email')}/>
                                            <button type="submit">
                                                <span className="btn-style-custom" style={{fontSize:'12px',fontWeight:'500'}}> {t('footer.subs_text')}</span>
                                            </button>
                                        </div>
                                    </div>

            <h5 className="fhead mt-2"> {t('footer.downl_apps_text')} </h5>
            <figure style={{ display: "flex", margin: "12px" }}>
             
            <Link to='#' >
             
              <img
              alt="ios"
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/ios.png"
                }
                className="imghightwidth"
              />
              </Link>



              <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.concordmpo' >
              <img
              alt="android"
                loading="lazy"
                src={
                  "https://www.ri-demo.co/concord/final/wp-content/uploads/2019/06/android.png"
                }
                className="imghightwidth"
              />
              </a>
            </figure>


                </div>

                <div className="col-lg-3 col-md-12  mb-4 mb-md-0 ">
                  <h5 className="text-capitalize fhead"> {t('footer.get_in_touch_text')}</h5>

                  <ul className="list-unstyled">
                  <li className="">
              <span className="Typograpy_lastblock_Span"> {t('footer.call_text')+":"}</span><a href={contact_us_footer?.contact ? `tel:${contact_us_footer?.contact}` : "tel:++01991146559"}    className="text-white"
                  style={{textDecoration:'none'}}><span> {contact_us_footer?.contact ? contact_us_footer?.contact: t('footer.phone_number_text')}</span></a> 
              </li>
              <li className="">
             
              <span className="Typograpy_lastblock_Span">  {t('footer.email_text')} </span> 
              <a
                  href={contact_us_footer?.email ? `mailto:${contact_us_footer?.email}` : "mailto:info@concordpharma-bd.com"}
                  className="text-white"
                  style={{textDecoration:'none'}}
                >
                  {/* {t('footer.home_text')} */}
                  {contact_us_footer?.email ? contact_us_footer?.email:  "info@concordpharma-bd.com"}
                </a>
              </li>
              <li className="mb-2">
              <span className="Typograpy_lastblock_Span"> {t('footer.visitor_count_text')} </span>
              <span className="ms-2"><Link to='https://www.freecounterstat.com" title="website hits counter'>
              <img src="https://counter10.stat.ovh/private/freecounterstat.php?c=wg2el4krc3mzdqf834cy12ftxqsuyh4l" border="0" title="website hits counter" alt="website hits counter"/>
              </Link></span>
              </li>
              
               <li >
              
                  <a href='tel:01991146559' className="" style={{color: '#fff' ,textDecoration: 'none'}}>
                  <i className="fa fa-phone"></i>
                      <span className="ms-2"> {t('footer.enquiry_text')}</span>
                  </a>
                
              </li>
              <li >
            
                  <Link to='/our-distribution-network' className="" style={{color: '#fff' ,textDecoration: 'none'}}>
                  <i className="fa fa-globe"></i>
                  <span className="ms-2"> {t('footer.distribution_center_text')}</span>
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
          {t('footer.copyright_text')}
          
          </p>
          <p className="FooterlastContainercolor m-1">
          {t('footer.dev_by_text')}
        

            <Link to="#" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>
              {t('footer.ripple_intra_text')}
                </span>
            </Link>

          </p>
        </div>
      </div>
    </>




  );
};

export default Footer;
