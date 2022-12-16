import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, TextField, Typography, Button, Link} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useLocation } from 'react-router-dom';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentEdits = () => {
    const location = useLocation();
    const student = location.state;

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const formik = useFormik({
        initialValues: {
            id: student.id,
            firstName: student.firstName ? student.firstName : "",
            lastName: student.lastName ? student.lastName : "",
            password: student.password ? student.password : "",
            starsId: student.starsId ? student.starsId : "",
            createdAt: student.createdAt ? student.createdAt : "",
            permission: student.permission ? student.permission : "",
            contactInformation:
            {
                emailUniversity: student.contactInformation.emailUniversity ? student.contactInformation.emailUniversity : "",
                emailPersonal: student.contactInformation.emailPersonal ? student.contactInformation.emailPersonal : "",
                phoneNumberWork: student.contactInformation.phoneNumberWork ? student.contactInformation.phoneNumberWork : "",
                phoneNumberPersonal: student.contactInformation.phoneNumberPersonal ? student.contactInformation.phoneNumberPersonal : "",
                address: student.contactInformation.address ? student.contactInformation.address : ""
            }
        },
        validationSchema: Yup.object({
            id: Yup
                .string()
                .max(255)
                .required("Id required"),
            firstName: Yup
                .string()
                .max(255)
                .required(""),
            lastName: Yup
                .string()
                .max(255)
                .required(""),
            password: Yup
                .string()
                .max(255)
                .required('Password is required'),
            starsId: Yup
                .string()
                .max(255)
                .required('Stars ID is required'),
            createdAt: Yup
                .number()
                .max(255)
                .required('Password is required'),
            permission: Yup
                .string()
                .max(255)
                .required('Stars ID is required'),
            contactInformation: Yup.object().shape({
                emailUniversity: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                emailPersonal: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                phoneNumberWork: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                phoneNumberPersonal: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
                address: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
            })
                
        }),
        onSubmit: (values) => {
            console.log("SA")
        }
    });

    return (
        <>  
            <title>
                Student
            </title>
            <DashboardLayoutRoot>
            <Box
            component="main"
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              my: 7
            }}
          >
            <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ my: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h4"
                  >
                    Edit Student
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    You can manually edit student information
                  </Typography>
                </Box>
                <TextField
                    error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                    fullWidth
                    label="First Name"
                    margin="normal"
                    name="firstName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.firstName}
                    variant="outlined"
                />
                <TextField
                    error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="lastName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.lastName}
                    variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  variant="outlined"
                />
                <TextField
                    error={Boolean(formik.touched.starsId && formik.errors.starsId)}
                    fullWidth
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
                  error={Boolean(formik.touched.createdAt && formik.errors.createdAt)}
                  fullWidth
                  label="Creation Time"
                  margin="normal"
                  name="createdAt"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.createdAt}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.permission && formik.errors.permission)}
                  fullWidth
                  label="Permission"
                  margin="normal"
                  name="permission"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.permission}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="University Email"
                  margin="normal"
                  name="contactInformation.emailUniversity"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.emailUniversity}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="Personal Email"
                  margin="normal"
                  name="contactInformation.emailPersonal"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.emailPersonal}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="Bussiness Phone Number"
                  margin="normal"
                  name="contactInformation.phoneNumberWork"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.phoneNumberWork}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="Personal Phone Number"
                  margin="normal"
                  name="contactInformation.phoneNumberPersonal"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.phoneNumberPersonal}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="Address"
                  margin="normal"
                  name="contactInformation.address"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.address}
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
              </form>
            </Container>
          </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
}

export default StudentEdits
