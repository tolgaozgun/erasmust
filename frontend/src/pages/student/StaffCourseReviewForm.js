import {
    Box, Button,
    Container,
    Grid, Stack,
    Step, StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper, TextField,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../../components/componentsStudent/dashboard-sidebar';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {FileUpload} from '../../components/FileUpload';
import {FormStudentInfo} from '../../components/componentsStudent/forms/form-student-info';
import {
    FormSemesterInfo
} from '../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-semester-info';
import {FormSchoolInfo} from '../../components/componentsStudent/forms/erasmus/erasmusApplicationForm/form-school-info';

import {styled} from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from "yup";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));


const Preapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const formik = useFormik({
        initialValues: {
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
            coordinatorReply: '',
            files: [""],
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
            Files: Yup
                .string()
                .max(20)
                .required("Files are required"),
            coordinatorReply: Yup
                .string()
                .max(1000)
                .required("Reply is required"),
        }),
        onSubmit: () => {

        },
    });

    return (
        <>
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
                                        Your Message as Course Coordinator:
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
                                    error={Boolean(formik.touched.coordinatorReply && formik.errors.coordinatorReply)}
                                    fullWidth
                                    helperText={formik.touched.coordinatorReply && formik.errors.coordinatorReply}
                                    label="Your Reply"
                                    name="coordinatorReply"
                                    multiline
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.coordinatorReply}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    style={{justifyContent: "center"}}>
                                    <Button variant="contained" size="large" startIcon={<DoneIcon/>}>
                                        Accept
                                    </Button>
                                    <Button variant="contained" size="large" startIcon={<CloseIcon/>}>
                                        Reject
                                    </Button>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)}/>
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}/>
        </>
    );
};

export default Preapproval;
