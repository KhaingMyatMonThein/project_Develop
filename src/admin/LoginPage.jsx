// src/admin/LoginPage.jsx
import React, { useState } from 'react';
import OtpDialog from './OtpDialog';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styling
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import axios from 'axios'; // Import Axios

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one capital letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return 'Password must contain at least one special character';
    }
    return '';
  };

  const handleLoginClick = async () => {
    const passwordErrorMessage = checkPasswordStrength(password);
    setPasswordError(passwordErrorMessage);

    if (passwordErrorMessage) {
      return; // Don't proceed if password is weak
    }

    // Send login request to backend using Axios
    try {
      const response = await axios.post('/api/auth/login', {  // Modified API endpoint
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setShowOtpDialog(true); // Show OTP dialog after successful email/password verification
      } else {
        console.error('Invalid credentials');
        // Handle invalid credentials (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network errors
    }
  };

  const handleOtpVerified = () => {
    // Callback function from OtpDialog
    navigate('/admin/dashboard'); // Redirect to admin panel
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/roboticon.jpg" alt="AI Solution" className="login-logo" />
        <h2>Admin Login</h2>
        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button onClick={handleLoginClick}>Login</button>

        {showOtpDialog && (
          <OtpDialog
            email={email}
            onClose={() => setShowOtpDialog(false)}
            onOtpVerified={handleOtpVerified}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
