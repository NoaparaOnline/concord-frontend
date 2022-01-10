import React from 'react'
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import bannerimg from "../Statics/assets/mediaphotobanner.jpg";
import { Button } from 'react-bootstrap';


export default function MediaEvents(props) {
    const LinksBan = [
        {
            subLinkName: "Home",
            subDash: "/",
            subLink: "/",
        },
        {
            subLinkName: "Media",
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
        props?.history.push('/photo',text)
    }
    return (
        <>
            <Helmet>
                <title>Events - Concord Pharma</title>
            </Helmet>
            <BannerWithText
                imgSrc={bannerimg}
                heading={"Events"}
                subHeading={`Events`}
                LinksBan={LinksBan}
                height={"400px"}
                backposit={"center right"}
                backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
                backgroundSize={"100% 400px"}
                conmarpad={"mt-5 pt-5"}
                fontsize={"60px"}
            />
            <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className='col-lg-5 p-3' style={{border:'2px solid lightblue',borderRadius:'15px'}}>
                        <h4 className='text-center'>Annual Confrence 2013</h4>
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
                            <Button className='' onClick={() => moreImages("Annualconfirence2013")}>View More</Button>
                        </div>

                    </div>
                    <div className='col-lg-5 p-3' style={{border:'2px solid lightblue',borderRadius:'15px'}}>
                        <h4 className='text-center'>Annual Confrence 2014</h4>
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
                            <Button className='' onClick={() => moreImages("Annualconfirence2014")}>View More</Button>
                        </div>
                    </div>

                </div>
                <div className='row mt-5 mb-3 d-flex justify-content-between'>
                    <div className='col-lg-5 p-3' style={{border:'2px solid lightblue',borderRadius:'15px'}}>
                        <h4 className='text-center'>Dapazine Lunching Program</h4>
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
                            <Button className='' onClick={() => moreImages("Dapazinelunchingprogram")}>View More</Button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
