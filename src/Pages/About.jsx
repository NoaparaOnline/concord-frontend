import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/AboutBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import Aboutcard1 from '../Statics/assets/mission-vissioncard1.svg'
import Aboutcard2 from '../Statics/assets/health-icon2.svg'
import Aboutcard3 from '../Statics/assets/profile3.svg'
import Aboutcard4 from '../Statics/assets/Chairman-message4.svg'


const About = () => {

  // Zoomcards Map Data
  const aboutcard = [
    {
      id: 0,
      imageURL: Aboutcard1,
      text: "Vision & Mission",
      link: "/about_vision_mission",
    },
    {
      id: 1,
      imageURL: Aboutcard2,
      text: "Health Associates",
      link: "#",
    },
    {
      id: 2,
      imageURL: Aboutcard3,
      text: "Chairman's Profile",
      link: "#",
    },
    {
      id: 3,
      imageURL: Aboutcard4,
      text: "Message from Chairman",
      link: "/about_message_chairmen",
    },
  ];

  // BannerWithText Wale Ki Links Ka Object
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },

  ];

  return (
    <div>
      <BannerWithText imgSrc={bannerimg}
        heading={'About Us'}
        subHeading={`about us`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      <Heading heading={"About Us"} />





      {/* Zoom Cards */}
      <div className="container my-5">
        <div className="row d-flex justify-content-center">

          {aboutcard.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div className='col-xl-2  col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                <ZoominCards abcard={ob} />
              </div>
            </React.Fragment>
          )
          )}


        </div>
      </div>







      <CompanyLogos />
    </div>
  )
}

export default About
