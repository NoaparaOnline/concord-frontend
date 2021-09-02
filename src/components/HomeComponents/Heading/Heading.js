import React from 'react'
import './Heading.css';
const Heading = ({heading,subheading}) => {
 
    return (
        <div>
            <h2 className="siz text-center" style={{color:'#0066b3',padding:'20px'}}>{heading}</h2>
            <h6 className="text-center Typograpy_subheading" >{subheading}</h6>
        </div>
    )
}

export default Heading;
