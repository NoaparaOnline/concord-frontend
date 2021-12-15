import React from 'react'
import './FlipCard.css'

const SingleCard = (props) => {
  const { card } = props;
  const {title, text1, text2,  btn,  innerComposition } = card;
  const currentpath = props?.location?.pathname;
 
  return (
        <div>

<div className="card cardstyle">
<div className="card flipcard_custom">
              <div className="card-body">
                <h5 className="card-title text-white">
                {currentpath === '/products_bygeneric' ? innerComposition : title}

                </h5>
                <h6 className="card-title text-white">{text1}</h6>
                <h6 className="card-title text-white">{text2}</h6>
               </div>
              {card?.img?.map((ob,index) => {
                return (
                  <img key={ob.id} src={ob.imgf} className="card-img-top p-3"    height="100%"
                  width="100%" alt="..." />
                );
              })}
              <div
                onClick={() => props?.history?.push("/prod_details",{data : {...card,from:props?.location?.pathname}})}
                className="btn  rounded-pill colr_btn"
              >
                {btn}
              </div>
            </div>
            </div>
</div>
    )
}

export default SingleCard
