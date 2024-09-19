import React from "react";
import Navbar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleRegistrationForm from "./VehicleManagement/RegistrationForm";
import UserRegistrationForm from "./UserManagement/UserRegistrationForm";

function RegistrationForm() {
  return (
    <Router>
      <div className="grid">
        <div className="head g-col-12">
          <Navbar />
        </div>
        <div className="container g-col-12">
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
    </Router>
  );
}

export default RegistrationForm;
