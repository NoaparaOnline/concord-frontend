import React from 'react'
import Heading from '../Heading/Heading'
import './Milestones.css'
const Milestones = ({ heading, milestone_data, button, colorclass }) => {

    return (
        <div className={colorclass}>
            <div className=" pt-3">
                <Heading heading={heading.Milestones ? heading.Milestones : heading} />
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">

                    {milestone_data.map((ob, index) => {
                        return (
                            <div key={ob.id} className="col-lg-5 mt-2 mb-3">
                                <p key={ob.id} className="d-inline">
                                    <span className="text-primary p-3 Typography_year" style={{ color: '#0066b3' }}>{ob.year}</span>
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
