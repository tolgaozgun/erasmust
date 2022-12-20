import {
    Box, Button, Card, CardContent, CardHeader,
    Container, Divider,
    Grid,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../components/componentsStudent/dashboard-sidebar';

import {styled} from '@mui/material/styles';
import React, {useEffect, useState} from 'react';
import {InfoTable} from "../components/componentsStudent/info/info-table";
import {ViewStudentInfo} from "../components/componentsStudent/info/view-student-info";
import {ViewHostCourseInfo} from "../components/componentsStudent/info/erasmus/view-host-course-info";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ViewBilkentCourseInfo} from "../components/componentsStudent/info/erasmus/view-bilkent-course-info";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const info = {
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
    files: [""],
}


const ViewCourseReviewForm = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);


    const courseHostDefault = {
        "Course Name": "",
        "Course Code": "",
        "Course Credit": ""
    }
    const [courseHost, setCourseHost] = useState(courseHostDefault)
    const [courseBilkent, setCourseBilkent] = useState({})
    const [coordinatorReply, setCoordinatorReply] = useState("")
    const [requirement, setRequirement] = useState("")
    const [courseCoordinator, setCourseCoordinator] = useState("")

    const token = sessionStorage.getItem("jwtToken");
    const params = useParams();
    const appId = params.id

    const url = "http://92.205.25.135:8080/pre-approval/erasmus/get/student/course-forms/" + appId;
    // application id => params.id => appId

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res && res.data) {
                    console.log(res)
                    let name = res.data["courseBilkent"]["courseCoordinator"]["firstName"] + " " + res.data["courseBilkent"]["courseCoordinator"]["lastName"]

                    let courseBilkent = {
                        "Course Name": res.data["courseBilkent"]["name"],
                        "Course Code": res.data["courseBilkent"]["courseCode"],
                        "Course ECTS Credits": res.data["courseBilkent"]["creditECTS"],
                        "Course Bilkent Credits": res.data["courseBilkent"]["creditBilkent"],
                        "Course Coordinator": name,
                    }

                    let courseHost = {
                        "Course Name": res.data["courseHost"]["name"],
                        "Course Code": res.data["courseHost"]["courseCode"],
                        "Course ECTS Credits": res.data["courseHost"]["creditECTS"]
                    }

                    setCoordinatorReply(res.data["coordinatorReply"])
                    setRequirement(res.data["courseBilkent"]["requirements"])
                    setCourseCoordinator(name)


                    setCourseBilkent(courseBilkent)
                    setCourseHost(courseHost)
                }
            })
            .catch((err) => {
                if (err && err.response) {
                    console.log(err)
                }
            })
    }, [])

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
                    <Container maxWidth='lg'>
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
                                md={12}
                                xs={24}
                            >
                                <Alert severity="info">
                                    <AlertTitle>
                                        {courseCoordinator} (Course Coordinator)'s Message
                                    </AlertTitle>
                                    {requirement}
                                </Alert>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >
                                <ViewHostCourseInfo course={courseHost}/>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >
                                <ViewBilkentCourseInfo course={courseBilkent}/>
                            </Grid>
                            <Grid
                                item
                                md={12}
                                xs={24}
                            >
                                <Card>
                                    <CardHeader
                                        titleTypographyProps={{variant: 'h5'}}
                                        subheaderTypographyProps={{fontSize: 18}}
                                        title="Coordinator Reply"
                                    />
                                    <Divider/>
                                    <CardContent
                                        sx={{fontSize: 16}}>
                                        {coordinatorReply ?
                                            <Alert severity="success">
                                                <AlertTitle>Success</AlertTitle>
                                                Coordinator has replied!
                                            </Alert> :
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                Coordinator has not replied yet!
                                            </Alert>
                                        }
                                        {coordinatorReply}
                                    </CardContent>
                                </Card>
                                {/*<InfoTable course={courseBilkent}/>*/}
                            </Grid>
                            {/*<InfoTable items={info}/>*/}
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

export default ViewCourseReviewForm;
