import React, { useState } from 'react';
import './Navbar.css';
import makotoImg from '../assets/makoto.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="logo">Fields Manager</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="nav-links">
        {['Slots', 'Services', 'Games', 'Membership', 'Events'].map((link) => (
          <a key={link} href="#" className="nav-link">{link}</a>
        ))}
      </div>

      <div className="actions">
        <button className="action-button">Sign up</button>
        <button className="action-button">Log in</button>
        <img src={makotoImg} alt="Profile" className="profile-icon" />
      </div>
    </div>
  );
};

export default Navbar;
