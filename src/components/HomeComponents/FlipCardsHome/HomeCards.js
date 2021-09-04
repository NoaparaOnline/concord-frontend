import React from "react";
import { FlipCard} from "../../../components";
import SingleCard from "../FlipCard/SingleCard";
import "./HomeCards.css";
const HomeCards = ({ card }) => {
  return (
    <div className="container my-5">
      <div className="container cards Responsive_Margin_Screen">
        <div className="row ">
          {card.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div  className={index===0 ? `col-lg-2 offset-1 d-none d-lg-block d-md-none col-md-4  col-sm-12 custome-card-test`:`col-lg-2 d-none d-lg-block d-md-none col-md-4  col-sm-12 custome-card-test`}>
                <FlipCard card={ob} />
              </div>
              <div  className="custome_xs_screen  d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12  custome-card-test ">
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
