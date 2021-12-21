import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/globalbanner.jpg";
import flag1 from "../Statics/assets/flags/fl1.jpg";
import flag2 from "../Statics/assets/flags/fl2.jpg";
import flag3 from "../Statics/assets/flags/fl3.jpg";
import flag4 from "../Statics/assets/flags/fl4.jpg";
import flag5 from "../Statics/assets/flags/fl5.jpg";
import flag6 from "../Statics/assets/flags/fl6.jpg";
import flag7 from "../Statics/assets/flags/fl7.jpg";
import flag8 from "../Statics/assets/flags/fl8.jpg";
import flag9 from "../Statics/assets/flags/fl9.jpg";
import flag10 from "../Statics/assets/flags/fl10.jpg";

import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const GlobalOPerations = () => {
  const flagsCol1 = [
    {
      id: 0,
      imageURL: flag1,
    },
    {
      id: 1,
      imageURL: flag2,
    },
    {
      id: 2,
      imageURL: flag3,
    },
    {
      id: 3,
      imageURL: flag4,
    },
    {
      id: 4,
      imageURL: flag5,
    },
    {
      id: 5,
      imageURL: flag6,
    },
    {
      id: 6,
      imageURL: flag7,
    },
    {
      id: 7,
      imageURL: flag8,
    },
    {
      id: 8,
      imageURL: flag9,
    },
    {
      id: 9,
      imageURL: flag10,
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
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Global Operation"}
        subHeading={`GLOBAL OPERATION`}
        LinksBan={LinksBan}
        height={"400px"}
        
        backposit={'center'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.4), rgba(20, 20, 19, 0.2)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className="row ">
              {flagsCol1.map((ob, index) => {
                return (
                  <>
                    <div className="col-lg-5 col-md-5 col-md-6  col-sm-6 col-xs-12 mb-4  d-flex justify-content-center">
                      <img className="mb-3 me-5  boxImgShadow" alt="" width="100%" src={ob.imageURL} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 text-justify">


            <div className="mb-4">

              <strong className="Typography_styling">Concord Pharmaceuticals Limited (CPL),</strong> a leading human medicine manufacturer in Bangladesh. We always thrive to introduce top notch quality human medicine for the health & wellbeing of the nation worldwide. With the philosophy “Better medicine Better life…” CPL has started its export journey since 2015. Hence its efforts to improve quality never ends up. We continuously sets next level of standards and feels passionate to achieve all that. All the manufacturing processes are followed by <strong >ISO 9001:2015 & WHO-GMP</strong> guidelines to produce quality products.

            </div>
            <div className="mb-4">

              <strong >CPL</strong> has 112 dosage form of different therapeutic classes like Antibiotics, Antiviral, Antidiabetics, Anti-Ulcerants, Analgesics & Antipyretics, Antihistamine, Antidepressant, Cardiovascular, Vitamins & minerals, NSAIDs etc.
            </div>
            <div className="mb-4">

              Presently <strong >CPL</strong> products are exporting to Bhutan, Cambodia, Myanmar, Sri Lanka, Vietnam, Thailand, Liberia, Yemen, Afghanistan and Congo now. During this marvelous journey the company has achieved accreditation from Ministry of Health, Cambodia and currently holds the Yemen GMP certificate.
            </div>
            <div className="mb-4">

              We’ve consistently been recognized in the international arena for our exceptional outcomes and service for worldwide wholesalers, government agencies, major importers, chain of drug stores, contract manufacturing and relief organizations. We are concerned to tie-up with new business partners and we welcome prospective agents for our medicines.
            </div>
            <div className="mb-4">

              For any further information or export:
              <div><span>Email: 
                
              <a
                  href="mailto:Cplibd.export@gmail.com"
           
                  style={{textDecoration:'none'}}
                >
                   Cplibd.export@gmail.com
                </a>
                 </span></div>
              <div><span>Cell: +8801991145006 (Whatsapp & Viber associated)</span></div>


            </div>


          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default GlobalOPerations;
