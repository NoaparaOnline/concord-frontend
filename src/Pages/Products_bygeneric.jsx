import React from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";

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
      subLink: "/products0",
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
    {
      id: 5,
      title: "Unilor 5 mg Tablet",
      text1: "Anti-histamine",
      text2: "Anti-histamine",
      img: [
        {
          id: 4,
          imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/eng-Anti-histamine.jpg",
          imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Anti-histamine.jpg",
        },
      ],
      btn: "Read More",
    },
    {
      id: 6,
      title: "Unilor 5 mg Tablet",
      text1: "Anti-histamine",
      text2: "Anti-histamine",
      img: [
        {
          id: 4,
          imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/eng-Anti-histamine.jpg",
          imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Anti-histamine.jpg",
        },
      ],
      btn: "Read More",
    },
    {
      id: 7,
      title: "Unilor 5 mg Tablet",
      text1: "Anti-histamine",
      text2: "Anti-histamine",
      img: [
        {
          id: 4,
          imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/eng-Anti-histamine.jpg",
          imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Anti-histamine.jpg",
        },
      ],
      btn: "Read More",
    },
    {
      id: 8,
      title: "Unilor 5 mg Tablet",
      text1: "Anti-histamine",
      text2: "Anti-histamine",
      img: [
        {
          id: 4,
          imgf: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/eng-Anti-histamine.jpg",
          imge: "https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/Anti-histamine.jpg",
        },
      ],
      btn: "Read More",
    },
  ];

  return (
    <div>
      <BannerWithText
        heading={"By Generic Name"}
        subHeading={`BY GENERIC NAME`}
        LinksBan={LinksBan}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div class="productFilterContent">
              <h3 class="filterHeading" style={{fontWeight:'600'}}>Product Categories</h3>
              <form id="category-radio-btn">
                <input
                  className="me-2"
                  type="radio"
                  id="all"
                  name="product-category"
                  value="1"
                  checked
                />
                <label for="all">All</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="injectables"
                  name="product-category"
                  value="2"
                />
                <label for="injectables">Injectables</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="syrup"
                  name="product-category"
                  value="3"
                />
                <label for="syrup">Syrup</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="tablet"
                  name="product-category"
                  value="4"
                />
                <label for="tablet">Tablet</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="capsule"
                  name="product-category"
                  value="5"
                />
                <label for="capsule">Capsule</label>
                <br />
                <input
                  className="me-2"
                  type="radio"
                  id="handrub"
                  name="product-category"
                  value="6"
                />
                <label for="handrub">Hand Rub</label>
              </form>
            </div>
          </div>

          <div className="col-sm-12 col-lg-9 mt-0">
            <div className="row">
              {card.map((ob, index) => (
                <React.Fragment key={ob.id}>
                  <>
                    <div className="col-sm-12 col-lg-4 d-none d-lg-block d-md-none">
                      <FlipCard card={ob} />
                    </div>
                    <div className="col-sm-12 col-lg-4 d-lg-none d-sm-block col-md-6">
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
