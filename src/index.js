import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './LandingPage'; // Your landing page
import HomePage from './HomePage'; // Your homepage
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();
