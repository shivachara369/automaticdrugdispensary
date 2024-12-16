// NewPrescription.js
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faStethoscope, faPills,faSortAmountUp } from '@fortawesome/free-solid-svg-icons';

import './newprescription.css';  // Import the CSS file

const NewPrescription = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [prescriptionDetails, setPrescriptionDetails] = useState([]);
  const [newMedicine, setNewMedicine] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  //const [qrCodeData, setQRCodeData] = useState('');
  const [setQRCodeImage] = useState(null);

  const handleSavePrescription = async () => {
    try {
      // Ensure there are patient details and medicines
      if (!name.trim() || !email.trim() || !symptoms.trim() || prescriptionDetails.length === 0) {
        alert('Please provide all details, including at least one medicine, before saving.');
        return;
      }

      // Save patient and medicine details
      const response = await axios.post('http://localhost:5000/medicine/add-all-details', {
        name,
        email,
        symptoms,
        newQuantity,
        medicines: prescriptionDetails.map(({ medicine, quantity }) => ({ medicine, quantity })),
      });

      // Check if response and response.data are defined
      if (response && response.data) {
        alert('Prescription details saved successfully');

        // Set the QR Code data for immediate display
        //setQRCodeData(response.data.qrCode);

        // Generate QR code image and update the state
        generateQRCodeImage(response.data.qrCode);
      } else {
        console.error('Invalid response from the server:', response);
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  const generateQRCodeImage = async (base64Data) => {
    try {
      // Fetch the image data using the base64 string
      const response = await fetch(base64Data);
      const blob = await response.blob();

      // Convert the blob into a data URL
      const imageUrl = URL.createObjectURL(blob);

      // Update the state with the QR code image
      setQRCodeImage(imageUrl);
    } catch (error) {
      console.error('Error generating QR code image:', error);
    }
  };

  const handleAddMedicine = () => {
    if (newMedicine.trim() === '' || newQuantity.trim() === '') {
        alert('Please enter both medicine and quantity.');
        return;
    }

    // Check if the entered medicine is from the predefined list
    const isMedicineValid = ['dolo', 'meftal', 'dulcoflex', 'cetirizine', 'azithromycin'].includes(newMedicine.toLowerCase());

    if (!isMedicineValid) {
        alert('Invalid medicine. Please select from the predefined list.');
        return;
    }

    // Add the new medicine and quantity to the prescriptionDetails state
    setPrescriptionDetails([...prescriptionDetails, { medicine: newMedicine, quantity: newQuantity }]);

    // Clear the input fields
    setNewMedicine('');
    setNewQuantity('');
};


  const handleRemoveMedicine = () => {
    if (prescriptionDetails.length === 0) {
      alert('No medicines to remove.');
      return;
    }

    // Remove the last added medicine
    const updatedPrescriptionDetails = [...prescriptionDetails];
    updatedPrescriptionDetails.pop();
    setPrescriptionDetails(updatedPrescriptionDetails);
  };

  return (
    <div className="prescription-container">
    <div className="medicine-inputs">
      <div className="input-container">
        <FontAwesomeIcon icon={faUser} className="icon" />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faStethoscope} className="icon" />
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faPills} className="icon" />
        <input
          type="text"
          placeholder="Medicine"
          value={newMedicine}
          onChange={(e) => setNewMedicine(e.target.value)}
          list='medicines'
        />
        <datalist id="medicines">
                          {/* <option value="Paracetamol">Paracetamol</option> */}
                          <option value="dolo">dolo</option>
                          <option value="meftal">meftal</option>
                          <option value="dulcoflex">dulcoflex</option>
                          <option value="cetirizine">cetirizine</option>
                          {/* <option value="Augmentin">Augmentin</option>
                          <option value="Olanzaphine">Olanzaphine</option> */}
                          <option value="azithromycin">azithromycin</option>
                        </datalist>
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faSortAmountUp} className="icon" />
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
        />
      </div>
   
        
        <button className="medicine-buttons" onClick={handleAddMedicine}>
          Add Medicine
        </button>
        <button className="medicine-buttons" onClick={handleRemoveMedicine}>
          Remove Medicine
        </button>
      </div>

 
      <div className="added-medicines">
        <h3>Added Medicines:</h3>
        <ul>
          {prescriptionDetails.map((item, index) => (
            <li key={index}>
              {item.medicine} - {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    
     <button className="action-buttons" onClick={handleSavePrescription}>
        Save Prescription
     </button>

     {/* <button className="action-buttons" onClick={handleSavePrescription}>
        Generate QR Code
     </button> */}
     

      {/* {qrCodeImage && <img alt="QR Code" src={qrCodeImage} className="qr-code" />} */}
    </div>
  );
};

export default NewPrescription;