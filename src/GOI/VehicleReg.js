import React, { useState } from "react";
import "./Style/FormStyle.css";

const VehicleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    registerNumber: "",
    dateOfRegistration: "",
    registrationValidity: "",
    chassisNumber: generateChassisNumber(),
    engineNumber: generateEngineNumber(), // Use generated engine number
    ownerName: "",
    address: "",
    vehicleType: "Truck",
    Model: "",
    fuelType: "",
    color: "",
    make: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function generateChassisNumber() {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  }

  function generateEngineNumber() {
    return Math.random().toString(36).substring(2, 12).toUpperCase();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/registerVehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Vehicle Registered Successfully");
        setIsSubmitted(true);
      } else {
        alert("Error registering vehicle");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the vehicle.");
    } finally {
      setIsSubmitted(true);
    }
  };

  // Reset form for adding a new vehicle
  const handleAddNewVehicle = () => {
    setFormData({
      registerNumber: "",
      dateOfRegistration: "",
      registrationValidity: "",
      chassisNumber: generateChassisNumber(),
      engineNumber: generateEngineNumber(), // Generate new engine number
      ownerName: "",
      address: "",
      vehicleType: "Truck",
      Model: "",
      fuelType: "",
      color: "",
      make: "",
    });
    setIsSubmitted(false);
  };

  // Close form
  const handleClose = () => {
    alert("Closing form...");
    // Add any additional logic for closing the form
  };

  return (
    <div className="form-container">
      <form className="vehicle-form" onSubmit={handleSubmit}>
        {!isSubmitted && (
          <>
            <div className="form-column">
              <label>Register Number</label>
              <input
                type="text"
                name="registerNumber"
                value={formData.registerNumber}
                onChange={handleChange}
                required
              />

              <label>Date of Registration</label>
              <input
                type="date"
                name="dateOfRegistration"
                value={formData.dateOfRegistration}
                onChange={handleChange}
                required
              />

              <label>Registration Validity</label>
              <input
                type="date"
                name="registrationValidity"
                value={formData.registrationValidity}
                onChange={handleChange}
                required
              />

              <label>Chassis Number</label>
              <input
                type="text"
                name="chassisNumber"
                value={formData.chassisNumber}
                readOnly
              />

              <label>Engine/Motor Number</label>
              <input
                type="text"
                name="engineNumber"
                value={formData.engineNumber}
                onChange={handleChange}
                required
              />

              <label>Owner Name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-column">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>

              <label>Vehicle Type</label>
              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                readOnly
              />

              <label>Model</label>
              <input
                type="text"
                name="Model"
                value={formData.Model}
                onChange={handleChange}
                required
              />

              <label>Fuel Type</label>
              <input
                type="text"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                required
              />

              <label>Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                required
              />

              <label>Make</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group button-container">
              <button type="submit">Register Vehicle</button>
            </div>
          </>
        )}

        {isSubmitted && (
          <div className="form-group button-container">
            <button type="button" onClick={handleAddNewVehicle}>
              Add New Vehicle
            </button>
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default VehicleRegistrationForm;
