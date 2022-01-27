import React from "react";
import { Link } from "react-router-dom";
import third from "../../../Statics/assets/fac-QC.jpg";
import second from "../../../Statics/assets/fac-RD.jpg";
import fourth from "../../../Statics/assets/warehouse-1.jpg";
import first from "../../../Statics/assets/fac-production.jpg";
import "./Cards.css";
import { useTranslation } from "react-i18next";
const Cards = () => {
  const { t } = useTranslation("common");
  const cards = [
    {
      id: 0,
      name: t("cards.prod_text"),
      imageURL: first,
      text: t("cards.desc"),
      link: "/product",
    },
    {
      id: 1,
      name: t("cards.research_devlop_text"),
      imageURL: second,
      text: t("cards.desc"),
      link: "/research-and-development",
    },
    {
      id: 2,
      name: t("cards.quality_control_text"),
      imageURL: third,
      text: t("cards.desc"),
      link: "/quality",
    },
    {
      id: 3,
      name: t("cards.ware_house_text"),
      imageURL: fourth,
      text: t("cards.desc"),
      link: "/warhouse",
    },
  ];
  return (
    <div className="container">
      <div className="row" style={{ padding: "10px" }}>
        {cards.map((ob, index) => {
          return (
            <div
              key={ob.id}
              className="col-12 col-xl-6 mt-5 mx-auto"
              style={{ display: "flex", flexDirection: "row", padding: "10px" }}
            >
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 imgmargin">
                  <img
                    alt="facilities"
                    src={ob.imageURL}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 smallscr_responsive"
                  style={{
                    alignItems: "flex-start",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <h5 style={{ color: "#337ab7", fontSize: "24px" }}>
                    {ob.name}
                  </h5>
                  <p className="text-justify">{ob.text}</p>

                  <Link to={ob.link} className="dd">
                {t('cards.read_me_btn')}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
