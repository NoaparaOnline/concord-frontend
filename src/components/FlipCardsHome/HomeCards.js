import React from "react";
import { FlipCard, Heading } from "../../components";
import "./HomeCards.css";
const HomeCards = ({ card }) => {
  return (
    <div className="container">
      <div className="container mt-0  cards mx-1 ">
        <div className="row ">
          {card.map((ob, index) => {
            return (
              <div
                className={`col-lg-3 col-md-4 col-sm-12 custome-card-test`}
              >
                <FlipCard card={ob} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
