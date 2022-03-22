import React from "react";
import Slider from "react-slick";
import whitebglogo from "../../../Statics/assets/concordlogo.png";
import carousel1 from "../../../Statics/assets/carousel1.jpg";
import carousel2 from "../../../Statics/assets/carousel2.jpg";
import carousel4 from "../../../Statics/assets/carousel4.jpg";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import "./Carousel.css";
const Slideshow = () => {
  const {t} = useTranslation("common")
  const data = [
    {
      id:0,
      title: t('slide_show.pharma_text'),
      img: carousel2,
      logo: whitebglogo,
      text: t('slide_show.better_medicine_text'),
      btn: t('slide_show.get_started_btn'),
      btnlink: "/about",
    },
    {
      id:1,
      title: t('slide_show.10_int_text'),
      img: carousel4,
      logo: "",
      text: t('slide_show.exporting_qlty_text'),
      btn: t('slide_show.know_btn'),
      btnlink: "/contact",
    },
    {
      id:2,
      title: t('slide_show.nationwide_text'),
      img: carousel1,
      logo: "",
      text: t('slide_show.delivering_all_text'),
      btn: t('slide_show.know_btn'),
      btnlink: "/global-operation",
    },

  ];

  const autoInProperties = {
    indicators: true,
    arrows: false,
    durations: 1000,
    scale: 5.6,
    transitionDuration: 1000,
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
                  alt="slider"
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
                            <img alt="logo" className={`d-inline img-inline-res`}
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
