import React from "react";
import "./FlipCard.css";
import { Link } from "react-router-dom";

const FlipCard = ({ card }) => {
  const { title, text1, text2, img, btn } = card;

  return (
    <div >
      <div className="flip-card" style={{marginBottom:'30%'}}>
        <div className="flip-card-inner ">
          <div className="flip-card-front ">
            <div className="card flipcard_custom">
              <div className="card-body">
                <h5 className="card-title text-white">{title}</h5>
                <h6 className="card-title text-white">{text1}</h6>
                <h6 className="card-title text-white">{text2}</h6>
              </div>
              {card.img.map((ob,index) => {
                return (
                  <img key={ob.id} src={ob.imgf} className="card-img-top p-3" alt="..." />
                );
              })}
              <Link to="/" className="btn btn-primary rounded-pill colr_btn">
                {btn}
              </Link>
            </div>
          </div>

          <div className="flip-card-back">
            <div className="card flipcard_custom">
              <div className="card-body">
                <h5 className="card-title text-white">{title}</h5>
                <h6 className="card-title text-white">{text1}</h6>
                <h6 className="card-title text-white">{text2}</h6>
              </div>
              {card.img.map((ob,index) => {
                return (
                  <img key={ob.id} src={ob.imge} className="card-img-top p-3" alt="..." />
                );
              })}
              <Link to="/" className="btn btn-primary rounded-pill colr_btn">
                {btn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
