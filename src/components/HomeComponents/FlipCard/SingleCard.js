import React, { useEffect } from 'react'
import './FlipCard.css'

const SingleCard = (props) => {
  const { card } = props;
  const { title, text1, text2, btn, innerComposition, id } = card;
  const currentpath = props?.location?.pathname;
  const getFirstWord = (string) => {
    const words = string.split(" ");
    return words[0].toLowerCase();
  };
  // useEffect(() => {
  //   let imgs = []
  //   imgs.push({ imgf: card?.imgf })
  //   imgs.push({ imge: card?.imge })

  //   card["img"] = imgs
  // }, [])


  const proname = getFirstWord(card?.name ? card?.name : title);


  return (
    <div>

      <div className="card cardstyle">
        <div className="card flipcard_custom">
          <div className="card-body">
            <h5 className="card-title text-white">
              {currentpath === '/by-generic-name' ? innerComposition : title}

            </h5>
            <h6 className="card-title text-white">{card?.name ? card?.name : text1}</h6>
            <h6 className="card-title text-white">{card?.name ? card?.name : text2}</h6>
          </div>
          <img src={props?.api ? card?.image : card?.img ? card?.img[0]?.imgf : card?.imgf} className="card-img-top p-3" height="100%"
            width="100%" alt={currentpath === '/by-generic-name' ? innerComposition : title} />
          {/* {card?.img?.length < 1 ? <img src={imgf} className="card-img-top p-3" height="100%"
            width="100%" alt={currentpath === '/by-generic-name' ? innerComposition : title} /> : card?.img?.map((ob, index) => {
              return (
                <img key={ob.id} src={ob.imgf} className="card-img-top p-3" height="100%"
                  width="100%" alt={currentpath === '/by-generic-name' ? innerComposition : title} />
              );
            })} */}
          {/* {card?.img?.map((ob, index) => {
            return (
              <img key={index} src={ob.imgf} className="card-img-top p-3" height="100%"
                width="100%" alt={currentpath === '/by-generic-name' ? innerComposition : title} />
            );
          })} */}
          <div
            onClick={() => props?.history?.push(`/prod-details/${card?.category}/${proname}`, { data: { ...card, from: props?.location?.pathname } })}
            className="btn  rounded-pill colr_btn"
          >
            {card?.button ? card?.button : btn}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
