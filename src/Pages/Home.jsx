import "../App.css";
import {
  Heading,
  Cards,
  Carousel,
  HomeCards,
  Affiliates,
  NearestDeliveryCenter,
  Milestones,
  CompanyLogos,
  WeAreServing,
  TextSectionContainer,
  Globaloperation,
} from "../components";

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Home = (props) => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const slider = filterComponentData(component, "slider", lang);
  const weareserving = filterComponentData(component, "we_are_serving", lang);
  const servingentity = filterComponentData(component, "serving_entity", lang);
  const servingdesc = filterComponentData(component, "serving", lang);
  const facilities = filterComponentData(component, "facilities", lang);
  const facilitieCard = filterComponentData(component, "facilitiy_card", lang);
  const afliatesheading = filterComponentData(
    component,
    "affiliates_heading",
    lang
  );
  const afliates = filterComponentData(component, "our_affiliates", lang);
  const service = filterComponentData(component, "service", lang);
  const globaloperation = filterComponentData(
    component,
    "global_operations",
    lang
  );
  const productheader = filterComponentData(
    component,
    "our_product_header",
    lang
  );
  const product = filterComponentData(component, "home_product_card", lang);
  const milestone = filterComponentData(component, "milestone", lang);
  const milestoneheader = filterComponentData(
    component,
    "milestone_heading",
    lang
  );
  const nearest_delivery_center_list = filterComponentData(
    component,
    "nearest_delivery_center_list",
    lang
  );
  const nearest_delivery_center_user = filterComponentData(
    component,
    "nearest_delivery_center_users",
    lang
  );
  const nearest_delivery_center = filterComponentData(
    component,
    "nearest_delivery_center",
    lang
  );
  const company_logs = filterComponentData(component, "company_logs", lang);
  const { t } = useTranslation("common");
  const label = {
    HeadFacilities: t("label.facilities_text"),
    HeadOurProduct: t("label.our_product_text"),
    Milestones: t("label.milestones_text"),
    Our_Affiliates: t("label.our_affiliates"),
  };
  const milestone_data = [
    {
      id: 0,
      year: t("milestone.year_text"),
      text: t("milestone.inaufuration_text"),
    },
    {
      id: 1,
      year: t("milestone.year_text"),
      text: t("milestone.factory_text"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t("helmet.concord_pharma")}</title>
      </Helmet>

      {/* <Navbar/> */}
      <Carousel slides={slider} />
      <WeAreServing weareserving={weareserving} servingentity={servingentity} />
      <TextSectionContainer servingdesc={servingdesc} />

      <Heading
        heading={
          facilities?.heading ? facilities?.heading : label.HeadFacilities
        }
        subheading={
          facilities?.text
            ? facilities?.text
            : t("heading.load_human_medicine_text")
        }
      />

      <Cards facilitieCard={facilitieCard} />
      <Heading
        heading={
          afliatesheading?.heading
            ? afliatesheading?.heading
            : label.Our_Affiliates
        }
      />
      <Affiliates afliates={afliates} />
      <Globaloperation service={service} globaloperation={globaloperation} />
      <div id="test">
        <Heading
          heading={
            productheader?.heading
              ? productheader?.heading
              : label.HeadOurProduct
          }
        />
      </div>
      <HomeCards props={props} product={product} />

      <Milestones
        heading={milestoneheader?.heading ? milestoneheader?.heading : label}
        milestone_data={milestone?.length < 1 ? milestone_data : milestone}
        button={
          <>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center my-5 text-primary">
                <Link
                  to="/milestones"
                  style={{
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "1.7em",
                    padding: "11px 30px",
                    backgroundColor: "#0066b3",
                    width: "170px",
                    height: "50px",
                    justifyContent: "center",
                  }}
                  className="btn btn-primary rounded-pill d-flex align-items-center"
                >
                  <span>{t("home.view_more").toUpperCase()}</span>
                </Link>
              </div>
            </div>
          </>
        }
        colorclassName={"colrbck"}
      />

      <NearestDeliveryCenter
        heading={label}
        nearest_delivery_center_list={nearest_delivery_center_list}
        nearest_delivery_center_user={nearest_delivery_center_user}
        nearest_delivery_center={nearest_delivery_center}
      />

      <CompanyLogos company_logs={company_logs} />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
