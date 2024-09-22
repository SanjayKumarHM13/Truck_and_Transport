import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./NavBar";
import VehicleRegistrationForm from "./VehicleManagement/VehicleReg";
import UserRegistrationForm from "./UserManagement/UserRegistrationForm";

import './RegistrationForm.css';
import '../globalVar.css';

function RegistrationForm() {
  return (
      <div className="grid" id="registrationForm">
        <div className="container navBar">
          <Navbar />
        </div>
        <div className="container formBody">
          <Routes>
            <Route
              path="/vehicle-registration"
              element={<VehicleRegistrationForm />}
            />
            <Route
              path="/user-registration"
              element={<UserRegistrationForm />}
            />
          </Routes>
        </div>
      </div>
  );
}

export default RegistrationForm;
