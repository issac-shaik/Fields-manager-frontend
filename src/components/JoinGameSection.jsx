import React from 'react';
import JoinGameCard from './JoinGameCard';

const JoinGameSection = () => {
  return (
    <div className="join-game-section">
      <div className="join-game-header">
        <p className="join-game-title">
          Join/Host a Game
      </p>
  <button className="join-button">
    Host Game
  </button>
</div>
      
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <JoinGameCard
          title="Cricket - Little Elm Cricket Club"
          level="Intermediate"
          rating={3}
          dateTime="February 7th 7pm - 9pm"
          location="Little Elm Cricket Association"
          description="Looking for a batsmen to join for this Sunday Feb 11th, morning T30 leather ball Match at hennur side and also on regular basis over weekends"
          hostName="John Doe"
          hostImage="https://randomuser.me/api/portraits/men/32.jpg"
          playersJoined={4}
        />

        <JoinGameCard
          title="Badminton - Vistara"
          level="Professional"
          rating={5}
          dateTime="February 7th 7pm - 9pm"
          location="Little Elm Cricket Association"
          description="Looking for a total of 4 players to play doubles. I am a professional level player and looking for someone with similar experience."
          hostName="Alex"
          hostImage="https://randomuser.me/api/portraits/men/45.jpg"
          playersJoined={2}
        />
      </div>
    </div>
  );
};

export default JoinGameSection;
