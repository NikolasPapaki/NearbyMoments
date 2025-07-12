import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className="logo">
        <h3>Nearby People</h3>
      </div>
      <ul>
         <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/NearbyPeople">Nearby People</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
