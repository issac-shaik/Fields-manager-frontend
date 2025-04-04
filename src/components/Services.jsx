import React from "react";
import { cards } from "../Constants/Data";
import heart from "../Images/heart.svg";
import rightArrow from "../Images/chevron-right.svg";
import "../components/Services.css";

const Cards = () => {
  return (
    <div className="services-wrapper">
      <h2 className="services-title">Services for sports enthusiasts</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="service-card">
            <div className="image-wrapper">
              <img src={card.image} alt={card.name} className="service-image" />
              <img src={heart} className="icon-heart" alt="like" />
            </div>

            <h3 className="service-name">{card.name}</h3>
            <p className="service-description">{card.bio}</p>

            <div className="service-footer">
              <p className="service-fee">{card.fee}</p>
              <img src={rightArrow} alt="go" className="right-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
  