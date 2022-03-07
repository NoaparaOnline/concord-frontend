import React from "react";
import "./Affiliates.css";
import Slider from "react-slick";
import ewvila from "../../../Statics/assets/Sliderlogos/1.png";
import dmfr from "../../../Statics/assets/Sliderlogos/2.png";
import toticell from "../../../Statics/assets/Sliderlogos/3.png";
import { useTranslation } from "react-i18next";
const Affiliates = ({ afliates }) => {
  const imagesList = afliates?.flatMap(({ image }) => image == "" ? [] : image);
  const { t } = useTranslation("common");
  const properties = {
    duration: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        {
          afliates?.length < 1 ? <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-xl-flex justify-content-center">
              <button
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 10,
                  width: 130,
                }}
                className="navactive active rounded-pill mx-2 px-2 "
              >
                <span>{t('affiliates.hospitals_text').toUpperCase()}</span>
              </button>
              <button
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 10,
                  width: 130,
                }}
                className="btncolrhov rounded-pill mx-2 px-2"
              >
                <span>{t('affiliates.retailers_text').toUpperCase()}</span>
              </button>
              <button
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 10,
                  width: 130,
                }}
                className="btncolrhov rounded-pill mx-2 px-2"
              >
                <span>{t('affiliates.clinics_text').toUpperCase()}</span>
              </button>
              <button
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 10,
                  width: 130,
                }}
                className="btncolrhov rounded-pill mx-2 px-2"
              >
                <span>{t('affiliates.pharmacies_text').toUpperCase()}</span>
              </button>
            </div>
          </div> : <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-xl-flex justify-content-center">
              {
                afliates?.map((item) => (
                  <button
                    style={{
                      textDecoration: "none",
                      fontWeight: 500,
                      marginTop: 10,
                      width: 130,
                    }}
                    className="navactive  rounded-pill mx-2 px-2 "
                  >
                    <span>{item?.name?.toUpperCase()}</span>
                  </button>
                ))
              }




            </div>
          </div>
        }
        {
          afliates?.length < 1 ? <div className="row">
            <div className="col-md-12 affliates_spacing">
              {/* <div className="carddivslider"><img className="image-fluid" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div> */}

              <div>
                <Slider
                  {...properties}
                  className={"slick-slide-affiliates"}
                  id="id_tog"
                >
                  <div className="carddivslider">
                    <img
                      alt="affiliates"
                      className="imag_style mx-auto"
                      src={ewvila}
                    />
                  </div>
                  <div className="carddivslider">
                    <img
                      alt="affiliates"
                      className="imag_style mx-auto"
                      src={dmfr}
                    />
                  </div>
                  <div className="carddivslider">
                    <img
                      alt="affiliates"
                      className="imag_style mx-auto"
                      src={toticell}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div> : <div className="row">
            <div className="col-md-12 affliates_spacing">
              {/* <div className="carddivslider"><img className="image-fluid" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div> */}

              <div>
                <Slider
                  {...properties}
                  className={"slick-slide-affiliates"}
                  id="id_tog"
                >
                  {
                    imagesList?.map((item) => (
                      <div className="carddivslider">
                        <img
                          alt="affiliates"
                          className="imag_style mx-auto"
                          src={item}
                        />
                      </div>
                    ))
                  }



                </Slider>
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default Affiliates;
