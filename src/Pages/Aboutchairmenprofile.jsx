import React from "react";

import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import DirectorImg from "../Statics/assets/Managing-Director.png";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";

const Aboutchairmenprofile = () => {
  const DirectorInfo = {
    name: "Md. Faizur Rahman",
  };
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: "About Us",
      subDash: "/",
      subLink: "/about",
    },
  ];

  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Chairman Profile"}
        subHeading={`CHAIRMAN PROFILE`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      {/* message from chairmen */}
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-end ">
            {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}
            <img
              class="alignnone size-medium wp-image-24556"
              src="https://concordpharma-bd.com/wp-content/uploads/2019/06/chairman-profile-1-240x300.jpg"
              alt=""
              width="240"
              height="300"
              sizes="(max-width: 240px) 100vw, 240px"
              style={{borderRadius:"15px"}}
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
            <div
              className="card d-flex justify-content-center"
              style={{ border: "none" }}
            >
              <h5
                className="text-start mb-4"
                style={{
                  color: "#337ab7",
                  fontWeight: "500",
                  fontSize: "36px",
                }}
              >
                {DirectorInfo.name}
              </h5>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify ">
                Md. Faizur Rahman is the founder and Group Chairman of <strong> Noapara
                Group</strong>, Bangladesh. Noapara Group is a Bangladeshi owned company
                with a long history in the South East Asia realm. Right from the
                beginning the company started with a strong focus on innovation
                under the leadership of Mr. Rahman the group has made
                significant progress by laying a strong foundation for ambitious
                growth through new ventures, alliances and acquisitions.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify ">
                He contemplates his company continued the drive for innovation,
                finding new and unique ways to improve on existing solutions.
                Mr. Rahman emphasized that innovation has been integral to the
                success and growth for Noapara Group.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify ">
                In 1990, Noapara Traders purchased the raw materials of NPKS
                fertilizer and producing known as “Bengal MisraSar” at South
                Bengal Fertilizer Mills Ltd. producing international grade of
                NPKS fertilizers at Noapara. Mr. Rahman also designated as the
                <strong> 1st vice chairman of Bangladesh Fertilizer Association (BFA).</strong>
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify ">
                Being as an honorable chairman of a leading group of companies
                he never fail to thank to those who joined with him in his
                journey from his nascent stage to till date in creating the
                group of companies. His business is now highly diversified from
                imports to manufacturing. “Noapara Group” is now manufacturing
                quality cement and using latest state of the art technology. In
                Noapara Cement deserves to fulfill the needs of our country in
                achieving affordable housing for all. Mr. Rahman also the
                <strong> Treasurer of Bangladesh Cement Manufacturers Association
                (BCMA)</strong>.His main motto is to enhance the development of our
                nation in the field’s food, health and housing. Noapara Group
                believes in giving back to the society and country through
                various initiatives and corporate social service activities.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify mb-4">
                Bangladesh is densely populated country. Our nation’s facilities
                in good quality seeds, crops storage facilities and ample supply
                of good fertilizer is not enough. Noapara group’s aim and
                mission is to fulfill this goal and achieve self-sufficiency in
                the field of agricultural production of grains and help our
                nation feed all our people.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify mb-4">
                In Bangladesh, Pharmaceutical sector is one of the core sector
                which is contributing the second largest revenue to the
                country’s economy. “CONCORD Pharmaceuticals Ltd.” is determined
                to manufacture high quality health care products that improve
                the quality of life of people.In this connection the company
                works on the fields of diabetes and cardiac sectors. For the
                first time in Bangladesh he launched DAPAZIN (Dapagliflozin)
                especially for type to diabetes patients. Mr. Rahman believes in
                “Better Medicine Better life” which contributes towards the
                growth of a healthy Nation.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify mb-4">
                Under the leadership of Mr. Rahman, EW Villa Medica (a German
                regenerative medicine center) comply to works with Bangladesh by
                practicing a joint venture project stem cell treatment which is
                perform a vital role in the history of modern health care
                services.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify mb-4">
                Mr. Rahman believes that his three products- quality cement,
                quality fertilizer NPKS and international quality medicine will
                fulfill human’s three basic needs i.e affordable food, quality
                housing and medicine. Besides, his companies imports food
                grains, coal and others important fertilizers to meet the demand
                of our nation.
              </div>
              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify mb-4">
                He conferred a series of awards for his various types of work in
                the socio-economic sectors some of themhe was awarded <strong> Business
                Excellence Awards – 2014</strong>, Singapore. And also received <strong> Sofol
                Khudro Uddyogta Somomanona Podok – 2014</strong>. In 2017 he received the
                <strong> FOBANA Business power award</strong> at Florida, North America.
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Aboutchairmenprofile;
