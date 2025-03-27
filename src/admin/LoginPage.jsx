import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Modal from 'react-modal';
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex', /* Add this */
        alignItems: 'center', /* Add this */
        justifyContent: 'center', /* Add this */
        zIndex: 9999
    },
    content: {
        position: 'relative',
        zIndex: 10000,
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px'
    }
};



Modal.setAppElement('#root');

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showOtpDialog, setShowOtpDialog] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [otp, setOtp] = useState('');
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
        const passwordError = checkPasswordStrength(password);
        if (passwordError) {
            setPasswordError(passwordError);
            return;
        }

        try {
            const response = await axios.post('https://localhost:7082/api/auth/login', {
                email: email,
                password: password,
            });

            console.log('Response:', response);

            if (response.status === 200) {
                setSnackbarMessage('Login successful! OTP sent to your email.');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setShowOtpDialog(true);
            }
        } catch (error) {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Status Code:', error.response.status);
                setSnackbarMessage(error.response.data.message || 'An error occurred.');
            } else if (error.request) {
                console.log('No Response:', error.request);
                setSnackbarMessage('No response from server. Please try again later.');
            } else {
                console.log('Error Setting Up Request:', error.message);
                setSnackbarMessage('Unexpected error: ' + error.message);
            }
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const response = await axios.post('https://localhost:7082/api/auth/verify-otp', {
                email: email,
                otp: otp,
            });

            if (response.status === 200) {
                setSnackbarMessage('OTP verified successfully! Redirecting...');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                navigate('/admin/dashboard');
            } else {
                throw new Error('Invalid OTP');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setSnackbarMessage('Invalid or expired OTP.');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
    <Modal
        isOpen={true}
        onRequestClose={() => setShowOtpDialog(false)}
        style={customStyles}
        contentLabel="OTP Verification"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
    >
        <div className="otp-modal-content">
            <h2 className="otp-modal-title">Verify Your OTP</h2>
            <p className="otp-modal-description">Enter the OTP sent to your email to proceed.</p>
            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="otp-input"
            />
            <div className="otp-button-container">
                <button onClick={handleVerifyOtp} className="verify-button">Verify OTP</button>
                <button onClick={() => setShowOtpDialog(false)} className="cancel-button">Cancel</button>
            </div>
        </div>
    </Modal>
)}





                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={5000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default LoginPage;
