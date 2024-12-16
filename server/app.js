const dotenv = require('dotenv');
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const Prescription = require('./model/prescriptionModel.js');

dotenv.config();

// require('./db/conn');
//const User =  require('./model/userSchema')

app.use(express.json());

app.use(cors());

connectDB();

// we link router files to make our route easy
app.use(require('./router/auth.js'));

//middleware

const middleware = (req, res, next) => {
    console.log("Hello middleware");
}

app.get('/',(req,res)=> {
    res.send("Hello World app.js");
});

app.get('/signin', middleware, (req,res)=> {
    res.send("Hello signin World");
});

app.get('/register', middleware, (req,res)=> {
    res.send("Hello signup World");
});

app.use('/medicine', require('./router/medicineRouter.js'));

// app.use('/patient', require('./router/patientDetailsRoute.js'));
// app.js
// ...

app.get('/old-prescriptions', async (req, res) => {
    try {
      const oldPrescriptions = await Prescription.find();
      res.json(oldPrescriptions);
    } catch (error) {
      console.error('Error fetching old prescriptions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ...
  

app.listen(5000, () => {
    console.log("Server is running on port no 5000");
});