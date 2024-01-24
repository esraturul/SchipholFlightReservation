import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
const defaultTheme = createTheme();

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChangeEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', values);
      console.log(response.data);
      
      navigate('/flight');
      
    } catch (error) {
      console.error('Login failed', error);
      
      if (error.response) {
        console.log('Server Error Status:', error.response.status);
        console.log('Server Error Data:', error.response.data);
      } else if (error.request) {
        
        console.log('Request Error:', error.request);
      } else {
        
        console.log('Error Message:', error.message);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted',values);
    await loginUser();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '30px',
            backgroundColor: 'rgba(255, 165, 0, 0.7)',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            width: '500px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onChangeEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChangePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="/forgot-password" style={{ textDecoration: 'none' }}>
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/register" style={{ textDecoration: 'none' }}>
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
