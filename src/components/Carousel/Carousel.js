import React from 'react';
import { Zoom } from 'react-slideshow-image';
import first from '../../assets/fac-QC.jpg';
	import second from '../../assets/fac-RD.jpg';
import third from '../../assets/warehouse-1.jpg';
import fourth from '../../assets/fac-production.jpg';
import './Carousel.css'
const Slideshow = () => {
    const data = [
        {
            title: 'Abc',
            img: first,
            logo: 'fourth',
            text: 'afdfsdfsd',
            btn: 'click',
        },
        {
            title: 'Abc',
            img: second,
            logo: '',
            text: 'afdfsdfsd',
            btn: 'click',
        },
        {
            title: 'Abc',
            img: third,
            logo: '',
            text: 'afdfsdfsd',
            btn: 'click',
        },
        {
            title: 'Abc',
            img: fourth,
            logo: '',
            text: 'afdfsdfsd',
            btn: 'click',
        }
    ];

    const autoInProperties = {
        indicators: true,
        arrows: false,
        durations: 500,
        scale:5.6,
        transitionDuration: 3000,
        infinite: true,
        autoplay: true,
    }
     const zoomInProperties = {
         scale:5.6,
     }
    return (
        <div>
            <Zoom {...autoInProperties}>
                {data.map((each, index) => (
                    <div key={index} style={{ width: "100%", height: 500 }}>
                        <div className="slider-wrapper">
                            {/* <img src={each.logo}></img> */}
                     
                    
                        <div className="slider" >
                            <img className='fill' style={{ objectFit: "cover",height: 500, width: "100%" }} src={each.img} />
                        </div>



                            <div className="container h-100 d-none d-md-block slider-overlay">
                                <div className="row align-items-center h-100">
                                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                        <div className="caption animated fadeIn">
                                            <h2>Boat Excursions</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                            <a className="btn btn-primary rounded-pill" href="#">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

       
                    </div>
                ))}
            </Zoom>
        </div>
    )
}

export default Slideshow;


