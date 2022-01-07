import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/ContactBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import contactcard1 from '../Statics/assets/contact/contact.svg'
import contactcard2 from '../Statics/assets/contact/distribution.svg'
import { Helmet } from 'react-helmet';


const Contact = () => {
    
    const contactcard = [
        {
          id: 1,
          imageURL: contactcard1,
          text: "Our Distribution Network",
          link: "/our-distribution-network",
        },
        
        {
          id: 2,
          imageURL: contactcard2,
          text: "Contact Us",
          link: "/contactus",
        },
        
      ];

      const LinksBan = [
        {
          subLinkName: 'Home',
          subDash: '/',
          subLink: '/'
        },
    
      ];

    return (
        <>
        <Helmet>
        <title>Contact - Concord Pharma</title>
      </Helmet>
        <BannerWithText imgSrc={bannerimg}
          heading={'Contact'}
          subHeading={`Contact`}
          LinksBan={LinksBan}
          
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
          />
        <Heading heading={"Contact"} />
  
  
  
        {/* Zoom Cards */}
        <div className="container my-5">
          <div className="row d-flex justify-content-center">
  
            {contactcard.map((ob, index) => (
              <React.Fragment key={ob.id}>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 '>
                  <ZoominCards abcard={ob} />
                </div>
              </React.Fragment>
            )
            )}
  
  
          </div>
        </div>
  
        <CompanyLogos />
      </>
    )
}

export default Contact
