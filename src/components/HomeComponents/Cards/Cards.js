import React from "react";
import { Link } from "react-router-dom";
import third from "../../../Statics/assets/fac-QC.jpg";
import second from"../../../Statics/assets/fac-RD.jpg";
import fourth from "../../../Statics/assets/warehouse-1.jpg";
import first from"../../../Statics/assets/fac-production.jpg";
import "./Cards.css";
const Cards = () => {
  const cards = [
    {
      id:0,
      name: "Production",
      imageURL: first,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "/facilities_product",
    },
    {
      id:1,
      name: "Research & Development",
      imageURL: second,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "/facilities_researchdevrsttime",
    },
    {
      id:2,
      name: "Quality Control",
      imageURL: third,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "/facilities_quality",
    },
    {
      id:3,
      name: "Warehouse",
      imageURL: fourth,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "/facilities_warhouse",
    },
  ];
  return (
    <div className="container">
      <div className="row" style={{ padding: "10px" }}>
        {cards.map((ob,index) => {
          return (
            <div
              key={ob.id}
              className="col-12 col-xl-6 mt-5 mx-auto"
              style={{ display: "flex", flexDirection: "row", padding: "10px" }}
            >
              <div className="row">
                <div className="col-sm-12 col-lg-6 ">
                  <img alt="" src={ob.imageURL} className="img-fluid" />
                </div>
                <div
                  className="col-sm-12 col-lg-6"
                  style={{
                    alignItems: "flex-start",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <h5 style={{ color: "#337ab7" }}>{ob.name}</h5>
                  <p className="text-start">{ob.text}</p>

                  <Link
                    to={ob.link}
                    className="dd"
                  >
                    Read Me
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
