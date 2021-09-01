import React from "react";
import { Link } from "react-router-dom";
import first from "../../assets/fac-QC.jpg";
import second from "../../assets/fac-RD.jpg";
import third from "../../assets/warehouse-1.jpg";
import fourth from "../../assets/fac-production.jpg";
import "./Cards.css";
const Cards = () => {
  const cards = [
    {
      id:0,
      name: "Production",
      imageURL: first,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "#",
    },
    {
      id:1,
      name: "Research & Development",
      imageURL: second,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "#",
    },
    {
      id:2,
      name: "Quality Control",
      imageURL: third,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "#",
    },
    {
      id:3,
      name: "Warehouse",
      imageURL: fourth,
      text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
      link: "#",
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
                    style={{
                      textDecoration: "none",
                      fontWeight: 500,
                      marginTop: 0,
                      height: "45px",
                      width: "130px",
                    }}
                    className="dd"
                  >
                    <span>Read Me</span>
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
