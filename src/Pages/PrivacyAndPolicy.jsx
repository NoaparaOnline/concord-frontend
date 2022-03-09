import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";


const PrivacyAndPolicy = () => {
  const {t}=useTranslation('common')
  return (
    <>
     <Helmet>
        <title> {t('privacy_policy.helmet.title_text')}</title>
      </Helmet>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-8 my-5 text-justify">
          <h1
            className="text-center"
            style={{ color: "#0066b3", fontWeight: "600" }}
          >
            {t('privacy_policy.text_1')}
       
          </h1>
          <p>
          {t('privacy_policy.text_2')}
           
          </p>
          <p>
          {t('privacy_policy.text_3')}
  
          </p>
          <p>
          {t('privacy_policy.text_4')}
            
          </p>
          <h1 style={{ color: "#0066b3",fontSize: '2rem' }}>  {t('privacy_policy.text_20')}</h1>
          <p>
          {t('privacy_policy.text_5')}
            
          </p>
          <h1 style={{ color: "#0066b3",fontSize: '2rem' }}>  {t('privacy_policy.text_6')} </h1>
          <p>
          {t('privacy_policy.text_7')}
     
          </p>
          <p>
          {t('privacy_policy.text_8')}
      
          </p>
          <p>
          {t('privacy_policy.text_9')}
           
          </p>
          <h1 style={{ color: "#0066b3" }}>  {t('privacy_policy.text_10')}  </h1>
          <p>
          {t('privacy_policy.text_11')}
           
          </p>
          <ul>
            <li>  {t('privacy_policy.text_12')} </li>
            <li>  {t('privacy_policy.text_13')} </li>
            <li>  {t('privacy_policy.text_21')}</li>
            <li>  {t('privacy_policy.text_14')} </li>
            <li>
            {t('privacy_policy.text_15')}
            
            </li>
            <li>  {t('privacy_policy.text_16')} </li>
            <li>  {t('privacy_policy.text_17')} </li>
          </ul>
          <h1 style={{ color: "#0066b3",fontSize: '2rem' }}>  {t('privacy_policy.text_18')} </h1>
          <p>
          {t('privacy_policy.text_19')}
      
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyAndPolicy;
