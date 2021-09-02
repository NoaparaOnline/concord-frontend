import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const NearestDeliveryCenter = ({heading}) => {
    return (
        <div>

        <div className="container">
        <div className="row">
            <div className="col-md-6 my-4 text-left">
             <h1 className="siz text-left " style={{color:'#0066b3',padding:'20px'}}>Nearest Delivery Center</h1>
             <p>We serve the whole nation by covering entire Bangladesh. You can track the nearest delivery center simply by selecting the area</p>
             <p>Select Area:</p><span></span>
             <p className="typography_text">For more details please call at our TOLLFREE number.</p>
             <span><i className="fa fa-phone"></i></span><span className="typography_text">+8801991145006</span>

            </div>
            <div className="col-md-6 my-5" >
            <video controls autoPlay muted loop width="100%">
            <source src="https://www.ri-demo.co/concord/final-2/wp-content/uploads/2019/06/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
            </video>             
            </div>
        </div>
        </div>
        </div>
    )
}

export default NearestDeliveryCenter
