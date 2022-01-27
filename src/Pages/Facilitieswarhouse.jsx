import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/warehouse-1.jpg";
import facrd from "../Statics/assets/warehouse-1.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Facilities_warhouse = () => {
  const {t}=useTranslation('common')
  const LinksBan=[
    {
     subLinkName:t('facilities_warehouse.home_text'),
     subDash:'/',
     subLink:'/'
    },
    {
     subLinkName:t('facilities_warehouse.facilities_text'),
     subDash:'/',
     subLink:'/facilities'
    },
  ];
 
  return (
    <>
        <Helmet>
        <title>{t('facilities_warehouse.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('facilities_warehouse.warehouse_text')}
        subHeading={t('facilities_warehouse.warehouse_text').toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        
        backposit={'100% center'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            
              <div className="allborder">
                <img alt="warehouse" src={facrd} className="zoom" width="100%" height="100%" />   
              </div>
    
          </div>

          <div className="col-sm-12 col-lg-7">
            <div
              style={{ padding: "10px", lineHeight: "1.7em", fontSize: "17px" }}
            >
      {t('facilities_warehouse.desc_text_1')}
              <br />
              <br />
   {t('facilities_warehouse.desc_text_2')}
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Facilities_warhouse;
