import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import DirectorImg from "../Statics/assets/chairman-profile.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Aboutchairmenprofile = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const chairman_profile = filterComponentData(component, "chairman_profile", lang)
  console.log(chairman_profile, "chairman_profile");
  const { t } = useTranslation('common')
  const DirectorInfo = {
    name: t('about_chairmen_profile.director_info_name'),
  };
  const LinksBan = [
    {
      subLinkName: t('about_chairmen_profile.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('about_chairmen_profile.about_us_text'),
      subDash: "/",
      subLink: "/about",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          {t('about_chairmen_profile.helmet.title_text')}
        </title>
      </Helmet>
      <div>
        <BannerWithText
          imgSrc={bannerimg}
          heading={t('about_chairmen_profile.chairman_text')}
          subHeading={t('about_chairmen_profile.chairman_text').toUpperCase()}
          backposit={'100% 25%'}
          backimg={`url(${bannerimg})`}
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
                src={chairman_profile?.image ? chairman_profile?.image : DirectorImg}
                alt="director"
                width="240"
                height="300"
                sizes="(max-width: 240px) 100vw, 240px"
                style={{ borderRadius: "15px" }}
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
                  {chairman_profile?.heading ? chairman_profile?.heading : DirectorInfo.name}
                </h5>
                {
                  chairman_profile?.desc ? <div style={{
                    lineHeight: '30px',
                    color: '#666666'
                  }} className="text-justify " dangerouslySetInnerHTML={{ __html: chairman_profile?.desc }} />
                    : <>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify ">
                        {t('about_chairmen_profile.desc_1_text')} <strong> {t('about_chairmen_profile.desc_2_text')}</strong>, Bangladesh. Noapara Group is a Bangladeshi owned company
                        {t('about_chairmen_profile.desc_3_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify ">
                        {t('about_chairmen_profile.desc_4_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify ">
                        {t('about_chairmen_profile.desc_5_text')}
                        <strong>  {t('about_chairmen_profile.desc_6_text')}</strong>
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify ">
                        {t('about_chairmen_profile.desc_7_text')}
                        <strong> {t('about_chairmen_profile.desc_8_text')})</strong>.{t('about_chairmen_profile.desc_9_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify mb-4">
                        {t('about_chairmen_profile.desc_10_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify mb-4">
                        {t('about_chairmen_profile.desc_11_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify mb-4">
                        {t('about_chairmen_profile.desc_12_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify mb-4">
                        {t('about_chairmen_profile.desc_13_text')}
                      </div>
                      <div style={{
                        lineHeight: '30px',
                        color: '#666666'
                      }} className="text-justify mb-4">
                        {t('about_chairmen_profile.desc_14_text')} <strong>{t('about_chairmen_profile.desc_15_text')}</strong>,{t('about_chairmen_profile.desc_16_text')}<strong> {t('about_chairmen_profile.desc_17_text')}</strong>. {t('about_chairmen_profile.desc_18_text')}
                        <strong> {t('about_chairmen_profile.desc_19_text')}</strong> {t('about_chairmen_profile.desc_20_text')}
                      </div>
                    </>
                }

              </div>
            </div>
          </div>
        </div>

        <CompanyLogos />
      </div>
    </>
  );
};

export default Aboutchairmenprofile;
