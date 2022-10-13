import React from "react";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";
import productGuide from "../Statics/assets/Journal/product-guide-th.jpg";
import { useLocation } from "react-router-dom";

export default function MediaJournalGuide(props) {
  const location = useLocation();
  let data = location?.state;
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const { t } = useTranslation("common");
  const LinksBan = [
    {
      subLinkName: t("media_events.home_text"),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t("media_events.media_text"),
      subDash: "/",
      subLink: "/media",
    },
  ];
  function importAll(data) {
    let images = {};
    data.keys().map((item, index) => {
      images[item.replace("./", "")] = data(item);
      return "";
    });
    return images;
  }

  const annualConfrence2013 = importAll(
    require.context(
      "../Statics/assets/Annualconfirence2013",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );
  const annualConfrence2014 = importAll(
    require.context(
      "../Statics/assets/Annualconfirence2014",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );
  const dapazinelunchingprogram = importAll(
    require.context(
      "../Statics/assets/Dapazinelunchingprogram",
      false,
      /\.(png|jpe?g|svg|JPG)$/
    )
  );

  const imagesData1 = Object.keys(annualConfrence2013);
  const imagesData2 = Object.keys(annualConfrence2014);
  const imagesData3 = Object.keys(dapazinelunchingprogram);

  const event1 = imagesData1?.slice(0, 6);
  const event2 = imagesData2?.slice(0, 6);
  const event3 = imagesData3?.slice(0, 6);

  const moreImages = (text) => {
    props?.history.push("/photo", text);
  };

  return (
    <>
      <Helmet>
        <title>{t("journal.helmet.title_text")}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t("journal.journal_text")}
        subHeading={t("journal.journal_text_guide").toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="journal-product-guide">
        <div className="left-view" style={{ width: "15%" }}></div>
        <div className="mid-view mb-5" style={{ width: "50%" }}>
          <h3>{data?.button}</h3>
          <div className="product-guide-details" style={{ width: "100%" }}>
            <div className="product-guide-img" style={{ width: "70%" }}>
              <img src={data?.image} alt="" width="100%" />
            </div>
            <p className="product-guide-description ml-3">
              {data?.description ? data?.description : "---------------"}
            </p>
          </div>
        </div>
        <div className="right-view" style={{ width: "15%" }}></div>
      </div>
    </>
  );
}
