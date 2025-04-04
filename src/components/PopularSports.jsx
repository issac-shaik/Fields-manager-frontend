import React from "react";
import "./PopularSport.css";
import Cricket_Image from "../Images/Cricket.jpeg";
import Badminton_Image from "../Images/Badminton.jpeg";
import PickleBall_Image from "../Images/Pickle Ball.jpeg";
import Soccer_Image from "../Images/Soccer.jpeg";
import TableTennis_Image from "../Images/Table Tennis.jpeg";

const sportsData = [
  { name: "Cricket", image: Cricket_Image },
  { name: "Table Tennis", image: TableTennis_Image },
  { name: "Pickle Ball", image: PickleBall_Image },
  { name: "Badminton", image: Badminton_Image },
  { name: "Soccer", image: Soccer_Image },
];

const PopularSports = () => {
  return (
    <div className="popular-sports">
      <h2 className="section-title">Popular Sports</h2>
      <div className="sports-grid-custom">
        {/* Cricket */}
        <div className="sport-card">
          <img src={sportsData[0].image} alt={sportsData[0].name} />
          <div className="sport-label">{sportsData[0].name}</div>
        </div>

        {/* Table Tennis + Pickle Ball stacked */}
        <div className="stacked-column">
          {[sportsData[1], sportsData[2]].map((sport, index) => (
            <div className="sport-card stacked-card" key={index}>
              <img src={sport.image} alt={sport.name} />
              <div className="sport-label">{sport.name}</div>
            </div>
          ))}
        </div>

        {/* Badminton */}
        <div className="sport-card">
          <img src={sportsData[3].image} alt={sportsData[3].name} />
          <div className="sport-label">{sportsData[3].name}</div>
        </div>

        {/* Soccer */}
        <div className="sport-card">
          <img src={sportsData[4].image} alt={sportsData[4].name} />
          <div className="sport-label">{sportsData[4].name}</div>
        </div>
      </div>
    </div>
  );
};

export default PopularSports;
