import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/vision-missionBanner.jpg";
import vision1 from "../Statics/assets/vision1.jpg";
import vision2 from "../Statics/assets/vision2.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const About_vision_mission = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const vision_and_mission = filterComponentData(component, "vision_and_mission", lang)
  const { t } = useTranslation('common')
  const visioncards = [
    {
      id: 0,
      name: t('about_vission_mission.vision_text'),
      imageURL: vision1,
      text: t('about_vission_mission.vision_desc')
    },
    {
      id: 1,
      name: t('about_vission_mission.mission_text'),
      imageURL: vision2,
      text: t('about_vission_mission.mission_desc')
    },
  ];

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: t('about_vission_mission.home_text'),
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: t('about_vission_mission.about_us_text'),
      subDash: '/',
      subLink: '/about'
    },

  ];

  return (
    <>
      <Helmet>
        <title>
          {t('about_vission_mission.helmet.title_text')}
        </title>
      </Helmet>
      <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={t('about_vission_mission.vission_mission_text')}
          subHeading={t('about_vission_mission.vission_mission_text').toUpperCase()}
          backposit={'center right'}
          backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
        />

        {/* vision cards */}
        <div className="container my-5">
          <div className="row ">
            {vision_and_mission?.length < 1 ? visioncards.map((ob, index) => (
              <React.Fragment key={ob.id}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                  <div className="card d-flex justify-content-center" style={{ border: 'none' }}>
                    <img alt="vision" src={ob.imageURL} className="img-fluid" />
                    <h5 className="text-center mb-4" style={{ color: "#0066b3", fontWeight: '600', fontSize: '36px', fontFamily: 'Montserrat, sans-serif ' }}>{ob.name}</h5>
                    <p className="text-justify" style={{ color: "#565656", fontWeight: '400', fontSize: '17px' }}>{ob.text}</p>
                  </div>

                </div>
              </React.Fragment>
            )) : vision_and_mission?.map((ob, index) => (
              <React.Fragment key={index}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                  <div className="card d-flex justify-content-center" style={{ border: 'none' }}>
                    <img alt="vision" src={ob?.image} className="img-fluid" />
                    <h5 className="text-center mb-4" style={{ color: "#0066b3", fontWeight: '600', fontSize: '36px', fontFamily: 'Montserrat, sans-serif ' }}>{ob?.heading}</h5>
                    <p className="text-justify" style={{ color: "#565656", fontWeight: '400', fontSize: '17px' }}>{ob?.desc}</p>
                  </div>

                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <CompanyLogos />
      </div>
    </>
  );
};

export default About_vision_mission;
