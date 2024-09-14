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
        {/* <div className="container g-col-12"> */}
          <RegistrationForm />
        {/* </div> */}
    </div>
  );
}

export default VehicleRegistration;
