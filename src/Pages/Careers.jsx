import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { getAllThana } from "../Store/Actions/staticActions";
import { filterComponentData } from "../Utils/functions";

const Careers = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const career_jobs = filterComponentData(component, "career_jobs", lang)
  const { t } = useTranslation('common')
  const LinksBan = [
    {
      subLinkName: t('carrers.home_text'),
      subDash: "/",
      subLink: "/",
    },
  ];
  const CareersLinks = [
    {
      id: 0,
      name: t('carrers.pos_1_text'),
      btnlink: "/careers-detail",
      namelink: "/careers-detail",
      postdate: t('carrers.date_1_text'),
    },
    {
      id: 1,
      name: t('carrers.pos_2_text'),
      btnlink: "/careers-detail",
      namelink: "/careers-detail",
      postdate: t('carrers.date_2_text'),
    },
    {
      id: 2,
      name: t('carrers.pos_3_text'),
      btnlink: "/careers-detail",
      namelink: "/careers-detail",
      postdate: t('carrers.date_3_text'),
    },
    {
      id: 3,
      name: t('carrers.pos_4_text'),
      btnlink: "/careers-detail",
      namelink: "/careers-detail",
      postdate: t('carrers.date_4_text'),
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
        <title> {t('carrers.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        heading={t('carrers.all_jobs_text')}
        subHeading={t('carrers.jobs_text').toUpperCase()}
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
              {t('carrers.job_arch')}
            </span>
          </h3>

          {career_jobs?.length < 1 ? CareersLinks.map((ob, index) => {
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
                        {t('carrers.apply_now')}

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
          }) : career_jobs?.map((ob, index) => {
            return (
              <div key={index} className="card col-lg-12 mb-3">
                <div className="card-body">
                  <Link
                    to={{
                      pathname: ob?.link,
                      state: { data: ob },
                    }}
                    style={{
                      fontSize: "16px",
                      color: "#0066b3",
                      textDecoration: "none",
                    }}
                  >
                    {ob?.name}
                  </Link>

                  <span className="d-flex justify-content-end">
                    <Link
                      to={{
                        pathname: ob?.link,
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
                        {ob?.button}

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
                    <span style={{ color: "#0066b3" }}>{ob?.posted}</span>
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
