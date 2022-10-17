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
// import { FaDownload } from "react-icons/fa";
// import fileDownload from "js-file-download";
import axios from "axios";
import { saveAs } from "file-saver";
export default function MediaJournalGuide(props) {
  const location = useLocation();
  let data = location?.state;
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const { t } = useTranslation("common");
  console.log("data", data);
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

  // const downloadFile = async (url) => {
  //   try {
  //     let response = await axios.get(url, {
  //       responseType: "blob",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         // "Access-Control-Allow-Origin": "*",
  //       },
  //     });
  //     if (response?.data) {
  //       fileDownload(response?.data, "download.png");
  //       console.log("response.data", response.data);
  //     }
  //   } catch (e) {
  //     console.log("ERROR FROM DOWNLOADING FILE", e);
  //   }
  // };

  const downloadImage = () => {
    let extenstion = "";
    let link = data?.url.split(".");
    if (link[link.length - 1] == "pdf") {
      extenstion = "download.pdf";
    } else {
      extenstion = "download.png";
    }
    console.log("extenstion", extenstion);
    // console.log(data?.url);
    saveAs(data?.url, extenstion); // Put your image url here.
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
        <div className="left-view" style={{ width: "5%" }}></div>
        <div className="mid-view mb-5" style={{ width: "90%" }}>
          <h3 style={{ color: "#0861a2" }} className="mb-5">
            {data?.button}
          </h3>
          <div className="product-guide-details mb-4" style={{ width: "100%" }}>
            <img src={data?.image} alt="" width="30%" height="50%" />
            <p className="product-guide-description ml-3">
              {data?.description
                ? data?.description
                : "lorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaandlorem sad asjdna jsdjsadahsdaand"}
            </p>
          </div>
          <div className="download-file ">
            {data?.url && (
              <i>
                {/* <FaDownload size={15} />{" "} */}
                <button
                  onClick={() =>
                    // downloadFile(
                    //   data?.url
                    //     ? "https://storage.googleapis.com/concordpharma-9d29f.appspot.com/CMSManagement/CMSCompoenent/content/cms-385aabc6-825d-42c4-aa8e-2ce3e7aa2425-1665755234.png"
                    //     : "https://resources.pulse.icc-cricket.com/photo-resources/2022/05/18/b4749da5-37a0-49c5-bdca-e5b0a353682c/TBT-Onsite-Banner-Image-V2.jpeg?width=860&height=420"
                    // )
                    downloadImage()
                  }
                >
                  Download
                </button>
              </i>
            )}
            <span>
              {data?.filename
                ? data?.filename
                : "Oshudh Nirdeshika January 2014"}
            </span>
          </div>
        </div>
        <div className="right-view" style={{ width: "5%" }}></div>
      </div>
    </>
  );
}
