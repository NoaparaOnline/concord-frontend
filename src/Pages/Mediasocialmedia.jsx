import React from 'react'
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/mediasocialmediapost.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from 'react-router-dom'
const Media_socialmedia = () => {

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
    const latestpost = [
        {
            id: 0,
            post: 'Concord Pharmaceuticals ltd Launched Dapazin in Myanmar 25TH August 2019.',
            postLink: '#'
        },
        {
            id: 1,
            post: 'Concord Pharmaceuticals ltd Launched Dapazin Cambodia 25TH August 2017',
            postLink: '#'
        },
        {
            id: 2,
            post: 'Attend Medi Vietnam Pharma EXPO 3rd to 5th December 2014',
            postLink: '#'
        },

    ];
    const socialpost = [

        {
            head: 'Concord Pharmaceuticals ltd Launched Dapazin in Myanmar 25TH August 2019.',
            headLink: '#',
            text: 'Concord Pharmaceuticals Ltd., Bangladesh launched  Dapazin  for the first time  with the collaboration with Zar & Zar Co., Ltd in Hotel Melia Yangon, Myanmar.It was officially opened by Prof. Tint SweLatt President, Myanmar Diabetic Association (MMDI) and highlighted how revolutionary Dapagliflozin in the field of medicine and the current global concern of SGLT-2 Inhibitor in managing Type-2 diabetes. He emphasized that every county can play a role by preventing and managing this disease, and promoting prudent use ...',
            date: 'August 25, 2019',
            dateLink: '#'
        },
        {
            head: 'Concord Pharmaceuticals ltd Launched Dapazin Cambodia 25TH August 2017',
            headLink: '#',
            text: 'Concord Pharmaceutical Ltslaunched successfully  Dapazin first time in Cambodia at Concord Pharmaceuticals Ltd  Bangladesh launched  Dapazin  for the first time  with the collaboration with Cambodia Corporation Pharma Ltd in Cambodia .Chairman of  Concord Pharmaceuticals Ltd has enlightened the team with  the future vision and mission of the company and added some appreciating words from his part to the marketing and sales team followed by opening ceremony speech.Cambodian Cooperation Pharma chairman give opening ...',
            date: 'August 25, 2017',
            dateLink: '#'
        },

        {
            head: 'Attend Medi Vietnam Pharma EXPO 3rd to 5th December 2014',
            headLink: '#',
            text: 'Concord Pharmaceuticals Ltd. has joined  21st Vietnam International Medical Hospital Pharmaceutical  Exhibition In Hanoi Ho Chi Minh City named  Medi Vietnam Pharm Expo in 2014. It includes medical and laboratory equipment, pharmaceutical products and medical instruments, machines and materials used in hospitals, ophthalmology and dental products and technology.This fair aims to bridge between domestic and international organization in the pharmaceutical & health sector. More than 100 companies from 18 countries will display Pharmaceutical products , packaging and ...',
            date: 'November 3, 2014',
            dateLink: '#'
        },


    ];

    return (
        <div>



            <BannerWithText
                imgSrc={bannerimg}
                heading={"All Blog Posts"}
                subHeading={`Social Media Post`}
                LinksBan={LinksBan}
                height={"400px"}
                backgroundSize={"100% 400px"}
                conmarpad={"mt-5 pt-5"}
                fontsize={"60px"}
            />

            <div className="container mt-5">
                <div className="row">


                    <div className="col-lg-9 ">

                        <div className="row">


                            {socialpost.map((ob, index) => {
                                return (
                                    <div className="productionbx"  key={ob.id}>

                                        <article style={{ padding: '30px' }}>

                                            <Link to={ob.headLink} className="socialmediapostlink">
                                                <h3 className="mb-3" style={{ fontSize: '36px', color: '#0066b3', fontWeight: '500' }}>{ob.head}</h3>
                                            </Link>


                                            <div className="mb-3" style={{ fontSize: '16px', color: '#565656' }}>
                                                {ob.text}
                                            </div>

                                            <Link to={ob.dateLink} style={{ fontSize: '12px', textDecoration: 'none' }}><span className="me-1"><i className="fa fa-clock-o"></i></span><span style={{ color: '#565656' }}>{ob.date}</span></Link>


                                        </article>

                                    </div>
                                );
                            })}

                        </div>
                    </div>





                    <div className="col-lg-3 col-md-3 d-none d-sm-block">
                        <div className="productFilterContent">
                            <h3 className="filterHeading " style={{ fontWeight: '500', fontSize: '24px', color: '#0066b3' }}>Latest Posts</h3>
                            <div style={{ borderBottom: '1px #ccc solid', marginTop: '16px', marginBottom: '16px' }} />

                            {latestpost.map((ob, index) => {
                                return (
                                    <div key={ob.id}>
                                        <Link to={ob.postLink} style={{ textDecoration: 'none', color: '#565656', marginBottom: '5px' }}><p className="">{ob.post}</p></Link>
                                    </div>
                                );
                            })}

                        </div>
                    </div>





                </div>
            </div>


            <CompanyLogos />

        </div>
    )
}

export default Media_socialmedia