import React, { useState } from "react";
import { CompanyLogos } from "../../../components";
import BannerWithText from "../../../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import TableCustomComponent from "../TableCustomComponent";
import { Helmet } from "react-helmet";
import { ByTherapeutic } from "../../HomeComponents/ProductsData/productbytheraputic";

const ProductallDetails = (props) => {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const [show, setShow] = useState(false);
  const onHide = () => setShowText(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const { id } = useParams();

  // let productdata = [];
  // ByTherapeutic?.filter((item) =>
  // if
  //   id === item?.id ? productdata.push(item) : ""
  // );

  const productdata = ByTherapeutic?.filter((item) =>
    item?.id === Number(id) ? item : null
  );

  const viewData = props?.location?.state?.data
    ? props?.location?.state?.data
    : productdata[0];
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
    {
      subLinkName:
        viewData?.from === "/by-trade-name"
          ? "By Trade Name"
          : viewData?.from === "/by-generic-name"
          ? "By Generic Name"
          : viewData?.from === "/by-therapeutic-class"
          ? "By Therapeutic Class"
          : viewData?.from === "/first-time-launching"
          ? "First Time Launching"
          : "",
      subDash:
        viewData?.from === "/by-trade-name"
          ? "/"
          : viewData?.from === "/by-generic-name"
          ? "/"
          : viewData?.from === "/by-therapeutic-class"
          ? "/"
          : viewData?.from === "/first-time-launching"
          ? "/"
          : "",
      subLink: viewData?.from,
    },
  ];

  const Text = () => {
    return (
      <div>
        {viewData?.desc2 ? (
          <div dangerouslySetInnerHTML={{ __html: viewData?.desc2 }} />
        ) : viewData?.moredesc ? (
          <div dangerouslySetInnerHTML={{ __html: viewData?.moredesc }} />
        ) : viewData?.descmore ? (
          <div dangerouslySetInnerHTML={{ __html: viewData?.descmore }} />
        ) : (
          viewData?.innerdata1?.map((item) => {
            return (
              <>
                <h1
                  style={{
                    fontSize: "20px",
                    color: "#232323",
                    fontWeight: "600",
                  }}
                >
                  {item?.innerHead}
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#565656",
                    fontWeight: "400",
                  }}
                >
                  {item?.innerData}
                </p>

                {item?.isinnerSub ? (
                  <>
                    <h6
                      style={{
                        color: "#232323",
                        fontWeight: "600",
                      }}
                    >
                      {item?.innerSubHead}
                    </h6>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#565656",
                        fontWeight: "400",
                      }}
                    >
                      {item?.innerSubData}
                    </p>
                    {/* 08 bytrade */}
                    {item?.isSublist ? (
                      <ul>
                        {item?.listSubData?.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : null}
                {item?.isinnerSub1 ? (
                  <>
                    <h6
                      style={{
                        color: "#232323",
                        fontWeight: "600",
                      }}
                    >
                      {item?.innerSubHead1}
                    </h6>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#565656",
                        fontWeight: "400",
                      }}
                    >
                      {item?.innerSubData1}
                    </p>
                    {item?.isSublist1 ? (
                      <ul>
                        {item?.listSubData1?.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : null}

                {item?.istable ? (
                  <TableCustomComponent
                    tableHead={item?.table?.headers?.map((item) => item)}
                    data={item?.table?.body?.map((item) => {
                      return item;
                    })}
                  />
                ) : null}

                {item?.islist ? (
                  <ul>
                    {item?.listData?.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </>
            );
          })
        )}

        <div>
          {showText ? (
            <div className="d-flex flex-column justify-content-center">
              <div
                onClick={onHide}
                className="btn btn-primary pt-2 pb-2 "
                style={{
                  color: "#fff",
                  backgroundColor: "#0066b3",
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 0,
                  height: "40px",
                  width: "110px",
                  borderRadius: 0,
                }}
              >
                <span style={{ fontSize: "14px" }}>Read Less</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Product Detail - Concord Pharma</title>
      </Helmet>
      <BannerWithText
        subHeading={viewData?.innerMainHeading}
        // backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        LinksBan={LinksBan}
        height={"200px"}
        backgroundSize={"100% 200px"}
      />

      <div className="container mb-5">
        {viewData?.from === "/" ? (
          <a
            href={viewData?.from === "/" ? "/#test" : viewData?.from}
            style={{ textDecoration: "none" }}
          >
            <span style={{ fontSize: "22px", color: "#565656" }}>
              <i className="fa fa-angle-left" aria-hidden="true"></i> Back
            </span>
          </a>
        ) : (
          <div
            onClick={() =>
              props.history.push(viewData?.from, { state: viewData?.category,class:viewData?.therapeutic_class })
            }
            style={{ textDecoration: "none" }}
          >
            <span style={{ fontSize: "22px", color: "#565656" }}>
              <i className="fa fa-angle-left" aria-hidden="true"></i> Back
            </span>
          </div>
        )}
        <div className="row">
          {/* className="allborder" */}

          <div className="col-lg-12 allborder">
            <div
              onClick={() => {
                handleShow();
              }}
            >
              <div
                className="flip-card  h-sm-100 h-xs-100 "
                style={{ border: "none" }}
              >
                <div className="flip-card-inner" style={{ cursor: "pointer" }}>
                  <div className="flip-card-front d-flex justify-content-center align-items-center">
                    <div className="card " style={{ border: "none" }}>
                      <div className="card-body ">
                        <img
                          alt={viewData?.innerMainHeading}
                          src={
                            viewData?.img
                              ? viewData?.img?.map((item) => item.imgf)
                              : viewData?.image
                              ? viewData?.image
                              : viewData?.imgf
                          }
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flip-card-back d-flex justify-content-center align-items-center">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body ">
                        <img
                          alt={viewData?.innerMainHeading}
                          src={
                            viewData?.img
                              ? viewData?.img?.map((item) => item.imge)
                              : viewData?.flipedimage
                              ? viewData?.flipedimage
                              : viewData?.imge
                          }
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 ">
            <div className="productContentInfo">
              <h1
                style={{
                  fontSize: "30px",
                  color: "#0066b3",
                  fontWeight: "600",
                }}
              >
                {viewData?.name
                  ? null
                  : viewData?.innerMainHeading
                  ? viewData?.innerMainHeading
                  : viewData?.title}
              </h1>
              <h5
                style={{
                  color: "#0066b3",
                  fontWeight: "600",
                }}
              >
                {viewData?.subtitle ? null : viewData?.innerComposition}
              </h5>

              {viewData?.desc ? (
                <div dangerouslySetInnerHTML={{ __html: viewData?.desc }} />
              ) : (
                viewData?.innerdata?.map((item) => {
                  return (
                    <>
                      <h1
                        style={{
                          fontSize: "20px",
                          color: "#232323",
                          fontWeight: "600",
                        }}
                      >
                        {item?.innerHead}
                      </h1>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#565656",
                          fontWeight: "400",
                        }}
                      >
                        {item?.innerData}
                      </p>

                      {item?.isinnerSub ? (
                        <>
                          <h1
                            style={{
                              fontSize: "20px",
                              color: "#232323",
                              fontWeight: "600",
                            }}
                          >
                            {item?.innerSubHead}
                          </h1>
                          <p
                            style={{
                              fontSize: "16px",
                              color: "#565656",
                              fontWeight: "400",
                            }}
                          >
                            {item?.innerSubData}
                          </p>
                        </>
                      ) : null}
                      {item?.isinnerSub1 ? (
                        <>
                          <h1
                            style={{
                              fontSize: "20px",
                              color: "#232323",
                              fontWeight: "600",
                            }}
                          >
                            {item?.innerSubHead1}
                          </h1>
                          <p
                            style={{
                              fontSize: "16px",
                              color: "#565656",
                              fontWeight: "400",
                            }}
                          >
                            {item?.innerSubData1}
                          </p>
                        </>
                      ) : null}
                      {item?.istable ? (
                        <TableCustomComponent
                          tableHead={item?.table?.headers?.map((item) => item)}
                          data={item?.table?.body?.map((item) => {
                            return item;
                          })}
                        />
                      ) : null}

                      {item?.isSublist ? (
                        <ul>
                          {item?.listSubData?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      {item?.isSublist1 ? (
                        <ul>
                          {item?.listSubData1?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      ) : null}

                      {item?.islist ? (
                        <ul>
                          {item?.listData?.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  );
                })
              )}
            </div>

            {!showText ? (
              <div
                onClick={onClick}
                className="btn btn-primary me-auto pt-2 pb-2  "
                style={{
                  color: "#fff",
                  backgroundColor: "#0066b3",
                  textDecoration: "none",
                  fontWeight: 500,
                  marginTop: 0,
                  height: "40px",
                  width: "110px",
                  borderRadius: 0,
                }}
              >
                <span style={{ fontSize: "14px" }}>Read More</span>
              </div>
            ) : (
              ""
            )}
          </div>
          {showText ? <Text /> : null}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="allborder d-flex justify-content-center align-items-center">
            <img
              alt={viewData?.innerMainHeading}
              src={
                viewData?.img
                  ? viewData?.img?.map((item) => item.imgf)
                  : viewData?.image
                  ? viewData?.image
                  : viewData?.imgf
              }
            />
          </div>
        </Modal.Body>
      </Modal>

      <CompanyLogos />
    </>
  );
};

export default ProductallDetails;
// style='font-size: 20px; color: rgb(35, 35, 35); font-weight: 600;'
