import React from 'react'
import Heading from '../Heading/Heading'
import './Milestones.css'
import { Link } from 'react-router-dom'
const Milestones = ({heading}) => {
    const arr = [
    {
    year: '2011',
    text: 'Concord Project Managements'    
    },
    {
    year: '2014',
    text: 'Continuing with various Projects'    
    },
    ]
    return (
        <div className="colrbck">
        <Heading heading={heading.Milestones}/>
        <div className="container mh-100 ">
        <div className="row">
            <div className="col-md-1 d-flex flex-row-reverse text-primary">
                <h5>{arr[0].year}</h5>
            </div>
            <div className="col-md-5  vl d-flex flex-row">
            <h2>{arr[0].text}</h2>
            </div>
            <div className="col-md-1 d-flex flex-row-reverse text-primary">
            <h5>{arr[1].year}</h5>
            </div>
            <div className="col-md-5 d-flex flex-row vl">
            <h2>{arr[1].text}</h2>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12 d-flex justify-content-center my-4 text-primary">
        <Link to={'/'} style={{textDecoration:'none',fontWeight:550,marginTop: 0}} className="dd rounded-pill"><span>VIEW MORE</span></Link>
                 
        </div>
        </div>
    </div>
    </div>


    )
}

export default Milestones
