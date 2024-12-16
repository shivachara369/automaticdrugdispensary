import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './signup.css'; // Import CSS file

const Signup = () => {
  return (
    <div>
      <p className="mt-5">WELCOME</p>
      <h1>Automatic Drug Dispenser Contact</h1>
      {/* Use Link component to redirect to home */}
      <Link to="/" className="button1">Logout</Link>
    </div>
  );
};

export default Signup;
