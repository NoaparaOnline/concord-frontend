import React from "react";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";
import productGuide from "../Statics/assets/Journal/product-guide-th.jpg";
import { Link, useHistory } from "react-router-dom";

const MediaJournal = ({ history }) => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const media_journal = filterComponentData(component, "media_journal", lang);

  const { t } = useTranslation("common");
  const LinksBan = [
    {
      subLinkName: t("journal.home_text"),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t("journal.media_text"),
      subDash: "/",
      subLink: "/media",
    },
  ];
  return (
    <>
      <Helmet>
        <title>{t("journal.helmet.title_text")}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t("journal.journal_text")}
        subHeading={t("journal.journal_text").toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      {media_journal?.length < 1 ? (
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-3 product-guide-div-hover">
              <Link to={"/journal-guide"}>
                {" "}
                <img src={productGuide} alt="" width="100%" className="mt-3" />
                <button className="product-guide-btn">
                  {t("journal.product_guide_btn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row my-5">
            {media_journal?.map((value, index) => (
              <div key={index} className="col-lg-3 product-guide-div-hover">
                {/* <Link to={"/journal-guide"}> */}{" "}
                <img src={value?.image} alt="" width="100%" className="mt-3" />
                <button
                  onClick={() => history.push("/journal-guide", value)}
                  className="product-guide-btn"
                >
                  {value?.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default MediaJournal;
