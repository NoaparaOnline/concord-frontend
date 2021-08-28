import React from 'react'
import './Heading.css';
const Heading = ({heading}) => {
 
    return (
        <div>
            <h2 className="siz" style={{color:'#0066b3',padding:'20px'}}>{heading}</h2>
        </div>
    )
}

export default Heading;
