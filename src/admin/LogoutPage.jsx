import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                const response = await axios.post('https://localhost:7082/api/auth/logout');
                if (response.status === 200) {
                    // Clear user data (e.g., token) from local storage or cookies
                    localStorage.removeItem('token');
                    // Redirect to login page
                    navigate('/login');
                } else {
                    console.error('Logout failed');
                    // Optionally display an error message
                }
            } catch (error) {
                console.error('Error during logout:', error);
                // Optionally display an error message
            }
        };

        handleLogout();
    }, [navigate]);

    return (
        <div>
            <p>Logging out...</p>
        </div>
    );
};

export default LogoutPage;
