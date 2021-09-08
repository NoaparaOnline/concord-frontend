import React from 'react'
import './FlipCard.css'
import { Link } from "react-router-dom";

const SingleCard = ({card}) => {
  const {title,text1, text2, img, btn,btnlink } = card;
    return (
        <div>

<div className="card cardstyle">
<div className="card flipcard_custom">
              <div className="card-body">
                <h5 className="card-title text-white">{title}</h5>
                <h6 className="card-title text-white">{text1}</h6>
                <h6 className="card-title text-white">{text2}</h6>
               </div>
              {card.img.map((ob,index) => {
                return (
                  <img key={ob.id} src={ob.imgf} className="card-img-top p-3" alt="..." />
                );
              })}
              <Link to={btnlink} className="btn btn-primary rounded-pill mx-5 mb-4" style={{color:'#fff',backgroundColor:'#0066b3'}}>
                {btn}
              </Link>
            </div>
            </div>
</div>
    )
}

export default SingleCard
