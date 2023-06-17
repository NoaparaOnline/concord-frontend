import React from 'react'
import './Heading.css';
const Heading = ({heading,subheading}) => {
 
    return (
        <div>
            <h1 className="siz text-center textfontsize" style={{color:'#0066b3',padding:'10px'}}>{heading}</h1>
            <h1 className="text-center Typograpy_subheading"style={{color:'#333',fontSize:'18px',margin:'0px 0px 16px',fontWeight:'400'}} >{subheading}</h1>
        </div>
    )
}

export default Heading;
