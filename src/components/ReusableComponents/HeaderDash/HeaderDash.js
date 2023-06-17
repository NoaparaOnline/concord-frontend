import React from "react";
import { useTranslation } from "react-i18next";
const HeaderDash = () => {
 const {t}=useTranslation('common')
  const today = new Date();
  var days = [ t('header_dash.sun_text'), t('header_dash.mon_text'), t('header_dash.tue_text'),t('header_dash.wed_text') , t('header_dash.thu_text'), t('header_dash.fri_text'),t('header_dash.sat_text')];
  const date = today.getFullYear() + " / " + (today.getMonth() + 1) + " / " + today.getDate();
  const day = days[today.getDay()];
  return (
    <div className="card style_custom" style={{backgroundColor:'#FFF',borderRadius:'10px',padding:'10px 20px',height:'60px'}}>

        <div className="d-flex flex-column">
            <div style={{fontWeight:'bold',fontSize:'15px'}} className="ms-2">{day}</div>
            <div style={{fontSize:'15px'}} className="ms-1">{date}</div>
            
        </div>
      </div>
  );
};

export default HeaderDash;
