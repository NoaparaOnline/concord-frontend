import React from "react";
import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/Distributionbanner.jpg";
import mapimage from "../Statics/assets/map.png";
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";
const Facilities_ourdistribution = () => {
   const cards = [
    {
      id: 0,
      head: "Central",
      name: "Md.Khairul Alam",
      position: "Head of Distribution",
      num: "01991146267",
      mailname: "cpl.khairul@gmail.com",
      mapname2:'Google Map',
      mapname: "35 Bijoy Nagar dhaka-1000.",
      maillink: "mailto:cpl.khairul@gmail.com",
      maplink:
        "https://www.google.com/maps/place/23%C2%B044'08.9%22N+90%C2%B024'40.3%22E/@23.7358086,90.4111937,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d23.7358086!4d90.4111937",
    },
    {
      id: 1,
      head: "Dhaka",
      name: "Md. Sabbir Hossain",
      position: "DIC- Executive",
      num: "01991145305",
      mailname: "cpldhakadepot@gmail.com",
      mapname2:'Google Map',
      mapname: "35 Bijoy Nagar dhaka-1000.",
      maillink: "mailto:cpldhakadepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.73580856085446,+90.41119374454907?sa=X&#038;ved=2ahUKEwjhi_7VtrDyAhVk_7sIHSK1B3EQ8gF6BAgCEAE",
    },
    {
      id: 2,
      head: "Barisal",
      name: "Md. Saidur Rahman Rimon",
      position: "DIC- Executive",
      num: "01991145334",
      mailname: "cplbarisaldepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd.D/S Tower, 1st floor, Shahid Altaf Memorial Girls School Road,South Alekanda, Barishal",
      maillink: "mailto:cpl.khairul@gmail.com",
      maplink:
        "https://www.google.com/maps/place/22%C2%B041'27.8%22N+90%C2%B021'38.9%22E/@22.6910447,90.3608011,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d22.6910447!4d90.3608011",
    },
    {
      id: 3,
      head: "Jessore",
      name: "Md. Iqbal Mahamud",
      position: "DIC-Executive",
      num: "01991145318",
      mailname: "cpljessore@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd,Naznin Vila 1/B Ghop Center Road. Jessore",
      maillink: "mailto:cpljessore@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.169046843973696,+89.21000729407186?sa=X&#038;ved=2ahUKEwiv7dm0t7DyAhWhhf0HHXQrD78Q8gF6BAgCEAE",
    },
    {
      id: 4,
      head: "Comilla",
      name: "Md. Sariful Islam",
      position: "DIC-Executive",
      num: "01991145365",
      mailname: "cplcomilladepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd.Nahar Villa, 447-Nozrul Avenue Kandir Par, Cumilla",
      maillink: "mailto:cplcomilladepot@gmail.com",
      maplink:
        "https://www.google.com/search?q=23.460523140150503%2C+91.18057482136773&#038;rlz=1C1GCEU_enPK926PK926&#038;oq=23.460523140150503%2C+91.18057482136773&#038;aqs=chrome..69i57.438j0j4&#038;sourceid=chrome&#038;ie=UTF-8",
    },
    {
      id: 5,
      head: "Noakhali",
      name: "Md. Moniruzzaman",
      position: "DIC-Executive",
      num: "01991145350",
      mailname: "cplnoakhali@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Amena Monjil (1st Floor), Holding No. 247,Shahid Shah Alam Bir Uttam Sarak,Modhusudonpur, Maijdee Court,Noakahli – 3800.",
      maillink: "mailto:cplnoakhali@gmail.com",
      maplink:
        "https://www.google.com/maps/search/22.874123689375438,+91.09165245139353?sa=X&#038;ved=2ahUKEwjf2MHAuLDyAhXQgf0HHdqfBi8Q8gF6BAgCEAE",
    },
    {
      id: 6,
      head: "Mymenshingh",
      name: "Md. Alam Mia",
      position: "DIC-Executive",
      num: "01991145376",
      mailname: "cplmymenshinghdepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd,291 Maskanda, Mymenshingh",
      maillink: "mailto:cplmymenshinghdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/24.73204300473984,+90.40876116281954?sa=X&#038;ved=2ahUKEwjby9iDubDyAhVvgP0HHWRdBhgQ8gF6BAgCEAE",
    },
    {
      id: 7,
      head: "Chittagong",
      name: "Md. Baharul Islam",
      position: "DIC-Executive",
      num: "01991145385",
      mailname: "cplchittagongdepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "House No: X-51,Road No:07,Block:A Chandgoan R/A Chittagong Depot",
      maillink: "mailto:cplchittagongdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/22.372134077059318,+91.84570103033818?sa=X&#038;ved=2ahUKEwiV7-CoubDyAhV0gf0HHYqIAmQQ8gF6BAgCEAE",
    },
    {
      id: 8,
      head: "Rangpur",
      name: "Md.Asaduzzama",
      position: "DIC-Executive",
      num: "01991145414",
      mailname: "cplrangpurdepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "House No: X-51,Road No:07,Block:A Chandgoan R/A Chittagong Depot",
      maillink: "mailto:cplrangpurdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/25.757301352034393,+89.23122977681142?sa=X&#038;ved=2ahUKEwjx7tnRubDyAhVVgf0HHRCZAOMQ8gF6BAgCEAE",
    },
    {
      id: 9,
      head: "Rajshahi",
      name: "Md. Abdul Motin",
      position: "DIC-Executive",
      num: "01991-145401",
      mailname: "cplrajshahi18@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd.House No-115,Sector No-02,Road No-02,Uposhahor Rajshahi.",
      maillink: "mailto:cplrajshahi18@gmail.com",
      maplink:
        "https://www.google.com/maps/search/24.380948395991037,+88.59667417394552?sa=X&#038;ved=2ahUKEwiO2omXurDyAhXtgf0HHTPpCH8Q8gF6BAgCEAE",
    },
    {
      id: 10,
      head: "Jhenaidah",
      name: "Md.Ashraful Isalm",
      position: "DIC-Executive",
      num: "01991-146103",
      mailname: "cpljhenaidahdepot@gmail.com",
      mapname2:'Google Map',
      mapname:
        "Concord Pharmaceuticals Ltd.DR. Sheikh Mohammod Aminul Haque,30 Dukhi Mahmud sorok,Arappur, Jhenaidah. Bus Stand Dhaka Road , Bridze er Pase.",
      maillink: "mailto:cpljhenaidahdepot@gmail.com",
      maplink:
        "https://www.google.com/maps/search/23.55209025693937,+89.17544639539432?sa=X&#038;ved=2ahUKEwj4lue9urDyAhWWhf0HHUMcASwQ8gF6BAgCEAE",
    },
  ];

  // BannerWithText Wale Ki Links Ka Object
   const LinksBan=[
     {
      subLinkName:'Home',
      subDash:'/',
      subLink:'/'
     },
     {
      subLinkName:'Contacts',
      subDash:'/',
      subLink:'/contact'
     },
   ];

  return (
    <div>
      <BannerWithText
        imgSrc={bannerimg}
        heading={"Our Distribution Network"}
        subHeading={`OUR DISTRIBUTION NETWORK`}
        LinksBan={LinksBan}
        height={"400px"}
        
        backposit={'center left'}
        backimg={`linear-gradient(rgba(20, 20, 19, 0.6), rgba(20, 20, 19, 0.2)),url(${bannerimg})`}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}

      />
      <div className="container">
        <img alt="" src={mapimage} width="100%" height="100%"/>
      </div>

      <div className="my-5 mx-5">
        <div className="row">
          {cards.map((ob, index) => {
            return (
              <div className="col-lg-4 col-md-6 ">
                <div
                  className="text-left"
                  style={{ color: "#0066b3", minHeight: "240px" }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid #0066b3",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    {ob.head}
                  </div>

                  <div className="mt-2">
                    <div className="mt-2">
                      <i className="fa fa-user" aria-hidden="true"></i>{" "}
                      <span style={{ color: "#565656", fontSize: "19px" }}>
                        {ob.name}
                      </span>
                    </div>
                    <div className="mt-2">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>{" "}
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {ob.position}
                      </span>
                    </div>
                    <div className="mt-2">
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span
                        style={{
                          color: "#565656",
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {ob.num}
                      </span>
                    </div>
                    <div className="mt-2">
                      <a
                        href={ob.maillink}
                        style={{ textDecoration: "none", color: "#0066b3" }}
                      >
                        <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                        <span>{ob.mailname}</span>
                      </a>
                    </div>

                    <div className="mt-2">
                      <a
                        href={ob.maplink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#0066b3" }}
                      >
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{"  "}
                        <span>{ob.mapname}</span>
                      </a>
                    </div>
                    <div className="mt-2">
                      <a
                        href={ob.maplink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#0066b3" }}
                      >
                        <i className="fa fa-map" aria-hidden="true"></i>{"  "}
                        <span>{ob.mapname2}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CompanyLogos />
    </div>
  );
};

export default Facilities_ourdistribution;
