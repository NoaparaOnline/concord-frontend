import React from "react";
import Slider from "react-slick";
import whitebglogo from "../../../Statics/assets/concordlogo.png";
import carousel1 from "../../../Statics/assets/carousel1.jpg";
import carousel2 from "../../../Statics/assets/carousel2.jpg";
import carousel4 from "../../../Statics/assets/carousel4.jpg";
import { Link } from 'react-router-dom'

import "./Carousel.css";
const Slideshow = () => {
  const data = [
    {
      id:0,
      title: "Pharmaceuticals Ltd.",
      img: carousel2,
      logo: whitebglogo,
      text: "Better Medicine Better Life",
      btn: "GET STARTED NOW",
      btnlink: "/about",
    },
    {
      id:1,
      title: "10 INTERNATIONAL DESTINATIONS",
      img: carousel4,
      logo: "",
      text: "Exporting Quality",
      btn: "Know More",
      btnlink: "/contact",
    },
    {
      id:2,
      title: "NATIONWIDE DISTRIBUTION NETWORK",
      img: carousel1,
      logo: "",
      text: "Delivering all over the country",
      btn: "Know More",
      btnlink: "/globalOperations",
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
    fade: true,
    cssEase: 'ease-in-out',
    loop: true,
  };

  return (
    <div >
      <Slider {...autoInProperties}>
        {data.map((each, index) => (
          <div key={index} style={{ width: "100%", height: "100%" }}>
            <div className="slider-wrapper">
              <div className="slider zoom-in-zoom-out">
                <img
                  alt=""
                  className="img-fluid"
                  style={{ objectFit: "cover", height: '600px', width: "100%" }}
                  src={each.img}
                />
              </div>
              <div className="container cen">

                <div className="ball text-left justify-content-center slider-overlay">
                  <div className="caption mb-5 ">

                    <div className="d-flex align-baseline typography_Heading">
                      <div>
                        <div className="">
                          {index === 0 ?
                            <img alt="" className={`d-inline img-inline-res`}
                              src={each.logo} /> : null
                          }

                          <span className="mb-2 d-inline"
                          >{each.title}</span>
                          <div style={{ clear: 'left' }} />
                        </div>
                      </div>

                    </div>

                    <p className={index === 0 ? `typograpy_title0` : `typograpy_title`}> {each.text}</p>
                  </div>
                  <Link to={each.btnlink} className="btn btn-custom-animation rounded-pill me-auto pt-2 pb-2 " style={{ color: '#fff', backgroundColor: '#0066b3' }} >
                    <span className="btn_text_typography">{each.btn}</span>
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
