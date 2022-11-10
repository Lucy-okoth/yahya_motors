import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Bookings from './App/components/Admin/Dashboard/Bookings';
import SellCar from './App/components/Admin/Dashboard/Sellcar';
import Settings from './App/components/Admin/Dashboard/settings';
import Dashboard from './App/components/Admin/Dashboard/dashboard.jsx';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/dashboard" element={<Dashboard />} />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Router;


