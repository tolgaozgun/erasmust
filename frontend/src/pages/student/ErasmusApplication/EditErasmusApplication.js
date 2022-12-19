import React, {useEffect, useState} from 'react';
import {styled} from "@mui/material/styles";
import {DashboardNavbar} from "../../../components/componentsAdmin/dashboard-navbar";
import {DashboardSidebar} from "../../../components/componentsAdmin/dashboard-sidebar";
import {Box, Container, TextField, Typography, Button} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const EditErasmusApplication = () => {
    const location = useLocation();
    const application = location.state;
    const token = sessionStorage.getItem("jwtToken")

    const [schools, setSchools] = useState([])
    var schoolArray = []

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
      axios.get("http://92.205.25.135:4/universities/all-by-student-department", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
      })
        .then((res) => {
            if (res && res.data) {
              console.log(res.data)
              //schoolArray.push()
            }
        })
    })

    const formik = useFormik({
      initialValues: {
          academicYear: "",
          semester: "",
          schools: application.schools
      },
      validationSchema: Yup.object({
          academicYear: Yup
            .string()
            .max(255)
            .required("Academic year is required"),
          semester: Yup
            .string()
            .max(10)
            .required('Semester is required'),
          schools: Yup.array().of(
              Yup.object().shape(
                  {
                      id: Yup
                          .number()
                          .min(0)
                          .required("School is required"),
                  },
                  'Course is invalid',
              ),
          ),
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

export default EditErasmusApplication
