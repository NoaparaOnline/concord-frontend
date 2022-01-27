import React from 'react'
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-production-ban.jpg";
import facrd from "../Statics/assets/fac-production.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const Facilities_product = () => {
    const {t}=useTranslation('common')
   // BannerWithText Wale Ki Links Ka Object
   const LinksBan=[
    {
     subLinkName:'Home',
     subDash:'/',
     subLink:'/'
    },
    {
     subLinkName:'Facilities',
     subDash:'/',
     subLink:'/facilities'
    },
  ];
  return (
        <>
            <Helmet>
        <title>{t('facilities_product.helmet.prod_concord_text')}</title>
      </Helmet>
        <BannerWithText
          imgSrc={bannerimg}
          heading={t('facilities_product.banner_with_text.production_text')}
          subHeading={t('facilities_product.banner_with_text.production_text').toUpperCase()} 
          backposit={'100% 22%'}
          backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
        />
  
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 col-lg-5">
              <div className="allborder">
              <img alt="production" src={facrd} className="zoom" width="100%" height="100%" />
              </div>
            </div>
         
            <div className="col-sm-12 col-lg-7">
              <div style={{padding:'10px',lineHeight:'1.7em',fontSize:'17px'}}>
              {t('facilities_product.banner_with_text.desc_1')}<br/><br/>
              {t('facilities_product.banner_with_text.desc_2')}<br/><br/>
              {t('facilities_product.banner_with_text.desc_3')}
              </div>
            </div>
          </div>
        </div>

        <CompanyLogos/>

      </>
    )
}

export default Facilities_product
