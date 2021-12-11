import React from "react";

import { CompanyLogos } from "../components";
import bannerimg from "../Statics/assets/parallax_contact.jpg";
import DirectorImg from "../Statics/assets/chairman-profile.jpg";
import ewvila from '../Statics/assets/Sliderlogos/1.png'
import dmfr from '../Statics/assets/Sliderlogos/2.png'
import toticell from '../Statics/assets/Sliderlogos/3.png'
import BannerWithText from "../components/ReusableComponents/BannerImgComponents/BannerImgComponents";

const Abouthealthassociates = () => {
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
        heading={"Health Associates"}
        subHeading={`HEALTH ASSOCIATES`}
        backposit={'100% 25%'}
        backimg={`url(${bannerimg})`}
        LinksBan={LinksBan}
        height={"400px"}
        backgroundSize={"100% 400px"}
        conmarpad={"mt-5 pt-5"}
        fontsize={"60px"}
      />

      <div className="container my-5 w-100">
        {/* EW Villa Medica */}
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
            {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

            <img
              class="alignnone size-medium wp-image-24556"
              src={ewvila}
              alt=""
              width="300"
              height="180"
              sizes="(max-width: 240px) 100vw, 240px"
              style={{borderRadius:"15px"}}
            />

            </div>
           
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
            <div
              className="card d-flex justify-content-center"
              style={{ border: "none" }}
            >
               <h5
                className="text-start mb-4"
                style={{
                  color: "#337ab7",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                  EW VILLA MEDICA SINCE 1963
              </h5>

              <div style={{lineHeight: '30px',
    color: '#666666'}} className="text-justify ">
               <ul>
                <li><strong>EW VILLA MEDICA</strong> is a global healthcare group, an integration of two leading experts in <strong>Advanced Cell Therapy- VILLA MEDICA</strong> and <strong>EUROPEAN WELLNESS</strong>. 
                    This synergy builds a greater depth of expertise and acumen for Ew Villa Medica into being ‘the premium medical tourism destination’ for optimum health and vitality.
                </li>
                <li>It offers the most advanced, comprehensive & personalized regenerative medicine and wellness solutions through integrating cell therapies, biomedical diagnostic and therapeutic devices.
                </li>
                <li>It specializes in Regenerative & Bio-Molecular Medicine which has tremendous promise especially in treatment of chronic degenerative diseases, age-related diseases, anti-aging and rejuvenation.
                </li>
                <li>EW Villa Medica reflects the changing needs of the consumers today and recognizes that optimum health is all about being free from illness, being & looking youthful and holistic healing. Hence, it offers a several signature therapies in harmony with innovative technologies, holistic methods and revolutionary knowhow to reverse age, redefine youth, renew illness and reinvent the quality of life.
                </li>
                
                
                </ul>

                <h5
                className="text-start mb-4"
                style={{
                  color: "#337ab7",
                  fontWeight: "500",
                  fontSize: "25px",
                }}
              >
                  EW Villa Medica, The Futuristic & Fabulous Wellness Clinic Has Arrived in Dhaka, Bangladesh…
              </h5>
                <p>This premium treatment center offers complete and comprehensive health solutions, integrated wellness programs and innovative cosmetic therapies in soul soothing luxury to relax and recover, under one roof..</p>

              <p><strong>Address: </strong>Navana Newbury Place, 4/1/A (5 Floor), Sobhanbag Mirpur Road, Sher-E-Bangla Nagar, Dhaka- 1207, Bangladesh</p>
              <p><strong>Email: </strong><a href="mailto:info@bd.ew-vm.com">info@bd.ew-vm.com</a></p>
              <p><strong>Hotline: </strong><a href="tel:09606213232">09606213232</a></p>
              </div>
            </div>
          </div>
        </div>
        
        {/* DMFR */}
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
            {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

            <img
              class="alignnone size-medium wp-image-24556"
              src={dmfr}
              alt=""
              width="300"
              height="100"
              sizes="(max-width: 240px) 100vw, 240px"
              style={{borderRadius:"15px"}}
            />

            </div>
           
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
            <div
              className="card d-flex justify-content-center"
              style={{ border: "none" }}
            >
               <h5
                className="text-start mb-4"
                style={{
                  color: "#337ab7",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                  WORLD CLASS MEDICAL INSTRUMENTS & EXCELLENT SERVICE QUALITY
              </h5>

              <div style={{lineHeight: '30px',
                    color: '#666666'}} className="text-justify ">
                With world class technology and cutting-edge applications, DMFR Molecular Lab is here to set a measurable impact and revolutionize the diagnostic healthcare in Bangladesh. A host of investigations, analytical testing standards and expert diagnostics are what we aim to deliver. Our relentless efforts and endeavor are to deliver the most accurate, reliable and careful analytical testing standards at par with the international quality standards within the reach of every common man.
               <ul className="mt-4">
                <li>At DMFR, reports are Accurate, Detailed, and Dependable for timely diagnosis and therapeutic investigation of disease.
                </li>
                <li>DMFR has introduced Bio-Safety Level-3 (BSL-3) facility molecular lab for the first time in the private sector of Bangladesh.
                </li>
                <li>DMFR is maintaining good laboratory practice following stringent process of internal service quality audits, quality control & assurance programs.
                </li>
                <li>DMFR has web reporting facilities for patient report management.
                </li>
                <li>At DMFR, we collect and process the specimen through our logistics experts and take utmost care to deliver the reports efficiently within the committed time.
                </li>
                <li>With world-class technology and cutting-edge applications, DMFR is here to set a measurable impact and revolutionize diagnostic healthcare in Bangladesh.
                </li>
                <li>DMFR provides a lifetime membership card to patients.
                </li>
                
                </ul>
              <p><strong>Address: </strong>Navana Newbury Place, 4/1/A (7th Floor), Sobhanbag, Mirpur Road, Sher-E-Bangla Nagar, Dhaka-1207, Bangladesh</p>
              <p><strong>Email: </strong><a href="mailto:info@mdxdmfr.com">info@mdxdmfr.com</a></p>
              <p><strong>Hotline: </strong><a href="tel:0960621313233">0960621313233</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* TOTICELL */}
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-start ">
            {/* <img alt="Chairmen" src={DirectorImg} className="img-fluid" /> */}

            <img
              class="alignnone size-medium wp-image-24556"
              src={toticell}
              alt=""
              width="300"
              height="100"
              sizes="(max-width: 240px) 100vw, 240px"
              style={{borderRadius:"15px"}}
            />

            </div>
           
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 mt-3 d-flex justify-content-lg-center ">
            <div
              className="card d-flex justify-content-center"
              style={{ border: "none" }}
            >
               <h5
                className="text-start mb-4"
                style={{
                  color: "#337ab7",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                  TOTICELL, AND ADVANCED REGERATIVE HEALTHCARE CENTRE FOR UMET MEDICAL NEEDS
              </h5>
              <div style={{lineHeight: '30px',
                color: '#666666'}} className="text-justify ">
                        TotiCell, the world class regenerative healthcare center that is strategically located in the heart of Dhaka Metropolitan Mega city and approximately 5 
                        minutes south of National Parliament House and only 50 minutes south of the Hazrat Shahjalal International Airport (HSIA). 
                        The board of directors and the scientific board behind TotiCell is committed to offer best practice of health care service in Bangladesh. 
                        The boards offer required supervision to implement our mission and comprehend our vision and safeguard good governance while planning out the strategic objectives. 
                        The expert team ensure adherence to high excellence and world class standards in health care and scientific development to fulfill unmet medical need by Regenerative Medicine. 
                        Regenerative therapies bring dramatic improvements in various medical conditions including musculoskeletal conditions including all types of arthritis, sport associated injuries, tendinopathies, neuropathy, fibromyalgia, autoimmune diseases, sexual health and anti-aging.
              </div>
              <div style={{lineHeight: '30px',
                color: '#666666'}} className="text-justify ">
                       Safety and quality are our priority, TotiCell offer advanced Regenerative Medicine (RM) aiming to improve the quality of life through innovative and breakthrough technologies to ensure best medical practices for healing and cure in current time. Our research and highly efficient Regenerative Medicine and Technology (RMT) empower us to formulate, produce therapeutics complying with the local and international guidelines for the safest and best medical practices in our established well equipped GMP facility for various medical conditions. The national and international physicians and scientists specializing in integrative and regenerative medicine at TotiCell confirm safe, effective and lasting regenerative therapies using platelet rich plasma (PRP), stromal vascular fraction (SVF) and stem cells.
              </div>

              <div style={{lineHeight: '30px',
                color: '#666666'}} className="text-justify ">
                       We apply cell for regenerative therapy at its best condition, exploiting human cell and tissue- based therapeutic modalities for Aesthetic and Orthopedic related indications including Pain Management, Sexual Enhancement, Facial Rejuvenation and Hair Regrowth. TotiCell apply activating adult stem cells with small-molecule drugs or PRP to regenerate/replenish target cells. PRP is an extract of your own blood that govern the tissue healing process with secreting biomolecules activating the cellular signaling like stem cell trafficking, proliferation, and differentiation, angiogenesis, accelerate bone regeneration, releasing more than 300 active substances involved in coagulation, immune cell recruitment and inflammation, wound healing and tissue repair and remodeling with a complex effect on pro/anti-inflammatory and anabolic/catabolic processes.
              </div>
              <div style={{lineHeight: '30px',
                color: '#666666'}} className="text-justify ">
                       Our specialty in Orthobiologics, a branch of regenerative medicine that refers to the use of biological substances to help musculoskeletal injuries heal quicker. They are used to improve the healing of fractured bones and injured muscles, tendons and ligaments and are derived from substances that are naturally found in your body. Here PRP comes in handy to boost your body’s natural healing powers and speed up recovery of broken bones and injured muscles, tendons, and ligaments. Our orthopedic specialists infuse these ortho-biologics (prepared at our GMP facility) in patients using ultrasound guided injection.
              </div>
              <div style={{lineHeight: '30px',
                color: '#666666'}} className="text-justify ">
                       Our Specialty in Regenerative Aesthetics (RA), an exciting discipline to maintain/restore youth & beauty in men and women. TotiCell offer various therapies options for hair restoration, erectile dysfunction (ED) in men, vampire face lift, sexual dysfunction in women, urinary incontinence, and non-invasive breast lift and scar repair.
              </div>
              <div style={{lineHeight: '30px',
                    color: '#666666'}} className="text-justify mt-4">
              
              <p><strong>Address: </strong>TotiCell Health & Research Sima Blossom 7th Floor, House#03 (New), 390 (Old), Road#16 (New), 27(Old), Dhanmondi, Dhaka</p>
              <p><strong>Email: </strong><a href="mailto:info@toticell.com">info@toticell.com</a></p>
              <p><strong>Hotline: </strong><a href="tel:09606213234">09606213234</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <CompanyLogos />
    </div>
  );
};

export default Abouthealthassociates;
