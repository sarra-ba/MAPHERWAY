import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import LoginForm from './LoginForm/LoginForm';
import Home from './Home/Home.jsx';
import RecordPage from './RecordPage.jsx';
import {MarketPage} from './MarketPage.jsx';
import SignupForm from './SignupForm.jsx';
import {EmergencyPage} from './EmergencyPage.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/MarketPage" element={<MarketPage />} />
        <Route path="/EmergencyPage" element={<EmergencyPage />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Logout" element={< RecordPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
