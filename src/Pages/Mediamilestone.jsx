import React from 'react'
import { CompanyLogos,Milestones } from '../components'
import bannerimg from "../Statics/assets/milestonebanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from 'react-helmet';
const Media_milestone = () => {

    // BannerWithText Wale Ki Links Ka Object
    const LinksBan = [
        {
            subLinkName: 'Home',
            subDash: '/',
            subLink: '/'
        },
        {
            subLinkName: 'Media',
            subDash: '/',
            subLink: '/media'
        },
    ];

    const milestone_data = [
        {
            id: 0,
            year: '2010',
            text: 'Inauguration of CONCORD'
        },
        {
            id: 1,
            year: '2010',
            text: 'Factory Establish'
        },
        {
            id: 2,
            year: '2011',
            text: 'Depot Establish'
        },
        {
            id: 3,
            year: '2012',
            text: 'Annual Conference'
        },
        {
            id: 4,
            year: '2014',
            text: 'GMP Approval'
        },
        {
            id: 5,
            year: '2014',
            text: 'First Export'
        },
        {
            id: 6,
            year: '2015',
            text: 'Dapazin (First time in Bangladesh) launching program'
        },
        {
            id: 7,
            year: '2016',
            text: 'Relikof (First time in Bangladesh) launching'
        },
        {
            id: 8,
            year: '2018',
            text: 'Health Associates Establish'
        },
        {
            id: 9,
            year: '2021',
            text: '1 million $ Export of Dapazin'
        },
      ];

      const label = {
        Milestones: "Milestones",
      };
    return (
        <>
        <Helmet>
        <title>Milestones - Concord Pharma</title>
      </Helmet>
            <BannerWithText
                imgSrc={bannerimg}
                heading={"Milestones"}
                subHeading={`Milestones`}
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
