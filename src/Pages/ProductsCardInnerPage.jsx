import React, { useState } from "react";
import { CompanyLogos } from "../components";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import acedolfr from "../Statics/assets/TabletsFrontBack/innerpagacedolfr.png";
import acedolbk from "../Statics/assets/TabletsFrontBack/innerpagacedolbk.png";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

const ProductsCardInnerPage = () => {
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
      subLinkName: "By Trade Name",
      subDash: "/",
      subLink: "/products_bytrade",
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
  const productssingleobj = useSelector((state) => state?.director?.getsingleproductobj);
  console.log("productssingleobj",productssingleobj)
  const Text = () => {
    return(
      <div>
           
            <h2   style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}>CONTRAINDICATION AND PRECAUTION</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >Aceclofenac should not be administered to patients with active or suspected peptic ulcer or gastro-intestinal bleeding. It should not be given to patients with moderate to severe renal impairment. Close medical surveillance is also imperative in patients suffering from severe impairment of hepatic function. It should not be prescribed during pregnancy, unless there are compelling reasons for doing so. The lowest effective dosage should be used. Aceclofenac should not be administered to patients previously sensitive to Aceclofenac or in whom aspirin or NSAIDs precipitate attacks of asthma, acute rhinitis or urticaria or who are hypersensitive to these drugs.</p>
            <h2   style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}>SIDE-EFFECT</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >The majority of side-effects observed have been reversible and of a minor nature and include gastro-intestinal disorders (dyspepsia, abdominal pain, nausea and diarrhea) and occasional occurrence of dizziness. Dermatological complaints including pruritus and rash and abnormal hepatic enzyme levels and raised serum creatinine have occasionally been reported.</p>
            <h2  style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}>OVER DOSAGE</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >There are no human data available on the consequences of Aceclofenac over dosage. If over dosage is observed, therapeutic measures should be taken according to symptoms; supportive and symptomatic treatment should be given for complications such as hypotension, gastro-intestinal irritation, respiratory depression, and convulsions.</p>
            <h2
              style={{
                fontSize: "20px",
                color: "#232323",
                fontWeight: "600",
              }}>DRUG INTERACTION</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >Lithium and Digoxin: Aceclofenac, like many NSAIDs may increase plasma concentrations of lithium and Digoxin. Diuretics: Aceclofenac, like other NSAIDs, may interact the activity of diuretics. Anticoagulants: Like other NSAIDs, Aceclofenac may enhance the activity of anticoagulant. Close monitoring of patients on combined anticoagulants and Aceclofenac therapy should be undertaken. Methotrexate: Caution should be exercised if NSAIDs and Methotrexate are administered within 24 hours of each other, since NSAIDs may increase Methotrexate plasma levels, resulting in increased toxicity.</p>
            <h2
              style={{
                fontSize: "20px",
                color: "#232323",
                fontWeight: "600",
              }}
            >USE IN PREGNANCY AND LACTATION</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >The use of Aceclofenac should be avoided in pregnancy and lactation unless the potential benefits to the mother outweigh the possible risks to the fetus.</p>
            <h2
              style={{
                fontSize: "20px",
                color: "#232323",
                fontWeight: "600",
              }}
            >STORAGE</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            >Store in a cool (Below 30⁰ C. Temp.), dry place and protect from light. Keep all medicines out of the reach of children.</p>
            <h2
              style={{
                fontSize: "20px",
                color: "#232323",
                fontWeight: "600",
              }}>COMMERCIAL PACK</h2>
            <p
             style={{
              fontSize: "16px",
              color: "#565656",
              fontWeight: "400",
            }}
            ><strong>Acedol® Tablet:</strong> Each box containing 10x10’s tablet, in Alu-PVC blister pack.<br/>
            <span > <strong>Acedol® SR Tablet:</strong> Each box containing 5x10’s tablet, in Alu Opaque PVDC blister pack.</span></p>
          <div>
       {showText ?
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
         :null
            }
          </div>
       </div>
    )
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
        <Link to="/products_bytrade" style={{ textDecoration: "none" }}>
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
                Acedol Tablet
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
                Acedol® Tablet: Each film coated tablet contains- Aceclofenac BP
                100 mg.
                <span className="block">
                  {" "}
                  Acedol® SR Tablet: Each sustained release tablet contains-
                  Aceclofenac BP 200 mg.
                </span>
              </p>

              <h2
                style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}
              >
                PHARMACOLOGY
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
                Aceclofenac is a non-steroidal agent with marked
                anti-inflammatory and analgesic properties. It is a potent
                inhibitor of the enzyme cycloxygenase which is involved in the
                production of prostaglandin.
              </p>

              <h2
                style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}
              >
                INDICATION
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
                For the relief of pain and inflammation in osteoarthritis,
                rheumatoid arthritis and ankylosing spondylitis.
              </p>

              <h2
                style={{
                  fontSize: "20px",
                  color: "#232323",
                  fontWeight: "600",
                }}
              >
                DOSAGE AND ADMINISTRATION
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
                Acedol® Tablet:<br/>
                <span className="block">
                  <strong>Adults:</strong> The recommended dose is 100 mg, twice
                  daily. Children: There are no clinical data on the use of
                  Aceclofenac in children.
                </span>
              </p>
            </div>
         
            {!showText ?
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
          :
                 
                <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}><span ><strong>Elderly:</strong> The pharmacokinetics of Aceclofenac is not altered in elderly patients, therefore it is not considered necessary to modify the dose or dose frequency.</span><br/>
                <span ><strong>Acedol® SR Tablet:</strong>The recommended dose is 200 mg, once daily.</span></p>
                }
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

export default ProductsCardInnerPage;
