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

const StudentEdits = () => {
    const location = useLocation();
    const student = location.state;

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const formik = useFormik({
        initialValues: {
            id: student.id,
            firstName: student.firstName ? student.firstName : "",
            lastName: student.lastName ? student.lastName : "",
            gender: student.gender ? student.gender : "",
            password: student.password ? student.password : "",
            starsId: student.starsId ? student.starsId : "",
            createdAt: student.createdAt ? student.createdAt : "",
            permission: student.permission ? student.permission : "",
            degree: student.degree ? student.degree : "",
            departmentName: student.departmentName ? student.departmentName : "",
            engLetterGrade101: student.engLetterGrade101 ? student.engLetterGrade101 : "",
            engLetterGrade102: student.engLetterGrade102 ? student.engLetterGrade102 : "",
            erasmusPoint: student.erasmusPoint ? student.erasmusPoint : "",
            gpa: student.gpa ? student.gpa : "",
            contactInformation: student.contactInformation ? 
            {
                emailUniversity: student.contactInformation.emailUniversity ? student.contactInformation.emailUniversity : "",
                emailPersonal: student.contactInformation.emailPersonal ? student.contactInformation.emailPersonal : "",
                phoneNumberWork: student.contactInformation.phoneNumberWork ? student.contactInformation.phoneNumberWork : "",
                phoneNumberPersonal: student.contactInformation.phoneNumberPersonal ? student.contactInformation.phoneNumberPersonal : "",
                address: student.contactInformation.address ? student.contactInformation.address : ""
            } : ""
        },
        validationSchema: Yup.object({
            id: Yup
                .string()
                .max(255),
            firstName: Yup
                .string()
                .max(255),
            lastName: Yup
                .string()
                .max(255),
            gender: Yup
                .string()
                .max(6),
            password: Yup
                .string()
                .max(255),
            starsId: Yup
                .string()
                .max(255),
            createdAt: Yup
                .string()
                .max(255),
            permission: Yup
                .string()
                .max(255),
            degree: Yup
                .string()
                .max(255),
            departmentName: Yup
                .string()
                .max(255),
            engLetterGrade101: Yup
                .string()
                .max(255),
            engLetterGrade102: Yup
                .string()
                .max(255),
            erasmusPoint: Yup
                .string()
                .max(255),
            gpa: Yup
                .number()
                .max(255),
            contactInformation: Yup.object().shape({
                emailUniversity: Yup
                    .string()
                    .max(255),
                emailPersonal: Yup
                    .string()
                    .max(255),
                phoneNumberWork: Yup
                    .string()
                    .max(11),
                phoneNumberPersonal: Yup
                    .string()
                    .max(11),
                address: Yup
                    .string()
                    .max(255),
            })
                
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2))
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
                    error={Boolean(formik.touched.gender && formik.errors.gender)}
                    fullWidth
                    label="Gender"
                    margin="normal"
                    name="gender"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.gender}
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
                  error={Boolean(formik.touched.gpa && formik.errors.gpa)}
                  fullWidth
                  label="GPA"
                  margin="normal"
                  name="gpa"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.gpa}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.degree && formik.errors.degree)}
                  fullWidth
                  label="Degree"
                  margin="normal"
                  name="degree"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.degree}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.departmentName && formik.errors.departmentName)}
                  fullWidth
                  label="Department Name"
                  margin="normal"
                  name="departmentName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.departmentName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.engLetterGrade101 && formik.errors.engLetterGrade101)}
                  fullWidth
                  label="Eng101 Letter Grade"
                  margin="normal"
                  name="engLetterGrade101"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.engLetterGrade101}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.engLetterGrade102 && formik.errors.engLetterGrade102)}
                  fullWidth
                  label="Eng102 Letter Grade"
                  margin="normal"
                  name="engLetterGrade102"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.engLetterGrade102}
                  variant="outlined"
                />
                <TextField
                    error={Boolean(formik.touched.erasmusPoint && formik.errors.erasmusPoint)}
                    fullWidth
                    label="StudentErasmusPage Point"
                    margin="normal"
                    name="erasmusPoint"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.erasmusPoint}
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
