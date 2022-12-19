import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import {DashboardNavbar} from "../../components/componentsErasmusCoordinator/dashboard-navbar";
import {DashboardSidebar} from '../../components/componentsErasmusCoordinator/dashboard-sidebar';
import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import {Link, Outlet} from "react-router-dom";
import PreapprovalsList from "../../components/componentsAdmin/lists/preapprovals-list";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
    ViewStudentInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-student-info";
import {
    ViewExchangeInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-exchange-info";
import {
    ViewCourseInfo
} from "../../components/componentsErasmusCoordinator/info/erasmus/preapprovalForm/view-course-info";
import {useFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const CourseCoordinatorDashboard = (props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);


    const token = localStorage.getItem("jwtToken")

    const formik = useFormik({
        initialValues: {
            requirements: "",
        },
        validationSchema: Yup.object({
            requirements: Yup
                .string()
                .max(2000)
                .required("Requirements is required"),
        }),
        onSubmit: async (values) => {
            await axios.post("http://92.205.25.135:4/course/set-requirement", values, {
                headers: {
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

    return (
        <>
            <title>
                View Preapproval
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
                            Dashboard
                        </Typography>

                        <Grid
                            container
                            spacing={3}
                        >

                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}>
                                <Card>
                                    <CardHeader
                                        subheader="Edit your course message in Course Review Form"
                                        title="Course Coordinator Settings"
                                    />
                                    <Divider/>
                                    <CardContent>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Stack
                                                direction="column"
                                                spacing={5}
                                                style={{justifyContent: "center"}}>
                                                <Stack
                                                    direction="row"
                                                    spacing={5}
                                                    style={{justifyContent: "center"}}>
                                                    <TextField
                                                        fullWidth
                                                        multiline={true}
                                                        required={true}
                                                        name="requirements"
                                                        value={formik.values.requirements}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}
                                                        sx={{minHeight: 100}}
                                                        size="large"
                                                        InputLabelProps={{shrink: true}}
                                                        label="Course Message"
                                                    />
                                                </Stack>
                                                <Button type="submit">
                                                    Save Changes
                                                </Button>
                                            </Stack>
                                        </form>
                                    </CardContent>
                                </Card>
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

export default CourseCoordinatorDashboard;