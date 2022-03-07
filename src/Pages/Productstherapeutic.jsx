import React, { useEffect, useState } from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { FlipCard } from "../components";
import SingleCard from "../components/HomeComponents/FlipCard/SingleCard";
import ReactPaginate from "react-paginate";
import { ByTherapeutic } from "../components/HomeComponents/ProductsData/productbytheraputic";
import useMediaQuery from "../components/ReusableComponents/MediaQueryCustomHook";
import { Helmet } from "react-helmet";
import { filterComponentData } from "../Utils/functions";
import { useSelector } from "react-redux";

const Products_therapeutic = (props) => {

  const isDesktoplg = useMediaQuery('(min-width: 992px)');
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);

  const product_categories = filterComponentData(component, "product_categories", lang)
  const product_category_header = filterComponentData(component, "product_category_header", lang)
  const products = filterComponentData(component, "products", lang)
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

  const [selectedClass, setSelectedClass] = useState("all");

  let [obj, setObj] = useState(ByTherapeutic);

  let filterClass =
    selectedClass == "all"
      ? obj
      : obj?.filter((item) => item?.theraputic_class === selectedClass);


  useEffect(() => {
    setObj(products?.length < 1 ? ByTherapeutic : products)
  }, [products])

  const filteredtype = (type) => {
    console.log(type, "type");
    if (products?.length < 1) {
      if (type == "All") {
        setObj(ByTherapeutic)
        setPageNumber(0);

      }
      else if (type == "Syrup") {
        const filterd = ByTherapeutic.filter(category =>
          category.type === "Syrup")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Tablet") {
        const filterd = ByTherapeutic.filter(category =>
          category.type === "Tablet")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Capsule") {
        const filterd = ByTherapeutic.filter(category =>
          category.type === "Capsule")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Hand Rub") {
        const filterd = ByTherapeutic.filter(category =>
          category.type == "Hand Rub")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Injectables") {
        const filterd = ByTherapeutic.filter(category =>
          category.type == "Injectables")
        setObj(filterd);
        setPageNumber(0);


      }
    }
    else {
      if (type == "All") {
        setObj(products)
        setPageNumber(0);

      }
      else if (type == "Syrup") {
        const filterd = products?.filter(category =>
          category.category == "Syrup")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Tablet") {
        const filterd = products?.filter(category =>
          category.category == "Tablet")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Capsule") {
        const filterd = products.filter(category =>
          category.category == "Capsule")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Hand Rub") {
        const filterd = products?.filter(category =>
          category.category == "Hand Rub")
        setObj(filterd);
        setPageNumber(0);

      }
      else if (type == "Injectables") {
        const filterd = products?.filter(category =>
          category.category == "Injectables")
        setObj(filterd);
        setPageNumber(0);


      }
    }

  }

  const [selected, setSelected] = useState('5');



  const [pageNumber, setPageNumber] = useState(0);
  const perPage = selected;
  const pageVisited = pageNumber * perPage;

  // defaultandfilter = selectedClass ? filterClass : (selectedClass==="all" || selectedClass===null) ? obj : obj

  const displayUsers =
    filterClass.length === 0 ? (
      <div className="d-flex justify-content-center mb-5">
        <span style={{ fontSize: "30px", color: "#0066b3" }}>
          No Item Of This Therapeutic Class
        </span>
      </div>
    ) : (
      filterClass.slice(pageVisited, pageVisited + perPage).map((ob, index) => (
        <React.Fragment key={ob.id}>
          <>
            <div className="col-lg-4 d-none d-lg-block d-md-none">
              <FlipCard card={ob} {...props} />
            </div>

            <div className="col-lg-4 d-lg-none d-sm-block col-md-6">
              <SingleCard card={ob} {...props} />
            </div>
          </>
        </React.Fragment>
      ))
    );

  const pageCount = Math.ceil(filterClass.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Helmet>
        <title>By Therapeutic Class - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        heading={"By Therapeutic Class"}
        subHeading={`BY THERAPEUTIC CLASS`}
        LinksBan={LinksBan}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        height={""}
        backgroundSize={""}
        conmarpad={""}
        fontsize={"45px"}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <div className="mb-3">
              <div className="productFilterContent1" style={{ borderBottom: 'none', borderColor: '#0066b3', backgroundColor: '#0066b3' }}>
                <label
                  className="my-2"
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  Therapeutic Class
                </label>
              </div>
              <div className="productFilterContent1">
                <select
                  className="form-control form-select"
                  name="sm"
                  onChange={(e) => {
                    setSelectedClass(e.target.value);
                  }}
                  value={selectedClass}
                >
                  <option disabled selected>
                    Select ..
                  </option>
                  <option value="all">All</option>
                  <option value="antibiotic">Antibiotic</option>
                  <option value="anthelmentics">Anthelmentics</option>
                  <option value="anti-histamine">Anti-histamine</option>
                  <option value="anti-ulcerant">Anti-ulcerant</option>
                  <option value="anti-diabetic">Anti-diabetic</option>
                  <option value="anti-fungal">Anti-fungal</option>
                  <option value="anti-parasitic">Anti-parasitic</option>
                  <option value="anti-viral">Anti-viral</option>
                  <option value="anti-spasmodic">Anti-spasmodic agent</option>
                  <option value="anti-neuropathic">Anti-neuropathic Agent</option>
                  <option value="antidepressant">
                    Antidepressant & Anxiolytic
                  </option>
                  <option value="cardiovascular">Cardiovascular Drug</option>
                  <option value="gastroprokinetic">Gastroprokinetic Agent</option>
                  <option value="leukotrine">
                    Leukotrine receptor antagonist
                  </option>
                  <option value="mucolytic">Mucolytic Agent</option>
                  <option value="pde">PDE inhibitors</option>
                  <option value="nsaids">NSAIDs</option>
                  <option value="hand-sanitizer">
                    Hand Sanitizer & Anticeptic Agent
                  </option>
                  <option value="vitamin">Vitamin & Minerals</option>
                </select>
              </div>

            </div>

            <div className="productFilterContent">
              <div className="productFilterContent1" style={{ borderBottom: 'none', borderColor: '#0066b3', backgroundColor: '#0066b3' }}>
                <h3 className="filterHeading" style={{ fontWeight: "500", color: '#fff' }}>
                  {product_category_header?.heading ? product_category_header?.heading : "Product Categories"}
                </h3>
              </div>
              <div className="productFilterContent1" >
                <form id="category-radio-btn" style={{ color: '#666666' }}>
                  <input
                    className="me-2"
                    type="radio"
                    id="all"
                    name="product-category"
                    value="1"
                    defaultChecked

                    onChange={() => filteredtype("All")}
                  />
                  <label htmlFor="all">All</label>
                  <br />
                  {
                    product_categories?.length < 1 ?
                      <>
                        <input
                          className="me-2"
                          type="radio"
                          id="injectables"
                          name="product-category"
                          value="2"
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
                          onChange={() => filteredtype("Hand Rub")}

                        />
                        <label htmlFor="handrub">Hand Rub</label></> : product_categories?.splice(0, product_categories?.length)?.map((item) => (
                          <>
                            <label htmlFor={item?.name}>{item?.name}</label>
                            <br />
                            <input
                              className="me-2"
                              type="radio"
                              id="capsule"
                              name="product-category"
                              value={item?.name}
                              onChange={() => filteredtype(item?.name)}
                            />
                          </>
                        ))
                  }

                </form>
              </div>

            </div>
          </div>


          <div className="col-sm-12 col-lg-9 mt-0">
            <div className="row mb-3">
              <div className="col-lg-6">
                <div className="mr-3" style={{ fontWeight: '500' }}>Select Items Per Page</div>
                <div class="btn-group" role="group" aria-label="First group">
                  <button className={selected === '5' ? 'btn  btn-secondary' : 'btn btn-light  '} style={{ width: isDesktoplg ? "70px" : "55px" }} onClick={(e) => setSelected(e.target.value)} value="5">5</button>
                  <button className={selected === '10' ? 'btn btn-secondary' : 'btn btn-light  '} style={{ width: isDesktoplg ? "70px" : "55px" }} onClick={(e) => setSelected(e.target.value)} value="10">10</button>
                  <button className={selected === '20' ? 'btn btn-secondary' : 'btn btn-light  '} style={{ width: isDesktoplg ? "70px" : "55px" }} onClick={(e) => setSelected(e.target.value)} value="20">20</button>
                  <button className={selected === '50' ? 'btn btn-secondary' : 'btn btn-light  '} style={{ width: isDesktoplg ? "70px" : "55px" }} onClick={(e) => setSelected(e.target.value)} value="50">50</button>
                  <button className={selected === '100' ? 'btn btn-secondary' : 'btn btn-light  '} style={{ width: isDesktoplg ? "70px" : "55px" }} onClick={(e) => setSelected(e.target.value)} value="100">100</button>

                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-end">
                Item Per Page  : &nbsp; <span style={{ fontWeight: '600', color: '#0066b3' }}>{selected}</span>
              </div>
            </div>

            <div className="row ">
              {products?.length < 1 ? displayUsers : obj?.slice(pageVisited, pageVisited + perPage)
                .map((ob, index) => (
                  <React.Fragment key={index}>
                    <>
                      <div className="col-lg-4 d-none d-lg-block d-md-none">
                        <FlipCard card={ob} {...props} />
                      </div>
                      <div className="col-lg-4 d-lg-none d-sm-block col-md-6 col-sm-6 col-xs-12">
                        <SingleCard card={ob} {...props} />
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

      <CompanyLogos />
    </>
  );
};

export default Products_therapeutic;
