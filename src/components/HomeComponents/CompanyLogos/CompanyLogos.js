import React from 'react'
import clogo1 from '../../../assets/clogo1.png'
import clogo2 from '../../../assets/clogo2.png'
import clogo3 from '../../../assets/clogo3.png'
import clogo4 from '../../../assets/clogo4.png'
const CompanyLogos = () => {
    const img = [
        {
            id:1,
            imgl:clogo1,
        },
        {
            id:2,
            imgl:clogo2,
        },
        {
            id:3,
            imgl:clogo3,
        },
        {
            id:4,
            imgl:clogo4,
        },
    ]
    return (
        <div className="colrbck">
        <div className="container mh-100">
        <div>
                <div className="row">
                {img.map((ob,index) => {
            return (
                    <div key={ob.id} className="col-lg-3 col-md-6   d-flex justify-content-center">
                    <img alt=""  key={ob.id} src={ob.imgl} width="130" height="130"/>                   
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
