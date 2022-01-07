import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/sitemapbanner.jpg";
import sitemap from "../Statics/assets/sitemap.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Sitemap = () => {
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Sitemap - Concord Pharma</title>
      </Helmet>

      <BannerWithText
        imgSrc={bannerimg}
        heading={"Site map"}
        subHeading={`SITE MAP`}
        LinksBan={LinksBan}
        
        backposit={'center right'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      
      <div className="container mb-5" style={{textAlign:'center'}}>




{/* <img alt="" src={sitemap} usemap="#image-map" />

<map name="image-map">
    <Link to='/'><area target="_blank" alt="Home" title="Home" coords="628,0,751,40" shape="rect"/></Link>
    <Link to='/about'><area target="_blank" alt="About Us" title="About Us" coords="3,83,125,118" shape="rect"/></Link>
    <Link to='/global-operation'><area target="_blank" alt="Global Operation" title="Global Operation" href="" coords="150,85,360,120" shape="rect"/></Link>
    <Link to='/products'><area target="_blank" alt="Products" title="Products" coords="389,82,516,116" shape="rect"/></Link>
    <Link to='/facilities'><area target="_blank" alt="Facilities" title="Facilities"  coords="543,84,666,118" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Tele-Medicine" title="Tele-Medicine" coords="726,83,892,118" shape="rect"/></Link>
    <Link to='/media'><area target="_blank" alt="Media" title="Media"  coords="951,83,1043,121" shape="rect"/></Link>
    <Link to='/contact'><area target="_blank" alt="Contact" title="Contact"  coords="1105,83,1218,117" shape="rect"/></Link>
    <Link to='/careers'><area target="_blank" alt="Careers" title="Careers"  coords="1262,84,1379,118" shape="rect"/></Link>
    <Link to='/vision-mission'><area target="_blank" alt="Vision &amp; Mission" title="Vision &amp; Mission"  coords="80,173,260,205" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Health Associates" title="Health Associates"  coords="77,246,260,282" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Chairman's Profile" title="Chairman's Profile"  coords="77,321,260,356" shape="rect"/></Link>
    <Link to='/message-from-chairmen'><area target="_blank" alt="Message from Chairman" title="Message from Chairman"  coords="76,399,259,433" shape="rect"/></Link>
    <Link to='/by-trade-name'><area target="_blank" alt="By Trade Name" title="By Trade Name"  coords="314,171,502,207" shape="rect"/></Link>
    <Link to='/by-generic-name'><area target="_blank" alt="By Generic Name" title="By Generic Name"  coords="316,248,502,283" shape="rect"/></Link>
    <Link to='/by-therapeutic-class'><area target="_blank" alt="By Therapeutic Class" title="By Therapeutic Class"  coords="315,324,503,357" shape="rect"/></Link>
    <Link to='/first-time-launching'><area target="_blank" alt="First Time Launching" title="First Time Launching"  coords="316,401,504,435" shape="rect"/></Link>
    <Link to='/research-and-development'><area target="_blank" alt="Research &amp; Development" title="Research &amp; Development"  coords="556,171,742,209" shape="rect"/></Link>
    <Link to='/product'><area target="_blank" alt="Production" title="Production"  coords="558,248,740,282" shape="rect"/></Link>
    <Link to='/quality'><area target="_blank" alt="Quality Control" title="Quality Control" coords="559,324,742,356" shape="rect"/></Link>
    <Link to='/warhouse'><area target="_blank" alt="Warehouse" title="Warehouse"  coords="559,398,742,433" shape="rect"/></Link>
    <Link to='/our-distribution-network'><area target="_blank" alt="Our Distribution Network" title="Our Distribution Network" coords="560,474,743,509" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Video" title="Video"  coords="789,169,976,210" shape="rect"/></Link>
    <Link to='/photo'><area target="_blank" alt="Photo" title="Photo"  coords="787,247,977,284" shape="rect"/></Link>
    <Link to='/social-media-post'><area target="_blank" alt="Social Media Post" title="Social Media Post"  coords="788,322,977,360" shape="rect"/></Link>
    <Link to='/milestones'><area target="_blank" alt="Milestones" title="Milestones"  coords="788,401,975,434" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Social Responsibilities" title="Social Responsibilities"  coords="786,472,977,508" shape="rect"/></Link>
    <Link to='/our-distribution-network'><area target="_blank" alt="Our Distribution Network" title="Our Distribution Network"  coords="1018,172,1205,211" shape="rect"/></Link>
    <Link to='/contactus'><area target="_blank" alt="Contact Us" title="Contact Us"  coords="1017,249,1207,282" shape="rect"/></Link>
</map>  */}
{/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1380 511">
  <image width="1380" height="511" xlinkHref={sitemap}></image> <Link to="/about">
    <rect x="0" y="77" fill="#fff" opacity="0" width="123" height="50"></rect>
  </Link><a xlinkHref="#">
    <rect x="149" y="77" fill="#fff" opacity="0" width="211" height="50"></rect>
  </a>
</svg> */}


<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1380 511">
  <image width="1380" height="511" xlinkHref={sitemap}></image> <Link to="/about">
    <rect x="0" y="77" fill="#fff" opacity="0" width="123" height="50"></rect>
  </Link><Link to="/global-operation">
    <rect x="149" y="77" fill="#fff" opacity="0" width="211" height="50"></rect>
  </Link><Link to="/products">
    <rect x="386" y="78" fill="#fff" opacity="0" width="135" height="50"></rect>
  </Link><Link to="/facilities">
    <rect x="541" y="75" fill="#fff" opacity="0" width="128" height="50"></rect>
  </Link><a  href="https://www.mdxdmfr.com" rel="noreferrer" target="_blank">
    <rect x="722" y="77" fill="#fff" opacity="0" width="171" height="50"></rect>
  </a><Link to="/media">
    <rect x="948" y="78" fill="#fff" opacity="0" width="100" height="52"></rect>
  </Link><Link to="/contact">
    <rect x="1100" y="77" fill="#fff" opacity="0" width="125" height="50"></rect>
  </Link><Link to="/careers">
    <rect x="1260" y="77" fill="#fff" opacity="0" width="118" height="50"></rect>
  </Link><Link to="/vision-mission">
    <rect x="77" y="166" fill="#fff" opacity="0" width="184" height="50"></rect>
  </Link><Link to="/by-trade-name">
    <rect x="311" y="166" fill="#fff" opacity="0" width="193" height="50"></rect>
  </Link><Link to="/research-and-development">
    <rect x="558" y="166" fill="#fff" opacity="0" width="189" height="50"></rect>
  </Link><Link to="#">
    <rect x="782" y="166" fill="#fff" opacity="0" width="198" height="50"></rect>
  </Link><Link to="/our-distribution-network">
    <rect x="1014" y="165" fill="#fff" opacity="0" width="191" height="50"></rect>
  </Link><Link to="#">
    <rect x="78" y="241" fill="#fff" opacity="0" width="192" height="50"></rect>
  </Link><Link to="/by-generic-name">
    <rect x="313" y="240" fill="#fff" opacity="0" width="195" height="50"></rect>
  </Link><Link to="/product">
    <rect x="558" y="242" fill="#fff" opacity="0" width="191" height="50"></rect>
  </Link><Link to="/photo">
    <rect x="785" y="239" fill="#fff" opacity="0" width="194" height="50"></rect>
  </Link><Link to="/contactus">
    <rect x="1015" y="241" fill="#fff" opacity="0" width="194" height="50"></rect>
  </Link><Link to="/chairmen-profile">
    <rect x="76" y="315" fill="#fff" opacity="0" width="184" height="50"></rect>
  </Link><Link to="/by-therapeutic-class">
    <rect x="314" y="318" fill="#fff" opacity="0" width="189" height="50"></rect>
  </Link><Link to="/quality">
    <rect x="560" y="318" fill="#fff" opacity="0" width="182" height="50"></rect>
  </Link><Link to="/social-media-post">
    <rect x="782" y="317" fill="#fff" opacity="0" width="193" height="50"></rect>
  </Link><Link to="/message-from-chairmen">
    <rect x="78" y="393" fill="#fff" opacity="0" width="185" height="50"></rect>
  </Link><Link to="/first-time-launching">
    <rect x="313" y="394" fill="#fff" opacity="0" width="191" height="50"></rect>
  </Link><Link to="/warhouse">
    <rect x="558" y="392" fill="#fff" opacity="0" width="187" height="50"></rect>
  </Link><Link to="/milestones">
    <rect x="788" y="390" fill="#fff" opacity="0" width="188" height="50"></rect>
  </Link><Link to="/our-distribution-network">
    <rect x="555" y="461" fill="#fff" opacity="0" width="191" height="50"></rect>
  </Link><Link to="#">
    <rect x="788" y="461" fill="#fff" opacity="0" width="192" height="50"></rect>
  </Link><Link to="/">
    <rect x="624" y="0" fill="#fff" opacity="0" width="134" height="50"></rect>
  </Link>
</svg>


</div>



      <CompanyLogos />
    </>
  );
};

export default Sitemap;
