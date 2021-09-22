import React from "react";
import icon from "../../../Statics/assets/TabletsFrontBack/Acedol-Tabletfr.jpg";
const DashCard = ({ data }) => {
  return (
    <>
      <div
        className="card style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "300px",
        }}
      >
        <div className="">
          <div className="row mb-3">
            Z
            <div className="col">
              <div
                className="text-left"
                style={{ color: "#0066b3", minHeight: "240px" }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#000000",
                  }}
                >
                  <span>{data.head}</span>
                </div>

                <div className="mt-2">
                  <div className="mt-2">
                    <i className="ms-1 fa fa-user" aria-hidden="true"></i>{" "}
                    <span
                      className="ms-3"
                      style={{ color: "#565656", fontSize: "16px" }}
                    >
                      {data.name}
                    </span>
                  </div>
                  <div className="mt-2">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                    <span
                      className="ms-3"
                      style={{
                        color: "#565656",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {data.position}
                    </span>
                  </div>
                  <div className="mt-2">
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    <span
                      className="ms-3"
                      style={{
                        color: "#565656",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {data.num}
                    </span>
                  </div>
                  <div className="mt-2">
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#0066b3" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      <span
                        className="ms-3"
                        style={{
                          color: "#565656",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {data.mailname}
                      </span>
                    </a>
                  </div>

                  <div className="mt-2">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#0066b3" }}
                    >
                      <i
                        className="fa fa-map-marker"
                        aria-hidden="true"
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      ></i>
                      {"  "}
                      <span
                        className="ms-3"
                        style={{
                          color: "#565656",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {data.mapname}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
