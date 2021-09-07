import React from 'react'
import Heading from '../Heading/Heading'
import './Milestones.css'
const Milestones = ({ heading ,milestone_data,button,colorclass}) => {


    



    return (
        <div className={colorclass}>
            <Heading heading={heading.Milestones} />
            <div className="container ">
                <div className="row">

                    {milestone_data.map((ob, index) => {
                        return (
                            <div key={ob.id} className="col-xl-6 col-lg-6 col-lg-3 mt-5">
                                <p key={ob.id} className="d-inline">
                                    <span className="text-primary p-3 Typography_year">{ob.year}</span>
                                    <span className="vl Typography_text me-3" /><span className="Typography_text">{ob.text}</span></p>
                            </div>
                        )
                    })}
                </div>


                {button}
                
            </div>
        </div>


    )
}

export default Milestones
