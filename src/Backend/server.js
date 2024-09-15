const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'GOI',
  password: 'sanjay13',
  port: 5432,
});

app.post('/api/registerVehicle', async (req, res) => {
  const { registerNumber, dateOfRegistration, registrationValidity, chassisNumber, engineNumber, ownerName, address, vehicleType, Model, fuelType, color, make } = req.body;

  try {
    const query = `
      INSERT INTO vehicles (register_number, date_of_registration, registration_validity, chassis_number, engine_number, owner_name, address, vehicle_type, model, fuel_type, color, make)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `;
    await pool.query(query, [registerNumber, dateOfRegistration, registrationValidity, chassisNumber, engineNumber, ownerName, address, vehicleType, Model, fuelType, color, make]);
    res.status(201).send('Vehicle Registered Successfully');
  } catch (error) {
    console.error('Error saving vehicle:', error);
    res.status(500).send('Error saving vehicle');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
