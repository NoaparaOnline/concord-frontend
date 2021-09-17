import React from 'react'
import './Heading.css';
const Heading = ({heading,subheading}) => {
 
    return (
        <div>
            <h2 className="siz text-center" style={{color:'#0066b3',padding:'10px'}}>{heading}</h2>
            <h6 className="text-center Typograpy_subheading"style={{color:'#333',fontSize:'18px',margin:'0px 0px 16px',fontWeight:'400'}} >{subheading}</h6>
        </div>
    )
}

export default Heading;
