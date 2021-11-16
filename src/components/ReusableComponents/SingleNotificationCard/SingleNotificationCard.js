import React from 'react'
import icon from '../../../Statics/fav.png'

const SingleNotificationCard = ({backgroundcolorchat ,userimg ,colorchattext}) => {
    return (
            <div class="container ">
    <div class="card mt-3 p-1" style={{cursor:'pointer'}}>
        <div class="media">
        <div className="rounded-circle p-2"><img alt="" className="rounded-square p-1 mx-2 mt-2" style={{backgroundColor:'#fff',borderRadius:'7px' ,border:'1px solid #0066b3'}} src={icon} height="60px" width="60px" /></div> 
            <div class="media-body">
                <h5 class="mt-2 mb-0" style={{lineHeight: '1.8'}}>Concord Test Title</h5>
                <h6 class="mt-2 mb-0" style={{lineHeight: '1.8'}}>This is Concord Test Notification.We Can Recive Notification Here.</h6> <small class="text d-flex justify-content-end">Mar 20,2020</small>
            </div>
        </div>
    </div>
</div>
    )
}


export default SingleNotificationCard
