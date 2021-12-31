import React from 'react'
import { CompanyLogos,Heading } from '../components'
import bannerimg from '../Statics/assets/productsbanner.jpg';
import BannerWithText from '../components/ReusableComponents/BannerImgComponents/BannerImgComponents'
import ZoominCards from '../components/ReusableComponents/ZoominCards';
import productscard1 from '../Statics/assets/products/p1.svg'
import productscard2 from '../Statics/assets/products/p2.svg'
import productscard3 from '../Statics/assets/products/p3.svg'
import productscard4 from '../Statics/assets/products/p4.svg'
import { Helmet } from 'react-helmet';


  
const Products = () => {

    // Zoomcards Map Data
    const productscard = [
      {
        id:0,
        imageURL: productscard1,
        text: "By Trade Name",
        link: "/by_trade_name",
      },
      {
        id:1,
        imageURL: productscard2,
        text: "By Generic Name",
        link: "/by_generic_name",
      },
      {
        id:2,
        imageURL: productscard3,
        text: "By Therapeutic Class",
        link: "/by-therapeutic-class",
      },
      {
        id:3,
        imageURL: productscard4,
        text: "First Time Launching",
        link: "/first-time-launching",
      },
    ];
    

    const LinksBan = [
      {
        subLinkName: 'Home',
        subDash: '/',
        subLink: '/'
      },
     
  
    ];

    return (

    
    <>
     <Helmet>
        <title>Products - Concord Pharma</title>
      </Helmet>
    <BannerWithText imgSrc={bannerimg} heading={'Products'} subHeading={`PRODUCTS`}
    LinksBan={LinksBan}
    height={"400px"}
    
    backposit={'center right'}
    backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
    backgroundSize={"100% 400px"}
    conmarpad={"mt-5 pt-5"}
    fontsize={"60px"}
    />
    <Heading heading={"Products"}/>
        
        
     {/* Zoom Cards */}
     <div className="container my-5">
     <div className="row d-flex justify-content-center">

     {productscard.map((ob, index) => (
         <React.Fragment key={ob.id}>
           <div  className='col-xl-2 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3'>
             <ZoominCards abcard={ob}/>                  
           </div>
         </React.Fragment>
       )
       )} 
        

     </div>
   </div>







        <CompanyLogos/> 
     </>
    )
}

export default Products
