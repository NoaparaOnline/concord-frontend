import React, { useEffect } from "react";
import { FlipCard } from "../../../components";
import SingleCard from "../FlipCard/SingleCard";
import SingleCardHome from "../FlipCard/SingleCardHome";
import card from "./CardData";
import "./HomeCards.css";
const HomeCards = ({ props, product }) => {

  return (
    <div className="container  my-5 ">
      <div className="cards Responsive_Margin_Screen  ">
        {product?.length < 1 ? <div className="row  ">
          {card.map((ob, index) => (
            <React.Fragment key={ob.id}>
              <div
                className={
                  index === 0
                    ? `col-xxl-2 col-xl-4 col-lg-4  offset-xxl-1 d-none d-lg-block d-md-none  custome-card-test mb-4`
                    : `col-xxl-2 col-xl-4 col-lg-4  d-none d-lg-block d-md-none  custome-card-test mb-4`
                }
              >
                <FlipCard card={ob} {...props} api={false}/>
              </div>
              <div className="custome_xs_screen  d-lg-none d-sm-block col-md-6 col-sm-12 col-xs-12  custome-card-test mb-4">
                <SingleCardHome card={ob} {...props} api={false}/>
              </div>
            </React.Fragment>
          ))}
        </div> : <div className="row">
          {
            product?.map((item,index) => (
              <React.Fragment >
                <div
                  className={
                    index === 0
                      ?
                      `col-xxl-2 col-xl-4 col-lg-4  offset-xxl-1 d-none d-lg-block d-md-none  custome-card-test mb-4`
                      : `col-xxl-2 col-xl-4 col-lg-4  d-none d-lg-block d-md-none  custome-card-test mb-4`
                  }
                >
                  <FlipCard card={item} {...props} api={true}/>
                </div>
                <div className="custome_xs_screen  d-lg-none d-sm-block col-md-6 col-sm-12 col-xs-12  custome-card-test mb-4">
                  <SingleCardHome card={item} {...props} api={true}/>
                </div>
              </React.Fragment>
            ))
          }
          
        </div>}

      </div>
    </div>
  );
};

export default HomeCards;
