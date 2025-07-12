import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './SettingsScreen.css'; // Import the CSS file

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev);
    // Optionally, add logic to apply theme globally
  };

  return (
    <Layout>
      <div className="settings-container">
        <h1>Settings</h1>
        {/* Profile Settings */}
        <section className="settings-section">
          <h2>Profile Settings</h2>
          <p>Edit your name, profile picture, bio, and contact info.</p>
          <button>Edit Profile</button>
        </section>
        {/* Privacy Settings */}
        <section className="settings-section">
          <h2>Privacy Settings</h2>
          <p>Control who can see your location or profile, block users, manage visibility.</p>
          <button>Manage Privacy</button>
        </section>
        {/* Location Settings */}
        <section className="settings-section">
          <h2>Location Settings</h2>
          <p>Enable/disable location sharing, set location update frequency.</p>
          <button>Location Preferences</button>
        </section>
        {/* Notification Settings */}
        <section className="settings-section">
          <h2>Notification Settings</h2>
          <p>Toggle push/email notifications for messages, nearby people, friend requests.</p>
          <button>Notification Preferences</button>
        </section>
        {/* Account Settings */}
        <section className="settings-section">
          <h2>Account Settings</h2>
          <p>Change password, manage login methods, delete account.</p>
          <button>Account Options</button>
        </section>
        {/* Theme Settings */}
        <section className="settings-section">
          <h2>Theme Settings</h2>
          <p>Switch between light and dark mode.</p>
          <label className="toggle-switch" style={{ display: 'flex', alignItems: 'center', gap: '0.5em', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
              style={{ display: 'none' }}
            />
            <span className="toggle-slider" />
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </label>
        </section>
        {/* Language Settings */}
        <section className="settings-section">
          <h2>Language Settings</h2>
          <p>Select your preferred app language.</p>
          <button>Change Language</button>
        </section>
        {/* App Info */}
        <section className="settings-section">
          <h2>App Info</h2>
          <p>View app version, terms of service, privacy policy.</p>
          <button>View Info</button>
        </section>
      </div>
    </Layout>
  );
};

export default SettingsScreen;