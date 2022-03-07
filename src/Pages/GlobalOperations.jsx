import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/globalbanner.jpg";
import flag1 from "../Statics/assets/flags/fl1.jpg";
import flag2 from "../Statics/assets/flags/fl2.jpg";
import flag3 from "../Statics/assets/flags/fl3.jpg";
import flag4 from "../Statics/assets/flags/fl4.jpg";
import flag5 from "../Statics/assets/flags/fl5.jpg";
import flag6 from "../Statics/assets/flags/fl6.jpg";
import flag7 from "../Statics/assets/flags/fl7.jpg";
import flag8 from "../Statics/assets/flags/fl8.jpg";
import flag9 from "../Statics/assets/flags/fl9.jpg";
import flag10 from "../Statics/assets/flags/fl10.jpg";

import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";
const GlobalOPerations = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const global_operation = filterComponentData(component, "global_operation", lang)
  const global_operation_flag = filterComponentData(component, "global_operation_flag", lang)

  const { t } = useTranslation('common');
  const flagsCol1 = [
    {
      id: 0,
      imageURL: flag1,
    },
    {
      id: 1,
      imageURL: flag2,
    },
    {
      id: 2,
      imageURL: flag3,
    },
    {
      id: 3,
      imageURL: flag4,
    },
    {
      id: 4,
      imageURL: flag5,
    },
    {
      id: 5,
      imageURL: flag6,
    },
    {
      id: 6,
      imageURL: flag7,
    },
    {
      id: 7,
      imageURL: flag8,
    },
    {
      id: 8,
      imageURL: flag9,
    },
    {
      id: 9,
      imageURL: flag10,
    },
  ];

  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('global_operations.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('globaloperation.global_operation_text')}
        subHeading={t('globaloperation.global_operation_text').toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.4), rgba(20, 20, 19, 0.2)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <div className="row ">
              {global_operation_flag?.length < 1 ? flagsCol1.map((ob, index) => {
                return (
                  <>
                    <div className="col-lg-5 col-md-5 col-md-6  col-sm-6 col-xs-12 mb-4  d-flex justify-content-center">
                      <img
                        className="mb-3 me-5  boxImgShadow"
                        alt="global operations"
                        width="100%"
                        src={ob.imageURL}
                      />
                    </div>
                  </>
                );
              }) : global_operation_flag?.map((ob, index) => {
                return (
                  <>
                    <div className="col-lg-5 col-md-5 col-md-6  col-sm-6 col-xs-12 mb-4  d-flex justify-content-center">
                      <img
                        className="mb-3 me-5  boxImgShadow"
                        alt="global operations"
                        width="100%"
                        src={ob?.image}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {
            global_operation?.desc ? <div className="col-lg-7 col-sm-12 text-justify" dangerouslySetInnerHTML={{ __html: global_operation?.desc }} /> :
              <div className="col-lg-7 col-sm-12 text-justify">
                <div className="mb-4">
                  <strong className="Typography_styling">
                    {t('globaloperation.cpl_text') + " "}
                  </strong>
                  {t('global_operations.desc_1_text')}
                  <strong>{t('global_operations.desc_2_text')}</strong> {t('global_operations.desc_3_text')}
                </div>
                <div className="mb-4">
                  <strong>{t('global_operations.cpl_text') + " "}</strong>
                  {t('global_operations.desc_4_text')}
                </div>
                <div className="mb-4">
                  {t('global_operations.presently_text') + " "}<strong>{t('global_operations.cpl_text') + " "}</strong> products are exporting to Bhutan,
                  {t('global_operations.desc_5_text')}
                </div>
                <div className="mb-4">
                  {t('global_operations.desc_6_text')}
                </div>
                <div className="mb-4">
                  {t('global_operations.desc_7_text')}
                  <div>
                    <span>
                      {t('global_operations.email_text') + ": "}
                      <a
                        href="mailto:Cplibd.export@gmail.com"
                        style={{ textDecoration: "none" }}
                      >
                        Cplibd.export@gmail.com
                      </a>
                    </span>
                  </div>
                  <div>
                    <span> {t('global_operations.cell_text')}</span>
                  </div>
                </div>
              </div>
          }

        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default GlobalOPerations;
