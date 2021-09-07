import React from "react";
import { Link } from "react-router-dom";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const Careers = () => {
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
  ];
  const CareersLinks = [
    {
        name: "MPO",
        btnlink: "#",
        namelink: "#",
        postdate: "Posted 1 month ago",
    },
    {
      name: "RSM",
      btnlink: "#",
      namelink: "#",
      postdate: "Posted 1 month ago",
    },
    {
      name: "AM",
      btnlink: "#",
      namelink: "#",
      postdate: "Posted 1 month ago",
    }
  ];

  return (
    <div>
      <BannerWithText
        heading={"ALL JOBS"}
        subHeading={`JOBS`}
        LinksBan={LinksBan}
        height={""}
        backgroundSize={""}
        conmarpad={""}
        fontsize={"60px"}
      />

      <div className="container mb-5">
        <div className="row">
          <h3>
            <span style={{ fontSize: "24px", color: "#0066b3" }}>
              Job Archives
            </span>
          </h3>

          {CareersLinks.map((ob, index) => {
            return (

              <div key={ob.id} className="card col-lg-12 mb-3">
                <div className="card-body">
                  <Link
                    to={ob.namelink}
                    style={{
                      fontSize: "16px",
                      color: "#0066b3",
                      textDecoration: "none",
                    }}
                  >
                    {ob.name}
                  </Link>

                  <span className="d-flex justify-content-end">
                    <div
                      className="btn btn-primary"
                      style={{ fontSize: "14px", backgroundColor: "#0066b3" }}
                    >
                      <Link to={ob.btnlink} style={{textDecoration:'none' ,color:'#fff'}}>Apply Now</Link>
                    </div>
                  </span>
                </div>
                <div className="card-footer">
                  <span
                    to="#"
                    style={{ fontSize: "14px", textDecoration: "none" }}
                  >
                    <span className="me-1">
                      <i className="fa fa-calendar-check-o"></i>
                    </span>
                    <span style={{ color: "#0066b3" }}>{ob.postdate}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Careers;
