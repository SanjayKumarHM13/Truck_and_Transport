// // src/App.js
import React from 'react';
import './VehicleReg.css';
import RegistrationForm from './RegistrationForm';
import Header from './Header';

function VehicleRegistration() {
  return (
    <div className='grid'>
        <div className='head g-col-12'>
          <Header />
        </div>
          <RegistrationForm />
    </div>
  );
}

export default VehicleRegistration;
