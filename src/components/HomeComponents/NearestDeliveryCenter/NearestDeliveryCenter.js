import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './NearestDeliveryCenter.css';
const NearestDeliveryCenter = ({heading}) => {
    return (
        <div>

        <div className="container my-5">
        <div className="row">
            <div className="col-md-6 my-4 text-left">
             <h1 className="siz text-left " style={{color:'#0066b3'}}>Nearest Delivery Center</h1>
             <p style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>We serve the whole nation by covering entire Bangladesh. You can track the nearest delivery center simply by selecting the area</p>
             <label for="area" style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>Select Area:</label>
            <select name="area" id="area"  >
      <option value="1">Central</option> 
      <option value="2">Dhaka</option>      
      <option value="3">Barisal</option>       
      <option value="4">Jessore</option>
      <option value="5">Comilla</option>
      <option value="6">Noakhali</option>
      <option value="7">Mymenshingh</option>
      <option value="8">Chittagong</option>
      <option value="9">Rangpur</option>
      <option value="10">Rajshahi</option>
      <option value="11">Jhenaidah</option>
</select>

             <p className="typography_text" style={{color:'#565656',fontSize:'20px',marginBottom:'15px',lineHeight:1.5}}>For more details please call at our TOLLFREE number.</p>
             <span style={{color:'#0066b3'}}><i className="fa fa-phone"></i></span><span className="typography_text"
             style={{color:'#565656',fontSize:'18px',marginBottom:'15px',lineHeight:1.5}}>+8801991145006</span>

            </div>
            <div className="col-md-6" >
            <video controls autoPlay muted loop width="100%" height="100%">
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
