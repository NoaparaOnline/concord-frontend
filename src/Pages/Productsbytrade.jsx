import React, { useEffect, useState } from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";
import ReactPaginate from "react-paginate";
import { ByTherapeutic } from "../components/HomeComponents/ProductsData/productbytheraputic";
import useMediaQuery from "../components/ReusableComponents/MediaQueryCustomHook";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Products_bytrade = (props) => {
  const isDesktoplg = useMediaQuery("(min-width: 992px)");
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const product_categories = filterComponentData(
    component,
    "product_categories",
    lang
  );
  const [toggleRender,setToggleRender] = useState(false)
  let pc = [...product_categories.slice(1, product_categories?.length)];

  const product_category_header = filterComponentData(
    component,
    "product_category_header",
    lang
  );
  const products = filterComponentData(component, "products", lang);
  // console.log(products,"products");
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

  const [obj, setObj] = useState(
    products?.length < 1 ? ByTherapeutic : products
  );

  const filteredtype = (type) => {
    if (products?.length < 1) {
      if (type == "All") {
        setObj(ByTherapeutic);
        setPageNumber(0);
      } else if (type == "Syrup") {
        const filterd = ByTherapeutic.filter(
          (category) => category.type == "Syrup"
        );
        setObj(filterd);
        setPageNumber(0);
      } else if (type == "Tablet") {
        const filterd = ByTherapeutic.filter(
          (category) => category.type == "Tablet"
        );
        setObj(filterd);
        setPageNumber(0);
      } else if (type == "Capsule") {
        const filterd = ByTherapeutic.filter(
          (category) => category.type == "Capsule"
        );
        setObj(filterd);
        setPageNumber(0);
      } else if (type == "Hand Rub") {
        const filterd = ByTherapeutic.filter(
          (category) => category.type == "Hand Rub"
        );
        setObj(filterd);
        setPageNumber(0);
      } else if (type == "Injectables") {
        const filterd = ByTherapeutic.filter(
          (category) => category.type == "Injectables"
        );
        setPageNumber(0);
        setObj(filterd);
      }else{
        setObj(ByTherapeutic);
        setPageNumber(0);
      }
    } else {
      if (type == "All") {
        setObj(products);
        setPageNumber(0);
      } else if (type == "Syrup") {
        const filterd = products?.filter(
          (category) => category.category == "Syrup"
        );
        setObj(filterd);
        setPageNumber(0);
        setToggleRender(true)

      } else if (type == "Tablet") {
        const filterd = products?.filter(
          (category) => category.category == "Tablet"
        );
        setObj(filterd);
        setPageNumber(0);
        setToggleRender(true)

      } else if (type == "Capsule") {
        const filterd = products.filter(
          (category) => category.category == "Capsule"
        );
        setObj(filterd);
        setPageNumber(0);
        setToggleRender(true)

      } else if (type == "Hand Rub") {
        const filterd = products?.filter(
          (category) => category.category == "Hand Rub"
        );
        setPageNumber(0);
        setObj(filterd);
        setToggleRender(true)
      } else if (type == "Injectables") {
        const filterd = products?.filter(
          (category) => category.category == "Injectables"
        );
        setObj(filterd);
        setPageNumber(0);
        setToggleRender(true)

      }
      // { filter working properly after removing below check }
      // else{
      //   setObj(ByTherapeutic);
      //   setPageNumber(0);
      //   setToggleRender(true)

      // }
      
    }
  };
  useEffect(() => {
    filteredtype(props?.location?.state?.state)
  }, [toggleRender])
  
  useEffect(() => {
    setObj(products?.length < 1 ? ByTherapeutic : products);
  }, [products?.length]);
  const [selected, setSelected] = useState("5");

  const [pageNumber, setPageNumber] = useState(0);
  const perPage = selected;
  const pageVisited = pageNumber * perPage;

  const displayUsers = obj
    .slice(pageVisited, pageVisited + perPage)
    .map((ob, index) => (
      <React.Fragment key={index}>
        <>
          <div className="col-lg-4 d-none d-lg-block d-md-none">
            <FlipCard card={ob} {...props} api={false} />
          </div>
          <div className="col-lg-4 d-lg-none d-sm-block col-md-6 col-sm-6 col-xs-12">
            <SingleCard card={ob} {...props} api={false} />
          </div>
        </>
      </React.Fragment>
    ));

  const pageCount = Math.ceil(obj?.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Helmet>
        <title>By Trade Name - Concord Pharma</title>
      </Helmet>
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
              <div className="productFilterContent1">
                <h3 className="filterHeading" style={{ fontWeight: "600" }}>
                  {product_category_header?.heading
                    ? product_category_header?.heading
                    : "Product Categories"}
                </h3>
                <form id="category-radio-btn" style={{ color: "#666666" }}>
                  <input
                    className="me-2"
                    type="radio"
                    id="all"
                    name="product-category"
                    value="1"
                    defaultChecked={
                      props?.location?.state?.state === "All" ||  props?.location?.state?.state === undefined ? true : false
                    }
                    onChange={() => filteredtype("All")}
                  />
                  <label htmlFor="all">All</label>
                  <br />
                  {product_categories?.length < 1 ? (
                    <>
                      <input
                        className="me-2"
                        type="radio"
                        id="injectables"
                        name="product-category"
                        value="2"
                        defaultChecked={
                          props?.location?.state?.state == "Injectables" ? true : false
                        }
                        onChange={() => filteredtype("Injectables")}
                      />
                      <label htmlFor="injectables">Injectables</label>
                      <br />
                      <input
                        className="me-2"
                        type="radio"
                        id="syrup"
                        name="product-category"
                        value="3"
                        defaultChecked={
                          props?.location?.state?.state == "Syrup" ? true : false
                        }
                        onChange={() => filteredtype("Syrup")}
                      />
                      <label htmlFor="syrup">Syrup</label>
                      <br />
                      <input
                        className="me-2"
                        type="radio"
                        id="tablet"
                        name="product-category"
                        value="4"
                        defaultChecked={
                          props?.location?.state?.state == "SyrTabletup" ? true : false
                        }
                        onChange={() => filteredtype("Tablet")}
                      />
                      <label htmlFor="tablet">Tablet</label>
                      <br />
                      <input
                        className="me-2"
                        type="radio"
                        id="capsule"
                        name="product-category"
                        value="5"
                        defaultChecked={
                          props?.location?.state?.state == "Capsule" ? true : false
                        }
                        onChange={() => filteredtype("Capsule")}
                      />
                      <label htmlFor="capsule">Capsule</label>
                      <br />
                      <input
                        className="me-2"
                        type="radio"
                        id="handrub"
                        name="product-category"
                        value="6"
                        defaultChecked={
                          props?.location?.state?.state == "Hand Rub" ? true : false
                        }
                        onChange={() => filteredtype("Hand Rub")}
                      />
                      <label htmlFor="handrub">Hand Rub</label>
                    </>
                  ) : (
                    pc?.map((item) => (
                      <>
                        <input
                          className="me-2"
                          type="radio"
                          id="capsule"
                          name="product-category"
                          value={item?.name}
                          defaultChecked={
                            props?.location?.state?.state == item?.name ? true : false
                          }
                          onChange={() => filteredtype(item?.name)}
                        />
                        <label htmlFor={item?.name}>{item?.name}</label>
                        <br />
                      </>
                    ))
                  )}
                </form>
              </div>

              {/* <div className="">
            <label className="my-2" style={{fontSize:'18px',fontWeight:'500',color:'#565656'}}>No of Products:</label>
                <select
            className="form-control form-select"
            name="sm"
            onChange={(e) => {
              setSelected(e.target.value);
             
            }}
            value={selected}
          >
            <option selected>5</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            
          </select>
            </div> */}
            </div>
          </div>

          <div className="col-sm-12 col-lg-9 mt-0">
            <div className="row mb-3">
              <div className="col-lg-6">
                Select Items Per Page
                <div
                  class="btn-group ms-3"
                  role="group"
                  aria-label="First group"
                >
                  <button
                    className={
                      selected === "5"
                        ? "btn  btn-secondary"
                        : "btn btn-light  "
                    }
                    style={{ width: isDesktoplg ? "70px" : "55px" }}
                    onClick={(e) => setSelected(e.target.value)}
                    value="5"
                  >
                    5
                  </button>
                  <button
                    className={
                      selected === "10"
                        ? "btn btn-secondary"
                        : "btn btn-light  "
                    }
                    style={{ width: isDesktoplg ? "70px" : "55px" }}
                    onClick={(e) => setSelected(e.target.value)}
                    value="10"
                  >
                    10
                  </button>
                  <button
                    className={
                      selected === "20"
                        ? "btn btn-secondary"
                        : "btn btn-light  "
                    }
                    style={{ width: isDesktoplg ? "70px" : "55px" }}
                    onClick={(e) => setSelected(e.target.value)}
                    value="20"
                  >
                    20
                  </button>
                  <button
                    className={
                      selected === "50"
                        ? "btn btn-secondary"
                        : "btn btn-light  "
                    }
                    style={{ width: isDesktoplg ? "70px" : "55px" }}
                    onClick={(e) => setSelected(e.target.value)}
                    value="50"
                  >
                    50
                  </button>
                  <button
                    className={
                      selected === "100"
                        ? "btn btn-secondary"
                        : "btn btn-light  "
                    }
                    style={{ width: isDesktoplg ? "70px" : "55px" }}
                    onClick={(e) => setSelected(e.target.value)}
                    value="100"
                  >
                    100
                  </button>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                Item Per Page : &nbsp;{" "}
                <span style={{ fontWeight: "600", color: "#0066b3" }}>
                  {selected}
                </span>
              </div>
            </div>

            <div className="cards ">
              <div className="row">
                {products?.length < 1
                  ? displayUsers
                  : obj
                      ?.slice(pageVisited, pageVisited + perPage)
                      .map((ob, index) => (
                        <React.Fragment key={index}>
                          <>
                            <div className="col-lg-4 d-none d-lg-block d-md-none">
                              <FlipCard card={ob} {...props} api={true} />
                            </div>
                            <div className="col-lg-4 d-lg-none d-sm-block col-md-6 col-sm-6 col-xs-12">
                              <SingleCard card={ob} {...props} api={true} />
                            </div>
                          </>
                        </React.Fragment>
                      ))}
                <ReactPaginate
                  previousLabel={
                    <i
                      style={{ fontSize: "20px", color: "#0066b3" }}
                      className="fa fa-arrow-left"
                    ></i>
                  }
                  nextLabel={
                    <i
                      style={{ fontSize: "20px", color: "#0066b3" }}
                      className="fa fa-arrow-right"
                    ></i>
                  }
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationcustom"}
                  subContainerClassName={"pages paginationcustom"}
                  activeClassName={"active"}
                  forcePage={pageNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Products_bytrade;
