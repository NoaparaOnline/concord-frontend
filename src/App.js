import React from "react";
import "./App.css";
import {
  Navbar,
  Heading,
  Cards,
  Carousel,
  Footer,
  HomeCards,
  Affiliates,
  NearestDeliveryCenter,
  Milestones,
  CompanyLogos,
  WeAreServing,
  TextSectionContainer,
  Globaloperation,
} from "./components";


import card from "./components/FlipCardsHome/CardData";
import SubHeading from "./components/SubHeading/SubHeading";
function App() {
  const label = {
    HeadFacilities: "Facilities",
    HeadOurProduct: "Our Products",
    Milestones: "Milestones",
    Our_Affiliates: "Our Affiliates",
  };

  return (
    <div className="App">
      <Navbar/>
      <Carousel/>

      <WeAreServing/>
      <TextSectionContainer/>


      <Heading heading={label.HeadFacilities} />
      <SubHeading/>
      <Cards/>

      <Heading heading={label.Our_Affiliates} />
      <Affiliates />
      <Globaloperation/>
      <Heading heading={label.HeadOurProduct} />
      <HomeCards card={card} />

      <Milestones heading={label} />

      <NearestDeliveryCenter heading={label} />

      <CompanyLogos/>


      <Footer />
    </div>
  );
}

export default App;
