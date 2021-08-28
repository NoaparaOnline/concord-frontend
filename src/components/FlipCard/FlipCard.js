import React from 'react'
import third from '../../assets/warehouse-1.jpg';
import './FlipCard.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const FlipCard = ({card}) => {

  
 const {title,text1,text2,img,btn} = card;
  
  
  return (
<div>
      
      
      <div className="flip-card" style={{width:'232px'}}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
    
    
    <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">{text1}</h6>
          <h6 className="card-title">{text2}</h6>
        </div>
        {card.img.map(ob => {
            return (
              <img src={ob.imgf} className="card-img-top p-4" alt="..." />
              );
            })}
          <Router>
          <Link to='/' className="btn btn-primary rounded-pill mx-5 mb-4">{btn}</Link>
          </Router>
    </div>


    </div>


    <div className="flip-card-back">


    <div className="card"  >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title">{text1}</h6>
          <h6 className="card-title">{text2}</h6>
        </div>
        {card.img.map(ob => {
            return (
              <img src={ob.imge} className="card-img-top p-4" alt="..." />
              );
            })}
          <Router>
          <Link to='/' className="btn btn-primary rounded-pill mx-5 mb-4">{btn}</Link>
          </Router>
    </div>


    </div>
  </div>
</div>


</div>
      
    
    )
}

export default FlipCard
