import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import About from './components/about';
import Contact from './components/contact';
import DoctorDashboard from './components/doctorpage';
// import SecondPage from './components/secondpage';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
    setShowNavbar(route !== '/m');
    console.log('showNavbar:', showNavbar);
    navigate(route);
  };
  

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<Home handleNavigation={handleNavigation} />}
        />
        <Route
          path="/login"
          element={<Login handleNavigation={handleNavigation} />}
        />
        <Route
          path="/signup"
          element={<Signup handleNavigation={handleNavigation} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctorpage" element={<DoctorDashboard />} />
        {/* <Route path="/secondpage" element={<SecondPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
