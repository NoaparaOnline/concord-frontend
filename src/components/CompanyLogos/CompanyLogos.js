import React from 'react'
import clogo1 from '../../assets/clogo1.png'
import clogo2 from '../../assets/clogo2.png'
import clogo3 from '../../assets/clogo3.png'
import clogo4 from '../../assets/clogo4.png'
const CompanyLogos = () => {
    const img = [
        {
            imgl:clogo1,
        },
        {
            imgl:clogo2,
        },
        {
            imgl:clogo3,
        },
        {
            imgl:clogo4,
        },
    ]
    console.log(img.img1)
    return (
        <div className="colrbck">
        <div className="container mh-100">
        <div>
                <div className="row">
                {img.map(ob => {
            return (
                    <div className="col-lg-3 col-md-6   d-flex justify-content-center">
                    <img src={ob.imgl} width="130" height="130"/>                   
                    </div>
                       );
                    })}
                </div>
            </div>
        </div>
        </div>

    )
}

export default CompanyLogos
