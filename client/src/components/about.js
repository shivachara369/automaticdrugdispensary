// // About.js
// import React from 'react';
// import './about.css';  // Import the CSS file

// const About = () => {
//   return (
//     <div className="about-container">
//       <header>
//         {/* <h1>Automatic Drug Dispenser(ADD)</h1> */}
//       </header>

//       <div className="container">
//         <section id="welcome">
//           <h1>Welcome to Our Innovative Healthcare Platform</h1>
//           <para3 className='para3'>Experience seamless healthcare services where prescription and medication dispensing meet innovation.</para3>
//         </section>

//         <section id="mission">
//           <h21>Our Mission</h21>
//           <para3 className='para3'>At ADD, we simplify the prescription and medication retrieval process, making it secure, convenient, and technologically advanced. We leverage cutting-edge technology to enhance healthcare services and improve patient experiences.</para3>
//         </section>

//         <section id="how-it-works">
//           <h21>How It Works</h21>
//           <ol>
//             <li>
//               <strong className='para4'>Digital Prescription:</strong>
//               <para3 className='para3'>Experienced doctors create prescriptions securely stored in our system.</para3>
//             </li>
//             <li>
//               <strong className='para4'>QR Code Transmission:</strong>
//               <para3 className='para3'>Prescriptions are converted into a secure QR code sent to patients via email.</para3>
//             </li>
//             <li>
//               <strong className='para4'>Patient Accessibility:</strong>
//               <para3 className='para3'>Patients receive an email containing their prescription QR code. Patients can access their prescription anytime, anywhere, from their email.</para3>
//             </li>
//             <li>
//               <strong className='para4'>Medication Dispensing:</strong>
//               <para3 className='para3'>Visit any partnered pharmacy or drug dispensing machine equipped with our technology. Scan the QR code from your email at the drug dispensing machine.</para3>
//             </li>
//             <li>
//               <strong className='para4'>Medication Collection:</strong>
//               <para3 className='para3'>The drug dispensing machine retrieves your prescription details and dispenses the prescribed medications quickly and accurately.</para3>
//             </li>
//           </ol>
//         </section>

//         {/* <section id="commitment">
//           <h2>Our Commitment</h2>
//           <ul>
//             <li>
//               <strong>Security:</strong>
//               <p className="para5">Your health information is our priority. We use advanced encryption to ensure the confidentiality and security of your prescription details.</p>
//             </li>
//             <li>
//               <strong>Convenience:</strong>
//               <p className='para5'>Save time and effort with our streamlined process, allowing you to collect your medications hassle-free.</p>
//             </li>
//             <li>
//               <strong>Innovation:</strong>
//               <p className='para5'>Embracing the latest technology to enhance healthcare delivery and improve patient outcomes.</p>
//             </li>
//           </ul>
//         </section> */}
//       </div>

//       <footer>
//         <p>&copy; {new Date().getFullYear()} Automatic Drug Dispenser</p>
//       </footer>
//     </div>
//   );
// };

// export default About;
// About.js
import React from 'react';
import './about.css';  // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <header>
        {/* <h1>Automatic Drug Dispenser(ADD)</h1> */}
      </header>

      <div className="container">
        <section id="welcome">
          <h2>Welcome to Our Innovative Healthcare Platform</h2>
          <p className='para3'>Experience seamless healthcare services where prescription and medication dispensing meet innovation.</p>
        </section>

        <section id="mission">
          <h2>Our Mission</h2>
          <p className='para3'>At ADD, we simplify the prescription and medication retrieval process, making it secure, convenient, and technologically advanced. We leverage cutting-edge technology to enhance healthcare services and improve patient experiences.</p>
        </section>

        <section id="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>
              <strong className='para4'>Digital Prescription:</strong>
              <p className='para3'>Experienced doctors create prescriptions securely stored in our system.</p>
            </li>
            <li>
              <strong className='para4'>QR Code Transmission:</strong>
              <p className='para3'>Prescriptions are converted into a secure QR code sent to patients via email.</p>
            </li>
            <li>
              <strong className='para4'>Patient Accessibility:</strong>
              <p className='para3'>Patients receive an email containing their prescription QR code. Patients can access their prescription anytime, anywhere, from their email.</p>
            </li>
            <li>
              <strong className='para4'>Medication Dispensing:</strong>
              <p className='para3'>Visit any partnered pharmacy or drug dispensing machine equipped with our technology. Scan the QR code from your email at the drug dispensing machine.</p>
            </li>
            <li>
              <strong className='para4'>Medication Collection:</strong>
              <p className='para3'>The drug dispensing machine retrieves your prescription details and dispenses the prescribed medications quickly and accurately.</p>
            </li>
          </ol>
        </section>

        {/* <section id="commitment">
          <h2>Our Commitment</h2>
          <ul>
            <li>
              <strong>Security:</strong>
              <p className="para5">Your health information is our priority. We use advanced encryption to ensure the confidentiality and security of your prescription details.</p>
            </li>
            <li>
              <strong>Convenience:</strong>
              <p className='para5'>Save time and effort with our streamlined process, allowing you to collect your medications hassle-free.</p>
            </li>
            <li>
              <strong>Innovation:</strong>
              <p className='para5'>Embracing the latest technology to enhance healthcare delivery and improve patient outcomes.</p>
            </li>
          </ul>
        </section> */}
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Automatic Drug Dispenser</p>
      </footer>
    </div>
  );
};

export default About;