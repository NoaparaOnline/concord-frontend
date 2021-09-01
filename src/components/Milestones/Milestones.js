import React from 'react'
import Heading from '../Heading/Heading'
import './Milestones.css'
import { Link } from 'react-router-dom'
const Milestones = ({ heading }) => {


    const milestone_data = [
        {
            id: 0,
            year: '2011',
            text: 'Concord Project Managements Established'
        },
        {
            id: 1,
            year: '2014',
            text: 'Continuing with various Projects'
        },
    ]



    return (
        <div className="colrbck">
            <Heading heading={heading.Milestones} />
            <div className="container ">
                <div className="row">

                    {milestone_data.map((ob, index) => {
                        return (
                            <div key={ob.id} className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                <p key={ob.id} className="d-inline">
                                    <span className="text-primary p-3 Typography_year">{ob.year}</span>
                                    <span className="vl Typography_text">{ob.text}</span></p>
                            </div>
                        )
                    })}
                </div>



                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center my-4 text-primary">
                        <Link to={'/'} style={{ textDecoration: 'none', fontWeight: 550, marginTop: 0 }} className="dd rounded-pill"><span>VIEW MORE</span></Link>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Milestones
