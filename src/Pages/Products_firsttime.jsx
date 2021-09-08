import React from 'react'
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";

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
          id: 0,
          title: "Acedol Tablet",
          text1: "NSAID",
          text2: "Aceclofenac 100 mg",
          img: [
            {
              id: 0,
              imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Acedol-Tablet.jpg",
              imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/ban-Acedol-Tablet.jpg",
            },
          ],
          btn: "Read More",
        },
        {
          id: 1,
          title: "Acubis 2.5 Tablet",
          text1: "Cardiovascular",
          text2: "Bisoprolo 2.5 mg",
          img: [
            {
              id: 1,
              imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Acubis-2.5.jpg",
              imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/ban-Acubis-2.jpg",
            },
          ],
          btn: "Read More",
        },
        {
          id: 2,
          title: "Acubis 2.5 Tablet",
          text1: "Cardiovascular",
          text2: "Bisoprolo 2.5 mg",
          img: [
            {
              id: 1,
              imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Acubis-2.5.jpg",
              imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/ban-Acubis-2.jpg",
            },
          ],
          btn: "Read More",
        },
        {
          id: 3,
          title: "ConziSyrup",
          text1: "Vitamin & Minerals",
          text2: "Zinc 10 mg/5ml",
          img: [
            {
              id: 2,
              imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Conzi-100-ml.jpg",
              imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/ban-Conzi-100-ml.jpg",
            },
          ],
          btn: "Read More",
        },
        {
          id: 4,
          title: "Dopagut",
          text1: "Suspension",
          text2: "Gastroprokinetic",
          img: [
            {
              id: 3,
              imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Dopagut-60-ml.jpg",
              imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/ban-Dopagut-60-ml.jpg",
            },
          ],
          btn: "Read More",
        },
        
      ];
    

    return (
        <div>
      <BannerWithText
        heading={"First Time Launching"}
        subHeading={`FIRST TIME LAUNCHING`}
        LinksBan={LinksBan}
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
