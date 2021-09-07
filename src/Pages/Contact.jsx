import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/ContactBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import contactcard1 from '../Statics/assets/contact/contact.svg'
import contactcard2 from '../Statics/assets/contact/distribution.svg'


const Contact = () => {
    
    const contactcard = [
        {
          id: 1,
          imageURL: contactcard1,
          text: "Our Distribution Network",
          link: "/facilities_ourdistribution",
        },
        
        {
          id: 2,
          imageURL: contactcard2,
          text: "Contact Us",
          link: "/contact_contactus",
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
        <div>
        <BannerWithText imgSrc={bannerimg}
          heading={'Contact'}
          subHeading={`Contact`}
          LinksBan={LinksBan}
          height={"400px"}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
          />
        <Heading heading={"Contact"} />
  
  
  
        {/* Zoom Cards */}
        <div className="container my-5">
          <div className="row ">
  
            {contactcard.map((ob, index) => (
              <React.Fragment key={ob.id}>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
                  <ZoominCards abcard={ob} />
                </div>
              </React.Fragment>
            )
            )}
  
  
          </div>
        </div>
  
        <CompanyLogos />
      </div>
    )
}

export default Contact
