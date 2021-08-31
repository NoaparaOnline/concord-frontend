import React from "react";
import first from "../../assets/fac-QC.jpg";
import Slider from "react-slick";
import second from "../../assets/fac-RD.jpg";
import third from "../../assets/warehouse-1.jpg";
import fourth from "../../assets/fac-production.jpg";
import whitebglogo from "../../assets/concordlogo.png";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import { Link } from 'react-router-dom'

import "./Carousel.css";
const Slideshow = () => {
  const data = [
    {
      title: "Pharmaceuticals Ltd.",
      img: carousel1,
      logo: whitebglogo,
      text: "Better Medicine Better Life",
      btn: "GET STARTED NOW",
    },
    {
      title: "10 INTERNATIONAL DESTINATIONS",
      img: carousel2,
      logo: "",
      text: "Exporting Quality",
      btn: "Know More",
    },
    {
      title: "NATIONWIDE DISTRIBUTION NETWORK",
      img: carousel4,
      logo: "",
      text: "Delivering all over the country",
      btn: "Know More",
    },
   
  ];

  const autoInProperties = {
    indicators: true,
    arrows: false,
    durations: 1000,
    scale: 5.6,
    transitionDuration: 2000,
    infinite: true,
    autoplay: true,
    dots: true,
    fade:true,
    cssEase:'ease-in-out',
    loop: true,
  };
  const zoomInProperties = {
    scale: 5.6,
  };
  return (
    <div >
      <Slider {...autoInProperties}>
        {data.map((each, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            <div className="slider-wrapper">
              <div className="slider zoom-in-zoom-out">
                <img
                  className="img-fluid"
                  style={{ objectFit: "cover", height: '600px', width: "100%" }}
                  src={each.img}
                />
              </div>
              <div className="container cen">
               
                <div className="ball text-left justify-content-center slider-overlay">
                  <div className="caption mb-5 ">
                   
                    <div className="d-flex align-baseline typography_Heading">
                  <div row>
                  <div col-lg-12 col-xs-6 col-md-6 col-sm-6>
                   
                      <img className="spacing img-fluid " src={each.logo} />
                      <span className="mb-2">{each.title}</span>
                  </div>
                </div>
                   
                    </div>

                    <p className={index === 0 ? `typograpy_title0` : `typograpy_title`}> {each.text}</p>
                  </div>
                  <Link to='/' className="btn btn-primary rounded-pill me-auto pt-3 pb-3  typograpy_btn " >
                    <span btn_text_typography>{each.btn}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
