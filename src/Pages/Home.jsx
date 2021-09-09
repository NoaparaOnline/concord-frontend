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
import { Link } from 'react-router-dom'


const label = {
  HeadFacilities: "Facilities",
  HeadOurProduct: "Our Products",
  Milestones: "Milestones",
  Our_Affiliates: "Our Affiliates",
};

const milestone_data = [
  {
    id: 0,
    year: '2011',
    text: 'Concord Project Managements Established'
  },
  {
    id: 1,
    year: '2014',
    text: 'Continuing with various Projects'
  },
];


const Home = () => {
  return (
    <div>


      {/* <Navbar/> */}
      <Carousel />

      <WeAreServing />
      <TextSectionContainer />


      <Heading
        heading={label.HeadFacilities}
        subheading={'Leading Human Medicine Manufacturer in Bangladesh'} />




      <Cards />

      <Heading heading={label.Our_Affiliates} />
      <Affiliates />
      <Globaloperation />
      <Heading heading={label.HeadOurProduct} />
      <HomeCards card={card} />

      <Milestones
        heading={label}
        milestone_data={milestone_data}
        button={
          <>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center my-4 text-primary">
                <Link to='/media_milestone' style={{ textDecoration: 'none', fontWeight: 550, marginTop: 0 }} className="dd rounded-pill"><span>VIEW MORE</span></Link>
              </div>
            </div>
          </>
        }
        colorclass={"colrbck"}
      />

      <NearestDeliveryCenter heading={label} />

      <CompanyLogos />


      {/* <Footer /> */}



    </div>
  )
}

export default Home

