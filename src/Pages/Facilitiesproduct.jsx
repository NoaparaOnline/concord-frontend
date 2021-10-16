import React from 'react'
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-production-ban.jpg";
import facrd from "../Statics/assets/fac-production.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const Facilities_product = () => {
    
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
        <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={"Production"}
          subHeading={`PRODUCTION`}
          
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
              <img alt="" src={facrd} className="zoom" width="100%" height="100%" />
              </div>
            </div>
         
            <div
              className="col-sm-12 col-lg-7"
              
            >
              <div style={{padding:'10px',lineHeight:'1.7em',fontSize:'17px'}}>
              Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.<br/><br/>
Our production incorporates technological excellence in manufacturing, processing & packaging of various dosage forms & formulations like Tablet, Capsule, Syrup, Suspension & Injectable products.<br/><br/>
Concord Pharmaceuticals Ltd. ensures & meets the growing requirements of cGMP regulations and other quality systems for all stage of production & in process control. The company is certified by the Quality Management System of ISO- 9001:2008 and WHO cGMP.
              </div>
            </div>
          </div>
        </div>


        <CompanyLogos/>

      </div>
    )
}

export default Facilities_product
