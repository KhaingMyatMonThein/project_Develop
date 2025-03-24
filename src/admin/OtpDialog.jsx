// src/admin/OtpDialog.jsx
import React, { useState } from 'react';
import Modal from 'react-modal'; // Ensure you have this installed: npm install react-modal

const customStyles = { // Style the modal (optional)
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root'); // Important for accessibility. Replace #root with the ID of your app's root element if necessary.

const OtpDialog = ({ email, onClose, onOtpVerified }) => {  // Accept the callback function
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch('/api/auth/verify-otp', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        onOtpVerified(); // Call the callback function to redirect
        onClose(); // Close the modal
      } else {
        console.error('Failed to verify OTP');
        // Handle incorrect OTP
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle network errors
    }
  };

  return (
    <Modal
      isOpen={true} 
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="OTP Verification"
    >
      <h2>Enter OTP</h2>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default OtpDialog;
