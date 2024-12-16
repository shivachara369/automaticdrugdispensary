// patientdetails.js
// import React, { useState } from 'react';

// const PatientDetails = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [symptoms, setSymptoms] = useState('');

//   const handleSavePatientDetails = async () => {
//     // Validate input fields if needed
//     if (!name.trim() || !email.trim() || !symptoms.trim()) {
//       alert('Please enter all details.');
//       return;
//     }
  
//     try {
//       // Make an API call to the backend to save patient details
//       const response = await fetch('http://localhost:5000/patient/add-patient', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, symptoms }),
//       });
  
//       if (response.ok) {
//         alert('Patient details saved successfully');
//       } else {
//         alert('Failed to save patient details');
//       }
  
//       // Clear the input fields after saving
//       setName('');
//       setEmail('');
//       setSymptoms('');
//     } catch (error) {
//       console.error('Error saving patient details:', error);
//     }
//   };
  
//   return (
//     <div>
//       <h3>Patient Details Content</h3>
//       <div>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//       </div>
//       <div>
//         <label>
//           Symptoms:
//           <input type="text" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} />
//         </label>
//       </div>
//       <button onClick={handleSavePatientDetails}>Save Patient Details</button>
//     </div>
//   );
// };

// export default PatientDetails;
