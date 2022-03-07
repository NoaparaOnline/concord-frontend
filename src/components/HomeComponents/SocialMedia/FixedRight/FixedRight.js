import React, {useState} from "react";
import "./FixedRight.css";
import Login from "../../../../Pages/Login";
import { useTranslation } from "react-i18next";

const FixedRight = () => {
  const [show, setShow] = useState(false);
  const [showdiv, setShowdiv] = useState(true);
  const {t}=useTranslation('common')
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
    <button onClick={()=> {handleShow();}} title="Login/Register"><i className='fa fa-sign-in' style={{fontSize:'22px'}}></i></button>
     <a href="tel:++01991146559" title="Call" className="call"><i className='fa fa-phone' style={{fontSize:'22px'}}></i><span> {t('fixed_right.phone_number')}</span></a>
      <a href="mailto:info@concordpharma-bd.com" title="Email" className="float_email">
          <i className='fa fa-envelope' style={{fontSize:'22px'}}></i>
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
