height={"400px"}
backgroundSize={"100% 400px"}
conmarpad={"mt-5 pt-5"}
fontsize={"60px"}




import React from "react";
import './BannerImgComponents.css'
import { Link } from 'react-router-dom'

const BannerWithText = (props) => {
  return (
    <>
      <div>
        <div
          className="jumbotron text-white jumbotron-image shadow Banner_Size "
          style={{
            backgroundImage: `linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${props?.imgSrc})`,
            objectFit: "contain",
            height: props?.height,
            backgroundSize: props?.backgroundSize,
          }}
        >
          <div className={props?.conmarpad}>
            <h1 className="text-center Typograpy_Text_h1" style={{fontSize: props.fontsize}}>{props?.heading}</h1>
            <p className="text-center mt-3 Typograpy_Text_h4">
            {props?.LinksBan.map((ob,index) => {
            return (  
              <>
              <Link className="linkhov" style={{ textDecoration: "none", color: "#fff" }} to={ob?.subLink}><span>{ob?.subLinkName} </span></Link><span>{ob?.subDash}</span>
              </> 
               );
              })}
               {props?.subHeading}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWithText;
