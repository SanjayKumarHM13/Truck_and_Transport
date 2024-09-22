import React from 'react';
import { Link } from 'react-router-dom';

import './Style/NavBar.css';

function Navbar() {
  return (
    <div className="navbar" id='navigationBar'>
      <div className="navbar-logo">
        <Link to="/vehicle-registration" className="navbar-link">Vehicle Registration Form</Link>
        <Link to="/user-registration" className="navbar-link">User Registration Form</Link>
      </div>
    </div>
  );
}

export default Navbar;
