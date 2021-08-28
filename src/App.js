import { useState } from 'react';
import './App.css';
import {Navbar,Heading,Cards,Carousel,Footer,HomeCards,Affiliates,NearestDeliveryCenter,Milestones, CompanyLogos} from './components'
import card from './components/FlipCardsHome/CardData'
function App() {
  const label = {
    HeadFacilities:"Facilities",
    HeadOurProduct:"Our Products",
    Milestones:'Milestones',
    Our_Affiliates:'Our Affiliates',
    NearestDeliveryCenter:'Nearest Delivery Center',
  };
  console.log(card[0].img.imge);
  // const {title,text1,text2,text3,btn,img} = card;

return (
    <div className="App">
      
      <Navbar/>
      <Carousel/>
      
      <Heading heading={label.HeadFacilities}/>
      <Cards/>

      <Heading heading={label.Our_Affiliates}/>
      <Affiliates/>

      <Heading heading={label.HeadOurProduct}/>
      <HomeCards card={card} />

      <Milestones heading={label}/>

      <NearestDeliveryCenter heading={label}/>
 
      {/* <CompanyLogos/> */}
  
      {/* <Footer/> */}
    </div>
  );
}

export default App;
