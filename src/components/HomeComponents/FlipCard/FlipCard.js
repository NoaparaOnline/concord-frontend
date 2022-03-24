import React, { useEffect, useState } from "react";
import "./FlipCard.css";

const FlipCard = (props) => {
  const [toggle, settoggle] = useState(true);
  const { card } = props;
  const { title, text1, text2, btn, innerComposition, id } = card;
  const currentpath = props?.location?.pathname;
  const getFirstWord = (string) => {
    const words = string.split(" ");
    return words[0].toLowerCase();
  };
  useEffect(() => {
    if (props?.api) {
      let imgs = [];
      imgs.push({
        imgf: card?.imgf ? card?.imgf : card?.image,
        imge: card?.imge ? card?.imge : card?.flipedimage,
      });

      card["img"] = imgs;
    }
    settoggle(false);
  }, []);
  const proname = getFirstWord(card?.name ? card?.name : title);
  return (
    <div>
      {toggle ? (
        <div>...loading</div>
      ) : (
        <div className="flip-card" style={{ marginBottom: "50%" }}>
          <div className="flip-card-inner ">
            <div className="flip-card-front ">
              <div className="card flipcard_custom">
                <div className="card-body ">
                  <h5
                    className="card-title front-text text-white"
                    style={{ fontSize: "19px", fontWeight: "500" }}
                  >
                    {card?.title
                      ? card?.title
                      : card?.name
                        ? card?.name
                        : title}
                  </h5>
                  <h6
                    className="card-title front-text text-white"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    {card?.name
                      ? card?.name
                      : text1 != " "
                        ? text1
                        : card?.subtitle
                          ? card?.subtitle
                          : title}
                  </h6>
                  <h6
                    className="card-title front-text text-white"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    {card?.text2
                      ? card?.text2
                      : card?.info
                        ? card?.info
                        : text2}
                  </h6>
                </div>
                {card?.img ? (
                  card?.img?.map((ob, index) => {
                    return (
                      <>
                        <img
                          key={index}
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
                  })
                ) : (
                  <img
                    src={card?.imge ? card?.imge : card?.image}
                    className="card-img-top p-3"
                    height="100%"
                    width="100%"
                    alt={
                      currentpath === "/by-generic-name"
                        ? innerComposition
                        : title
                    }
                  />
                )}
                {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}    className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
                <div
                  onClick={() =>
                    props?.history?.push(
                      `/prod-details/${card?.category}/${proname}`,
                      {
                        data: { ...card, from: props?.location?.pathname },
                      }
                    )
                  }
                  className="btn  rounded-pill colr_btn"
                >
                  {card?.button ? card?.button : btn}
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
                    {card?.title
                      ? card?.title
                      : card?.name
                        ? card?.name
                        : title}
                  </h5>
                  <h6
                    className="card-title front-text text-white"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    {card?.name
                      ? card?.name
                      : text1 != " "
                        ? text1
                        : card?.subtitle
                          ? card?.subtitle
                          : title}
                  </h6>
                  <h6
                    className="card-title front-text text-white"
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  >
                    {card?.text2
                      ? card?.text2
                      : card?.info
                        ? card?.info
                        : text2}
                  </h6>
                </div>
                {card?.img ? (
                  card?.img?.map((ob, index) => {
                    return (
                      <>
                        <img
                          key={index}
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
                  })
                ) : (
                  <img
                    src={card?.imgf ? card?.imgf : card?.flipedimage}
                    className="card-img-top p-3"
                    height="100%"
                    width="100%"
                    alt={
                      currentpath === "/by-generic-name"
                        ? innerComposition
                        : title
                    }
                  />
                )}
                {/* <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(card))}  className="btn  rounded-pill colr_btn">
                {btn}
              </Link> */}
                <div
                  onClick={() =>
                    props?.history?.push(
                      `/prod-details/${card?.category}/${proname}`,
                      {
                        data: { ...card, from: props?.location?.pathname },
                      }
                    )
                  }
                  className="btn  rounded-pill colr_btn"
                >
                  {card?.button ? card?.button : btn}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipCard;
