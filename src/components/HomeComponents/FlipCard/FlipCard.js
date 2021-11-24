import React from "react";
import "./FlipCard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleProductDataObj } from "../../../Store/Actions/directorActions";

const FlipCard = (props) => {
  const { card } = props;
  const { title, text1, text2, img, btn, btnlink, innerdata, innerComposition } = card;
  const dispatch = useDispatch();
  console.log(props,"propsflip");
  const currentpath = props?.location?.pathname;
  console.log(currentpath,"currentpath");
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
                  {currentpath === '/products_bygeneric' ? innerComposition : title}
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
                      alt="..."
                    />
                  </>
                );
              })}
              {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}    className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
              <div
                onClick={() => props?.history?.push("/prod_details",{data : {...card,from:props?.location?.pathname}})}
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
                  {title}
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
                      alt="..."
                    />
                  </>
                );
              })}
              {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}  className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
              <div
                   onClick={() => props?.history?.push("/prod_details",{data : {...card,from:props?.location?.pathname}})}
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
