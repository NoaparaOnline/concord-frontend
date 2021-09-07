import React from 'react'

import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import DirectorImg from "../Statics/assets/Managing-Director.png";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";


const About_message_chairmen = () => {



  const DirectorInfo = {
    name: "Md. Faizur Rahman",
    about: "The Chairman of the company believes that Concord Pharmaceuticals Ltd is committed to provide the best in pharmaceutical care through quality, diligence and transparency. Concord Pharmaceutical Limited aims to keep their customers satisfied, look to grow and seek to become a name of global reckoning in future.",
  };

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
        heading={"Message from Chairman"}
        subHeading={`MESSAGE FROM CHAIRMAN`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />


      {/* message from chairmen */}
      <div className="container my-5">
        <div className="row ">

          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-end ">
            <img alt="Chairmen" src={DirectorImg} className="img-fluid" />
          </div>

          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
            <div className="card d-flex justify-content-center" style={{ border: 'none' }}>
              <h5 className="text-start mb-4" style={{ color: "#337ab7", fontWeight: '500', fontSize: '36px' }}>{DirectorInfo.name}</h5>
              <p className="text-start" style={{ color: "#565656", fontWeight: '400', fontSize: '17px' }}>{DirectorInfo.about}</p>
            </div>
          </div>

        </div>
      </div>



      <CompanyLogos />

    </div>
  )
}

export default About_message_chairmen
