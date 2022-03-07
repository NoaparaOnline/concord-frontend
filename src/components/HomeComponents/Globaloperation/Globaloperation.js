import React from "react";
import imgss from "../../../Statics/assets/bigCardimag.jpg";
import { Link } from "react-router-dom";
import "./Globaloperation.css";
import useMediaQuery from "../../ReusableComponents/MediaQueryCustomHook";
import { useTranslation } from "react-i18next";
const Globaloperation = ({ service, globaloperation }) => {
  const { t } = useTranslation("common");
  const isDesktoplg = useMediaQuery('(min-width: 992px)');
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 section-card-border">
          <div className="section-card-back"></div>
          <div className="section-card-position">
            <div className="section-card-overlay">
              <h6 className="section-card-subHead" style={{ fontSize: isDesktoplg ? "" : "12px" }}>{service?.head1 ? service?.head1 : t("globaloperation.what_we_do_text")}</h6>
              <h3 className="section-card-heading p-0" style={{ fontSize: isDesktoplg ? "" : "12px" }}>{service?.head2 ? service?.head2 : t("globaloperation.manufacturing_text")}</h3>
              <h3 className="section-card-heading p-0" style={{ fontSize: isDesktoplg ? "" : "12px" }}>{service?.head3 ? service?.head3 : t("globaloperation.exporting_text")}</h3>
              <h3 className="section-card-heading p-0" style={{ fontSize: isDesktoplg ? "" : "12px" }}>{service?.head4 ? service?.head4 : t("globaloperation.serving_text")}</h3>
            </div>
            <Link
              to={service?.link ? service?.link : '/'}
              className="btn btn-primary d-flex justify-content-center rounded-pill btn-section-card m-0 mt-2 "
              style={{ color: "#fff", backgroundColor: "#0066b3" }}
            >
              {service?.button ? service?.button : t("globaloperation.read_more_text")}
            </Link>
          </div>
        </div>
        <div className="col-lg-4 mt-3">
          <div className="card card_custom">
            <div className="card-body">
              <h1 className="card-title colrry">
                {globaloperation?.title ? globaloperation?.title : t("globaloperation.global_operation_text")}
              </h1>
              <img
                src={globaloperation?.image ? globaloperation?.image : imgss}
                className="card-img-top"
                alt="global operation"
              />
            </div>
            {
              globaloperation?.desc ? <span className=" px-2 ml-3" dangerouslySetInnerHTML={{ __html: globaloperation?.desc }} /> : <h4 className="card-title text-title px-2 ml-3">
                <strong className="Typography_styling">
                  {t("globaloperation.cpl_text")}
                </strong>
                {t("globaloperation.desc_text")}
              </h4>
            }

            <Link
              to="/global-operation"
              className="btn btn-primary d-flex justify-content-center rounded-pill colr_btn m-auto mb-3"
              style={{ color: "#fff", backgroundColor: "#0066b3" }}
            >
              {t("globaloperation.read_more_text")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globaloperation;
