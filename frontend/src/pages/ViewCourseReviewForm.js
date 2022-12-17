import {
    Box, Button,
    Container,
    Grid,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../components/componentsStudent/dashboard-sidebar';

import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {InfoTable} from "../components/componentsStudent/info/info-table";

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
                            <InfoTable items={info}/>
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
