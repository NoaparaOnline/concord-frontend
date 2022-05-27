import React from 'react'
import { useSelector } from 'react-redux';
import { Heading } from '../components'
import { filterComponentData } from '../Utils/functions';
// import './Milestones.css'
const Media_socialresponsiblities = () => {
    const component = useSelector((state) => state?.cmsReducer?.components);
    const lang = useSelector((state) => state?.cmsReducer?.language);
    const social_media_responsibilities = filterComponentData(component, "social_media_responsibilities", lang)
    const social_responsibilities_heading = filterComponentData(component, "social_responsibilities_heading", lang)

    return (
        <>
            {social_media_responsibilities?.length == 0 ?
                <div className='container'>
                    <div className=" pt-3">
                        <Heading heading={"Social Responsibilities"} />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className='col-10'>
                            <p>
                                We believe in fulfilling our social responsibility and with this goal NOAPARA Group established a school and madrasa, all students get a full free education.  NOAPARA Group also provide financial support to elderly poor people. Concord pharmaceuticals has a vision of quality products with affordable price to serve every people of the country. Concord pharmaceuticals will do everything in our power to put a smile on your face that will be our reward and our achievement.
                            </p>
                            <p>
                                Concord pharmaceuticals ltd has a group of highly qualified and experience work force and manufacturing and marketing it’s products throughout the country we are proud exporting our products to many countries with highest quality and satisfaction.
                            </p>
                            <p>Concord pharma a first growing company in Bangladesh, we are serving with quality medicines and services considering the economy profile of our country we are always committed to offer best quality medicines with affordable price, we hope concord pharma will produce many more life saving product in future and able to create a strong position in domestic and global market, </p>
                            <p>Concord pharmaceuticals is committed to produce better medicine better life </p>
                        </div>

                    </div>



                </div> :

                // <div className='container' dangerouslySetInnerHTML={{ __html: social_media_responsibilities?.data }}></div>
                <div className='container'>
                    <div className=" pt-3">
                        <Heading heading={social_responsibilities_heading?.heading ? social_responsibilities_heading?.heading : "Social Responsibilities"} />
                    </div>
                    <div className="row d-flex justify-content-center"  >
                        <div className='col-10 '>
                            <div dangerouslySetInnerHTML={{ __html: social_media_responsibilities?.data }} />
                        </div>
                    </div>
                </div>


            }

        </>
    )
}

export default Media_socialresponsiblities



{/* <h1 class="siz text-center textfontsize" style="color: rgb(0, 102, 179); padding: 10px;">Social Responsibilities</h1> */ }