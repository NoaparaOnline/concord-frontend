import React from "react";

import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import ewvila from '../Statics/assets/Sliderlogos/1.png'
import dmfr from '../Statics/assets/Sliderlogos/2.png'
import toticell from '../Statics/assets/Sliderlogos/3.png'
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Abouthealthassociates = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const health_associates = filterComponentData(component, "health_associates", lang)
  const { t } = useTranslation('common')
  const LinksBan = [
    {
      subLinkName: t('about_health_associates.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('about_health_associates.about_us_text'),
      subDash: "/",
      subLink: "/about",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t('about_health_associates.helmet.title_text')}
        </title>
      </Helmet>
      <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={t('about_health_associates.health_assc_text')}
          subHeading={t('about_health_associates.health_assc_text').toUpperCase()}
          backposit={'100% 25%'}
          backimg={`url(${bannerimg})`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
        />
        {
          health_associates?.length < 1 ? <div className="container my-5 w-100">
            {/* EW Villa Medica */}
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
                {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

                <img
                  class="alignnone size-medium wp-image-24556"
                  src={ewvila}
                  alt="ewvilamedica"
                  width="300"
                  height="180"
                  sizes="(max-width: 240px) 100vw, 240px"
                  style={{ borderRadius: "15px" }}
                />

              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
                <div
                  className="card d-flex justify-content-center"
                  style={{ border: "none" }}
                >
                  <h5
                    className="text-start mb-4"
                    style={{
                      color: "#337ab7",
                      fontWeight: "500",
                      fontSize: "30px",
                    }}
                  >
                    {t('about_health_associates.ewvm_head')}
                  </h5>

                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    <ul>
                      <li><strong> {t('about_health_associates.ewvm_head')}</strong> {t('about_health_associates.desc_1_text')} <strong>{t('about_health_associates.desc_2_text')}</strong> {t('about_health_associates.and_text')}<strong>{t('about_health_associates.europe_text')}</strong>.
                        {t('about_health_associates.desc_3_text')}
                      </li>
                      <li>
                        {t('about_health_associates.desc_4_text')}
                      </li>
                      <li>{t('about_health_associates.desc_5_text')}
                      </li>
                      <li>{t('about_health_associates.desc_6_text')}
                      </li>
                    </ul>

                    <h5
                      className="text-start mb-4"
                      style={{
                        color: "#337ab7",
                        fontWeight: "500",
                        fontSize: "25px",
                      }}
                    >
                      {t('about_health_associates.desc_7_text')}
                    </h5>
                    <p>
                      {t('about_health_associates.desc_8_text')}
                    </p>

                    <p><strong>{t('about_health_associates.address_text') + ":"} </strong>{t('about_health_associates.address1_desc')}</p>
                    <p><strong>{t('about_health_associates.email_text') + ":"} </strong><a href="mailto:info@bd.ew-vm.com">info@bd.ew-vm.com</a></p>
                    <p><strong>{t('about_health_associates.hotline_text') + ":"} </strong><a href="tel:09606213232">{t('about_health_associates.phone_number_1')}</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* DMFR */}
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
                {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

                <img
                  class="alignnone size-medium wp-image-24556"
                  src={dmfr}
                  alt="dmfr"
                  width="300"
                  height="100"
                  sizes="(max-width: 240px) 100vw, 240px"
                  style={{ borderRadius: "15px" }}
                />

              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
                <div
                  className="card d-flex justify-content-center"
                  style={{ border: "none" }}
                >
                  <h5
                    className="text-start mb-4"
                    style={{
                      color: "#337ab7",
                      fontWeight: "500",
                      fontSize: "30px",
                    }}
                  >
                    {t('about_health_associates.dmfr_head')}
                  </h5>

                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_9_text')}

                    <ul className="mt-4">

                      <li> {t('about_health_associates.desc_10_text')}
                      </li>
                      <li>{t('about_health_associates.desc_21_text')}
                      </li>
                      <li>{t('about_health_associates.desc_11_text')}
                      </li>
                      <li>{t('about_health_associates.desc_12_text')}
                      </li>
                      <li>{t('about_health_associates.desc_13_text')}
                      </li>
                      <li>{t('about_health_associates.desc_14_text')}
                      </li>
                      <li>{t('about_health_associates.desc_15_text')}
                      </li>

                    </ul>
                    <p><strong>{t('about_health_associates.address_text') + ":"} </strong>{t('about_health_associates.address2_desc')}</p>
                    <p><strong>{t('about_health_associates.email_text') + ":"} </strong><a href="mailto:info@mdxdmfr.com">info@mdxdmfr.com</a></p>
                    <p><strong>{t('about_health_associates.hotline_text') + ":"} </strong><a href="tel:0960621313233">{t('about_health_associates.phone_number2')}</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOTICELL */}
            <div className="row ">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
                {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

                <img
                  class="alignnone size-medium wp-image-24556"
                  src={toticell}
                  alt="toticell"
                  width="300"
                  height="100"
                  sizes="(max-width: 240px) 100vw, 240px"
                  style={{ borderRadius: "15px" }}
                />

              </div>

              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
                <div
                  className="card d-flex justify-content-center"
                  style={{ border: "none" }}
                >
                  <h5
                    className="text-start mb-4"
                    style={{
                      color: "#337ab7",
                      fontWeight: "500",
                      fontSize: "30px",
                    }}
                  >
                    {t('about_health_associates.toticell_head')}
                  </h5>
                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_16_text')}
                  </div>
                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_17_text')}
                  </div>

                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_18_text')}
                  </div>
                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_19_text')}
                  </div>
                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify ">
                    {t('about_health_associates.desc_20_text')}
                  </div>
                  <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify mt-4">

                    <p><strong>{t('about_health_associates.address_text') + ":"} </strong>{t('about_health_associates.address3_desc')}</p>
                    <p><strong>{t('about_health_associates.email_text') + ":"} </strong><a href="mailto:info@toticell.com">info@toticell.com</a></p>
                    <p><strong>{t('about_health_associates.hotline_text') + ":"} </strong><a href="tel:09606213234">{t('about_health_associates.phone_number3')}</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div> :
            health_associates?.map((item, ind) => (
              <div className="container my-5 w-100">
                {/* EW Villa Medica */}
                <div className="row ">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
                    {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

                    <img
                      class="alignnone size-medium wp-image-24556"
                      src={item?.image}
                      alt="ewvilamedica"
                      width="300"
                      height="180"
                      sizes="(max-width: 240px) 100vw, 240px"
                      style={{ borderRadius: "15px" }}
                    />

                  </div>

                  <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
                    <div
                      className="card d-flex justify-content-center"
                      style={{ border: "none" }}
                    >
                      <h5
                        className="text-start mb-4"
                        style={{
                          color: "#337ab7",
                          fontWeight: "500",
                          fontSize: "30px",
                        }}
                      >
                        {item?.heading}
                      </h5>

                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify " dangerouslySetInnerHTML={{ __html: item?.desc }} />

                    </div>
                  </div>
                </div>



              </div>
            ))

        }


        <CompanyLogos />
      </div>
    </>
  );
};

export default Abouthealthassociates;
