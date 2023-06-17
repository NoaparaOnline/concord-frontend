import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/AboutBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import Aboutcard1 from '../Statics/assets/mission-vissioncard1.svg'
import Aboutcard2 from '../Statics/assets/health-icon2.svg'
import Aboutcard3 from '../Statics/assets/profile3.svg'
import Aboutcard4 from '../Statics/assets/Chairman-message4.svg'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { filterComponentData } from '../Utils/functions';


const About = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const about_us = filterComponentData(component, "about_us_cards", lang)
  const about_us_heading = filterComponentData(component, "about_us_heading", lang)
  const { t } = useTranslation("common")
  // Zoomcards Map Data
  const aboutcard = [
    {
      id: 0,
      imageURL: Aboutcard1,
      text: t("about.vision_text"),
      link: "/vision-mission",
    },
    {
      id: 1,
      imageURL: Aboutcard2,
      text: t("about.health_text"),
      link: "/health-associates",
    },
    {
      id: 2,
      imageURL: Aboutcard3,
      text: t("about.chairman_text"),
      link: "/chairmen-profile",
    },
    {
      id: 3,
      imageURL: Aboutcard4,
      text: t("about.msg_chairman_text"),
      link: "/message-from-chairmen",
    },
  ];

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },

  ];

  return (
    <>
      <Helmet>
        <title>
          {about_us_heading?.heading ? about_us_heading?.heading : t("about.helmet.title_text")}
        </title>
      </Helmet>
      <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={t("about.helmet.title_text")}
          subHeading={t("about.helmet.title_text").toLowerCase()}
          backposit={'center right'}
          backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
        />
        <Heading heading={"About Us"} />
        {/* Zoom Cards */}
        <div className="container my-5">
          <div className="row d-flex justify-content-center">

            {about_us?.length < 1 ? aboutcard.map((ob, index) => (
              <React.Fragment key={ob.id}>
                <div className='col-xl-2  col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                  <ZoominCards abcard={ob} />
                </div>
              </React.Fragment>
            )
            ) : about_us?.map((ob, index) => (
              <React.Fragment key={index}>
                <div className='col-xl-2  col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                  <ZoominCards abcard={ob} />
                </div>
              </React.Fragment>
            )
            )}


          </div>
        </div>







        <CompanyLogos />
      </div>
    </>
  )
}

export default About
