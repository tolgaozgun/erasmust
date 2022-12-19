import {
    Box, Button,
    Container,
    Grid,
    Step, StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper, TextField,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../../components/componentsStudent/dashboard-sidebar';
import {FileUpload} from '../../../components/FileUpload';

import {styled} from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from 'axios';

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));


const StudentCreateErasmusCourseReview = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [data, setData] = useState();
    const [file, setFile] = useState();

    const token = localStorage.getItem("jwtToken");

    const formik = useFormik({
        initialValues: {
            formId: 1,
            name: "Tolga",
            surname: "Özgün",
            bilkentCourse: "CS319 - Object Oriented Software Engineering",
            hostCourseName: "Statistics",
            hostCourseCode: "MATH234",
            hostUnivesity: "EPFL",
            academicYear: "2022-2023",
            semester: "FALL",
            coordinatorMessage: "Please provide syllabus link and project links. Lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum loremLorem ipsum lorem ipsum lorem",
            courseCoordinator: "Eray Tuzun",
            description: "My syllabus: xx.com\nMy this: xx.com",
        },
        validationSchema: Yup.object({
            name: Yup
                .string()
                .max(255)
                .required("Name is required"),
            surname: Yup
                .string()
                .max(255)
                .required("Surname is required"),
            bilkentCourse: Yup
                .string()
                .max(255)
                .required("Bilkent Course is required"),
            coordinatorMessage: Yup
                .string()
                .max(255)
                .required("Coordinator Message is required"),
            courseCoordinator: Yup
                .string()
                .max(500)
                .required("Course Coordinator is required"),
            description: Yup
                .string()
                .max(1000)
                .required("Description is required"),
                
        }),
        onSubmit: async (values) => {
            let formData = new FormData()
            formData.append("file", file)
            formData.append("data", new Blob([JSON.stringify(values)], {
                type: "application/json"
            }))
            //console.log(file)
            //console.log(values)
            console.log(JSON.stringify(values))
            /*for (var pair of formData.entries()) {
                console.log(pair[0], pair[1])
            }*/

            await axios.post("http://92.205.25.135:8080/course-review-v2/edit", formData, {
                headers: {
                    'Content-Type': undefined,
                    "Authorization": `Bearer ${token}`
                },
            })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log("Error: ", err)
                })
        },
    });

    const handleSubmission = (file) => {
        setFile(file);
    }

    return (
        <>
        
        <form onSubmit={formik.handleSubmit}>
            <title>
                Course Review Form
            </title>
            <DashboardLayoutRoot>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            sx={{mb: 5}}
                            align="center"
                            variant="h4"
                        >
                            Course Review Form
                        </Typography>

                        <Grid
                            container
                            spacing={3}
                        >

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <Alert severity="info">
                                    <AlertTitle>
                                        {formik.values.courseCoordinator} (Course Coordinator)'s Message
                                    </AlertTitle>
                                    {formik.values.coordinatorMessage}
                                </Alert>
                            </Grid>

                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                    fullWidth
                                    helperText={formik.touched.name && formik.errors.name}
                                    label="Name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.name}
                                    variant="outlined"
                                    disabled={true}
                                />
                            </Grid>

                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.surname && formik.errors.surname)}
                                    fullWidth
                                    helperText={formik.touched.surname && formik.errors.surname}
                                    label="Surname"
                                    name="surname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.surname}
                                    variant="outlined"
                                    disabled={true}
                                />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <TextField
                                    error={Boolean(formik.touched.bilkentCourse && formik.errors.bilkentCourse)}
                                    fullWidth
                                    helperText={formik.touched.bilkentCourse && formik.errors.bilkentCourse}
                                    label="Bilkent Course"
                                    name="bilkentCourse"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.bilkentCourse}
                                    variant="outlined"
                                    disabled={true}
                                />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <TextField
                                    error={Boolean(formik.touched.description && formik.errors.description)}
                                    fullWidth
                                    helperText={formik.touched.description && formik.errors.description}
                                    label="Description"
                                    name="description"
                                    multiline
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.description}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <FileUpload data={data} handleSubmission={handleSubmission} fileType={["image/png", "image/jpeg", "image/jpg", "application/pdf", ]}/>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Sign In Now
                        </Button>
                    </Box>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
            
            </form>
        </>
    );
};

export default StudentCreateErasmusCourseReview;
