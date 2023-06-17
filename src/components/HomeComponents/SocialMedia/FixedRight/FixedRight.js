import React, { useState } from "react";
import "./FixedRight.css";
import Login from "../../../../Pages/Login";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { filterComponentData } from "../../../../Utils/functions";

const FixedRight = () => {
  const component = useSelector((state) => state?.cmsReducer?.components);
  const lang = useSelector((state) => state?.cmsReducer?.language);
  const contact_us_footer = filterComponentData(component, "contact_us_footer", lang)
  const [show, setShow] = useState(false);
  const [showdiv, setShowdiv] = useState(true);
  const { t } = useTranslation('common')
  const handleClose = () => {
    setShow(!show);
    setShowdiv(true);
  };
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flotmenuright">
        <button onClick={() => { handleShow(); }} title="Login/Register"><i className='fa fa-sign-in' style={{ fontSize: '22px' }}></i></button>
        <a href={contact_us_footer?.contact ? `tel:${contact_us_footer?.contact}` : "tel:++01991146559"}  title="Call" className="call"><i className='fa fa-phone' style={{ fontSize: '22px' }}></i><span> {contact_us_footer?.contact ? contact_us_footer?.contact : t('fixed_right.phone_number')}</span></a>
        <a href={contact_us_footer?.email ? `mailto:${contact_us_footer?.email}` : "mailto:info@concordpharma-bd.com"}  title="Email" className="float_email">
          <i className='fa fa-envelope' style={{ fontSize: '22px' }}></i>
          
          {/* <span> {contact_us_footer?.email ? contact_us_footer?.email : "info@concordpharma-bd.com"}</span> */}
        </a>


      </div>
      <Login
        show={show}
        onHide={handleClose}
        showdiv={showdiv}
        setShowdiv={setShowdiv}
      />
    </>
  );
};

export default FixedRight;
