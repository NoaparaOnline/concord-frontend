import React from 'react'
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { filterComponentData } from '../Utils/functions';


export default function MediaEvents(props) {
    const component = useSelector((state) => state?.cmsReducer?.components);
    const lang = useSelector((state) => state?.cmsReducer?.language);
    const media_events = filterComponentData(component, "media_events", lang)
    const { t } = useTranslation('common')
    const LinksBan = [
        {
            subLinkName: t('media_events.home_text'),
            subDash: "/",
            subLink: "/",
        },
        {
            subLinkName: t('media_events.media_text'),
            subDash: "/",
            subLink: "/media",
        },
    ];
    function importAll(data) {
        let images = {};
        data.keys().map((item, index) => {
            images[item.replace("./", "")] = data(item);
            return "";
        });
        return images;
    }

    const annualConfrence2013 = importAll(
        require.context("../Statics/assets/Annualconfirence2013", false, /\.(png|jpe?g|svg|JPG)$/)
    );
    const annualConfrence2014 = importAll(
        require.context("../Statics/assets/Annualconfirence2014", false, /\.(png|jpe?g|svg|JPG)$/)
    );
    const dapazinelunchingprogram = importAll(
        require.context("../Statics/assets/Dapazinelunchingprogram", false, /\.(png|jpe?g|svg|JPG)$/)
    );


    const imagesData1 = Object.keys(annualConfrence2013);
    const imagesData2 = Object.keys(annualConfrence2014);
    const imagesData3 = Object.keys(dapazinelunchingprogram);


    const event1 = imagesData1?.slice(0, 6)
    const event2 = imagesData2?.slice(0, 6)
    const event3 = imagesData3?.slice(0, 6)

    const moreImages = (text) => {
        props?.history.push('/photo', text)
    }
    return (
        <>
            <Helmet>
                <title>{t('media_events.helmet.title_text')}</title>
            </Helmet>
            <BannerWithText
                imgSrc={bannerimg}
                heading={t('media_events.events_text')}
                subHeading={t('media_events.events_text').toUpperCase()}
                LinksBan={LinksBan}
                height={"400px"}
                backposit={"center right"}
                backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
                backgroundSize={"100% 400px"}
                conmarpad={"mt-5 pt-5"}
                fontsize={"60px"}
            />
            {
                media_events?.length < 1 ?
                    <div className='container'>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-lg-5 p-3' style={{ border: '2px solid lightblue', borderRadius: '15px' }}>
                                <h4 className='text-center'>{t('media_events.event_1')}</h4>
                                <div className='row'>
                                    {event1?.map((item, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">
                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={annualConfrence2013[item].default}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <Button className='' onClick={() => moreImages("AnnualConference2013")}>{t('media_events.view_more_text')}</Button>
                                </div>

                            </div>
                            <div className='col-lg-5 p-3' style={{ border: '2px solid lightblue', borderRadius: '15px' }}>
                                <h4 className='text-center'>{t('media_events.event_2')}</h4>
                                <div className='row '>
                                    {event2?.map((item, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-12 mt-2 ">
                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={annualConfrence2014[item].default}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <Button className='' onClick={() => moreImages("AnnualConference2014")}>{t('media_events.view_more_text')}</Button>
                                </div>
                            </div>

                        </div>
                        <div className='row mt-5 mb-3 d-flex justify-content-between'>
                            <div className='col-lg-5 p-3' style={{ border: '2px solid lightblue', borderRadius: '15px' }}>
                                <h4 className='text-center'>{t('media_events.event_3')}</h4>eventName
                                <div className='row'>
                                    {event3?.map((item, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-3 col-sm-12 mt-2 ">
                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={dapazinelunchingprogram[item].default}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <Button className='' onClick={() => moreImages("DapazineLunchingProgram")}>{t('media_events.view_more_text')}   </Button>
                                </div>
                            </div>

                        </div>
                    </div> :
                    <div className='container'>
                        <div className='row d-flex justify-content-between mt-5 mb-5'>
                            {media_events?.map((item, indx) => (
                                <div className='col-lg-5 p-3' style={{ border: '2px solid lightblue', borderRadius: '15px',marginBottom:'20px' }}>
                                    <>
                                        <h4 className='text-center'>{item?.name}</h4>
                                        <div className='row'>

                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">
                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f1}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">

                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f2}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">

                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f3}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">

                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f4}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">

                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f5}
                                                />
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6  mt-2 ">

                                                <img
                                                    width="170px"
                                                    height="100px"
                                                    alt="gallery"
                                                    src={item?.f6}
                                                />
                                            </div>
                                        </div>


                                        <div className='d-flex justify-content-center mt-4'>
                                            <Button className='' onClick={() => moreImages(item?.name)}>{item?.button}</Button>
                                        </div>
                                    </>


                                </div>
                            ))}


                        </div>

                    </div>

            }
        </>
    )
}
