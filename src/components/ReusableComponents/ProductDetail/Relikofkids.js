import React, { useState } from "react";
import { CompanyLogos } from "../../../components";
import BannerWithText from "../../../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import acedolfr from "../../../Statics/assets/first-time-launching/Relikof-Kidz-eng.jpg";
import acedolbk from "../../../Statics/assets/first-time-launching/Relikof-Kidz-ban.jpg";
import Modal from "react-bootstrap/Modal";

const Relikofkids = () => {
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
        subLinkName: "First Time Launching",
        subDash: "/",
        subLink: "/products_firsttime",
      },
  ];

  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);
  const onHide = () => setShowText(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const Text = () => {
    return (
      <div>
        
       
        <h2
          style={{
            fontSize: "20px",
            color: "#232323",
            fontWeight: "600",
          }}
        >
          COMMERCIAL PACK
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
         <strong>Relikof® Linctus:</strong> Each bottle contains 100 ml linctus with a measuring cup.
           </p>
        
        <div>
          {showText ? (
            <div className="d-flex flex-column justify-content-center">
              <Link
                to="#"
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
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div>
      <BannerWithText
        subHeading={`ACEDOL`}
        // backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url()`}
        LinksBan={LinksBan}
        height={"200px"}
        backgroundSize={"100% 200px"}
      />

      <div className="container mb-5">
        <Link to="/products_firsttime" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "22px", color: "#565656" }}>
            <i className="fa fa-angle-left" aria-hidden="true"></i> Back
          </span>
        </Link>
        <div className="row">
          <div className="col-lg-4 allborder">
            {/* className="allborder" */}

            <Link
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
                        <img alt="" src={acedolfr} width="100%" height="100%" />
                      </div>
                    </div>
                  </div>

                  <div className="flip-card-back d-flex justify-content-center align-items-center">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body ">
                        <img alt="" src={acedolbk} width="100%" height="100%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-8 ">
            <div className="productContentInfo">
              <h1
                style={{
                  fontSize: "30px",
                  color: "#0066b3",
                  fontWeight: "600",
                }}
              >
                Relikof Kidz
              </h1>
             
              <h2
              >Generic Name: </h2>
            <p>Citric Acid Monohydrate BP</p>

            <h2> Strength: </h2>
            <p>31.25 mg/ 5 ml</p>

            <h2> Dosage form: </h2>
            <p>Linctus</p>

            <h2>INDICATION</h2>
            <p>Relikof® linctus is indicated for relief of all types of non-productive (dry) coughs, specially-<br/>
• Environment induced dry cough<br/>
• Cold induced dry cough<br/>
• Irritating dry cough<br/>
• Allergic dry cough


</p>



            <h2>DOSAGE AND ADMINISTRATION</h2>
            <p>Child (1 month-12 Years): Relikof® Kidz Linctus 5-10 ml (1-2 teaspoon), 3-4 times daily.
 
           </p>
            </div>

            {!showText ? (
              <Link
                to="#"
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
              </Link>
            ) : (
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
               
              </p>
            )}
          </div>
          {showText ? <Text /> : null}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="allborder d-flex justify-content-center align-items-center">
            <img alt="" src={acedolfr} className="img-fluid" />
          </div>
        </Modal.Body>
      </Modal>

      <CompanyLogos />
    </div>
  );
};

export default Relikofkids;
