import React from 'react'
import { CompanyLogos,Heading } from '../components'
import bannerimg from '../assets/AboutBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import facilitiescard1 from '../assets/facilities/fac1.png'
import facilitiescard2 from '../assets/facilities/fac2.png'
import facilitiescard3 from '../assets/facilities/fac3.png'
import facilitiescard4 from '../assets/facilities/fac4.png'
import facilitiescard5 from '../assets/facilities/fac5.png'


const Facilities = () => {

 // Zoomcards Map Data
 const facilitiescard = [
    {
      id:0,
      imageURL: facilitiescard1,
      text: "Research and Development",
      link: "/facilities_researchdevrsttime",
    },
    {
      id:1,
      imageURL: facilitiescard2,
      text: "Production",
      link: "/facilities_product",
    },
    {
      id:2,
      imageURL: facilitiescard3,
      text: "Quality Control",
      link: "/facilities_quality",
    },
    {
      id:3,
      imageURL: facilitiescard4,
      text: "Warehouse",
      link: "/facilities_warhouse",
    },
    {
      id:4,
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
    />
    <Heading heading={"Facilities"}/>
        
        
     {/* Zoom Cards */}
     <div className="container my-5">
     <div className="row ">

     {facilitiescard.map((ob, index) => (
         <React.Fragment key={ob.id}>
           <div  className='col-lg-3 col-md-4 col-sm-12 col-xs-12 mt-3'>
             <ZoominCards abcard={ob}/>                  
           </div>
         </React.Fragment>
       )
       )} 
        

     </div>
   </div>







        <CompanyLogos/> 
     </div>
    )
}

export default Facilities
