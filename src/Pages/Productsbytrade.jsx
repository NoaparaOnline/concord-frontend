import React, { useState } from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";
import { ByTrade } from "../components/HomeComponents/ProductsData/productsbytradedata";
import acedolfr from "../Statics/assets/TabletsFrontBack/Acedol-Tabletfr.jpg";
import acedolbk from "../Statics/assets/TabletsFrontBack/ban-Acedol-Tabletbk.jpg";
import acubisfr from "../Statics/assets/TabletsFrontBack/Acubis-2.5fr.jpg";
import acubisbk from "../Statics/assets/TabletsFrontBack/ban-Acubis-2bk.jpg";
import conzifr from "../Statics/assets/TabletsFrontBack/Conzi-100-mlfr.jpg";
import conzibk from "../Statics/assets/TabletsFrontBack/ban-Conzi-100-mlbk.jpg";
import Dopagutfr from "../Statics/assets/TabletsFrontBack/Dopagut-60-mlfr.jpg";
import Dopagutbk from "../Statics/assets/TabletsFrontBack/ban-Dopagut-60-mlbk.jpg";
import histaminefr from "../Statics/assets/TabletsFrontBack/Anti-histaminefr.jpg";
import histaminebk from "../Statics/assets/TabletsFrontBack/Anti-histaminebk.jpg";



const Products_bytrade = () => {
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

 

  const [obj , setObj] = useState(ByTrade);


  const filteredtype = (type) => {
    if (type==="All") {
      setObj(ByTrade)
    }
    else if (type==="Syrup") {
      const filterd = ByTrade.filter(category => 
        category.type === "Syrup" )
      setObj(filterd);
    }
    else if (type==="Tablet") {
      const filterd = ByTrade.filter(category => 
        category.type === "Tablet" )
      setObj(filterd);
    }
    else if (type==="Capsule") {
      const filterd = ByTrade.filter(category => 
        category.type === "Capsule" )
      setObj(filterd);
    }
    else if (type==="Hand Rub") {
      const filterd = ByTrade.filter(category => 
        category.type === "Hand Rub" )
      setObj(filterd);
    }
    else if (type==="Injectables") {
      const filterd = ByTrade.filter(category => 
        category.type === "Injectables" )
      setObj(filterd);
    }
  }

  return (
    <div>
      <BannerWithText
        heading={"By Trade Name"}
        subHeading={`BY TRADE NAME`}
        LinksBan={LinksBan}
        height={""}
        backgroundSize={""}
        
        // backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        conmarpad={""}
        fontsize={"45px"}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3 ">
            <div className="productFilterContent">
              <h3 className="filterHeading" style={{ fontWeight: "600" }}>
                Product Categories
              </h3>
              <form id="category-radio-btn" style={{color:'#666666'}}>
                <input
                  className="me-2"
                  type="radio"
                  id="all"
                  name="product-category"
                  value="1"
                  defaultChecked
                
                  onChange={()=>filteredtype("All")}
                />
                <label htmlFor="all">All</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="injectables"
                  name="product-category"
                  value="2"
                  onChange={()=>filteredtype("Injectables")}
                />
                <label htmlFor="injectables">Injectables</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="syrup"
                  name="product-category"
                  value="3"
                  onChange={()=>filteredtype("Syrup")}
                />
                <label htmlFor="syrup">Syrup</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="tablet"
                  name="product-category"
                  value="4"
                  onChange={()=>filteredtype("Tablet")}
                />
                <label htmlFor="tablet">Tablet</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="capsule"
                  name="product-category"
                  value="5"
                  onChange={()=>filteredtype("Capsule")}
                />
                <label htmlFor="capsule">Capsule</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="handrub"
                  name="product-category"
                  value="6"
                  onChange={()=>filteredtype("Hand Rub")}

                />
                <label htmlFor="handrub">Hand Rub</label>
              </form>
            </div>
          </div>

          <div className="col-sm-12 col-lg-9 mt-0">
            <div className="cards ">
              <div className="row">
                {obj.map((ob, index) => (
                  <React.Fragment key={ob.id}>
                    <>
                      <div className="col-lg-3 d-none d-lg-block d-md-none">
                        <FlipCard card={ob} />
                      </div>
                      <div className="col-lg-3 d-lg-none d-sm-block col-md-6 col-sm-6 col-xs-12">
                        <SingleCard card={ob} />
                      </div>
                    </>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Products_bytrade;
