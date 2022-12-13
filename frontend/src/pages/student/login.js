import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Box, Button, Container, Grid, Link, TextField, Typography} from '@mui/material';
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const goDash = () => {
        navigate('/dashboardStudent');
    }

    const goRegister = () => {
        navigate('/registerStudent');
    }

    const formik = useFormik({
        initialValues: {
          starsId: '2xxxxxxx',
          password: 'Password123'
        },
        validationSchema: Yup.object({
            starsId: Yup
                .string()
                .max(20)
                .required('Stars ID is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),
        onSubmit: async (values, formikHelpers) => {
            await axios.post("http://92.205.25.135:4/auth/login", values).catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            }).then((response) => {
                if (response && response.data) {
                    const jwtToken = response.data
                    sessionStorage.setItem("jwtToken", jwtToken)
                    navigate('/dashboardStudent')
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
                    Student Login
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
                    error={Boolean(formik.touched.starsId && formik.errors.starsId)}
                    fullWidth
                    helperText={formik.touched.starsId && formik.errors.starsId}
                    label="Stars ID"
                    margin="normal"
                    name="starsId"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.starsId}
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
                      Student Register
                    </Link>
                </Typography>
              </form>
            </Container>
          </Box>
        </>
      );
}

export default Login
