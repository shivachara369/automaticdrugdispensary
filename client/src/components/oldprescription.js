// OldPrescriptions.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './oldprescription.css';

const OldPrescriptions = () => {
  const [oldPrescriptions, setOldPrescriptions] = useState([]);

  useEffect(() => {
    const fetchOldPrescriptions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/old-prescriptions');
        setOldPrescriptions(response.data);
      } catch (error) {
        console.error('Error fetching old prescriptions:', error);
      }
    };

    fetchOldPrescriptions();
  }, []);

  return (
    <div>
      <h1 className='old'>Old Prescriptions</h1>
      <ul>
        {oldPrescriptions.map((prescription) => (
          <li  key={prescription._id} className='pres'>
            <p className='para5'><strong>Patient Name:</strong> {prescription.patientDetails.name}</p>
            <p className='para5'><strong>Symptoms:</strong> {prescription.patientDetails.symptoms.join(', ')}</p>
            <p className='para5'><strong>Email:</strong> {prescription.patientDetails.email}</p>
            <p className='para5'><strong>Medicines: </strong> 
              {prescription.medicines.map((medicine, index) => (
                <span key={index}>
                  {medicine.medicine} - {medicine.quantity}
                  {index < prescription.medicines.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p className='para5'><strong>Date:</strong> {prescription.Date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OldPrescriptions;