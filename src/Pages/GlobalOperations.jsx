import React from "react";
import { CompanyLogos, Heading } from "../components";
import bannerimg from "../assets/parallax_contact.jpg";
import flag1 from "../assets/Managing-Director.png";


import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const GlobalOPerations = () => {


    function importAll(data) {
        let images = {};
        data.keys().map((item, index) => {
          images[item.replace("./", "")] = data(item);
          return "";
        });
        return images;
      }
      
      const images = importAll(
        require.context("../assets/flags", false, /\.(png|jpe?g|svg)$/)
      );

       console.log(images);

      //images?.['f1.jpg'].default
    

    return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Global Operation"}
        subHeading={`HOME / GLOBAL OPERATION`}
      />

      <div className="container">
        <div className="row">


         {/* {images.map((ob,index) => {
          return (   
          <div className="col-lg-2">

            <img src={}/>

          </div>

            );
            })} */}
          <div className="col-lg-8">

          </div>
          
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default GlobalOPerations;
