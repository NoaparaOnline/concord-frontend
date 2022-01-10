import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";

const Mediavideo = () => {
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: "Media",
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
        <title>Videos - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Videos"}
        subHeading={`Videos`}
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
          {videolinks.map((item) => {
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
                  title="This is a unique title"
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
