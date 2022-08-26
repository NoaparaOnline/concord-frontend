// import React,{useState} from 'react'
// import { CompanyLogos } from "../components";
// import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
// import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Modal from 'react-bootstrap/Modal'
// import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// const Media_photo = () => {

//     // BannerWithText Wale Ki Links Ka Object
//     const LinksBan = [
//         {
//             subLinkName: 'Home',
//             subDash: '/',
//             subLink: '/'
//         },
//         {
//             subLinkName: 'Media',
//             subDash: '/',
//             subLink: '/media'
//         },
//     ];

//     const [show, setShow] = useState(false);
//     const [imag, setImag] = useState({});

//     const handleClose = () => setShow(false);
//     const handleShow = () => {setShow(true)};
//     const handleimage=((item)=>{
//         setImag(images[item].default);
//     })

//     //import All images from Client folder from static/images/clients
// // Note to add any image in client slider add image in client folder and be cautious for image size
// function importAll(data) {
//     let images = {};
//     data.keys().map((item, index) => {
//       images[item.replace("./", "")] = data(item);
//       return "";
//     });
//     return images;
//   }

//   const images = importAll(
//     require.context("../Statics/assets/mediaPhoto", false, /\.(png|jpe?g|svg)$/)
//   );

//   const imagesData = Object.keys(images);
//     return (

//         <>
//           <Helmet>
//         <title>Photo - Concord Pharma</title>
//       </Helmet>
//             <BannerWithText
//                 imgSrc={bannerimg}
//                 heading={"Photo"}
//                 subHeading={`Photo`}
//                 LinksBan={LinksBan}
//                 height={"400px"}

//         backposit={'center right'}
//         backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
//                 backgroundSize={"100% 400px"}
//                 conmarpad={"mt-5 pt-5"}
//                 fontsize={"60px"}
//             />

//             <div className="container my-5">
//                 <div className="row">

//                 {imagesData.map((item, index) => (
//                     <div className="col-lg-3 col-md-6 mt-4" style={{ border: '1px solid #f3f3f3', overflow: 'hidden', borderRadius: '20px' }}  key={index}>
//                    <Link onClick={()=>{
//                        handleShow();
//                        handleimage(item);
//                    }}>
//                         <img alt="gallery" src={images[item].default} className="img-fluid zoom" style={{ border: '1px solid #f3f3f3', overflow: 'hidden', borderRadius: '20px' }} />

//                     </Link>
//                     </div>
//                   ))}

//                     <Modal show={show} onHide={handleClose} centered size="lg">
//                         <Modal.Header closeButton>
//                         </Modal.Header>
//                         <Modal.Body >
//                         <img alt="gallery" src={imag} width="100%" height="100%"/>
//                         </Modal.Body>
//                     </Modal>

//                 </div>
//             </div>

//             <CompanyLogos />

//         </>
//     )
// }

// export default Media_photo

import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Media_photo = (props) => {
  const { t } = useTranslation('common')
  const eventName = props?.location?.state?.replaceAll(' ', '');
  const LinksBan = [
    {
      subLinkName: t('media_photo.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('media_photo.media_text'),
      subDash: "/",
      subLink: "/media",
    },
  ];

  //import All images from Client folder from static/images/clients
  // Note to add any image in client slider add image in client folder and be cautious for image size
  function importAll(data) {
    if (data?.length < 1) {
      return;
    }
    let images = {};
    data?.keys()?.map((item, index) => {
      images[item?.replace("./", "")] = data(item);
      return "";
    });
    return images;
  }

  const images = importAll(
    eventName == 'AnnualConference2014' ?
      require.context(`../Statics/assets/Annualconfirence2014`, false, /\.(png|jpe?g|svg|JPG)$/) : eventName == 'AnnualConference2013' ? require.context(`../Statics/assets/Annualconfirence2013`, false, /\.(png|jpe?g|svg|JPG)$/) : eventName == 'DapazineLunchingProgram' ? require.context(`../Statics/assets/Dapazinelunchingprogram`, false, /\.(png|jpe?g|svg|JPG)$/) : null
  );


  const imagesData = images?.length < 1 ? [] : Object.keys(images);

  return (
    <>
      <Helmet>
        <title>{t('media_photo.helmet.title_text')}</title>
      </Helmet>
      <BannerWithText
        imgSrc={bannerimg}
        heading={t('media_photo.photo_text')}
        subHeading={t('media_photo.photo_text').toUpperCase()}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      <div className="container my-5">
        <div className="row">
          {imagesData?.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5 center-childrens">
                <a data-fancybox="gallery" href={images[item].default}>
                  <img
                    width="400px"
                    height="250px"
                    alt="gallery"
                    src={images[item].default}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <CompanyLogos />

    </>
  );
};

export default Media_photo;
