import React, { useEffect,useState } from 'react'
import { CompanyLogos } from "../../../components";
import BannerWithText from "../../../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import acedolfr from "../../../Statics/assets/TabletsFrontBack/innerpagacedolfr.png";
import acedolbk from "../../../Statics/assets/TabletsFrontBack/innerpagacedolbk.png";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";


const ProductallDetails = (props) => {



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
    



    let productsdetail = useSelector((state) => state?.director?.getsingleproductobj);
  
    console.log("ds",productsdetail)
    
    const Text = () => {
        return(
            
            <div>
           {productsdetail?.innerdata?.map((item)=>{
               return(

                
                  <div>
            {item?.indication}  
            {item?.dosage}  

            {item?.side_effect}  
            {item?.adverse_reaction}
            {item?.Contraindications}  
            {item?.use_in_pregnancy}  
            {item?.Drug_Interaction}  
            {item?.Overdosage}  
            {item?.Precaution}  
            {item?.storage}  
            {item?.Commercial_Pack}  

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
               )
            })} 
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

{productsdetail?.innerdata?.map((item) => {
    return(

      <div className="container mb-5">
        <Link to={productsdetail?.backpagelink} style={{ textDecoration: "none" }}>
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

            {item?.heading}
            {item?.composition}  
            {item?.pharmacy}  

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
                 
             ""   
                }
          </div>
          {showText ? <Text /> : null}
        </div>
      </div>
    )})
    }

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
    )
}

export default ProductallDetails
