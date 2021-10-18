import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = (props) => {
    return (
        <div>
            <section class="page-404 page-404-default">
	<div class="container">
		<div className="center my-5" style={{height:'30vh'}}>				
						<div className="heading heading-large color-main" style={{color:'#565656'}}>
				<h4>Oops! Page Not Found</h4>
			</div>
			<p className="center-404" style={{color:'#565656'}}>
				The page you are looking for was moved, removed, renamed or might never existed.
			</p>
			<div className="lte-empty-space"></div>
            <div className="col-md-12 d-flex justify-content-center my-5 text-primary">
                <Link to='/' style={{ 
                  textDecoration: 'none', 
                  fontWeight: 500,
                  fontSize:'12px',
                  lineHeight:'1.7em',
                  padding:'11px 30px' ,
                  backgroundColor:'#0066b3',
                  width:'170px',
                  height:'50px',
                  justifyContent:'center',
                   }} 
                  className="btn btn-primary rounded-pill d-flex align-items-center">
                    <span>Home</span>
                </Link>
              </div>
		</div>
	</div>
</section>
        </div>
    )
}

export default Error404
