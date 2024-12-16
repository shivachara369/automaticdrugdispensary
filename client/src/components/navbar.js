import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  './navbar.css';
import logo from './logo.jpg';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className='logo'><img src ={logo} className='logo'alt ="logo"/></div>
          <NavLink class="navbar-brand" to="#">
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <NavLink className="nav-link" to="/doctorpage">Home </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              {/* <li class="nav-item">
                <NavLink className="nav-link" to="/login">Signin</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
              </li> */}
            </ul>
          </div>
      </nav>
    </>
  )
}

export default Navbar;
