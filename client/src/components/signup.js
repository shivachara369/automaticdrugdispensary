import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock,faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import './signup.css';

// ... (import statements remain unchanged)

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false); // Separate state for confirm password visibility

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'cpassword') {
      setShowCPassword(!showCPassword);
    }
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Successful Registration");

      navigate("/login");
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="sign-up content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FontAwesomeIcon icon={faUser} />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="  Name"
                    // style={{ marginLeft: '5px' }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="  Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <FontAwesomeIcon icon={faLock} />
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="  Enter Password"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEye : faEyeSlash} // Reverse the icon logic here
                    className="password-toggle-icon"
                    onClick={() => togglePasswordVisibility('password')}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <FontAwesomeIcon icon={faLock} />
                  </label>
                  <input
                    type={showCPassword ? "text" : "password"}
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder="  Confirm Password"
                  />
                  <FontAwesomeIcon
                    icon={showCPassword ? faEye : faEyeSlash} // Reverse the icon logic here
                    className="password-toggle-icon"
                    onClick={() => togglePasswordVisibility('cpassword')}
                  />
                </div>

                <div className="form-group form button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="submit"
                    value="Sign up"
                    onClick={PostData}
                  />
                </div>

              </form>

              <NavLink to="/login" className="registered">Registered already?</NavLink>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;