import React,{useState} from 'react'
import { CompanyLogos } from "../components";
import bannerimg from "../assets/mediaphotobanner.jpg";
import facrd from "../assets/mediaphotobanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Media_photo = () => {

    // BannerWithText Wale Ki Links Ka Object
    const LinksBan = [
        {
            subLinkName: 'Home',
            subDash: '/',
            subLink: '/'
        },
        {
            subLinkName: 'Media',
            subDash: '/',
            subLink: '/media'
        },
    ];


    const [show, setShow] = useState(false);
    const [imag, setImag] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};
    const handleimage=((item)=>{
        setImag(images[item].default);
    })


    //import All images from Client folder from static/images/clients
// Note to add any image in client slider add image in client folder and be cautious for image size
function importAll(data) {
    let images = {};
    data.keys().map((item, index) => {
      images[item.replace("./", "")] = data(item);
      return "";
    });
    return images;
  }
  
  const images = importAll(
    require.context("../assets/mediaPhoto", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(imag);
  const imagesData = Object.keys(images);
    return (


        <div>
            <BannerWithText
                imgSrc={bannerimg}
                heading={"Photo"}
                subHeading={`Photo`}
                LinksBan={LinksBan}
            />

            <div className="container my-5">
                <div className="row">

                {imagesData.map((item, index) => (
                    <div className="col-lg-3 col-md-6 mt-4" style={{ border: '1px solid #f3f3f3', overflow: 'hidden', borderRadius: '20px' }}  key={index}>
                   <Link onClick={()=>{
                       handleShow();
                       handleimage(item);
                   }}>
                        <img alt="" src={images[item].default} className="img-fluid zoom" style={{ border: '1px solid #f3f3f3', overflow: 'hidden', borderRadius: '20px' }} />
                        
                    </Link>
                    </div>
                  ))}

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body >
                        <img alt="" src={imag} className="img-fluid "/>
                        </Modal.Body>
                    </Modal>




                </div>
            </div>


            <CompanyLogos />

        </div>
    )
}

export default Media_photo
