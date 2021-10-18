import React, { useState } from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";
import acedolfr from '../Statics/assets/TabletsFrontBack/Acedol-Tabletfr.jpg';
import acedolbk from '../Statics/assets/TabletsFrontBack/ban-Acedol-Tabletbk.jpg';
import acubisfr from '../Statics/assets/TabletsFrontBack/Acubis-2.5fr.jpg';
import acubisbk from '../Statics/assets/TabletsFrontBack/ban-Acubis-2bk.jpg';
import conzifr from '../Statics/assets/TabletsFrontBack/Conzi-100-mlfr.jpg';
import conzibk from '../Statics/assets/TabletsFrontBack/ban-Conzi-100-mlbk.jpg';
import Dopagutfr from '../Statics/assets/TabletsFrontBack/Dopagut-60-mlfr.jpg';
import Dopagutbk from '../Statics/assets/TabletsFrontBack/ban-Dopagut-60-mlbk.jpg';
import histaminefr from '../Statics/assets/TabletsFrontBack/Anti-histaminefr.jpg';
import histaminebk from '../Statics/assets/TabletsFrontBack/Anti-histaminebk.jpg';
import {ByGeneric} from '../components/HomeComponents/ProductsData/productbygenricdata'
const Products_bygeneric = () => {
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

  

  const [obj , setObj] = useState(ByGeneric);
  const filteredtype = (type) => {
    if (type==="All") {
      setObj(ByGeneric)
    }
    else if (type==="Syrup") {
      const filterd = ByGeneric.filter(category => 
        category.type === "Syrup" )
      setObj(filterd);
    }
    else if (type==="Tablet") {
      const filterd = ByGeneric.filter(category => 
        category.type === "Tablet" )
      setObj(filterd);
    }
    else if (type==="Capsule") {
      const filterd = ByGeneric.filter(category => 
        category.type === "Capsule" )
      setObj(filterd);
    }
   
    else if (type==="Injectables") {
      const filterd = ByGeneric.filter(category => 
        category.type === "Injectables" )
      setObj(filterd);
    }
  }

  return (
    <div>
      <BannerWithText
        heading={"By Generic Name"}
        subHeading={`BY GENERIC NAME`}
        LinksBan={LinksBan}
        height={""}
        
        // backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        backgroundSize={""}
        conmarpad={""}
        fontsize={"45px"}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div className="productFilterContent">
              <h3 className="filterHeading" style={{fontWeight:'600'}}>Product Categories</h3>
              <form id="category-radio-btn">
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
               
              </form>
              </div>
          </div>

          <div className="col-sm-12 col-lg-9 mt-0">
            <div className="row">
              {obj.map((ob, index) => (
                <React.Fragment key={ob.id}>
                  <>
                    <div className="col-lg-4 d-none d-lg-block d-md-none">
                      <FlipCard card={ob} />
                    </div>
                    <div className="col-lg-4 d-lg-none d-sm-block col-md-6">
                      <SingleCard card={ob} />
                    </div>
                  </>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Products_bygeneric;
