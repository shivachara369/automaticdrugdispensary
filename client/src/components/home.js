// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import logo from './logo.jpg';

const Home = ({handleNavigation}) => {
  // const [showWelcome, setShowWelcome] = useState(false);
  // const [showDispensary, setShowDispensary] = useState(false);
  // const [showImage, setShowImage] = useState(false);
  // const [showButtons, setShowButtons] = useState(false);
  // const [showTraley, setShowTraley] = useState(false);

  // useEffect(() => {
  //   const delay = 1000;

  //   setTimeout(() => {
  //     setShowWelcome(true);
  //   }, delay);

  //   setTimeout(() => {
  //     setShowDispensary(true);
  //   }, delay * 2);

  //   setTimeout(() => {
  //     setShowImage(true);
  //   }, delay * 3);

  //   setTimeout(() => {
  //     setShowButtons(true);
  //   }, delay * 4);

  //   // Set a timeout to show the Traley image after the logo animation
  //   setTimeout(() => {
  //     setShowTraley(true);
  //   }, delay * 5);
  // }, []);

  //   <div className={app ${showButtons ? 'clicked' : ''}}>
  //     {/* Conditionally render the welcome message */}
  //     {showWelcome && (
  //       <div className="info-container">
  //         <h1 className='welcome'>Welcome</h1>
  //         <h2>We are Drug Dispensary</h2>
  //       </div>
  //     )}

  //     {/* Conditionally render the image */}
  //     {showImage && showDispensary && (
  //       <img
  //         className={animated-photo ${showButtons ? 'move-to-top-left' : ''}}
  //         src={logo}
  //         alt="Animated"
  //       />
  //     )}

  //     {/* Conditionally render the Traley image */}
  //     {showTraley && (
  //       <img
  //         className={traley ${showButtons ? 'pop-out' : ''}}
  //         src="https://im.whatshot.in/img/2020/Mar/shutterstock-1357268261-cropped-1584619577.jpg"
  //         alt="Traley"
  //       />
  //     )}

  //     {/* Conditionally render the buttons */}
  //     {showButtons && showImage && (
  //       <div className="Information" style={{ height: '650px' }}>
  //         <h1 className='ADD'>Automatic Drug Dispenser</h1>
  //         <h1 className='head'>EASY</h1>
  //         <p className='para'>We provide easy services to simplify your life.</p>
  //         <h1 className='head'>SAFE</h1>
  //         <p className='para'>Your details are safe with us, following strict guidelines.</p>
  //         <h1 className='head'>SECURE</h1>
  //         <p className='para'>Ensuring a secure website experience without any compromises.</p>
  //         <div className="buttons-container">
  //           <Link to="/login" onClick={() => handleNavigation('/login')}>
  //             <button className='signin'>Sign in</button>
  //           </Link>
  //           <Link to="/signup" onClick={() => handleNavigation('/signup')}>
  //             <button className='register'>Sign up</button>
  //           </Link>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
  return(
  <div className="app">
  

  <div className="Information" style={{ height: '650px' }}>
    <h1 className='welcome'>AUTOMATIC DRUG DISPENSER ONLINE</h1>
    <h1 className="ADD">(Medicine Shopping made easy)</h1>
    <h1 className="head1">-EASY</h1>
    <p className="para1">We provide easy services to simplify your life.</p>
    <h1 className="head1">-SAFE</h1>
    <p className="para1">Your details are safe with us,following strict guidelines.</p>
    <h1 className="head1">-SECURE</h1>
    <p className="para1">Ensuring a secure website experience without any compromises.</p>
    <div className="buttons">
      <Link to="/signup" onClick={() => handleNavigation('/signup')}>
        <button className="register">SIGN UP/LOGIN NOW!!!</button>
      </Link>
    </div>
  </div>
</div>
);

};

export default Home;