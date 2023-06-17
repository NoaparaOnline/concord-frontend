import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/facilitybanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import facilitiescard1 from '../Statics/assets/facilities/fac1.png'
import facilitiescard2 from '../Statics/assets/facilities/fac2.png'
import facilitiescard3 from '../Statics/assets/facilities/fac3.png'
import facilitiescard4 from '../Statics/assets/facilities/fac4.png'
import facilitiescard5 from '../Statics/assets/facilities/fac5.png'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { filterComponentData } from '../Utils/functions';


const Facilities = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const facilities_cards = filterComponentData(component, "facilities_cards", lang)
  const { t } = useTranslation('common')
  // Zoomcards Map Data
  const facilitiescard = [
    {
      id: 0,
      imageURL: facilitiescard1,
      text: t('facilities.research_and_development_text'),
      link: "/research-and-development",
    },
    {
      id: 1,
      imageURL: facilitiescard2,
      text: t('facilities.production_text'),
      link: "/product",
    },
    {
      id: 2,
      imageURL: facilitiescard3,
      text: t('facilities.quality_control_text'),
      link: "/quality",
    },
    {
      id: 3,
      imageURL: facilitiescard4,
      text: t('facilities.warehouse_text'),
      link: "/warhouse",
    },
    {
      id: 4,
      imageURL: facilitiescard5,
      text: t('facilities.distribution_text'),
      link: "/our-distribution-network",
    },
  ];

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
        <title>{t('facilities.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText imgSrc={bannerimg} heading={t('facilities.facilities_text')} subHeading={t('facilities.facilities_text').toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}

        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}

      />
      <Heading heading={t('facilities.facilities_text')} />


      {/* Zoom Cards */}
      <div className="my-5">
        <div className="row ">

          {facilities_cards?.length < 1 ? facilitiescard.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div className={index === 0 ? `col-lg-2 offset-lg-1 col-md-3 mt-4` : `col-lg-2 col-md-3 mt-4`}>
                <ZoominCards abcard={ob} />
              </div>
            </React.Fragment>
          )
          ) : facilities_cards?.map((ob, index) => (
            <React.Fragment key={index}>
              <div className={index === 0 ? `col-lg-2 offset-lg-1 col-md-3 mt-4` : `col-lg-2 col-md-3 mt-4`}>
                <ZoominCards abcard={ob} />
              </div>
            </React.Fragment>
          )
          )}


        </div>
      </div>







      <CompanyLogos />
    </>
  )
}

export default Facilities
