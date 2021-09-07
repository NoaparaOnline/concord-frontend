import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/vision-missionBanner.jpg";
import vision1 from "../Statics/assets/vision1.jpg";
import vision2 from "../Statics/assets/vision2.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const About_vision_mission = () => {
  const visioncards = [
    {
      id: 0,
      name: "Vision",
      imageURL: vision1,
      text: "Our vision is to reach a level of excellence in pharmaceuticals and other allied sectors through an enduring commitment to sustainable quality, and to achieve a global standard through the instruction of a culture of excellence.",
    },
    {
      id: 1,
      name: "Mission",
      imageURL: vision2,
      text: "Our mission is to benefit people and improve their quality of life through our product. As generic company our growth is closely knitted to the satisfaction of our customers. Through their satisfaction our aim is therefore to grow by providing diversified services including launching of new molecules. We are committed to to achieving our goal through skilled, creative and motivated employees.",
    },
  ];

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
    {
      subLinkName: 'About Us',
      subDash: '/',
      subLink: '/about'
    },

  ];

  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Vision & Mission"}
        subHeading={`VISION & MISSION`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      {/* vision cards */}
      <div className="container my-5">
        <div className="row ">
          {visioncards.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                <div className="card d-flex justify-content-center" style={{ border: 'none' }}>
                  <img alt="" src={ob.imageURL} className="img-fluid" />
                  <h5 className="text-center mb-4" style={{ color: "#337ab7", fontWeight: '500', fontSize: '36px' }}>{ob.name}</h5>
                  <p className="text-start" style={{ color: "#565656", fontWeight: '400', fontSize: '17px' }}>{ob.text}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default About_vision_mission;
