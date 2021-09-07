import React from 'react'
import { CompanyLogos,Milestones } from '../components'
import bannerimg from "../assets/milestonebanner.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
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
            year: '2011',
            text: 'Concord Project Managements Established'
        },
        {
            id: 1,
            year: '2014',
            text: 'Continuing with various Projects'
        },
        {
            id: 2,
            year: '2017',
            text: 'Financial Stability'
        },
        {
            id: 3,
            year: '2019',
            text: 'More Than 250 Products'
        },
        {
            id: 4,
            year: '2014',
            text: 'Continuing with various Projects'
        },
        {
            id: 5,
            year: '2017',
            text: 'Financial Stability'
        },
      ];

      const label = {
        Milestones: "Milestones",
      };
    return (
        <div>
            <BannerWithText
                imgSrc={bannerimg}
                heading={"Milestones"}
                subHeading={`Milestones`}
                LinksBan={LinksBan}
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

        </div>
    )
}

export default Media_milestone
