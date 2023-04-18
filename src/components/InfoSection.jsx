import React from 'react'
import "../CSS/InfoSection.css";
import Cards from './Cards';
import { cardsData } from './CardsData';



const InfoSection = () => {
  return (
    <>
    <div className="containerInfo">
      <div className="line"></div>
      <h2>Grow your business on fleetonstreet!</h2>
      <p>A secure cloud based business management platform designed especially for service businesses.</p>
     

    <div className="grid">
    {cardsData.map((card) => (
        <Cards
          key={card.id}
          icon={card.icon}
          cardTitle={card.cardTitle}
          cardParagarph={card.paragraph}
        />
      ))}
    </div>

   

    </div>
    </>
  )
}

export default InfoSection