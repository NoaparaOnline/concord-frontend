import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Mediavideo = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const media_video = filterComponentData(component, "media_video", lang)

  const { t } = useTranslation('common');

  const LinksBan = [
    {
      subLinkName: t('video.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('video.media_text'),
      subDash: "/",
      subLink: "/media",
    },
  ];

  const videolinks = [
    "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fconcordbd%2Fvideos%2F386494849124306%2F&show_text=false&width=560&t=0",
    "https://drive.google.com/file/d/1wpSa8NBi5tX6CflZzRcFDMjKGmztzsxz/preview",
    "https://www.youtube.com/embed/dS5ElLIny90",
    "https://www.youtube.com/embed/B796nscipb4",
    "https://www.youtube.com/embed/RoCISPPSoS0",
    "https://www.youtube.com/embed/iYhXsyoTAEY",
    "https://www.youtube.com/embed/rzKIwrwRCtw",
    "https://www.youtube.com/embed/LfLTSxROOpg",
  ];




  return (
    <>
      <Helmet>
        <title>{t('video.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('video.video_text')}
        subHeading={t('video.video_text')}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      <div className="container my-5">
        <div className="row">
          {media_video?.length < 1 ? videolinks.map((item) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-12 my-4">
                <iframe
                  style={{
                    width: "100%",
                    height: "350px",
                    border: "none",
                    overflow: "hidden",
                  }}
                  src={item}
                  title={t('video.title')}
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
            );
          }) : media_video?.map((item) => {
            return (
              <div class="col-lg-4 col-md-6 col-sm-12 my-4">
                <iframe
                  style={{
                    width: "100%",
                    height: "350px",
                    border: "none",
                    overflow: "hidden",
                  }}
                  src={item?.link}
                  title={t('video.title')}
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
      <CompanyLogos />
    </>
  );
};

export default Mediavideo;
