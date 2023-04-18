import React from "react";
import "../CSS/Cards.css";


const Cards = ({icon,cardTitle,cardParagarph}) => {
  return (
    <>
      <div className="containerCards">
        <div className="icon">
          {icon}
        </div>
        <div className="cardHeading">
          <h2>{cardTitle}</h2>
        </div>
        <div className="cardinfo">
          <p>{cardParagarph}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
