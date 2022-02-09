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
import { useTranslation } from 'react-i18next';



const Home = (props) => {

  const {t} = useTranslation("common")
  const label = {
    HeadFacilities: t('label.facilities_text'),
    HeadOurProduct: t('label.our_product_text'),
    Milestones: t('label.milestones_text'),
    Our_Affiliates: t('label.our_affiliates'),
  };
  const milestone_data = [
    {
      id: 0,
      year: t('milestone.year_text'),
      text: t('milestone.inaufuration_text'),
    },
    {
      id: 1,
      year: t('milestone.year_text'),
      text: t('milestone.factory_text'),
    },
  ];
  
  return (
    <>
      <Helmet>
        <title>{t('helmet.concord_pharma')}</title>
      </Helmet>

      {/* <Navbar/> */}
      <Carousel />
      <WeAreServing />
      <TextSectionContainer />

      <Heading
        heading={label.HeadFacilities}
        subheading={t('heading.load_human_medicine_text')}
      />

      <Cards />
      <Heading heading={label.Our_Affiliates} />
      <Affiliates />
      <Globaloperation />
      <Heading heading={label.HeadOurProduct} />
      <HomeCards {...props} />

      <Milestones
        heading={label}
        milestone_data={milestone_data}
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
                  <span>{t('home.view_more').toUpperCase()}</span>
                </Link>
              </div>
            </div>
          </>
        }
        colorclassName={"colrbck"}
      />

      <NearestDeliveryCenter heading={label} />

      <CompanyLogos />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
