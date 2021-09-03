import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../assets/warehouse-1.jpg";
import facrd from "../assets/warehouse-1.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const Facilities_warhouse = () => {
  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Warehouse"}
        subHeading={`HOME /FACILITIES/ WAREHOUSE`}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            
              <div style={{ border: "1px solid #f3f3f3", overflow: "hidden" }}>
                <img alt="" src={facrd} className="img-fluid zoom" />   
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
