import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import PeopleListScreen from './screens/PeopleListScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/list" element={<PeopleListScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
