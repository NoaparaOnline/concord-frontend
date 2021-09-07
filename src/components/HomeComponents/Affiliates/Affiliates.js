import React from 'react'
import './Affiliates.css'
import Slider from "react-slick";

import { Link } from 'react-router-dom'
const Affiliates = () => {
       
      
        const properties = {
          duration: 500,
          slidesToShow: 5,
          slidesToScroll: 2,
          autoplay: true,
          indicators: false,
          arrows: false,
          dots:false,
          
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          
          ]
        };
    return (
        <div>
            <div className="container-xl">
                <div className="row d-flex justify-content-center ms-5 mt-0 mb-0">
                    <div className="col-lg-6 col-md-6 ">
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>HOSPITALS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>RETAILERS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>CLINICS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>PHARMACIES</span></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 affliates_spacing" >
          {/* <div className="carddivslider"><img className="image-fluid" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div> */}
        
          <div>
        <Slider {...properties}  className={"slick-slide-affiliates"}>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/brist.jpg'}/></div>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/johnson.jpg'}/></div>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/novar.jpg'}/></div>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/phizer.jpg'}/></div>
          <div className="carddivslider"><img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/sonafi.jpg'}/></div>
        </Slider>
          </div>
                    </div>
                </div>
                       </div>



        </div>
    )
}

export default Affiliates
