import React from 'react'
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
const Products_firsttime = () => {
   
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
      const card = [

        {
            id:0,
            title:'Acedol Tablet',
            text1:'NSAID',
            text2:'Aceclofenac 100 mg',
            img:[{
                id:0,
                imgf:acedolfr,
                imge:acedolbk,
            }],
            btn:'Read More',
            btnlink:'/acedol-tablet'
        },
        {
            id:1,
            title:'Acubis 2.5 Tablet',
            text1:'Cardiovascular',
            text2:'Bisoprolo 2.5 mg',
            img:[{
                id:1,
                imgf:acubisfr,
                imge:acubisbk,
            }],
            btn:'Read More',
            btnlink:'/acedol-tablet'
        },
        {
            id:2,
            title:'ConziSyrup',
            text1:'Vitamin & Minerals',
            text2:'Zinc 10 mg/5ml',
            img:[{
                id:2,
                imgf:conzifr,
                imge:conzibk,
            }],
            btn:'Read More',
            btnlink:'/acedol-tablet'
        },
        {
            id:3,
            title:'Dopagut',
            text1:'Suspension',
            text2:'Gastroprokinetic',
            img:[{
                id:3,
                imgf:Dopagutfr,
                imge:Dopagutbk,
            }],
            btn:'Read More',
            btnlink:'/acedol-tablet'
    
        },
        {
            id:4,
            title:'Unilor 5 mg Tablet',
            text1:'Anti-histamine',
            text2:'Anti-histamine',
            img:[{
                id:4,
                imgf:histaminefr,
                imge:histaminebk,
            }],
            btn:'Read More',
            btnlink:'/acedol-tablet'
    
        },

    
    ];
    

    return (
        <div>
      <BannerWithText
        heading={"First Time Launching"}
        subHeading={`FIRST TIME LAUNCHING`}
        LinksBan={LinksBan}
        height={""}
        backgroundSize={""}
        conmarpad={""}
        fontsize={"45px"}
      />

<div className="container my-5">
      <div className="container cards Responsive_Margin_Screen">
      <div className="Responsive_Margin_Screen" style={{ marginBottom: "100px" }}>
        <div className="row">
       
              {card.map((ob, index) => (
               <React.Fragment key={ob.id}>
               <div  className={index===0 ? `col-lg-2 offset-1 d-none d-lg-block d-md-none col-md-4 mt-3  col-sm-12 custome-card-test`:`col-lg-2 d-none d-lg-block d-md-none col-md-4 mt-3   col-sm-12 custome-card-test`}>
                 <FlipCard card={ob} />
               </div>
               <div  className="custome_xs_screen  d-lg-none d-sm-block col-md-4 col-sm-12 col-xs-12 mt-3 custome-card-test ">
                 <SingleCard card={ob} />
               </div>
               </React.Fragment>
              ))}
            </div>
          </div>
          </div>
          </div>

      <CompanyLogos />
    </div>
    )
}

export default Products_firsttime
