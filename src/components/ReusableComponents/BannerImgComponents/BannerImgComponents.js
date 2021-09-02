import React from "react";
import './BannerImgComponents.css'
const BannerWithText = (props) => {
  return (
    <>
      <div>
        <div
          className="jumbotron text-white jumbotron-image shadow "
          style={{
            backgroundImage: `linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${props?.imgSrc})`,
            objectFit: "contain",
            height: "400px",
            backgroundSize: "100% 400px",
          }}
        >
          <div className="mt-5 pt-5">
            <h1 className="text-center Typograpy_Text_h1">{props?.heading}</h1>
            <p className="text-center mt-3 Typograpy_Text_h4"> {props?.subHeading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithText;
