import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VehicleRegistrationForm from './VehicleManagement/RegistrationForm';
import UserRegistrationForm from './UserManagement/UserRegistrationForm';
import Navbar from './VehicleManagement/Header';
// import Header from './VehicleManagement/Header'; // Update to Navbar

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/vehicle-registration" element={<VehicleRegistrationForm />} />
            <Route path="/user-registration" element={<UserRegistrationForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
