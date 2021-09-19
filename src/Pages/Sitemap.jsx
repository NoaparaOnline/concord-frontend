import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/sitemapbanner.jpg";
import sitemap from "../Statics/assets/sitemap.jpg";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const LinksBan = [
    {
      subLinkName: "Home",
      subDash: "/",
      subLink: "/",
    },
  ];
  return (
    <div >
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Site map"}
        subHeading={`SITE MAP`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />
      
      <div className="container mb-5" style={{textAlign:'center'}}>




<img alt="" src={sitemap} usemap="#image-map" />

<map name="image-map">
    <Link to='/'><area target="_blank" alt="Home" title="Home" coords="628,0,751,40" shape="rect"/></Link>
    <Link to='/about'><area target="_blank" alt="About Us" title="About Us" coords="3,83,125,118" shape="rect"/></Link>
    <Link to='/globalOperations'><area target="_blank" alt="Global Operation" title="Global Operation" href="" coords="150,85,360,120" shape="rect"/></Link>
    <Link to='/products'><area target="_blank" alt="Products" title="Products" coords="389,82,516,116" shape="rect"/></Link>
    <Link to='/facilities'><area target="_blank" alt="Facilities" title="Facilities"  coords="543,84,666,118" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Tele-Medicine" title="Tele-Medicine" coords="726,83,892,118" shape="rect"/></Link>
    <Link to='/media'><area target="_blank" alt="Media" title="Media"  coords="951,83,1043,121" shape="rect"/></Link>
    <Link to='/contact'><area target="_blank" alt="Contact" title="Contact"  coords="1105,83,1218,117" shape="rect"/></Link>
    <Link to='/careers'><area target="_blank" alt="Careers" title="Careers"  coords="1262,84,1379,118" shape="rect"/></Link>
    <Link to='/about_vision_mission'><area target="_blank" alt="Vision &amp; Mission" title="Vision &amp; Mission"  coords="80,173,260,205" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Health Associates" title="Health Associates"  coords="77,246,260,282" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Chairman's Profile" title="Chairman's Profile"  coords="77,321,260,356" shape="rect"/></Link>
    <Link to='/about_message_chairmen'><area target="_blank" alt="Message from Chairman" title="Message from Chairman"  coords="76,399,259,433" shape="rect"/></Link>
    <Link to='/products_bytrade'><area target="_blank" alt="By Trade Name" title="By Trade Name"  coords="314,171,502,207" shape="rect"/></Link>
    <Link to='/products_bygeneric'><area target="_blank" alt="By Generic Name" title="By Generic Name"  coords="316,248,502,283" shape="rect"/></Link>
    <Link to='/products_therapeutic'><area target="_blank" alt="By Therapeutic Class" title="By Therapeutic Class"  coords="315,324,503,357" shape="rect"/></Link>
    <Link to='/products_firsttime'><area target="_blank" alt="First Time Launching" title="First Time Launching"  coords="316,401,504,435" shape="rect"/></Link>
    <Link to='/facilities_researchdevrsttime'><area target="_blank" alt="Research &amp; Development" title="Research &amp; Development"  coords="556,171,742,209" shape="rect"/></Link>
    <Link to='/facilities_product'><area target="_blank" alt="Production" title="Production"  coords="558,248,740,282" shape="rect"/></Link>
    <Link to='/facilities_quality'><area target="_blank" alt="Quality Control" title="Quality Control" coords="559,324,742,356" shape="rect"/></Link>
    <Link to='/facilities_warhouse'><area target="_blank" alt="Warehouse" title="Warehouse"  coords="559,398,742,433" shape="rect"/></Link>
    <Link to='/facilities_ourdistribution'><area target="_blank" alt="Our Distribution Network" title="Our Distribution Network" coords="560,474,743,509" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Video" title="Video"  coords="789,169,976,210" shape="rect"/></Link>
    <Link to='/media_photo'><area target="_blank" alt="Photo" title="Photo"  coords="787,247,977,284" shape="rect"/></Link>
    <Link to='/media_socialmedia'><area target="_blank" alt="Social Media Post" title="Social Media Post"  coords="788,322,977,360" shape="rect"/></Link>
    <Link to='/media_milestone'><area target="_blank" alt="Milestones" title="Milestones"  coords="788,401,975,434" shape="rect"/></Link>
    <Link to='#'><area target="_blank" alt="Social Responsibilities" title="Social Responsibilities"  coords="786,472,977,508" shape="rect"/></Link>
    <Link to='/facilities_ourdistribution'><area target="_blank" alt="Our Distribution Network" title="Our Distribution Network"  coords="1018,172,1205,211" shape="rect"/></Link>
    <Link to='/contact_contactus'><area target="_blank" alt="Contact Us" title="Contact Us"  coords="1017,249,1207,282" shape="rect"/></Link>
</map> 
</div>

      <CompanyLogos />
    </div>
  );
};

export default Sitemap;
