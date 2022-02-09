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
import { useTranslation } from 'react-i18next';


  
const Products = () => {
 const {t}=useTranslation('common')
    // Zoomcards Map Data
    const productscard = [
      {
        id:0,
        imageURL: productscard1,
        text:  t('products.by_trade_name') ,
        link: "/by-trade-name",
      },
      {
        id:1,
        imageURL: productscard2,
        text: t('products.by_generic_name'),
        link: "/by-generic-name",
      },
      {
        id:2,
        imageURL: productscard3,
        text: t('products.by_threr_class'),
        link: "/by-therapeutic-class",
      },
      {
        id:3,
        imageURL: productscard4,
        text: t('products.first_time_launching'),
        link: "/first-time-launching",
      },
    ];
    

    const LinksBan = [
      {
        subLinkName: t('products.home_text'),
        subDash: '/',
        subLink: '/'
      },
     
  
    ];

    return (

    
    <>
     <Helmet>
        <title> {t('products.helmet.title_text')} </title>
      </Helmet>
    <BannerWithText imgSrc={bannerimg} heading={  t('products.products_text')} subHeading={ t('products.products_text')}
    LinksBan={LinksBan}
    height={"400px"}
    
    backposit={'center right'}
    backimg={`linear-gradient(rgba(20, 20, 19, 0.8), rgba(20, 20, 19, 0.6)),url(${bannerimg})`}
    backgroundSize={"100% 400px"}
    conmarpad={"mt-5 pt-5"}
    fontsize={"60px"}
    />
    <Heading heading={ t('products.products_text')}/>
        
        
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
