import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <header>
          <h2>Nearby People App</h2>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Layout;