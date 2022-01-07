import React from "react";
import { useParams } from "react-router-dom";
import ProductallDetails from "../../ReusableComponents/ProductDetail/ProductallDetails";
import "./FlipCard.css";

const FlipCard = (props) => {
  const { card } = props;
  const { title, text1, text2, btn, innerComposition,id } = card;
  const currentpath = props?.location?.pathname;
  const getFirstWord = (string) => {
    const words = string.split(" ");
    return words[0].toLowerCase();
  };
  
  const proname = getFirstWord(title);

  return (
    <div>
      <div className="flip-card" style={{ marginBottom: "50%" }}>
        <div className="flip-card-inner ">
          <div className="flip-card-front ">
            <div className="card flipcard_custom">
              <div className="card-body ">
                <h5
                  className="card-title front-text text-white"
                  style={{ fontSize: "19px", fontWeight: "500" }}
                >
                  {currentpath === "/by-generic-name"
                    ? innerComposition
                    : title}
                </h5>
                <h6
                  className="card-title front-text text-white"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  {text1}
                </h6>
                <h6
                  className="card-title front-text text-white"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  {text2}
                </h6>
              </div>
              {card?.img?.map((ob, index) => {
                return (
                  <>
                    <img
                      key={ob.id}
                      src={ob.imgf}
                      className="card-img-top p-3"
                      height="100%"
                      width="100%"
                      alt={
                        currentpath === "/by-generic-name"
                          ? innerComposition
                          : title
                      }
                    />
                  </>
                );
              })}
              {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}    className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
              <div
                onClick={() =>
                  props?.history?.push(`/prod-details/${proname}`, {
                    data: { ...card, from: props?.location?.pathname },
                  })
                }
                className="btn  rounded-pill colr_btn"
              >
                {btn}
              </div>
            </div>
          </div>

          <div className="flip-card-back">
            <div className="card flipcard_custom">
              <div className="card-body">
                <h5
                  className="card-title front-text text-white"
                  style={{ fontSize: "19px", fontWeight: "500" }}
                >
                  {currentpath === "/by-generic-name"
                    ? innerComposition
                    : title}
                </h5>
                <h6
                  className="card-title front-text text-white"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  {text1}
                </h6>
                <h6
                  className="card-title front-text text-white"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                >
                  {text2}
                </h6>
              </div>
              {card?.img?.map((ob, index) => {
                return (
                  <>
                    <img
                      key={ob.id}
                      src={ob.imge}
                      className="card-img-top p-3"
                      height="100%"
                      width="100%"
                      alt={
                        currentpath === "/by-generic-name"
                          ? innerComposition
                          : title
                      }
                    />
                  </>
                );
              })}
              {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}  className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
              <div
                onClick={() =>
                  props?.history?.push(`/prod-details/${proname}/${id}`, {
                    data: { ...card, from: props?.location?.pathname },
                  })
                }
                className="btn  rounded-pill colr_btn"
              >
                {btn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
