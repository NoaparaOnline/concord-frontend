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
import { useTranslation } from 'react-i18next';

const Media = () => {
    const {t}=useTranslation('common')
    const mediacard = [
        {
          id: 0,
          imageURL: mediacard1,
          text: t('media.text_1'),
          link: "/video",
        },
        {
          id: 1,
          imageURL: mediacard2,
          text: t('media.text_2'),
          link: "/events",
        },
        {
          id: 2,
          imageURL: mediacard3,
          text: t('media.text_3'),
          link: "/social-media-post",
        },
        {
          id: 3,
          imageURL: mediacard4,
          text: t('media.text_4'),
          link: "/milestones",
        },
        {
          id: 4,
          imageURL: mediacard5,
          text: t('media.text_5'),
          link: "#",
        },
      ];
    
      // BannerWithText Wale Ki Links Ka Object
      const LinksBan = [
        {
          subLinkName:t('media.home_text') ,
          subDash: '/',
          subLink: '/'
        },
    
      ];
    
   
    return (
        <>
        <Helmet>
        <title>{t('media.helmet.title_text')}</title>
      </Helmet>
        <BannerWithText imgSrc={bannerimg}
          heading={t('media.media_text')}
          subHeading={t('media.media_text').toUpperCase()}
          LinksBan={LinksBan}
          height={"400px"}
          
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
          backgroundSize={"100% 400px"}
          conmarpad={"mt-5 pt-5"}
          fontsize={"60px"}
          />
        <Heading heading={t('media.media_text')} />
  
  
  
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
