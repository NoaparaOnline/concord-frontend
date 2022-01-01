import React from 'react'
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";

import { FirstTime } from '../components/HomeComponents/ProductsData/productsfirstimelaunch';
import { Helmet } from 'react-helmet';
const Products_firsttime = (props) => {
   
    const LinksBan = [
        {
          subLinkName: "Home",
          subDash: "/",
          subLink: "/",
        },
        {
          subLinkName: "Products",
          subDash: "/",
          subLink: "/products",
        },
      ];
    
    

    return (
        <>
        <Helmet>
        <title>First Time Launching - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        heading={"First Time Launching"}
        subHeading={`FIRST TIME LAUNCHING`}
        LinksBan={LinksBan}
        
        // backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        height={""}
        backgroundSize={""}
        conmarpad={""}
        fontsize={"45px"}
      />

<div className="container my-5">
      <div className="container cards Responsive_Margin_Screen">
      <div className="Responsive_Margin_Screen" style={{ marginBottom: "100px" }}>
        <div className="row">
       
              {FirstTime.map((ob, index) => (
                
               <React.Fragment key={ob.id}>
                 {/* index offset after 5 cards function */}
               {/* <div  className={index===0 || index===5 || index===9 ? `col-lg-2 offset-1 d-none d-lg-block d-md-none col-md-4 mt-3  col-sm-12 custome-card-test`:`col-lg-2 d-none d-lg-block d-md-none col-md-4 mt-3   col-sm-12 custome-card-test`}>
                 <FlipCard card={ob} {...props} />
               </div>
               <div  className="custome_xs_screen  d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12 mt-3 custome-card-test ">
                 <SingleCard card={ob} {...props} />
               </div> */}
               <div className="col-lg-3 d-none d-lg-block d-md-none">
               <FlipCard card={ob} {...props} />
              </div>

              <div className="col-lg-3 d-lg-none d-sm-block col-md-6">
              <SingleCard card={ob} {...props} />
              </div>
               {/* <div  className={index===0 || index===5 || index===9 ? `col-lg-2 offset-1 d-none d-lg-block d-md-none col-md-4 mt-3  col-sm-12 custome-card-test`:`col-lg-2 d-none d-lg-block d-md-none col-md-4 mt-3   col-sm-12 custome-card-test`}>
                 <FlipCard card={ob} {...props} />
               </div>
               <div  className="custome_xs_screen  d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12 mt-3 custome-card-test ">
                 <SingleCard card={ob} {...props} />
               </div> */}
               </React.Fragment>
              ))}
            </div>
          </div>
          </div>
          </div>

      <CompanyLogos />
    </>
    )
}

export default Products_firsttime
