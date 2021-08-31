import React from "react";
import { FlipCard, Heading } from "../../components";
import SingleCard from "../FlipCard/SingleCard";
import "./HomeCards.css";
const HomeCards = ({ card }) => {
  return (
    <div className="container">
      <div className="container mt-0  cards mx-1 ">
        <div className="row ">
          {card.map((ob, index) => {
            return (
              <>
              
              <div className={index==0 ? `col-lg-2 offset-1 d-none d-lg-block d-md-none col-md-4  col-sm-12 custome-card-test`:`col-lg-2 d-none d-lg-block d-md-none col-md-4  col-sm-12 custome-card-test`}>
                <FlipCard card={ob} />
              </div>
              <div className="custome_xs_screen d-none d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12  custome-card-test ">
                <SingleCard card={ob} />
              </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
