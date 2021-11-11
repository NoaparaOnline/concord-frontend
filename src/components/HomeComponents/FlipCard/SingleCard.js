import React from 'react'
import './FlipCard.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleProductDataObj } from "../../../Store/Actions/directorActions";

const SingleCard = ({card}) => {
  const {title,text1, text2, img, btn,btnlink, innerdata } = card;
  const dispatch = useDispatch();

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
              <Link to={btnlink} onClick={() => dispatch(getSingleProductDataObj(innerdata))}  className="btn  rounded-pill colr_btn">
                {btn}
              </Link>
            </div>
            </div>
</div>
    )
}

export default SingleCard
