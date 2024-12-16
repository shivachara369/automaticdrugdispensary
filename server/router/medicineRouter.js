const express = require('express');
const router = express.Router();
const Prescription = require('../model/prescriptionModel');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');
//const path=require('path');
require("dotenv").config();

const generateGroupId = () => {
  return uuidv4();
};

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/add-all-details', async (req, res) => {
  try {
    const { name, email, symptoms: rawSymptoms, medicines, groupId } = req.body;

    if (!name || !email || !rawSymptoms || !medicines || !Array.isArray(medicines) || medicines.length === 0) {
      return res.status(400).json({ error: 'Invalid request. Please provide all required details, including an array of medicines.' });
    }

    const newGroupId = groupId || generateGroupId();
    const symptoms = rawSymptoms.split(',').map(symptom => symptom.trim());

    const isValidQuantity = medicines.every(med => /^\d+$/.test(med.quantity));

    if (!isValidQuantity) {
      return res.status(400).json({ error: 'Invalid request. Medicine quantity must be a numeric value.' });
    }

    const qrCodeData = JSON.stringify(medicines.map(med => ({ medicine: med.medicine, quantity: med.quantity })));
    const qrCodeDataUrl = await QRCode.toDataURL(qrCodeData);

    // Split the data URL into its parts
    const qrCodeParts = qrCodeDataUrl.split(',');

    if (qrCodeParts.length !== 2) {
      return res.status(500).json({ error: 'Failed to generate QR code.' });
    }

    const qrCodeBuffer = Buffer.from(qrCodeParts[1], 'base64');

    const allDetails = {
      patientDetails: { name, email, symptoms, groupId: newGroupId },
      medicines: medicines.map(med => ({ medicine: med.medicine, quantity: med.quantity })),
      qrCode: qrCodeBuffer,
    };

    const savedDetails = await Prescription.create(allDetails);

    // Logo file path (replace 'path/to/your/logo.png' with the actual path to your logo image)
    //const logoPath = path.join(__dirname, 'routerlogo.jpg');

    // Create a PDF with patient details, logo, and QR code
    const pdfFileName = `prescription_${newGroupId}.pdf`;
    const pdfStream = fs.createWriteStream(pdfFileName);
    const pdfDoc = new PDFDocument();

    pdfDoc.pipe(pdfStream);

    // Embed logo into the PDF
    //pdfDoc.image(logoPath, { width: 100, height: 100, align: 'left' }).moveDown();

    pdfDoc.text('Prescription Details', { align: 'center', underline: true }).moveDown();
    pdfDoc.text(`Patient Name: ${name}`).moveDown();
    pdfDoc.text(`Email: ${email}`).moveDown();
    pdfDoc.text(`Symptoms: ${symptoms.join(', ')}`).moveDown();
    pdfDoc.text(`Group ID: ${newGroupId}`).moveDown();
    pdfDoc.text('Medicines:').moveDown();
    medicines.forEach(med => pdfDoc.text(`${med.medicine}: ${med.quantity}`).moveDown());

    // Embed QR code image into the PDF
    pdfDoc.image(qrCodeBuffer, { fit: [250, 250], align: 'center', valign: 'center' }).moveDown();

    pdfDoc.end();

    // Send email with PDF attachment
    await transporter.sendMail({
      from: {
        name: "ADD",
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: 'Your Prescription Details',
      text: 'Please find your prescription details attached.',
      attachments: [
        {
          filename: pdfFileName,
          path: pdfFileName,
        },
      ],
    });

    // Delete the generated PDF file
    fs.unlinkSync(pdfFileName);

    res.status(201).json({
      message: 'Patient details and medicines saved successfully. PDF and QR code sent to email.',
      details: savedDetails,
      groupId: newGroupId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
