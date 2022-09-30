import React from "react";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";
import productGuide from "../Statics/assets/Journal/product-guide-th.jpg";

export default function MediaJournal(props) {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const media_events = filterComponentData(component, "media_events", lang);
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
        subHeading={t("journal.journal_text").toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container">
        <div className="row my-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
            <div className="col-lg-3  ">
              <img src={productGuide} alt="" width="100%" className="mt-3" />
              <h4
                style={{
                  color: "white",
                  position: "absolute",
                  background: "green",
                  bottom: "0",
                  right: "10%",
                  left: "10%",
                  transform: "translate(0%, -5%)",
                  padding: "2% 0 2% 20%",
                }}
                
              >
                product Guide
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
