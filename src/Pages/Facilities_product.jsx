import React from 'react'
import { CompanyLogos } from "../components";
import bannerimg from "../assets/fac-production.jpg";
import facrd from "../assets/fac-production.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const Facilities_product = () => {
    return (
        <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={"Production"}
          subHeading={`HOME /FACILITIES/ PRODUCTION`}
        />
  
        <div className="container my-5">
          <div className="row">
         
            <div className="col-sm-12 col-lg-5" style={{border:'1px solid #f3f3f3',overflow:'hidden'}} >
              <img alt="" src={facrd} className="img-fluid zoom" />
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
