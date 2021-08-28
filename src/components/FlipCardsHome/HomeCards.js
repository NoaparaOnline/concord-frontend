import React from 'react'
import {FlipCard,Heading} from '../../components'
import './HomeCards.css'
const HomeCards = ({card}) => {
 
    return (
        <div>
            <div className="container mt-0 cards mx-1 maxminHeight">
        <div className="row evenspace">
        {card.map((ob,index) => {
            return (
                <div className={index === 0 ?  `col-md-2 offset-md-1` : `col-md-2`}><FlipCard card={ob}/></div>
                );
        })} 
        </div>
         </div>
        </div>
    )
}

export default HomeCards
