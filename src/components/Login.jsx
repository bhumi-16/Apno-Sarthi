import React from 'react';
import './Login.css'; // Ensure this file exists
import hexImage from '../assets/hexagon.png'; // Correct relative path

const Login = () => {
  return (
    <div className="login-box">
      {/* Hexagon Gallery at the top */}
      <div 
        className="hexagon-gallery"
        style={{
          backgroundImage: `url(${hexImage})`,
          backgroundSize: 'contain', // Adjusted size to be smaller
          backgroundPosition: 'center top',
          height: '200px' // Reduced height for the hexagon image
        }}
      >
      </div>

      {/* Login Form */}
      <div className="login-form">
        <h2>LOGIN</h2>
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-btn">Login</button>
        <p className="forgot-password">Forgot Password?</p>
      </div>

      {/* Sign-Up Text Adjusted */}
      <div className="signup-container">
        <p className="signup-text">
          Want to create an account? <a href="/signup">SIGN UP</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
