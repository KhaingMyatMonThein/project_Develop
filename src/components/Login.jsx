import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
});


const Login = () => {
  const navigate = useNavigate();
  const [passwordStrength, setPasswordStrength] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    try {
      // Call your API to login here
      console.log(data);
      navigate('/admin/dashboard'); // Navigate to admin dashboard after login
    } catch (error) {
      console.error(error);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;

    // Check for length
    if (password.length >= 8) strength += 1;

    // Check for lowercase
    if (/[a-z]/.test(password)) strength += 1;

    // Check for uppercase
    if (/[A-Z]/.test(password)) strength += 1;

    // Check for numbers
    if (/\d/.test(password)) strength += 1;

    // Check for special characters
    if (/[!@#$%^&*()_+\-=\]{};':"\\|,.<>?]/.test(password)) strength += 1;

    switch (strength) {
      case 5:
        setPasswordStrength('Excellent');
        break;
      case 4:
        setPasswordStrength('Good');
        break;
      case 3:
        setPasswordStrength('Fair');
        break;
      default:
        setPasswordStrength('Weak');
        break;
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleLogin)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            onChange={(e) => checkPasswordStrength(e.target.value)}
          />
          {passwordStrength && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              Password Strength: {passwordStrength}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
