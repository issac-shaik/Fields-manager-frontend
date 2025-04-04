import React from 'react';
import './JoinGameCard.css';
import { Event, LocationOn, ToggleOn } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const JoinGameCard = ({
  title,
  level,
  rating, // Number from 1–5
  dateTime,
  location,
  description,
  hostName,
  hostImage,
  playersJoined
}) => {
  return (
    <div className="game-card">
      <div className="game-header">
        <div>
          <h3 className="game-title">{title}</h3>
          <div className="game-level">
            {level} &nbsp;
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`dot ${i < rating ? 'filled' : ''}`}
              />
            ))}
          </div>
        </div>
        <button className="join-button">
          <ToggleOn style={{ marginRight: '5px' }} />
          Join
        </button>
      </div>

      <div className="game-info">
        <div className="info-item">
          <Event className="icon" />
          <span>{dateTime}</span>
        </div>
        <div className="info-item">
          <LocationOn className="icon" />
          <span>{location}</span>
        </div>
      </div>

      <div className="game-description">{description}</div>

      <div className="game-host">
        <Avatar alt={hostName} src={hostImage} />
        <div>
          <p className="host-name">{hostName} (Host)</p>
          <p className="players-joined">{playersJoined} players joined</p>
        </div>
      </div>
    </div>
  );
};

export default JoinGameCard;
