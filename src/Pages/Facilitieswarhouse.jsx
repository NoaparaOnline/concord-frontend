import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/warehouse-1.jpg";
import facrd from "../Statics/assets/warehouse-1.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const Facilities_warhouse = () => {
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
        heading={"Warehouse"}
        subHeading={`WAREHOUSE`}
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

          <div className="col-sm-12 col-lg-7">
            <div
              style={{ padding: "10px", lineHeight: "1.7em", fontSize: "17px" }}
            >
              Our warehouse is a highly controlled & strictly maintained all
              environmental regulations. The area is equipped with highly
              temperature regulated, proper storage & handling system. All
              security measures are well established with appropriate
              fire-fighting equipment and controlled access to the building.
              <br />
              <br />
              Our sampling & quarantine areas with separate storage location
              allows the proper placing of penicillin, cephalosporin and general
              products. We maintain controlled room conditions for specific
              materials to confirm the standard compliance. We maintain
              retention sample in separate room under standard conditions. All
              the materials are stored in the warehouse by pallet racking. The
              movement system of the materials maintains a strict ‘first in
              first out’ procedure and shelf life of products are strictly
              monitored.
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Facilities_warhouse;
