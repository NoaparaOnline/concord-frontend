import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-RD-ban.jpg";
import facrd from "../Statics/assets/fac-RD.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Facilities_researchdevrsttime = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const facilities_research_and_developmen = filterComponentData(component, "facilities_research_and_development", lang)
  // const facilities_production = filterComponentData(component, "facilities_production", lang)
  // const facilities_quality_control = filterComponentData(component, "facilities_quality_control", lang)

  // const facilities_warehouse = filterComponentData(component, "facilities_warehouse", lang)
  // const nearest_delivery_center_user = filterComponentData(component, "nearest_delivery_center_user", lang)



  const { t } = useTranslation('common')
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
              <img alt={t('facilities_researh_dev.research_dev_text')} src={facilities_research_and_developmen?.image ? facilities_research_and_developmen?.image : facrd} className="zoom" width="100%" height="100%" />
            </div>
          </div>

          <div
            className="col-sm-12 col-lg-7"
          >
            <div style={{ padding: '10px', lineHeight: '1.7em', fontSize: '17px' }}>
              {facilities_research_and_developmen?.desc ? facilities_research_and_developmen?.desc : t('facilities_researh_dev.desc')}
            </div>
          </div>
        </div>
      </div>
      <CompanyLogos />
    </>
  );
};

export default Facilities_researchdevrsttime;
