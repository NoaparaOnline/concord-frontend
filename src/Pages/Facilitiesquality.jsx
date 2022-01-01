import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-QC-ban.jpg";
import facrd from "../Statics/assets/fac-QC.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
const Facilities_quality = () => {
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: "Facilities",
      subDash: "/",
      subLink: "/facilities",
    },
  ];

  return (
    <>
    <Helmet>
        <title>Quality Control - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Quality Control"}
        subHeading={`QUALITY CONTROL`}
        LinksBan={LinksBan}
        
        backposit={'100% 54%'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <div className="allborder">
            <img alt="quality control" src={facrd} className="zoom" width="100%" height="100%" />
            </div>
          </div>

          <div className="col-sm-12 col-lg-7">
            <div
              style={{ padding: "10px", lineHeight: "1.7em", fontSize: "17px" }}
            >
              Our motto is “Better medicine better life”. Our quality control
              laboratory is equipped with highly sophisticated equipments to
              conform good laboratory practice guideline so as to guarantee
              consistent product quality.
              <br />
              An excellent team of professionals having excellent knowledge &
              concepts of quality systems and cGMP is working to ensure quality
              assurance at each stage right from receiving of starting materials
              to finished products to assure the highest international
              standards. We ensure systems, facilities & process validations,
              HVAC, clean room regulations, approval of raw, packaging &
              finished goods and proper documentation of technical quality
              parameters to serve best quality medicine for the nation.
            </div>
          </div>
        </div>

        <div className="productionbx">
          <h5 style={{ color: "#0066b3", fontSize: "24px" }}>
            The System of Quality Control in Concord Pharmaceuticals ensures
            that:
          </h5>
          <ul>
            <li className="mt-3">
              The Pharmaceutical Products are designed and developed in a way
              that takes into account the requirements of Good Manufacturing
              Practices (cGMP)
            </li>
            <li className="mt-3">
              Adequate arrangements are made for Manufacture, Supply and Use of
              correct starting and packaging materials
            </li>
            <li className="mt-3">
              Adequate Controls on starting materials, Intermediate products and
              Bulk Products. Calibrations and Validations are carried out.
            </li>
            <li className="mt-3">
              The Finished products are correctly processed and checked in
              accordance with established procedures.
            </li>
            <li className="mt-3">
              The Products are not released for sale or supplied before
              authorized persons have certified that each production batch has
              been produced and controlled in accordance with the requirements
              of the label claim and any other provisions relevant to
              Production, Control and Release of products.
            </li>
          </ul>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Facilities_quality;
