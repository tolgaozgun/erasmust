import {
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../components/componentsStudent/dashboard-sidebar';
import React, {useState} from 'react';
import {ViewStudentInfo} from "../components/componentsStudent/info/view-student-info";
import {styled} from "@mui/material/styles";
import {
    ViewSemesterInfo
} from "../components/componentsStudent/info/erasmus/erasmusApplicationForm/view-semester-info";
import {
    ViewSchoolInfo
} from "../components/componentsStudent/info/erasmus/erasmusApplicationForm/view-school-info";

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

                                <ViewStudentInfo/>

                            </Grid>
                            <Grid
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >

                                <ViewSemesterInfo/>

                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >

                                <ViewSchoolInfo/>

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
