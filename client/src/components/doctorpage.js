//doctorpage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHistory, faClipboard } from '@fortawesome/free-solid-svg-icons';
import PatientDetails from './patientdetails';
import NewPrescription from './newprescription';
import OldPrescriptions from './oldprescription';
import './doctorpage.css';

const DoctorPage = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const renderMenuContent = () => {
    switch (activeMenu) {
      case 'patientdetails':
        return <PatientDetails />;
      case 'newprescription':
        return <NewPrescription />;
      case 'oldprescriptions':
        return <OldPrescriptions />;
      default:
        return (
          <div>
            <p className='para3'>Welcome to the Medical Interface </p>
            <p className='para'>Please Select an option from the left</p>
          </div>
        );
    }
  };

  // 
  // ...

return (
  <div>
    <div className="menu-container">
      <ul>
        <li
          className={`menu-item ${activeMenu === 'patientdetails' ? 'active' : ''}`}

          onClick={() => setActiveMenu('patientdetails')}
        >
          <FontAwesomeIcon icon={faUser} /> Patient Details
        </li>
        <li
          className={`menu-item ${activeMenu === 'newprescription' ? 'active' : ''}`}
          onClick={() => setActiveMenu('newprescription')}
        >
          <FontAwesomeIcon icon={faClipboard} /> New Prescription
        </li>
        <li
          className={`menu-item ${activeMenu === 'oldprescriptions' ? 'active' : ''}`}
          onClick={() => setActiveMenu('oldprescriptions')}
        >
          <FontAwesomeIcon icon={faHistory} /> Old Prescriptions
        </li>
      </ul>
    </div>

    <div className="content-container">{renderMenuContent()}</div>
  </div>
  );
};

export default DoctorPage;