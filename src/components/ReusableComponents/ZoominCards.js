import React from "react";
import "./ZoominCards.css";
import { Link } from 'react-router-dom'

const ZoominCards = ({abcard}) => {
  return (
    <>

      <div className="singleBox">
			<div>
				<Link to={abcard.link} className="Link_hover_Style">
        <img className="img-fluid" src={abcard.imageURL}/>
        <p className="boxContent">{abcard.text}</p>
        </Link>
			</div>
		</div>


    </>
  );
};

export default ZoominCards;
