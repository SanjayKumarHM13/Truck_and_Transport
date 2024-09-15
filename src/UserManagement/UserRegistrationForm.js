import React, { useState } from 'react';
import './UserStyles.css';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    bloodGroup: '',
    address: '',
    mobileNumber: '',
    email: '',
    aadharNumber: generateAadharNumber(),
    disability: 'no',
    disabilityDetails: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to generate a random Aadhar number in the format 'xxxx xxxx xxxx'
  function generateAadharNumber() {
    const getRandomNumber = () => Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit number
    return `${getRandomNumber()} ${getRandomNumber()} ${getRandomNumber()}`;
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User Registered Successfully');
        setIsSubmitted(true); // Set form submission state to true
      } else {
        alert('Error registering user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
    }
  };

  // Reset form for adding a new user
  const handleAddNewUser = () => {
    setFormData({
      name: '',
      dob: '',
      bloodGroup: '',
      address: '',
      mobileNumber: '',
      email: '',
      aadharNumber: generateAadharNumber(),
      disability: 'no',
      disabilityDetails: ''
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    alert('Closing form...');
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      {!isSubmitted && (
        <>
          <div className="form-column">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

            <label>Blood Group</label>
            <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />

            <label>Mobile Number</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-column">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

            <label>Aadhar Number</label>
            <input type="text" name="aadharNumber" value={formData.aadharNumber} readOnly />

            <label>Disability</label>
            <select name="disability" value={formData.disability} onChange={handleChange}>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>

            {formData.disability === 'yes' && (
              <>
                <label>If Yes, Mention Details</label>
                <textarea
                  name="disabilityDetails"
                  value={formData.disabilityDetails}
                  onChange={handleChange}
                  required={formData.disability === 'yes'}
                />
              </>
            )}
          </div>

          <div className="form-group button-container">
            <button type="submit">Register User</button>
          </div>
        </>
      )}

      {isSubmitted && (
        <div className="form-group button-container">
          <button type="button" onClick={handleAddNewUser}>Add New User</button>
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      )}
    </form>
  );
};

export default UserRegistrationForm;
