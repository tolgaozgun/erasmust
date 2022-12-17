import {
    Box, Button,
    Container,
    Grid,
    Step, StepButton,
    StepConnector,
    stepConnectorClasses,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material';
import {DashboardNavbar} from '../components/componentsStudent/dashboard-navbar';
import {DashboardSidebar} from '../components/componentsStudent/dashboard-sidebar';
import {ViewStudentInfo} from '../components/componentsStudent/info/view-student-info';
import {FormExchangeInfo} from '../components/componentsStudent/forms/exchange/form-exchange-info';
import {FormCourseInfo} from '../components/componentsStudent/forms/exchange/preapprovalForm/form-course-info';

import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {Check} from "@mui/icons-material";
import {ViewExchangeInfo} from "../components/componentsStudent/info/exchange/view-exchange-info";
import {ViewCourseInfo} from "../components/componentsStudent/info/exchange/preapprovalForm/view-course-info";

const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

const ViewErasmusPreapproval = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

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
                            Preapproval Form
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
                                <ViewExchangeInfo/>
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                md={12}
                                xs={24}
                            >
                                <ViewCourseInfo/>
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

export default ViewErasmusPreapproval;
