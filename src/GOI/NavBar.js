import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have styling for the navbar

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/vehicle-registration" className="navbar-link">Vehicle Registration Form</Link>
        <Link to="/user-registration" className="navbar-link">User Registration Form</Link>
      </div>
    </div>
  );
}

export default Navbar;
