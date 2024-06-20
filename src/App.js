// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Availability from './components/availability/Availability';
import Bookings from './components/bookings/Bookings';
import Profile from './components/profile/Profile';
import Logout from './components/Logout';
import LoginPage from './components/login/Login';
import Signup from './components/signup/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/availability" element={<Availability />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Availability />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
