import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-RD-ban.jpg";
import facrd from "../Statics/assets/fac-RD.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Facilities_researchdevrsttime = () => {
 const {t}=useTranslation('common')
  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: t('facilities_researh_dev.home_text'),
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: t('facilities_researh_dev.facilities_text'),
      subDash: '/',
      subLink: '/facilities'
    },
  ];
  return (
    <>
    <Helmet>
        <title>{t('facilities_researh_dev.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('facilities_researh_dev.research_dev_text')}
        subHeading={t('facilities_researh_dev.research_dev_text').toUpperCase()}
        LinksBan={LinksBan}
        
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">

          <div className="col-sm-12 col-lg-5 " >
            <div className="allborder">
            <img alt={t('facilities_researh_dev.research_dev_text')} src={facrd} className="zoom" width="100%" height="100%" />
            </div>
          </div>

          <div
            className="col-sm-12 col-lg-7"
          >
            <div style={{ padding: '10px', lineHeight: '1.7em', fontSize: '17px' }}>
            {t('facilities_researh_dev.desc')}
            </div>
          </div>
        </div>
      </div>
      <CompanyLogos />
    </>
  );
};

export default Facilities_researchdevrsttime;
