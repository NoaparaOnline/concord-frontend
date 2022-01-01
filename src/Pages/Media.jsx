import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../Statics/assets/MediaBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import mediacard1 from '../Statics/assets/Media/Video.svg'
import mediacard2 from '../Statics/assets/Media/photo.svg'
import mediacard3 from '../Statics/assets/Media/post.svg'
import mediacard4 from '../Statics/assets/Media/milestone.svg'
import mediacard5 from '../Statics/assets/Media/responsibilities.svg'
import { Helmet } from 'react-helmet';

const Media = () => {
   
    const mediacard = [
        {
          id: 0,
          imageURL: mediacard1,
          text: "Video",
          link: "#",
        },
        {
          id: 1,
          imageURL: mediacard2,
          text: "Photo",
          link: "/photo",
        },
        {
          id: 2,
          imageURL: mediacard3,
          text: "Social Media Post",
          link: "/social_media_post",
        },
        {
          id: 3,
          imageURL: mediacard4,
          text: "Milestones",
          link: "/milestones",
        },
        {
          id: 4,
          imageURL: mediacard5,
          text: "Social Responsibilities",
          link: "#",
        },
      ];
    
      // BannerWithText Wale Ki Links Ka Object
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
        <title>Media - Concord Pharma</title>
      </Helmet>
        <BannerWithText imgSrc={bannerimg}
          heading={'Media'}
          subHeading={`MEDIA`}
          LinksBan={LinksBan}
          height={"400px"}
          
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
          />
        <Heading heading={"Media"} />
  
  
  
        {/* Zoom Cards */}
        <div className="mb-5">
          <div className="row">
  
            {mediacard.map((ob, index) => (
              <React.Fragment key={ob.id}>
                <div className={index===0 ? `col-lg-2 offset-lg-1 col-md-3 mt-4`:`col-lg-2 col-md-3 mt-4`}>
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

export default Media
