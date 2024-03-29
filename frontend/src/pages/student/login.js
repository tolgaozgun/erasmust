import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Alert, AlertTitle, Box, Button, Container, Grid, Link, TextField, Typography} from '@mui/material';
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("")

    const goDashboardStudent = () => {
        navigate('/student/dashboard');
    }

    const goDashboardCourseCoordinator = () => {
        navigate('/coursecoordinator/dashboard');
    }

    const goDashboardErasmusCoordinator = () => {
      navigate('/erasmuscoordinator/dashboard');
    }

    const goDashboardAdmin = () => {
      navigate('/admin/dashboard');
    }

    const goSplash = () => {
      navigate('/')
    }

    const formik = useFormik({
        initialValues: {
            starsId: '',
            password: ''
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
        onSubmit: async (values) => {
            await axios.post("http://92.205.25.135:8080/auth/login", values)
                .then((response) => {
                    if (response && response.data) {
                        console.log(response.data)
                        const jwtToken = response.data["token"]
                        const role = response.data["role"]
                        const firstName = response.data["firstName"]
                        const lastName = response.data["lastName"]
                        const starsId = response.data["starsId"]
                        const department = response.data["department"]

                        localStorage.setItem("jwtToken", jwtToken)
                        localStorage.setItem("role", role)
                        localStorage.setItem("firstName", firstName)
                        localStorage.setItem("lastName", lastName)
                        localStorage.setItem("starsId", starsId)
                        localStorage.setItem("department", department)
                        if (role === "ADMIN") {
                            goDashboardAdmin()
                        } else if (role === "STUDENT") {
                            const academicYear = response.data["academicYear"]
                            const semester = response.data["semester"]

                            localStorage.setItem("academicYear", academicYear)
                            localStorage.setItem("semester", semester)

                            goDashboardStudent()
                        } else if (role === "COURSE_COORDINATOR") {
                            goDashboardCourseCoordinator()
                        } else if (role === "ERASMUS_COORDINATOR") {
                            goDashboardErasmusCoordinator()
                        } else {
                            goSplash()
                        }
                    }
                })
                .catch((err) => {
                    if (err && err.response) {
                        if (err.response.status === 401)
                            setErrorMessage("Invalid username and password")
                        else
                            setErrorMessage("Connection error")
                    } else {
                        setErrorMessage("Connection error")
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
                    Login
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

                  {errorMessage.trim().length !== 0 &&
                      <Alert
                          severity="error"
                          onClose={() => {
                              setErrorMessage("")
                          }}>
                          <AlertTitle>Error</AlertTitle>
                          {errorMessage}
                      </Alert>
                  }
              </form>
            </Container>
          </Box>
        </>
      );
}

export default Login
