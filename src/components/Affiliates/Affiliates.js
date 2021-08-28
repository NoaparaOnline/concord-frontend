import React,{useState} from 'react'
import './Affiliates.css'
import { Slide } from "react-slideshow-image";

import { Link } from 'react-router-dom'
const Affiliates = () => {
       
      
        const properties = {
          duration: 4000,
          slidesToShow: 5,
          slidesToScroll: 2,
          autoplay: true,
          indicators: false,
          arrows: false,
          dots:false,
        };
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center ms-5 mt-3">
                    <div className="col-md-6 ">
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>HOSPITALS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>RETAILERS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>CLINICS</span></Link>
                  <Link to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>PHARMACIES</span></Link>
                    </div>
                </div>
                <div className="row mt-5 m-3 mb-4">
                    <div className="col-md-12 ">
          {/* <div className="carddivslider"><img className="image-fluid" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div> */}
        
        <Slide {...properties}>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/brist.jpg'}/></div>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/johnson.jpg'}/></div>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/novar.jpg'}/></div>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/phizer.jpg'}/></div>
          <div className="carddivslider"><img className="img-fluid res" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/sonafi.jpg'}/></div>
        </Slide>
                    </div>
                </div>
                       </div>



        </div>
    )
}

export default Affiliates
