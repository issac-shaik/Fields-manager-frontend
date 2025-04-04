import React, { useState } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Slots');

  return (
    <div className="search-bar-container">
      <div className="tab-buttons">
        {['Slots', 'Games', 'Service'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="search-box">
        <div className="search-field">
          <label>Location</label>
          <p>Lewisville, TX</p>
        </div>
        <div className="divider" />
        <div className="search-field">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="divider" />
        <div className="search-field">
          <label>Sport</label>
          <select>
            <option>Select Sport</option>
            <option>Cricket</option>
            <option>Football</option>
            <option>Tennis</option>
          </select>
        </div>
        <button className="search-button">
  <SearchIcon fontSize="small" />
</button>
      </div>
    </div>
  );
};

export default SearchBar;
