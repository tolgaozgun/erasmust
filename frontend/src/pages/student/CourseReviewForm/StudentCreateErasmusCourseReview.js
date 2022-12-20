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
import React, {useEffect, useState} from 'react';
import {Check} from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {useParams} from "react-router-dom";

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
    const [data, setData] = useState({
        courseBilkent: {
            courseCode: "",
            name: ""
        }
    });
    const [file, setFile] = useState();

    const token = localStorage.getItem("jwtToken");

    const params = useParams();
    const appId = params.id

    const name = localStorage.getItem("firstName")
    const surname = localStorage.getItem("lastName")


    useEffect(() => {
        axios.get("http://92.205.25.135:8080/pre-approval/erasmus/get/student/course-forms/" + appId, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    setData(res.data)
                    console.log(res.data)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log("Error: ", err)
                }
            })
    }, []);

    const formik = useFormik({
        initialValues: {
            formId: appId,
            requirements: "",
        },
        validationSchema: Yup.object({
            requirements: Yup
                .string()
                .max(1000)
                .required("Description is required")
                
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
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={name}
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
                                    fullWidth
                                    label="Surname"
                                    name="surname"
                                    value={surname}
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
                                    fullWidth
                                    label="Bilkent Course"
                                    name="bilkentCourse"
                                    required
                                    value={`${data["courseBilkent"]["courseCode"]} - ${data["courseBilkent"]["name"]}`}
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
                                    error={Boolean(formik.touched && formik.errors.requirements)}
                                    fullWidth
                                    helperText={formik.touched && formik.errors.requirements}
                                    label="Description"
                                    name="requirements"
                                    multiline
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                    value={formik.values.requirements}
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
                            sx={{textAlign: "center", alignItems: "center"}}
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Save Changes
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
