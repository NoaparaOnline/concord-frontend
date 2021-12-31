import React, { useState } from "react";
import { CompanyLogos } from "../../../components";
import BannerWithText from "../../../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import Dapzinfr from "../../../Statics/assets/first-time-launching/Dapazin-5-eng.jpg";
import Dapzinbk from "../../../Statics/assets/first-time-launching/Dapazin-5_Ban.jpg";
import Modal from "react-bootstrap/Modal";

const DapzineTablet = () => {
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
      subLink: "/first-time-launching",
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
          SIDE-EFFECT
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
         Dapagliflozin may cause female genital mycotic infections, nasopharyngitis and urinary tract infections.
        </p>
        <h2
          style={{
            fontSize: "20px",
            color: "#232323",
            fontWeight: "600",
          }}
        >
          OVER DOSAGE
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
          There were no reports of overdose during the clinical development program for Dapagliflozin.
        </p>
        <h2
          style={{
            fontSize: "20px",
            color: "#232323",
            fontWeight: "600",
          }}
        >
          DRUG INTERACTION
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
          Hypoglycemic Agents: May enhance the adverse/toxic effect of other hypoglycemic agents.<br/>
Hypotensive Agents: May enhance the adverse/toxic effect of other hypotensive agents.<br/>
Loop Diuretics: May diminish the hypoglycemic effect of hypoglycemic agents.<br/>
MAO Inhibitors: May enhance the hypoglycemic effect of hypoglycemic agents.<br/>
Selective Serotonin Reuptake Inhibitors: - May enhance the hypoglycemic effect of hypoglycemic agents.
</p>
        
        <h2
          style={{
            fontSize: "20px",
            color: "#232323",
            fontWeight: "600",
          }}
        >
          USE IN PREGNANCY AND LACTATION
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
            <strong>Pregnancy:</strong>
            There are no adequate well controlled studies in pregnant women. Use during pregnancy only if the potential benefit justifies the potential risk to fetus.
Nursing mother: Discontinue Dapazin or discontinue nursing.
        </p>
        <h2
          style={{
            fontSize: "20px",
            color: "#232323",
            fontWeight: "600",
          }}
        >
          STORAGE
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#565656",
            fontWeight: "400",
          }}
        >
          Store in a cool (below 300) and dry place. Keep away from light and out of reach of children.
        </p>
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
         <strong>Dapazin 5 tablet:</strong> Each box containing 2 X 14’s tablet in Alu-Alu blister strips.
            <span class="block"> <strong>Dapazin 10 tablet: </strong> Each box containing 1 X 14’s tablet in Alu-Alu blister strips.</span></p>
        
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
        <Link to="/first-time-launching" style={{ textDecoration: "none" }}>
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
                        <img alt="Dapzinfr" src={Dapzinfr} width="100%" height="100%" />
                      </div>
                    </div>
                  </div>

                  <div className="flip-card-back d-flex justify-content-center align-items-center">
                    <div className="card" style={{ border: "none" }}>
                      <div className="card-body ">
                        <img alt="Dapzinbk" src={Dapzinbk} width="100%" height="100%" />
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
                Dapazin Tablet
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: "#565656",
                  fontWeight: "400",
                }}
              >
                Dapazin 5 tablet: Each film coated tablet contains Dapagliflozin
                INN 5 mg.
                <span className="block">
                  {" "}
                  Dapazin 10 tablet: Each film coated tablet contains
                  Dapagliflozin INN 10 mg.
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
                Dapazin (Dapagliflozin) helps lower blood glucose levels by
                helping the body to filter more excess glucose out of the blood.
                Sodium-glucose co transporter 2 (SGLT2), expressed in the
                proximal renal tubules, is responsible for the majority of the
                re-absorption of filtered glucose from the tubular lumen.
                Dapagliflozin is an inhibitor of SGLT2. By inhibiting SGLT2,
                Dapagliflozin reduces reabsorption of filtered glucose and
                lowers the renal threshold for glucose, and thereby increases
                urinary glucose excretion.
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
                Dapazin (Dapagliflozin) is indicated <br />
                • as an adjunct to diet and exercise to improve glycemic control
                in adults with type 2 diabetes mellitus.
                <br />
                • to reduce the risk of hospitalization for heart failure in
                adults with type 2 diabetes mellitus and either established
                cardiovascular disease or multiple cardiovascular risk factors.
                <br />
                • to reduce the risk of cardiovascular death and hospitalization
                for heart failure in adults with heart failure with reduced
                ejection fraction (NYHAclass II-IV).
                <br />
                • to reduce the risk of sustained eGFR decline, end stage kidney
                disease cardiovascular death and hospitalization for heart
                failure in adults with chronic kidney disease at risk of
                progression.
                <br />
                Limitation of Use: Dapagliflozin is not recommended for patients
                with type 1 diabetes mellitus or for the treatment of diabetic
                ketoacidosis. <br />
                Dapagliflozin is not recommended for use to improve glycemic
                control in adults with type 2 diabetes mellitus with an eGFR
                less than 45 mL/min/1.73 m2.
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
                Dapazin (Dapagliflozin) is indicated <br />
                • as an adjunct to diet and exercise to improve glycemic control
                in adults with type 2 diabetes mellitus.
                <br />
                • to reduce the risk of hospitalization for heart failure in
                adults with type 2 diabetes mellitus and either established
                cardiovascular disease or multiple cardiovascular risk factors.
                <br />
                • to reduce the risk of cardiovascular death and hospitalization
                for heart failure in adults with heart failure with reduced
                ejection fraction (NYHAclass II-IV).
                <br />
                • to reduce the risk of sustained eGFR decline, end stage kidney
                disease cardiovascular death and hospitalization for heart
                failure in adults with chronic kidney disease at risk of
                progression.
                <br />
                Limitation of Use: Dapagliflozin is not recommended for patients
                with type 1 diabetes mellitus or for the treatment of diabetic
                ketoacidosis. <br />
                Dapagliflozin is not recommended for use to improve glycemic
                control in adults with type 2 diabetes mellitus with an eGFR
                less than 45 mL/min/1.73 m2.
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
                <span>
                  <strong>Elderly:</strong> The pharmacokinetics of Aceclofenac
                  is not altered in elderly patients, therefore it is not
                  considered necessary to modify the dose or dose frequency.
                </span>
                <br />
                <span>
                  <strong>Acedol® SR Tablet:</strong>The recommended dose is 200
                  mg, once daily.
                </span>
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
            <img alt="Dapzinfr" src={Dapzinfr} className="img-fluid" />
          </div>
        </Modal.Body>
      </Modal>

      <CompanyLogos />
    </div>
  );
};

export default DapzineTablet;
