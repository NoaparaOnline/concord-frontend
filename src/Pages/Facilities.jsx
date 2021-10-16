import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/facilitybanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import facilitiescard1 from '../Statics/assets/facilities/fac1.png'
import facilitiescard2 from '../Statics/assets/facilities/fac2.png'
import facilitiescard3 from '../Statics/assets/facilities/fac3.png'
import facilitiescard4 from '../Statics/assets/facilities/fac4.png'
import facilitiescard5 from '../Statics/assets/facilities/fac5.png'


const Facilities = () => {

  // Zoomcards Map Data
  const facilitiescard = [
    {
      id: 0,
      imageURL: facilitiescard1,
      text: "Research and Development",
      link: "/facilities_researchdevrsttime",
    },
    {
      id: 1,
      imageURL: facilitiescard2,
      text: "Production",
      link: "/facilities_product",
    },
    {
      id: 2,
      imageURL: facilitiescard3,
      text: "Quality Control",
      link: "/facilities_quality",
    },
    {
      id: 3,
      imageURL: facilitiescard4,
      text: "Warehouse",
      link: "/facilities_warhouse",
    },
    {
      id: 4,
      imageURL: facilitiescard5,
      text: "Our Distribution Network",
      link: "/facilities_ourdistribution",
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
      <BannerWithText imgSrc={bannerimg} heading={'Facilities'} subHeading={`FACILITIES`}
        LinksBan={LinksBan}
        height={"400px"}
        
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}

      />
      <Heading heading={"Facilities"} />


      {/* Zoom Cards */}
      <div className="my-5">
        <div className="row ">

          {facilitiescard.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div className={index === 0 ? `col-lg-2 offset-lg-1 col-md-3 mt-4` : `col-lg-2 col-md-3 mt-4`}>
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

export default Facilities
