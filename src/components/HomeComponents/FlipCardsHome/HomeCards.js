import React from "react";
import { FlipCard} from "../../../components";
import SingleCard from "../FlipCard/SingleCard";
import "./HomeCards.css";
const HomeCards = ({ card }) => {
  return (
    <div className="container  my-5 ">
      <div className="container cards Responsive_Margin_Screen  " >
        <div className="row  ">
          {card.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className={index===0  ? `col-xxl-2 col-xl-4 col-lg-4  offset-xxl-1 d-none d-lg-block d-md-none  custome-card-test mb-4` 
             
              : `col-xxl-2 col-xl-4 col-lg-4  d-none d-lg-block d-md-none  custome-card-test mb-4`}>
                <FlipCard card={ob} />
              </div>
              <div  className="custome_xs_screen  d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12  custome-card-test mb-4">
                <SingleCard card={ob} />
              </div>
              </React.Fragment>
          )
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
