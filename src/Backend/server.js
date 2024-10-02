const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000; // Or 5000 depending on frontend

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection using Sanjay user and GOI database
const mongoURI = 'mongodb://localhost:27017/';
mongoose.connect(mongoURI, {
  dbName: 'GOI',
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // authSource: 'admin', // Needed if using authentication
  // user: 'Sanjay',
  // pass: 'sanjay13',
});

// Check MongoDB connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database GOI');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Define Vehicle Schema and map it to Vehicle_list collection
const vehicleSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true },
  dateOfRegistration: { type: Date, required: true },
  registrationValidity: { type: Date, required: true },
  chassisNumber: { type: String, required: true },
  engineNumber: { type: String, required: true },
  ownerName: { type: String, required: true },
  address: { type: String, required: true },
  vehicleType: { type: String, required: true },
  model: { type: String, required: true }, // Ensure lowercase
  fuelType: { type: String, required: true },
  color: { type: String, required: true },
  make: { type: String, required: true },
}, { collection: 'Vehicle' }); // Explicitly using Vehicle_list collection

// Create the Vehicle model
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Route to register a vehicle
app.post('/vehicle-registration', async (req, res) => {
  const {
    registerNumber,
    dateOfRegistration,
    registrationValidity,
    chassisNumber,
    engineNumber,
    ownerName,
    address,
    vehicleType,
    model,
    fuelType,
    color,
    make,
  } = req.body;

  const newVehicle = new Vehicle({
    registerNumber,
    dateOfRegistration: new Date(dateOfRegistration), // Ensure valid date format
    registrationValidity: new Date(registrationValidity), // Ensure valid date format
    chassisNumber,
    engineNumber,
    ownerName,
    address,
    vehicleType,
    model,
    fuelType,
    color,
    make,
  });

  try {
    await newVehicle.save();
    res.status(201).send('Vehicle Registered Successfully');
  } catch (error) {
    console.error('Error saving vehicle:', error);
    res.status(500).json({ message: 'Error saving vehicle', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
