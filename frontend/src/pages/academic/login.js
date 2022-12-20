import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const goDashStaff = () => {
      navigate('/dashboardStaff');
    }
    const goDashAdmin = () => {
      navigate('/dashboardAdmin');
    }

    const goRegister = () => {
        navigate('/registerStaff');
    }

    const formik = useFormik({
        initialValues: {
          email: 'demo@devias.io',
          password: 'Password123'
        },
        validationSchema: Yup.object({
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup
            .string()
            .max(255)
            .required('Password is required')
        }),
        onSubmit: async (values) => {
          await axios.post("http://92.205.25.135:4/auth/login", values)
              .then((res) => {
                  console.log("Response: ", res)
              })
              .catch((err) => {
                  if (err && err.response) {
                      // if admin call goDashAdmin else call goDashStaff
                      console.log("Error: ", err)
                  }
              })
        }
      });
    
      return (
        <>
          
            <title>Login | Material Kit</title>
          
          <Box
            component="main"
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%'
            }}
          >
            <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ my: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h4"
                  >
                    Academic Staff Login
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in to your account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign In Now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Don&apos;t have an account?
                  {' '}
                    <Link
                      to="/register"
                      variant="subtitle2"
                      underline="hover"
                      sx={{
                        cursor: 'pointer'
                      }}
                      onClick={() => {goRegister()}}
                    >
                      Staff Register
                    </Link>
                </Typography>
              </form>
            </Container>
          </Box>
        </>
      );
}

export default Login
