import React from 'react'
import { CompanyLogos, Heading } from '../components'
import bannerimg from '../assets/MediaBanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import mediacard1 from '../assets/Media/Video.svg'
import mediacard2 from '../assets/Media/photo.svg'
import mediacard3 from '../assets/Media/post.svg'
import mediacard4 from '../assets/Media/milestone.svg'
import mediacard5 from '../assets/Media/responsibilities.svg'

const Media = () => {
   
    const mediacard = [
        {
          id: 0,
          imageURL: mediacard1,
          text: "Video",
          link: "/media_video",
        },
        {
          id: 1,
          imageURL: mediacard2,
          text: "Photo",
          link: "/media_photo",
        },
        {
          id: 2,
          imageURL: mediacard3,
          text: "Social Media Post",
          link: "/media_socialmedia",
        },
        {
          id: 3,
          imageURL: mediacard4,
          text: "Milestones",
          link: "/media_milestone",
        },
        {
          id: 4,
          imageURL: mediacard5,
          text: "Social Responsibilities",
          link: "/media_socialresponsiblities",
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
        <div>
        <BannerWithText imgSrc={bannerimg}
          heading={'Media'}
          subHeading={`MEDIA`}
          LinksBan={LinksBan}
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
      </div>
    )
}

export default Media
