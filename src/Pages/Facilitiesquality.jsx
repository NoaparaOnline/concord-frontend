import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-QC-ban.jpg";
import facrd from "../Statics/assets/fac-QC.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Facilities_quality = () => {
  const {t}=useTranslation('common')
  const LinksBan = [
    {
      subLinkName: t('facilities_quality.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('facilities_quality.facilities_text'),
      subDash: "/",
      subLink: "/facilities",
    },
  ];

  return (
    <>
    <Helmet>
        <title>{t('facilities_quality.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('facilities_quality.quality_control_text')}
        subHeading={t('facilities_quality.quality_control_text').toUpperCase()}
        LinksBan={LinksBan}
        
        backposit={'100% 54%'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <div className="allborder">
            <img alt="quality control" src={facrd} className="zoom" width="100%" height="100%" />
            </div>
          </div>

          <div className="col-sm-12 col-lg-7">
            <div
              style={{ padding: "10px", lineHeight: "1.7em", fontSize: "17px" }}
            >
            {t('facilities_quality.desc_text_1')}
              <br />
              
              {t('facilities_quality.desc_text_2')}
            </div>
          </div>
        </div>

        <div className="productionbx">
          <h5 style={{ color: "#0066b3", fontSize: "24px" }}>
          {t('facilities_quality.desc_text_3')}
          </h5>
          <ul>
            <li className="mt-3">
            {t('facilities_quality.desc_text_4')}
            </li>
            <li className="mt-3">
            {t('facilities_quality.desc_text_5')}
            </li>
            <li className="mt-3">
            {t('facilities_quality.desc_text_6')}
            </li>
            <li className="mt-3">
            {t('facilities_quality.desc_text_7')}
            </li>
            <li className="mt-3">
            {t('facilities_quality.desc_text_8')}
            </li>
          </ul>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Facilities_quality;
