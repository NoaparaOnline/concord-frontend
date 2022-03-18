import React from "react";
import "./ZoominCards.css";
import { Link } from 'react-router-dom'

const ZoominCards = ({ abcard, html }) => {
  return (
    <>

      <div className="singleBox">
        <div>
          <Link to={abcard?.route ? abcard?.route : abcard.link} className="Link_hover_Style">
            <img alt="facilities" src={abcard?.image ? abcard?.image : abcard.imageURL ? abcard.imageURL :abcard?.icon} width="100%" height="100%" />
            {
              html ? <p className="boxContent" dangerouslySetInnerHTML={{ __html: abcard?.title }} /> : <p className="boxContent">{abcard?.title ? abcard?.title : abcard.text ? abcard.text : abcard.heading ? abcard.heading : abcard.heading}</p>
            }
          </Link>
        </div>
      </div >


    </>
  );
};

export default ZoominCards;
