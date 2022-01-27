import React from 'react'
import { CompanyLogos,Milestones } from '../components'
import bannerimg from "../Statics/assets/milestonebanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
const Media_milestone = () => {
const {t}=useTranslation('common');
    // BannerWithText Wale Ki Links Ka Object
    const LinksBan = [
        {
            subLinkName: t('media_milestones.home_text'),
            subDash: '/',
            subLink: '/'
        },
        {
            subLinkName: t('media_milestones.media_text'),
            subDash: '/',
            subLink: '/media'
        },
    ];

    const milestone_data = [
        {
            id: 0,
            year: t('media_milestones.year_1'),
            text: t('media_milestones.text_1')
        },
        {
            id: 1,
            year: t('media_milestones.year_2'),
            text: t('media_milestones.text_2')
        },
        {
            id: 2,
            year: t('media_milestones.year_3'),
            text: t('media_milestones.text_3')
        },
        {
            id: 3,
            year: t('media_milestones.year_4'),
            text: t('media_milestones.text_4')
        },
        {
            id: 4,
            year: t('media_milestones.year_5'),
            text: t('media_milestones.text_5')
        },
        {
            id: 5,
            year: t('media_milestones.year_6'),
            text: t('media_milestones.text_6')
        },
        {
            id: 6,
            year: t('media_milestones.year_7'),
            text: t('media_milestones.text_7')
        },
        {
            id: 7,
            year: t('media_milestones.year_8'),
            text: t('media_milestones.text_8')
        },
        {
            id: 8,
            year: t('media_milestones.year_9'),
            text: t('media_milestones.text_9')
        },
        {
            id: 9,
            year: t('media_milestones.year_10'),
            text: t('media_milestones.text_10')
        },
      ];
      

      const label = {
        Milestones: t('media_milestones.milestones_text'),
      };
    return (
        <>
        <Helmet>
        <title>{t('media_milestones.helmet.title_text')}</title>
      </Helmet>
            <BannerWithText
                imgSrc={bannerimg}
                heading={t('media_milestones.milestones_text')}
                subHeading={t('media_milestones.milestones_text').toUpperCase()}
                LinksBan={LinksBan}
                height={"400px"}
                
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
                backgroundSize={"100% 400px"}
                conmarpad={"mt-5 pt-5"}
                fontsize={"60px"}
            />


            <Milestones 
            milestone_data={milestone_data}
            heading={label}
            button={
                <>
                <div className="mt-5">

                </div>
                </>
            }
            />

            <CompanyLogos />

        </>
    )
}

export default Media_milestone
