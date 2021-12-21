import React from "react";
const DashCard = ({

  datahead,
  dataname,
  datadesignation,
  dataemail,
  dataphone,
  dataaddress,

}) => {



  return (
    <>
      <div
        className="card style_custom"
        style={{
          backgroundColor: "#FFF",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "280px",
          minWidth: '230px',
        }}
      >
        <div className="">
          <div className="row mb-3">

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
                  <span className="text-uppercase">{datahead}</span>
                </div>

                <div className="mt-2">
                  <div className="mt-2">
                    <i className="ms-1 fa fa-user" aria-hidden="true"></i>{" "}
                    <span
                      className="ms-3"
                      style={{ color: "#565656", fontSize: "16px" }}
                    >
                      {dataname}
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
                      {datadesignation}
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
                      {dataphone}
                    </span>
                  </div>
                  <div className="mt-2">
                    {/* <a
                      href="/#"
                      style={{ textDecoration: "none", color: "#0066b3" }}
                    > */}
                      <i className="fa fa-envelope text-break" aria-hidden="true">
                        <span
                          className="ms-3"
                          style={{
                            color: "#565656",
                            fontSize: "16px",
                            fontWeight: "400",
                          }}
                        >
                          {dataemail}
                          {/* sdaaaaaaaaaaaaaaaaaaaaaa<br/>sssssssssssssssssssssssssssssssss */}
                        </span>

                      </i>

                    {/* </a> */}
                  </div>

                  <div className="mt-2">
                    {/* <a
                      href="/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#0066b3" }}
                    > */}
                      <i
                        className="fa fa-map-marker text-break"
                        aria-hidden="true"
                        style={{
                          fontSize: "20px",
                          fontWeight: "400",
                        }}
                      >
                        
                        <span
                          className="ms-3"
                          style={{
                            color: "#565656",
                            fontSize: "16px",
                            fontWeight: "400",
                          }}
                        >
                          {dataaddress}
                        </span>

                      </i>
                    {/* </a> */}
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
