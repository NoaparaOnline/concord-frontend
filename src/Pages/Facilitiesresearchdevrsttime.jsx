import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/fac-RD.jpg";
import facrd from "../Statics/assets/fac-RD.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const Facilities_researchdevrsttime = () => {

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: 'Facilities',
      subDash: '/',
      subLink: '/facilities'
    },
  ];
  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Research & Development"}
        subHeading={`RESEARCH & DEVELOPMENT`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5">
        <div className="row">

          <div className="col-sm-12 col-lg-5 " >
            <div className="allborder">
            <img alt="" src={facrd} className="zoom" width="100%" height="100%" />
            </div>
          </div>

          <div
            className="col-sm-12 col-lg-7"

          >
            <div style={{ padding: '10px', lineHeight: '1.7em', fontSize: '17px' }}>
              Concord Pharmaceuticals Ltd. gives intensive emphasis on Research
              & Development to innovate new formulations & dosage forms. Our R&
              D is doing continuous attempt for improving quality & competency
              of our products. Our R &D team consisting of multidisciplinary
              experts of pharmacist, Chemists, Microbiologists with extensive
              experience in term of quality and business with integration of
              advanced technological changes conforming international standards.
              We have developed various formulation like Sustained release,
              Sugar free formulations, various coating technology, stability of
              liquid preparations by our R & D team. Our Research & Development
              lab is equipped with modern technology & equipment maintaining
              environmental control & controlled room environments We are always
              improving our R & D for development of new products, processes and
              services for best quality medicines.
            </div>
          </div>
        </div>
      </div>
      <CompanyLogos />
    </div>
  );
};

export default Facilities_researchdevrsttime;
