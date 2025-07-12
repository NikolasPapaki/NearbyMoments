import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import NearbyPeopleScreen from './screens/NearbyPeopleScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/NearbyPeople" element={<NearbyPeopleScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
