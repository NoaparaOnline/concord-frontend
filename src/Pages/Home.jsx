import "../App.css";
import {
  Heading,
  Cards,
  Carousel,
  HomeCards,
  Affiliates,
  NearestDeliveryCenter,
  Milestones,
  CompanyLogos,
  WeAreServing,
  TextSectionContainer,
  Globaloperation,
} from "../components";

import React from 'react'
import card from "../components/HomeComponents/FlipCardsHome/CardData";


const label = {
    HeadFacilities: "Facilities",
    HeadOurProduct: "Our Products",
    Milestones: "Milestones",
    Our_Affiliates: "Our Affiliates",
};


const Home = () => {
    return (
        <div>


      {/* <Navbar/> */}
      <Carousel/>

      <WeAreServing/>
      <TextSectionContainer/>


      <Heading 
      heading={label.HeadFacilities}
      subheading={'Leading Human Medicine Manufacturer in Bangladesh'} />
      
      
      
      
      <Cards/>

      <Heading heading={label.Our_Affiliates} />
      <Affiliates />
      <Globaloperation/>
      <Heading heading={label.HeadOurProduct} />
      <HomeCards card={card} />

      <Milestones heading={label} />

      <NearestDeliveryCenter heading={label} />

      <CompanyLogos/>


      {/* <Footer /> */}



        </div>
    )
}

export default Home

