import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { getAllThana } from "../Store/Actions/staticActions";

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
      id: 0,
      name: "Medical Promotion Officer (MPO)",
      btnlink: "/careers-inner-page",
      namelink: "/careers-inner-page",
      postdate: "Posted 3 month ago",
    },
    {
      id: 1,
      name: "Area Manager (AM)",
      btnlink: "/careers-inner-page",
      namelink: "/careers-inner-page",
      postdate: "Posted 3 month ago",
    },
    {
      id: 2,
      name: "Regional Sales Manager (RSM)",
      btnlink: "/careers-inner-page",
      namelink: "/careers-inner-page",
      postdate: "Posted 3 month ago",
    },
    {
      id: 3,
      name: "Other Positions",
      btnlink: "/careers-inner-page",
      namelink: "/careers-inner-page",
      postdate: "Posted 3 month ago",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllThana());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        heading={"ALL JOBS"}
        subHeading={`JOBS`}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
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
              <div key={index} className="card col-lg-12 mb-3">
                <div className="card-body">
                  <Link
                    to={{
                      pathname: ob.namelink + `/${ob.id}`,
                      state: { data: ob },
                    }}
                    style={{
                      fontSize: "16px",
                      color: "#0066b3",
                      textDecoration: "none",
                    }}
                  >
                    {ob.name}
                  </Link>

                  <span className="d-flex justify-content-end">
                    <Link
                      to={{
                        pathname: ob.btnlink + `/${ob.id}`,
                        state: { data: ob },
                      }}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <div
                        className="btn btn-primary"
                        style={{
                          fontSize: "14px",
                          backgroundColor: "#0066b3",
                          borderRadius: "0px",
                        }}
                      >
                        Apply Now
                      </div>
                    </Link>
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
    </>
  );
};

export default Careers;
