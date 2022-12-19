import {
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../components/componentsStudent/dashboard-sidebar';
import React, {useEffect, useState} from 'react';
import {ViewStudentInfo} from "../components/componentsStudent/info/erasmus/erasmusApplicationForm/view-student-info";
import {styled} from "@mui/material/styles";
import {
    ViewSemesterInfo
} from "../components/componentsStudent/info/erasmus/erasmusApplicationForm/view-semester-info";
import {
    ViewSchoolInfo
} from "../components/componentsStudent/info/erasmus/erasmusApplicationForm/view-school-info";
import { useLocation, useParams } from 'react-router-dom';
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

const ViewErasmusApplication = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [schools, setSchools] = useState([])
    const [student, setStudent] = useState({})
    
    var schoolArray = []
    var studentObj = {}

    const token = localStorage.getItem("jwtToken");

    const params = useParams();
    const appId = params.id
    const url = "http://92.205.25.135:8080/erasmus-application/student/view-application-by-id/" + appId;
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
                    studentObj = res.data.student
                    schoolArray = res.data.schools
                    console.log(studentObj, schoolArray)
                }
                setStudent(studentObj)
                setSchools(schoolArray)
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
                View Erasmus Application
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
                            View Erasmus Application
                        </Typography>

                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >

                                <ViewStudentInfo
                                    student={student}
                                />

                            </Grid>
                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >

                                <ViewSemesterInfo
                                    student={student}
                                />

                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >

                                <ViewSchoolInfo
                                    schools={schools}
                                />

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

export default ViewErasmusApplication;
