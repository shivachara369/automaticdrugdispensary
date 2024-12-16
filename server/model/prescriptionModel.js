const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
  patientDetails: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    symptoms: [{
      type: String,
      required: true,
    }], 
    groupId: {
      type: String,
      required: true,
    },
  },
  medicines: [{
    medicine: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  Date:{
    type: Date,
    default:Date.now,
  },
  qrCode: {
    type: Buffer, // Store the QR code as Buffer
  },
}, { timestamps: true });

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
