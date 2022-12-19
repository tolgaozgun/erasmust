import React, {useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, TextField, Typography, Button} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const StudentAdd = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem("jwtToken");

    const formik = useFormik({
        initialValues: {
            id: "213",
            firstName: "",
            lastName: "",
            gender: "",
            password: "",
            starsId: "",
            permission: "",
            degree: "",
            departmentName: "",
            engLetterGrade101: "",
            engLetterGrade102: "",
            erasmusPoint: "",
            semester: "",
            gpa: "",
            contactInformation:  
            {
                emailUniversity: "",
                emailPersonal: "",
                phoneNumberWork: "",
                phoneNumberPersonal: "",
                address: 
                {
                  fullAdress: "",
                  postalCode: ""
                }
            }
        },
        validationSchema: Yup.object({
            id: Yup
                .string()
                .max(255)
                .required("ID is required"),
            firstName: Yup
                .string()
                .max(255)
                .required("First name is required"),
            lastName: Yup
                .string()
                .max(255)
                .required("Last name is required"),
            gender: Yup
                .string()
                .max(6)
                .required("Gender is required"),
            password: Yup
                .string()
                .max(255)
                .required("Password is required"),
            starsId: Yup
                .string()
                .max(255)
                .required("Stars ID is required"),
            permission: Yup
                .string()
                .max(255)
                .required("Permission is required"),
            degree: Yup
                .string()
                .max(255)
                .required("Degree is required"),
            departmentName: Yup
                .string()
                .max(255)
                .required("Department name is required"),
            engLetterGrade101: Yup
                .string()
                .max(255)
                .required("Eng101 letter grade is required"),
            engLetterGrade102: Yup
                .string()
                .max(255)
                .required("Eng102 letter grade is required"),
            semester: Yup
                .string()
                .max(255)
                .required("Semester is required"),
            gpa: Yup
                .number()
                .max(255)
                .required("GPA is required"),
            childOfVeteranOrMartyr: Yup
                .string()
                .max(),
            contactInformation: Yup.object().shape({
                emailUniversity: Yup
                    .string()
                    .max(255)
                    .required(""),
                emailPersonal: Yup
                    .string()
                    .max(255),
                phoneNumberWork: Yup
                    .string()
                    .max(11),
                phoneNumberPersonal: Yup
                    .string()
                    .max(11),
                address: Yup.object().shape({
                  fullAdress: Yup
                      .string()
                      .max(255),
                  postalCode: Yup
                      .string()
                      .max(255)
                })
                    
            })
                
        }),
        onSubmit: async (values) => {
            await axios.post("http://92.205.25.135:4/admin/add-outgoing-student", values, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
              .then((response) => {
                if (response && response.data) {
                  console.log(response)
                  navigate("/admin/student/list")
                }
              })
              .catch((err) => {
                if (err && err.response) {
                  console.log("Error: ", err)
                }
              })
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
                    Create Student
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    You can manually create student
                  </Typography>
                </Box>
                <TextField
                    error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
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
                    helperText={formik.touched.lastName && formik.errors.lastName}
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
                    helperText={formik.touched.gender && formik.errors.gender}
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
                  error={Boolean(formik.touched.semester && formik.errors.semester)}
                  fullWidth
                  label="Semester"
                  margin="normal"
                  name="semester"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.semester}
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
                  error={Boolean(formik.touched.childOfVeteranOrMartyr && formik.errors.childOfVeteranOrMartyr)}
                  fullWidth
                  label="Veteran or Martyr Child"
                  margin="normal"
                  name="childOfVeteranOrMartyr"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.childOfVeteranOrMartyr}
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
                  name="contactInformation.fullAddress"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.fullAddress}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.contactInformation && formik.errors.contactInformation)}
                  fullWidth
                  label="Postal Code"
                  margin="normal"
                  name="contactInformation.postalCode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.contactInformation.postalCode}
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

export default StudentAdd
