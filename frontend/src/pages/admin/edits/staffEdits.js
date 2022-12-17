import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, TextField, Typography, Button} from "@mui/material";
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

const StaffEdits = () => {
    const location = useLocation();
    const staff = location.state;

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const formik = useFormik({
        initialValues: {
            id: staff.id,
            firstName: staff.firstName ? staff.firstName : "",
            lastName: staff.lastName ? staff.lastName : "",
            password: staff.password ? staff.password : "",
            starsId: staff.starsId ? staff.starsId : "",
            createdAt: staff.createdAt ? staff.createdAt : "",
            permission: staff.permission ? staff.permission : "",
            contactInformation: staff.contactInformation ? 
            {
                emailUniversity: staff.contactInformation.emailUniversity ? staff.contactInformation.emailUniversity : "",
                emailPersonal: staff.contactInformation.emailPersonal ? staff.contactInformation.emailPersonal : "",
                phoneNumberWork: staff.contactInformation.phoneNumberWork ? staff.contactInformation.phoneNumberWork : "",
                phoneNumberPersonal: staff.contactInformation.phoneNumberPersonal ? staff.contactInformation.phoneNumberPersonal : "",
                address: staff.contactInformation.address ? staff.contactInformation.address : ""
            } : ""
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
                .string()
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
                    .max(11)
                    .required('Stars ID is required'),
                phoneNumberPersonal: Yup
                    .string()
                    .max(11)
                    .required('Stars ID is required'),
                address: Yup
                    .string()
                    .max(255)
                    .required('Stars ID is required'),
            })
                
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
        }
    });

    return (
        <>  
            <title>
                Staff
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
                    Edit Staff
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

export default StaffEdits
