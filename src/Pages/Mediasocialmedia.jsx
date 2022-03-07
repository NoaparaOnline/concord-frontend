import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/mediasocialmediapost.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../Utils/functions";

const Media_socialmedia = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const social_media_post = filterComponentData(component, "social_media_post", lang)
  const media_latest_post = filterComponentData(component, "media_latest_post", lang)
  const media_latest_post_heading = filterComponentData(component, "media_latest_post_heading", lang)


  console.log(social_media_post, "social_media_post");
  const { t } = useTranslation('common')
  const LinksBan = [
    {
      subLinkName: t('media_social_media.home_text'),
      subDash: "/",
      subLink: "/",
    },
    {
      subLinkName: t('media_social_media.media_text'),
      subDash: "/",
      subLink: "/media",
    },
  ];
  const latestpost = [
    {
      id: 0,
      post: t('media_social_media.post_latest_1'),
      postLink: "#",
    },
    {
      id: 1,
      post: t('media_social_media.post_latest_2'),
      postLink: "#",
    },
    {
      id: 2,
      post: t('media_social_media.post_latest_3'),
      postLink: "#",
    },
  ];
  const socialpost = [
    {
      head: t('media_social_media.post_social_head_1'),
      headLink: "#",
      text: t('media_social_media.post_social_text_1'),
      date: t('media_social_media.post_social_date_1'),
      dateLink: "#",
    },
    {
      head: t('media_social_media.post_social_head_2'),
      headLink: "#",
      text: t('media_social_media.post_social_text_2'),
      date: t('media_social_media.post_social_date_2'),
      dateLink: "#",
    },

    {
      head: t('media_social_media.post_social_head_2'),
      headLink: "#",
      text: t('media_social_media.post_social_text_2'),
      date: t('media_social_media.post_social_date_2'),
      dateLink: "#",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('media_social_media.helmet.title_text')}</title>
      </Helmet>

      <BannerWithText
        imgSrc={bannerimg}
        heading={t('media_social_media.all_blog_post')}
        subHeading={t('media_social_media.social_post_text')}
        LinksBan={LinksBan}
        height={"400px"}
        backposit={"center right"}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-9 ">
            <div className="row">
              {social_media_post?.length < 1 ?
                socialpost.map((ob, index) => {
                  return (
                    <div className="productionbx" key={ob.id}>
                      <article style={{ padding: "30px" }}>
                        <Link to={ob.headLink} className="socialmediapostlink">
                          <h3
                            className="mb-3"
                            style={{
                              fontSize: "36px",
                              color: "#0066b3",
                              fontWeight: "500",
                            }}
                          >
                            {ob.head}
                          </h3>
                        </Link>

                        <div
                          className="mb-3"
                          style={{ fontSize: "16px", color: "#565656" }}
                        >
                          {ob.text}
                        </div>

                        <Link
                          to={ob.dateLink}
                          style={{ fontSize: "12px", textDecoration: "none" }}
                        >
                          <span className="me-1">
                            <i className="fa fa-clock-o"></i>
                          </span>
                          <span style={{ color: "#565656" }}>{ob.date}</span>
                        </Link>
                      </article>
                    </div>
                  );
                }) : social_media_post?.map((ob, index) => {
                  return (
                    <div className="productionbx" key={ob.id}>
                      <article style={{ padding: "30px" }}>
                        <Link to={ob.headLink} className="socialmediapostlink">
                          <h3
                            className="mb-3"
                            style={{
                              fontSize: "36px",
                              color: "#0066b3",
                              fontWeight: "500",
                            }}
                          >
                            {ob?.heading}
                          </h3>
                        </Link>

                        <div
                          className="mb-3"
                          style={{ fontSize: "16px", color: "#565656" }}
                        >
                          {ob?.description}
                        </div>

                        <Link
                          to={ob.dateLink}
                          style={{ fontSize: "12px", textDecoration: "none" }}
                        >
                          <span className="me-1">
                            <i className="fa fa-clock-o"></i>
                          </span>
                          <span style={{ color: "#565656" }}>{ob?.date}</span>
                        </Link>
                      </article>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="col-lg-3 col-md-3 d-none d-sm-block">
            <div className="productFilterContent">
              <h3
                className="filterHeading "
                style={{
                  fontWeight: "500",
                  fontSize: "24px",
                  color: "#0066b3",
                }}
              >
                {media_latest_post_heading?.heading ? media_latest_post_heading?.heading : t('media_social_media.latest_post')}
              </h3>
              <div
                style={{
                  borderBottom: "1px #ccc solid",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              />

              {media_latest_post?.length < 1 ? latestpost.map((ob, index) => {
                return (
                  <div key={ob.id}>
                    <Link
                      to={ob.postLink}
                      style={{
                        textDecoration: "none",
                        color: "#565656",
                        marginBottom: "5px",
                      }}
                    >
                      <p className="">{ob.post}</p>
                    </Link>
                  </div>
                );
              }) : media_latest_post?.map((ob, index) => {
                return (
                  <div key={index}>
                    <Link
                      to={'#'}
                      style={{
                        textDecoration: "none",
                        color: "#565656",
                        marginBottom: "5px",
                      }}
                    >
                      <p className="">{ob?.text}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CompanyLogos />
    </>
  );
};

export default Media_socialmedia;
