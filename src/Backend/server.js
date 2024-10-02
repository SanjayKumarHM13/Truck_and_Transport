const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Create a Vehicle Schema using Mongoose
const vehicleSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true },
  dateOfRegistration: { type: Date, required: true },
  registrationValidity: { type: Date, required: true },
  chassisNumber: { type: String, required: true },
  engineNumber: { type: String, required: true },
  ownerName: { type: String, required: true },
  address: { type: String, required: true },
  vehicleType: { type: String, required: true },
  Model: { type: String, required: true },
  fuelType: { type: String, required: true },
  color: { type: String, required: true },
  make: { type: String, required: true },
});

// Create a Vehicle model from the schema
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Route to register a vehicle
app.post('/api/registerVehicle', async (req, res) => {
  const {
    registerNumber,
    dateOfRegistration,
    registrationValidity,
    chassisNumber,
    engineNumber,
    ownerName,
    address,
    vehicleType,
    Model,
    fuelType,
    color,
    make,
  } = req.body;

  const newVehicle = new Vehicle({
    registerNumber,
    dateOfRegistration,
    registrationValidity,
    chassisNumber,
    engineNumber,
    ownerName,
    address,
    vehicleType,
    Model,
    fuelType,
    color,
    make,
  });

  try {
    await newVehicle.save();
    res.status(201).send('Vehicle Registered Successfully');
  } catch (error) {
    console.error('Error saving vehicle:', error);
    res.status(500).send('Error saving vehicle');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
