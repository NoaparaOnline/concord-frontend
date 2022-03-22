import React from 'react'

import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import DirectorImg from "../Statics/assets/Managing-Director.png";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { filterComponentData } from '../Utils/functions';


const About_message_chairmen = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const chairman_message = filterComponentData(component, "chairman_message", lang)
  const { t } = useTranslation('common')


  const DirectorInfo = {
    name: t('about_message_chairmen.name'),
    about: t('about_message_chairmen.message'),

  };

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: t('about_message_chairmen.home_text'),
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: t('about_message_chairmen.about_us_text'),
      subDash: '/',
      subLink: '/about'
    },

  ];
  return (
    <>
      <Helmet>
        <title>
          {t('about_message_chairmen.helmet.title_text')}

        </title>
      </Helmet>
      <div>

        <BannerWithText
          imgSrc={bannerimg}
          heading={t('about_message_chairmen.message_head')}
          subHeading={t('about_message_chairmen.message_head').toUpperCase()}

          backposit={'100% 25%'}
          backimg={`url(${bannerimg})`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
        />


        {/* message from chairmen */}
        <div className="container my-5">
          <div className="row ">

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-end ">
              <img alt="Chairmen" src={chairman_message?.image ? chairman_message?.image : DirectorImg} className="img-fluid" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
              <div className="card d-flex justify-content-center" style={{ border: 'none' }}>
                <h5 className="text-start mb-4" style={{ color: "#337ab7", fontWeight: '500', fontSize: '36px' }}>{chairman_message?.heading ? chairman_message?.heading : DirectorInfo.name}</h5>
                <p className="text-justify" style={{ color: "#565656", fontWeight: '400', fontSize: '17px' }}>{chairman_message?.desc ? chairman_message?.desc : DirectorInfo.about}</p>
              </div>
            </div>

          </div>
        </div>



        <CompanyLogos />

      </div>
    </>
  )
}

export default About_message_chairmen
