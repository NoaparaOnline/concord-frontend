import React from 'react'
import Heading from '../Heading/Heading'
import 'font-awesome/css/font-awesome.min.css';

const NearestDeliveryCenter = ({heading}) => {
    return (
        <div>

        <div className="container">
        <div className="row">
            <div className="col-md-6 my-5 text-left">
             <Heading heading={heading.NearestDeliveryCenter}/>
             <p>We serve the whole nation by covering entire Bangladesh. You can track the nearest delivery center simply by selecting the area</p>
             <p>Select Area:</p><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
             <p>For more details please call at our TOLLFREE number.</p>
             <i className="fas fa-phone"></i><p>+8801991145006</p>

            </div>
            <div className="col-md-6 my-5" >
            <video autoplay loop width="520" height="350" controls>
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
