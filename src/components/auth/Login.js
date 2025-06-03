import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';
import './loginShignUp.css';

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send login request to the server
    axios.post('http://localhost:3001/login', { email, password })
      .then(res => {
        if (res.data.status === "Success") {
          // Handle successful login
          console.log(res); // Log the entire response to check the structure
          let successMessage = `Welcome, ${res.data.name || 'User'}! 😎`; // Use 'name' from response

          if (res.data.role === "admin") {
            successMessage = 'Welcome Admin!!! 🙍🏻‍♂️'; // Custom message for admin
          }
  
          setAlert({
            type: 'success',
            message: successMessage
          });
  
          // Redirect after a success
          setTimeout(() => {
            if (res.data.role === "admin") {
              navigate('/dashboard');
            } else {
              navigate('/');
            }
          }, 3000);
        } else if (res.data.status === "error" && res.data.message === "Email not found") {
          // Handle case when the email is not found in the database
          setAlert({
            type: 'error',
            message: 'This email Id cannot be found in the database.'
          });
  
          // Automatically close the alert after 3 seconds
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        } else {
          // Handle other errors (e.g., incorrect password)
          setAlert({
            type: 'error',
            message: 'Incorrect email or password'
          });
  
          // Automatically close the alert after 3 seconds
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        }
      })
      .catch(err => {
        // Handle network or server errors
        setAlert({
          type: 'error',
          message: 'An error occurred. Please try again later.'
        });
  
        // Automatically close the alert after 4 seconds
        setTimeout(() => {
          setAlert(null);
        }, 4000);
  
        console.log(err);
      });
  }
  
  // Close the alert manually
  const closeAlert = () => {
    setAlert(null);
  }

  return (
    <div className="Login_body">
      <div className="body_container">
        {/* Show alert if alert state is not null */}
        {alert && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
        <form onSubmit={handleSubmit}>
          <h1 className="form_text pt-3 text-center">Log In</h1>
          <div className="mb-3">
            <label htmlFor="" className="form-label form_text">E-mail</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your E-mail"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label form_text">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>

          <div>
            <a href="/">Forgot Password!!</a><br />
            <label className="form_text">Don't have an account? <Link to="/signUp">Register Now</Link></label>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
