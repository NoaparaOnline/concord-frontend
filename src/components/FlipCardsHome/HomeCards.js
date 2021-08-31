import React from 'react'
import {FlipCard,Heading} from '../../components'
import './HomeCards.css'
const HomeCards = ({card}) => {
 
    return (
        <div className="container">
            <div className="container mt-0  cards mx-1 ">
        <div className="row ">
            
        {card.map((ob,index) => {
            return (
                <div className={index === 0 ? `col-lg-2 offset-lg-1 col-md-4  col-sm-6 col-xs-6  mx-3 mt-5` : `col-lg-2 col-md-4  col-sm-6 col-xs-6 mx-3  mt-5`}><FlipCard card={ob}/></div>
                );
        })} 
        </div>
         </div>
        </div>
    )
}

export default HomeCards
