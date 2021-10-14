import React from 'react'
import icon from '../../../Statics/fav.png'

const SingleNotificationCard = ({backgroundcolorchat ,userimg ,colorchattext}) => {
    return (
        <div className="media">
             <div class="media-body mb-3" >
             <div class="incoming_msg_img mr-3">
                  <img className="mb-5" src={icon} alt="sunil"/>  
                  {/* {userimg} */}
                   </div>
                    <div class="mf-content text-justify " style={{backgroundColor:backgroundcolorchat ,color:colorchattext}}>
                        This is DMFR Chat Application.We Can easily chat with other person. 
                
                    <small class="mf-date d-flex justify-content-end" style={{color:'#fff'}}>15 hours ago</small>
                    </div>
                   
              </div>
        </div>
    )
}


export default SingleNotificationCard
