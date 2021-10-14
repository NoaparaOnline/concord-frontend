import React from 'react'
import icon from '../../../Statics/fav.png'

const SingleNotificationCard = ({backgroundcolorchat ,userimg ,colorchattext}) => {
    return (
            //  <div class="media-body mb-3" >
            //  <div class="incoming_msg_img mr-3">
            //       <img className="mb-5" src={icon} alt="sunil"/>  
            //       {/* {userimg} */}
        //        </div>
            //         <div class="mf-content text-justify " style={{backgroundColor:backgroundcolorchat ,color:colorchattext}}>
            //             This is DMFR Chat Application.We Can easily chat with other person. 
                
            //         <small class="mf-date d-flex justify-content-end" style={{color:'#fff'}}>15 hours ago</small>
            //         </div>
                   
            //   </div>
            <div class="container ">
    <div class="card mt-3 p-1">
        <div class="media">
        <div className="rounded-circle p-2"><img className="rounded-square p-1 mx-2 mt-1" style={{backgroundColor:'#fff',borderRadius:'7px' ,border:'1px solid #0066b3'}} src={icon} height="50px" width="50px" /></div> 
            <div class="media-body">
                <h6 class="mt-2 mb-0" style={{lineHeight: '1.8'}}>This is Concord Chat Application.We Can easily chat with other person.</h6> <small class="text d-flex justify-content-end">Mar 20,2020</small>
            </div>
        </div>
    </div>
</div>
    )
}


export default SingleNotificationCard
