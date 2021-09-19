import React from 'react'
import './Affiliates.css'
import Slider from "react-slick";

import { NavLink } from 'react-router-dom'
const Affiliates = () => {
       
      
        const properties = {
          duration: 300,
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
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-xl-flex justify-content-center">
                  <NavLink activeClassName="navactive" exact={true} to='/' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>HOSPITALS</span></NavLink>
                  <NavLink activeClassName="navactive" exact to='/about' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>RETAILERS</span></NavLink>
                  <NavLink activeClassName="navactive" exact to='/product' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>CLINICS</span></NavLink>
                  <NavLink activeClassName="navactive" exact to='/contact' style={{textDecoration:'none',fontWeight:500,marginTop: 10,width:130}} className="btncolrhov rounded-pill mx-2 px-2"><span>PHARMACIES</span></NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 affliates_spacing" >
          {/* <div className="carddivslider"><img className="image-fluid" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/></div> */}
        
          <div>
        <Slider {...properties}  className={"slick-slide-affiliates"} id="id_tog">
          <div className="carddivslider">
            <img alt="" className="imag_style mx-auto" src={'https://www.ri-demo.co/concord/final-2/wp-content/uploads/2021/04/roche.jpg'}/>
            </div>
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
