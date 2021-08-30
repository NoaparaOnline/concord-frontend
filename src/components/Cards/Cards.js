import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { BrowserRouter as Router,Link } from 'react-router-dom'
import first from '../../assets/fac-QC.jpg';
import second from '../../assets/fac-RD.jpg';
import third from '../../assets/warehouse-1.jpg';
import fourth from '../../assets/fac-production.jpg';
import './Cards.css'
const Cards = () => {

    const cards = [
        {
            name: "Production",
            imageURL: first,
            text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
            link: "#"
        },
        {
            name: "Research & Development",
            imageURL: second,
            text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
            link: "#"
        },
        {
            name: "Quality Control",
            imageURL: third,
            text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
            link: "#"
        },
        {
            name: "Warehouse",
            imageURL: fourth,
            text: "Concord Pharmaceuticals Ltd is equipped with state of the art manufacturing facilities including modern technology & expertise, latest equipment & advancements.",
            link: "#"
        }
    ];
    return (
        
        <div className="container">
             <div className="row" style={{padding:'10px'}}>
        {cards.map(ob => {
            return (
                    <div className="row col-sm-6 mx-auto"  style={{display:'flex',flexDirection:'row' ,padding:'10px' }}>
               
                <div className="col-sm-6 ">
                <img src={ob.imageURL} className="img-fluid"/>
                </div>
               <div className="col-sm-6" style={{
                   alignItems: 'flex-start',
                   flexDirection: 'column',
                   display: 'flex',
               
               }}>
                <h5 style={{color:'#337ab7',
            }}>{ob.name}</h5>
                <p className="text-start">{ob.text}</p>
          
             
                  <Link to={ob.link} style={{textDecoration:'none',fontWeight:500,marginTop: 0, height:'45px' ,width:'130px'}} className="dd"><span>Read Me</span></Link>
                </div>
              </div>
            );
        })}
          </div>
              </div>
        
 
    )
}

export default Cards

